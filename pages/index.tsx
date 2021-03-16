import React, { ReactNode } from "react";
import { GetStaticProps } from "next";
import prisma from "@/prisma/client";

import Navbar from "@/components/Navbar/Navbar";
import { MessageProps } from "@/types/index";
import { Message } from "@/types/index";
import ProfileDesc from "@/components/ProfileDesc/ProfileDesc";
import Chats from "@/components/Chats/Chats";
import Groups from "@/components/Groups/Groups";
import Contacts from "@/components/Contacts/Contacts";
import Settings from "@/components/Settings/Settings";
import Convo from "@/components/Convo/Convo";
import Profile from "@/components/Profile/Profile";

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

export default function Home({ messages }: MessageProps): ReactNode {
    return (
        <div className="layout-wrapper d-lg-flex">
            <Navbar />
            <div className="chat-leftsidebar mr-lg-1">
                <div className="tab-content">
                    <ProfileDesc />
                    <Chats />
                    <Groups />
                    <Contacts />
                    <Settings />
                </div>
            </div>

            <div className="user-chat w-100">
                <div className="d-lg-flex">
                    <Convo />
                    <Profile />
                </div>
            </div>
        </div>
    );
}
