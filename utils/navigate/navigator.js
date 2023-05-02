export const navigateToPage = (page="home", slug) => {
  const pathObj = {
    home: "/",
    register: "/register",
    login: "/login",
    newAds : "/ad/new",

    listings: "/p/listings",
    reviews: "/p/reviews",
    orders: "/p/orders",

    setting: "/s/personal-details",
    billingAddress: "/s/billing-address",
    switchProfessinal: "/s/professinal",
    
    messages: "/m/chats",

    pdp: "/item/" + slug,
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
