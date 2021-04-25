import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { schema } from "@/graphql/schema";
// import { createContext } from "@/prisma/client";
import prisma from "@/prisma/client";

const apolloServer = new ApolloServer({
    schema,
    context: async ({ req }) => {
        // get user's session
        const session = await getSession({ req });

        // return { db, dataloaders, userSession };
        return { session, prisma };
    },
    subscriptions: {
        path: "/api/graphqlSubscriptions",
        keepAlive: 9000,
        onConnect: () => console.log("connected"),
        onDisconnect: () => console.log("disconnected"),
    },
    playground: {
        subscriptionEndpoint: "/api/graphqlSubscriptions",
        settings: {
            //   "editor.theme": "light",
            "request.credentials": "same-origin",
        },
    },
    tracing: process.env.NODE_ENV === "development",
});
const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};

type CustomSocket = Exclude<NextApiResponse<any>["socket"], null> & {
    server: Parameters<ApolloServer["installSubscriptionHandlers"]>[0] & {
        apolloServer?: ApolloServer;
        apolloServerHandler?: any;
    };
};

type CustomNextApiResponse<T = any> = NextApiResponse<T> & {
    socket: CustomSocket;
};

const graphqlWithSubscriptionHandler = (
    req: NextApiRequest,
    res: CustomNextApiResponse
) => {
    const oldOne = res.socket.server.apolloServer;
    if (
        //we need compare old apolloServer with newOne, becasue after hot-reload are not equals
        oldOne &&
        oldOne !== apolloServer
    ) {
        console.warn("FIXING HOT RELOAD !!!!!!!!!!!!!!! ");
        delete res.socket.server.apolloServer;
    }

    if (!res.socket.server.apolloServer) {
        console.log(`* apolloServer (re)initialization *`);

        apolloServer.installSubscriptionHandlers(res.socket.server);
        res.socket.server.apolloServer = apolloServer;
        const handler = apolloServer.createHandler({ path: "/api/graphql" });
        res.socket.server.apolloServerHandler = handler;
        //clients losts old connections, but clients are able to reconnect
        oldOne?.stop();
    }

    return res.socket.server.apolloServerHandler(req, res);
};

export default graphqlWithSubscriptionHandler;

// const graphqlWithSubscriptionHandler = (req, res, next) => {
//     if (!res.socket.server.apolloServer) {
//         console.log(`* apolloServer first use *`);

//         apolloServer.installSubscriptionHandlers(res.socket.server);
//         const handler = apolloServer.createHandler({ path: "/api/graphql" });
//         res.socket.server.apolloServer = handler;
//     }

//     return res.socket.server.apolloServer(req, res, next);
// };

// export default handler;
