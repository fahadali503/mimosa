import { API } from ".."


enum URLS {
    SellerFeaturedProducts = "/product/seller/featured"
}

export const getSellerFeaturedProducts = async (token: string) => {
    const response = await API.get(URLS.SellerFeaturedProducts, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}