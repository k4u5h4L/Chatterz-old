import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma from "@/prisma/client";

export default (req, res) =>
    NextAuth(req, res, {
        providers: [
            Providers.Email({
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: Number(process.env.EMAIL_SERVER_PORT),
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
            }),
            // Providers.Email({
            //     server: process.env.EMAIL_SERVER,
            //     from: process.env.EMAIL_FROM,
            // }),
        ],
        debug: process.env.NODE_ENV === "development",
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        adapter: Adapters.Prisma.Adapter({ prisma }),
        callbacks: {
            async redirect(url, baseUrl) {
                return "/";
            },
        },
        pages: {
            // signIn: "/auth/signin",
            signIn: "/welcome",
            signOut: "/auth/signout",
            error: "/welcome/error", // Error code passed in query string as ?error=
            verifyRequest: "/welcome/verify-request", // (used for check email message)
            newUser: null, // If set, new users will be directed here on first sign in
        },
    });
