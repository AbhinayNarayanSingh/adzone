export const navigateToPage = (page="home", slug) => {
  const pathObj = {
    home: "/",
    register: "/register",
    login: "/login",
    newAds : "/ad/new",

    listings: "/user/p/listings",
    reviews: "/user/p/reviews",
    orders: "/user/p/orders",

    setting: "/user/s/personal-details",
    billingAddress: "/user/s/billing-address",
    switchProfessinal: "/user/s/professinal",
    
    messages: "/user/m/chats",

    pdp: "/item/" + slug,

    membership : "/helpdesk/membership",
    credits : "/helpdesk/ad-credits",
    terms : "/helpdesk/terms-and-condition",
    privacy : "/helpdesk/privacy-and-policy",
    faq : "/helpdesk/faq",
    // membership : "/helpdesk/membership",
  }
  return pathObj[page]
};

export const navigateToSearch = (query, type="q") => {
  const slugify = query.replace(/[\s?|_\-&]+/g, "-").toLowerCase();

  const pathObj = {
    c : "/search/c/" + slugify,
    q : "/search/q/" + slugify
  }
  return pathObj[type]
};
