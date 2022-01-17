export interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    country: string;
    address: string;
    state: string;
    postCode: string;
    createdAt: string;
}

export interface IAuth {
    user: IUser | null;
    token: string | null
}

export interface ILoginResponse {
    token: string;
    user: IUser
}


export interface IPageProps {
    token: string
}



export interface IProduct {
    _id: string;
    title: string;
    description: string;
    images: string[];
    thumbnail: string;
    type: "physical" | "digital";
    price: number;
    salePrice: number;
    isOnSale: boolean;
    quantity: number;
    isFeatured: boolean;
    user: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface ICommonServerResponse {
    message: string
}