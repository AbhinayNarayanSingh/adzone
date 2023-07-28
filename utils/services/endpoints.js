const endpoints = {
    getProductsList: () => `/products`,
    getProduct: (id) => `/products/${id}`,  

    postSignIn : () => `/signin`,
    postSignUp : () => `/signup`,
    postRefreshToken : () => `/refresh-token`,

    otpInitiator : () => `/otp`,
    postResetPasswordConfirm : () => `/password-reset`,
};

export default endpoints