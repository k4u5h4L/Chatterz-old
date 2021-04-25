import React, { ReactNode, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Welcome(): ReactNode {
    const [session] = useSession();

    const [emailData, setEmailData] = useState("");

    const emailChangeHandler = (e) => {
        setEmailData(e.target.value);
    };

    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    {!session ? (
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="text-center mb-4">
                                {/* <a href="/" className="auth-logo mb-5 d-block">
                                <img
                                    src="/assets/images/logo-dark.png"
                                    alt=""
                                    height="30"
                                    className="logo logo-dark"
                                />
                                <img
                                    src="/assets/images/logo-light.png"
                                    alt=""
                                    height="30"
                                    className="logo logo-light"
                                />
                            </a> */}

                                <h4>Sign in / Sign up</h4>
                                <p className="text-muted mb-4">
                                    A verification email will be sent to your
                                    email. If this is your first time here, your
                                    account will be newly created.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="p-3">
                                        <form action="#">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                <div className="input-group mb-3 bg-soft-light rounded-3">
                                                    <span
                                                        className="input-group-text text-muted"
                                                        id="basic-addon3"
                                                    >
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg border-light bg-soft-light"
                                                        placeholder="Enter Email"
                                                        aria-label="Enter Email"
                                                        aria-describedby="basic-addon3"
                                                        onChange={() =>
                                                            emailChangeHandler(
                                                                event
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="mb-4">
                                            <div className="float-end">
                                                <a
                                                    href="auth-recoverpw.html"
                                                    className="text-muted font-size-13"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <label className="form-label">
                                                Password
                                            </label>
                                            <div className="input-group mb-3 bg-soft-light rounded-3">
                                                <span
                                                    className="input-group-text text-muted"
                                                    id="basic-addon4"
                                                >
                                                    <i className="ri-lock-2-line"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg border-light bg-soft-light"
                                                    placeholder="Enter Password"
                                                    aria-label="Enter Password"
                                                    aria-describedby="basic-addon4"
                                                />
                                            </div>
                                        </div> */}

                                            {/* <div className="form-check mb-4">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="remember-check"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="remember-check"
                                            >
                                                Remember me
                                            </label>
                                        </div> */}

                                            <div className="d-grid">
                                                <button
                                                    className="btn btn-primary waves-effect waves-light"
                                                    type="submit"
                                                    onClick={(e) => {
                                                        e.preventDefault();

                                                        signIn("email", {
                                                            email: emailData,
                                                            callbackUrl:
                                                                "http://localhost:3000/welcome/verify/",
                                                            redirect: true,
                                                        });
                                                    }}
                                                    onSubmit={(e) => {
                                                        e.preventDefault();

                                                        signIn("email", {
                                                            email: emailData,
                                                            callbackUrl:
                                                                "http://localhost:3000/welcome/verify/",
                                                            redirect: true,
                                                        });
                                                    }}
                                                >
                                                    Hop in!
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mt-5 text-center">
                            <p>
                                Don&apos;t have an account ?
                                <a
                                    href="auth-register.html"
                                    className="fw-medium text-primary"
                                >
                                    Signup now
                                </a>
                            </p>
                        </div> */}
                        </div>
                    ) : (
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="text-center mb-4">
                                {/* <a href="/" className="auth-logo mb-5 d-block">
                                <img
                                    src="/assets/images/logo-dark.png"
                                    alt=""
                                    height="30"
                                    className="logo logo-dark"
                                />
                                <img
                                    src="/assets/images/logo-light.png"
                                    alt=""
                                    height="30"
                                    className="logo logo-light"
                                />
                            </a> */}

                                <h4>Hmmm....</h4>
                                <p className="text-muted mb-4">
                                    Not{" "}
                                    {session.user.name || session.user.email}?
                                    Then logout and login again!
                                </p>
                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary waves-effect waves-light"
                                        type="button"
                                        onClick={() => signOut()}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
