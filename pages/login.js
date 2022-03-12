import { useRouter } from 'next/router';
import { useEffect } from "react";
import { isLogin } from "../utils/auth";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import GoogleLogin from "react-google-login";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    //Handle login with email and password
    const loginHandle = async (email, password) => {
        try {
            let result = await axios({
                method: 'POST',
                url: `/api/user/login`,
                data: { email, password }
            })
            localStorage.setItem('name', result.data.name);
            localStorage.setItem('accessToken', result.data.token);
            router.push('/')
        } catch (error) {
            setErrorMessage(error.response?.data);
        }
    }
    //Validate Input with Formik
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
            email: Yup.string().email('Invalid email address').required("Please enter your email"),
            password: Yup.string().required("Please enter your password"),
        }),
        onSubmit: value => {
            const { email, password } = value;
            loginHandle(email, password)
        }
    })
    //Login with google
    const googleLoginHandle = async (googleData) => {
        let result = await axios({
            method: 'POST',
            url: `/api/user/login-google`,
            data: {
                token: googleData.tokenId
            }
        })
        localStorage.setItem('name', result.data.name);
        localStorage.setItem('accessToken', result.data.token);
        router.push('/')
    }
    // Handle login with google failure
    const handleFailure = (result) => {
        alert(result);
    };

    useEffect(() => {
        if (isLogin()) {
            router.push('/')
        }
    }, [])
    return (
        <div className="login-page">
            <div className="form" onSubmit={formik.handleSubmit}>
                <form className="login-form">
                    {(Object.keys(formik.errors).length || errorMessage) ? (
                        <div className="alert alert-danger" role="alert">
                            <p>{formik.errors.email || formik.errors.password || errorMessage}</p>
                        </div>
                    ) : ""}
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
                    <div className="mb-3">
                        <GoogleLogin
                            clientId={"120601317207-antrd8qc33vhe0ndig1gg42olb7rabeu.apps.googleusercontent.com"}
                            buttonText="Log in with Google"
                            onSuccess={googleLoginHandle}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}
                        ></GoogleLogin>
                    </div>
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link href="/register">Create an account</Link></p>
                </form>

            </div>
        </div>
    )
}