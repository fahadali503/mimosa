import { API } from ".."


enum URLS {
    SellerFeaturedProducts = "/product/seller/featured",
    SellerProducts = "/product/seller/products",
}

export const getSellerFeaturedProducts = async (token: string) => {
    const response = await API.get(URLS.SellerFeaturedProducts, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}

export const getSellerProducts = async (token: string) => {
    const response = await API.get(URLS.SellerProducts, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}