import { API } from ".."


enum URLS {
    SellerFeaturedProducts = "/product/seller/featured",
    SellerProducts = "/product/seller/products",
    SellerProduct = "/product/seller/product",
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


export const getSellerSingleProduct = async (pid: string, token: string) => {
    const response = await API.get(URLS.SellerProduct, { id: pid }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}