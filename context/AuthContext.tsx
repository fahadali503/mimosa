import axios from 'axios'
import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'
import { getUserFromLocalStorage, removerUserFromLocalStorage } from '../src/localStorage'
import { IAuth, IUser } from '../utils/types';

type TAuthContext = {
    state: IAuth;
    setUser: (token: string, user: IUser) => void;
    logoutUser: () => void;
    loading: boolean
}

export const AuthContext = createContext<TAuthContext>({
    state: { token: null, user: null },
    setUser: (token: string, user: IUser) => { },
    logoutUser: () => { },
    loading: false
})


export const AuthProvider: React.FC = ({ children }) => {
    const [state, setState] = useState<IAuth | any>({ token: null, user: null })
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const auth = getUserFromLocalStorage()

    useEffect(() => {
        setLoading(true)
        isUserLoggedIn()
        setLoading(false)
    }, [])

    const setUser = (token: string, user: IUser) => {
        setState({ token, user });
    }

    const logoutUser = () => {
        removerUserFromLocalStorage()
        setState({ token: null, user: null })
    }

    const isUserLoggedIn = async () => {
        const res = await axios.get('/api/auth');
        const data = res.data ? res.data.token : null;
        if (data && auth) {
            setState({ token: auth.token, user: auth.user })
        } else {
            logoutUser()
        }
    }

    return (
        <AuthContext.Provider value={{ state, logoutUser, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
