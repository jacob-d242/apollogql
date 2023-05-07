<template>
    <div class="flex items-center">
      <div class="text-center">
        <!-- <img
          class="mx-auto w-28"
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        /> -->
        <h4 class="mb-4 mt-1 pb-1 text-xl font-semibold">
          We are The Qhala Team
        </h4>
      </div>
    </div>
  </template>
  
  <script setup>
    async function handleActivate() {
      const query = `
        mutation Mutation($activateUserId: Int!, $token: String!) {
          activateUser(id: $activateUserId, token: $token) {
            username
            role
            last_name
            id
            first_name
            email
            createdAt
            class
            birthday
          }
        }
      `;
      const variables = {
        activateUserId: parseInt(id),
        token: token,
      };
      try {
        const res = await fetch("https://att-backend.herokuapp.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const token = params.get("token");
    if (id && token) {
      handleActivate();
    } else {
      console.error("id and token are required");
    }
  </script>
  