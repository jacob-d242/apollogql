let required  = (propertyType) =>{
    return v => v && v.length > 0 || `you must input a ${propertyType}`
}

let maxLenght =(propertyType,maxLenght) =>{
    return v = v && v.length <= maxLenght||
    `${propertyType} cannot excedd ${maxLenght}`
}

let minLength = (propertyType,minLength) =>{
    return v => v && v.length >= minLength||
    `${propertyType} must be aleast ${minLength} `
}

let emailFormat = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/
    return v => v && regex.test(v) || "Must be a valid email"
}

export default {
    required,
    minLength,
    maxLenght,
    emailFormat
}