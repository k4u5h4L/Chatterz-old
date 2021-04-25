import { ApolloServer } from "apollo-server-micro";
import { getSession } from "next-auth/client";
import { schema } from "@/graphql/schema";
// import { createContext } from "@/prisma/client";
import prisma from "@/prisma/client";

const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        // get user's session
        const session = await getSession({ req });

        // return { db, dataloaders, userSession };
        return { session, prisma };
    },
    playground: {
        settings: {
            //   "editor.theme": "light",
            "request.credentials": "same-origin",
        },
    },
    tracing: process.env.NODE_ENV === "development",
});
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
