// const { log } = require("npmlog");

module.exports.validateRegisterInput = (
    name,
    email,
    password,
    confirmPassword,
    country,
    mobilenumber

) => {
    const errors = {};
    if(name.trim() == ''){
        errors.name = 'name must not be empty';

    }
    if(email.trim() == ''){
        errors.email = 'email must not be empty';
    }else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
          errors.email = 'Email must be a valid email address';
        }
      }
    if (country.trim == ''){
        errors.country = 'country must not be empty';
    }
    if (mobilenumber.trim == ''){
        errors.mobilenumber = 'mobile number must not be empty';
    }



    if(password.trim() == ''){
        errors.password = 'Password must not be empty';
    }
    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords must match';
    }
    return {
        errors,
        // valid: Object.keys(errors).length === 0 ? true : false
        valid: Object.keys(errors).length < 1

}
}

module.exports.validateLoginInput = (email, password) => {
    
    const errors = {};
    // if(email.trim() == ''){
    //     errors.email = 'email must not be empty';}

    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
        }

    if(password.trim() == ''){
        errors.password = 'Password must not be empty'
    }
    return {
        errors,
        // valid: Object.keys(errors).length === 0 ? true : false
        valid: Object.keys(errors).length < 1

}
}


