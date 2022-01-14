import { Layout } from '../components/layout'
import React from 'react'
import { RegisterPageHeading } from '../src/page-components/register/RegisterHeading'
import { RegisterForm } from '../src/page-components/register/RegisterForm'

const RegisterPage = () => {
    return (
        <Layout pageTitle='Register free account to start selling'>
            <div className='my-10 pt-10'>
                <RegisterPageHeading />
                <RegisterForm />
            </div>
        </Layout>
    )
}

export default RegisterPage
