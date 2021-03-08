import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Errors() {
    const router = useRouter();
    const { query } = router;
    // console.log(router);

    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <h4>Oops! Something went wrong...</h4>
                            {/* <p className="text-muted mb-4">
                                A verification email has been sent!
                            </p> */}
                        </div>

                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-3">
                                    <div
                                        className="alert alert-danger text-center mb-4"
                                        role="alert"
                                    >
                                        {query.error}
                                    </div>
                                    <Link href="/welcome">
                                        <a
                                            className="btn btn-primary waves-effect waves-light"
                                            type="button"
                                        >
                                            Login again
                                        </a>
                                    </Link>
                                    {/* <form action="index.html">
                                        <div className="mb-4">
                                            <label className="form-label">
                                                Email
                                            </label>
                                            <div className="input-group mb-3 bg-soft-light rounded-3">
                                                <span
                                                    className="input-group-text text-muted"
                                                    id="basic-addon5"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg border-light bg-soft-light"
                                                    placeholder="Enter Email"
                                                    aria-label="Enter Email"
                                                    aria-describedby="basic-addon5"
                                                />
                                            </div>
                                        </div>

                                        <div className="d-grid">
                                            <button
                                                className="btn btn-primary waves-effect waves-light"
                                                type="submit"
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
