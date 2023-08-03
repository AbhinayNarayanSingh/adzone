const endpoints = {
    getProductsList: () => `/products`,
    getProduct: (id) => `/products/${id}`,  

    postSignIn : () => `/signin`,
    postSignUp : () => `/signup`,
    postRefreshToken : () => `/refresh-token`,

    otpInitiator : () => `/otp`,
    postResetPasswordConfirm : () => `/password-reset`,

    postListing : () => `/listing`,

    postPaymentIntent : () => `/create-payment-intent`,
    deletePaymentIntent : () => `/cancel-payment-intent`,
};

export default endpoints