import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="shortcut icon"
                        href="/assets/images/favicon.ico"
                    />

                    <link
                        href="/assets/libs/magnific-popup/magnific-popup.css"
                        rel="stylesheet"
                        type="text/css"
                    />

                    <link
                        rel="stylesheet"
                        href="/assets/libs/owl.carousel/assets/owl.carousel.min.css"
                    />

                    <link
                        rel="stylesheet"
                        href="/assets/libs/owl.carousel/assets/owl.theme.default.min.css"
                    />

                    <link
                        href="/assets/css/bootstrap-dark.min.css"
                        id="bootstrap-dark-style"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="/assets/css/bootstrap.min.css"
                        id="bootstrap-style"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="/assets/css/icons.min.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="/assets/css/app-dark.min.css"
                        id="app-dark-style"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="/assets/css/app.min.css"
                        id="app-style"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="/assets/libs/jquery/jquery.min.js"></script>
                    <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/assets/libs/simplebar/simplebar.min.js"></script>
                    <script src="/assets/libs/node-waves/waves.min.js"></script>

                    <script src="/assets/libs/magnific-popup/jquery.magnific-popup.min.js"></script>

                    <script src="/assets/libs/owl.carousel/owl.carousel.min.js"></script>

                    <script src="/assets/js/pages/index.init.js"></script>

                    <script src="/assets/js/app.js"></script>
                </body>
            </Html>
        );
    }
}
