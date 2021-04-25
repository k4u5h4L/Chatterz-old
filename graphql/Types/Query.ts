import { queryType, idArg } from "nexus";
import { Message } from "./index";
import prisma from "@/prisma/client";
// import { AuthenticationError } from "apollo-server-micro";

export const Query = queryType({
    definition(t) {
        t.list.field("GetMessages", {
            type: Message,
            // args: {id: idArg(),},
            resolve: (_root, args, ctx) => {
                return ctx.prisma.message.findMany({});
            },
        });
    },
});
