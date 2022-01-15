import { IUser } from "../../utils/types";

export const saveUserToLocalStorage = (token: string, user: IUser) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('auth', JSON.stringify({ token, user }));
    }
}

export const getUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        // @ts-ignore
        const jwt = JSON.parse(localStorage.getItem("auth"));
        if (!jwt) {
            return null;
        } else {
            return jwt;
        }
    } else {
        return null;
    }
}

export const removerUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("auth")
    }
}