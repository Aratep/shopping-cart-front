const validate = values => {
    const errors = {}
    if (!values.username_reg) {
        errors.username_reg = 'Required'
    }
    if (!values.email_reg) {
        errors.email_reg = 'Required'
    }
    if (!values.password_reg) {
        errors.password_reg = 'Required'
    }
    if (!values.password_reg_confirm) {
        errors.password_reg_confirm = 'You must reenter your password'
    }

    if (values.username_reg && values.username_reg.length < 6) {
        errors.username_reg = 'Username is too short'
    }
    if (values.email_reg && !values.email_reg.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        errors.email_reg = 'Email is not valid'
    }
///^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
//     if(values.passwordsignup && values.passwordsignup.length < 6) {
//         errors.passwordsignup = 'Must contain 6 characters'
//     }
    if (values.password_reg && !values.password_reg.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        errors.password_reg = 'Please much the requested format'
    }
    if(values.password_reg_confirm  && values.password_reg !== values.password_reg_confirm) {
        errors.password_reg_confirm = 'Passwords do not much'
    }
    return errors
}

export default validate