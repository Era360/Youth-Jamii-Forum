import React from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { darasahuru } from "../images";
import css from "./login.module.css"

function Login() {

    return <>
        <div className="container-fluid">
            <div className={css.wrapper}>
                <div className={css.logo}>
                    <img src={darasahuru} alt="Dasara logo" />
                </div>
                {/* <h2>Login</h2> */}
                <div className={css.social}>
                    <a href="www.facebook.com"><FaFacebook color="#2828ff" /></a>
                    <a href="www.google.com"><FaGoogle color='#e6382c' /></a>
                </div>
                <div className={css.inputt}>
                    <div>
                        {/* <label htmlFor="email">Email: </label> */}
                        <input type="email" placeholder="Enter your email" name="email" />
                    </div>
                    <div className={css.input}>
                        {/* <label>Password: </label> */}
                        <input type="password" placeholder="Enter your password" />
                    </div>
                </div>
                <Link to="/">Forgot your password?</Link>
            </div>
        </div>
    </>
}

export default Login;