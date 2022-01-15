import React from 'react'
import { Layout } from '../components/layout';
import { H6 } from '../components/headings/H6';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
})


type Values = {
    email: string;
    password: string;
}

const LoginPage = () => {

    const onSubmitHandler = async (values: Values) => {
        try {
            const res = await axios.post('/api/login', values);
            console.log(res.data);
        } catch (error) {
            const err = error as AxiosError
            toast.error(err.response?.data.error)
        }
    }

    return (
        <Layout pageTitle='Login into your Seller account'>
            <div className='my-10 pt-10'>
                <H6 text='Login into your seller account' size='text-3xl' className='capitalize text-center font-medium' color='black' />
                <div>
                    <Formik validationSchema={SignInSchema} initialValues={{ email: "", password: "" }} onSubmit={onSubmitHandler}>
                        {
                            ({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit} className="w-1/2 mx-auto px-8 pt-12 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}

                                            type="email"
                                            placeholder="Email Address"
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {
                                            touched.email && <p className="text-xs italic text-red-500">{errors.email}</p>
                                        }
                                    </div>

                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            name='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {
                                            touched.password && <p className="text-xs italic text-red-500">{errors.password}</p>
                                        }
                                    </div>


                                    {/* Register Button */}
                                    <div className="mb-6 mt-4 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Login Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="#"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            {"Don't "}have an account? <Link href={'/register'}><a>Register!</a></Link>
                                        </a>
                                    </div>
                                </form>
                            )

                        }
                    </Formik>
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage
