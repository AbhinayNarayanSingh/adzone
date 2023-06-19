const endpoints = {
    getProductsList: () => `/products`,
    getProduct: (id) => `/products/${id}`,  

    postSignIn : () => `/signin`,
    postSignUp : () => `/signup`,
    postRefreshToken : () => `/refresh-token`,
};

export default endpoints