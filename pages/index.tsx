import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { GetStaticProps } from "next";
import prisma from "@/prisma/client";
import { MessageProps } from "@/types/index";
import { Message } from "@/node_modules/.prisma/client/index.d.ts";

export const getStaticProps: GetStaticProps = async (context) => {
    const messages: Message[] = await prisma.message.findMany();
    // console.log(messages);

    return {
        props: {
            messages: JSON.parse(JSON.stringify(messages)),
        },
        revalidate: 1,
    };
};

export default function Home({ messages }: MessageProps) {
    return (
        <div className="layout-wrapper d-lg-flex">
            <div className="side-menu flex-lg-column mr-lg-1">
                <Navbar />
            </div>
        </div>
    );
}
