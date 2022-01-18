import { IProduct } from "./types";

export const filterProducts = (products: IProduct[], key: keyof IProduct) => {
    return products.filter(product => product[key] === true)
}