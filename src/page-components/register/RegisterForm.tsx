import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'Too Short!').required("Required"),
    country: Yup.string().required('Required'),
    state: Yup.string().required("Required"),
    address: Yup.string().required('Required'),
    postCode: Yup.string().required('Required')
});

type Values = {
    firstName: string;
    lastName: string;
    country: string;
    email: string;
    password: string;
    address: string;
    state: string;
    postCode: string;
}

export const RegisterForm = () => {


    const onSubmitHandler = (values: Values) => {
        console.log(values);
    }

    return (
        <div className='shadow mt-10 w-3/4 mx-auto'>
            <Formik validationSchema={SignupSchema} initialValues={{ firstName: "", lastName: "", country: "Pakistan", email: "", password: "", address: "", state: "", postCode: "" }} onSubmit={onSubmitHandler}>
                {
                    ({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit} className="w-1/2 mx-auto px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                        type="text"
                                        placeholder="First Name"
                                        name='firstName'
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        touched.firstName && <p className="text-xs italic text-red-500">{errors.firstName}</p>
                                    }
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                        type="text"
                                        placeholder="Last Name"
                                        name='lastName'
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        touched.lastName && <p className="text-xs italic text-red-500">{errors.lastName}</p>
                                    }
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}

                                    type="email"
                                    placeholder="Email"
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
                            {/* Countries */}
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Country
                                </label>
                                <input
                                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Country"
                                    name='country'
                                    value={values.country}
                                />
                                {
                                    touched.country && <p className="text-xs italic text-red-500">{errors.country}</p>
                                }
                            </div>
                            {/* Address */}
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Address
                                </label>
                                <input
                                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Street Address"
                                    name='address'
                                    value={values.address}
                                />
                                {
                                    touched.address && <p className="text-xs italic text-red-500">{errors.address}</p>
                                }
                            </div>

                            <div className="mb-4 md:flex md:justify-between">
                                <div className="w-[60%] md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        State
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        placeholder="State"
                                        name='state'
                                        value={values.state}
                                    />
                                    {
                                        touched.state && <p className="text-xs italic text-red-500">{errors.state}</p>
                                    }
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Post Code
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        placeholder="Postal Code"
                                        name='postCode'
                                        value={values.postCode}
                                    />
                                    {
                                        touched.postCode && <p className="text-xs italic text-red-500">{errors.postCode}</p>
                                    }
                                </div>
                            </div>



                            {/* Register Button */}
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register Account
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
                                    href="./index.html"
                                >
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    )

                }
            </Formik>
        </div>
    )
}
