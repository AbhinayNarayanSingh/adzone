const endpoints = {
    getProductsList: () => `/products`,
    getProduct: (id) => `/products/${id}`,  

    postSignIn : () => `/signin`,
    postSignUp : () => `/signup`
};

export default endpoints