import React from "react";

export default function Logo() {
    return (
        <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                    <img src="/assets/images/logo.svg" alt="" height="30" />
                </span>
            </a>

            <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                    <img src="/assets/images/logo.svg" alt="" height="30" />
                </span>
            </a>
        </div>
    );
}
