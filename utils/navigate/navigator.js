
export const navigateToPage = (page, slug) => {
    switch (page) {
        case "register":
            return "/register"

        case "login":
            return "/login"

        case "listings":
            return "/p/listings"

        case "reviews":
            return "/p/reviews"

        case "orders":
            return "/p/orders"

        case "pdp":
            return "/item/" + slug

        case "new-ad":
            return "/ad/new"

        default:
            return "/";
    }
}


export const navigateToSearch = (query, type = "") => {
    const slugify = query.replace(/[\s?|_\-&]+/g, "-").toLowerCase();

    switch (type) {
        case "c":
            return "/search/c/" + slugify

        default:
            return "/search/q/" + slugify
    }
}