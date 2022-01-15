import { API } from ".."

export const loginUserApi = async (values: { email: string; password: string }) => {
    return await API.post('/auth/login', values);
}