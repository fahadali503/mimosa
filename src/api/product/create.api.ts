import { API } from "..";

const url = '/product/create';

export const createProductOnServer = async (product: any, token: string) => {
    const response = await API.post(url, product, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response;
}