import { API } from ".."

export const registerUserApi = async (values: { [key: string]: any }) => {
    const res = await API.post('/auth/register', values);
    return res;
}