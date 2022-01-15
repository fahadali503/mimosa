export interface IUser {
    id: number;
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