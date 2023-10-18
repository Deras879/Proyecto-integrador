const validations = ({email, password}) => {
    let errors = {};
    const regexmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

    if(!regexmail.test(email)){
        errors.email = "El email es invalido";
    }

    if(!email){
        errors.email = "Email vacio"
    }
    if(email.length > 35){
        errors.email = "El email es muy largo"
    }

    if(!/\d/.test(password)){
        errors.password = "Lacontraseña debe incluir un número";
    }

    if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        errors.password = "La contraseña debe incluir un carácter especial"
    }
    if(password.length < 8){
        errors.password = "La contraseña debe tener minimo 8 carácteres"
    }
    return errors;
}

export {validations};