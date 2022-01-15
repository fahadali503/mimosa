import { Layout } from '../components/layout'
import React from 'react'
import { RegisterPageHeading } from '../src/page-components/register/RegisterHeading'
import { RegisterForm } from '../src/page-components/register/RegisterForm'
import toast from 'react-hot-toast'
import { registerUserApi } from '../src/api/auth/register'



type Values = {
    firstName: string;
    lastName: string;
    country: string;
    email: string;
    password: string;
    address: string;
    state: string;
    postCode: string;
    companyName: string;
}
const RegisterPage = () => {

    const registerUserOnServer = async (values: Values) => {
        const response = await registerUserApi(values);
        if (!response.ok) {
            return toast.error(response.originalError.response?.data.error);
        }
        return toast.success("Account created successfully.")
    }

    return (
        <Layout pageTitle='Register free account to start selling'>
            <div className='my-10 pt-10'>
                <RegisterPageHeading />
                <RegisterForm registerUserOnServer={registerUserOnServer} />
            </div>
        </Layout>
    )
}

export default RegisterPage
