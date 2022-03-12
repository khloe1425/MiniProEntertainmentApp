import { useRef } from "react"
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { isLogin } from "../utils/auth";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function Register() {
    const [errorMessage, setErrorMessage] = useState("")
    const router = useRouter();
    // Register handler
    const handleRegister = async (name, email, password, confirm_password) => {
        try {
             await axios({
                url: `/api/user/register`,
                method: 'POST',
                data: {
                    name, email, password, confirm_password
                }
            })
            router.push('/login')
        }
        catch (error) {
            setErrorMessage(error.response.data);
        }
    }
    //Validate input with formik
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: Yup.object({
            name: Yup.string().required("Please fill out this field").matches(/^[^0-9]+$/, "Invalid Name"),
            //by using ^ and $ to signify start and end of string: , ^ is : NOT
            email: Yup.string().email('Invalid email address').required("Please fill out this field"),
            password: Yup.string().required("Please fill out this field"),
            confirm_password: Yup.string().required("Please fill out this field").test('passwords-match', 'Passwords must match', function (value) {
                return this.parent.password === value
            }),
        }),
        onSubmit: value => {
            const { name, email, password, confirm_password } = value;
            handleRegister(name, email, password, confirm_password)

        }
    })
    useEffect(() => {
        if (isLogin()) {
            router.push('/')
        }
    }, [])

    return (
        <div className="login-page">
            <div className="form">
                <form className="register-form" onSubmit={formik.handleSubmit}>
                    {(Object.keys(formik.errors).length || errorMessage) ? (
                        <div className="alert alert-danger" role="alert">
                            <p>{formik.errors.name || formik.errors.email || formik.errors.password || formik.errors.confirm_password || errorMessage}</p>
                        </div>
                    ) : ""}

                    <input type="text" id="name" placeholder="your name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <input type="email" id="email" placeholder="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <input type="password" id="password" placeholder="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <input type="password" id="confirm_password" placeholder="confirm password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <button type="submit">create</button>
                    <p className="message">Already registered? <Link href="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}