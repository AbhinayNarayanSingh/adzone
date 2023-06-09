export const passwordValidator = (input) => {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,36}/;
    return pattern.test(input)
};


export const emailValidator = (email) => {
    if (!email) return false;
    
    const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    
  
    const emailParts = email.split('@');
    if (emailParts.length !== 2) return false;
  

    const account = emailParts[0];
    const address = emailParts[1];
  
    if (account.length > 64) return false;
    else if (address.length > 255) return false;

    const domainParts = address.split('.');
    
    if (domainParts.some(function (part) {
      return part.length > 63;
    })) return false;
  
    return tester.test(email);

  };

export const validationErrorMessage = {
  email : "Invalid email address. Please enter a valid email address.",
  password : "Invalid password format. Please make sure your password must contain at least 8 characters long, one uppercase & lowercase, one number and may include special characters.",
  enterEmailPassword : "Please enter your email and password to proceed.",
  passwordConfirm : "Password and Confirm Password fields must match. Please ensure that both fields contain the same password for confirmation.",
  name : "Please enter your name. This field is required.",
}