import { queryType, idArg } from "nexus";
import { resolve } from "node:path";
import { Message } from "./index";
// import { AuthenticationError } from "apollo-server-micro";

export const Query = queryType({
    definition(t) {
        // t.list.field("GetMessages", {
        //     type: Message,
        //     resolve: (_root, _args, ctx) => {
        //         return ctx.prisma.message.findMany({});
        //     },
        // });

        // t.field("GetOneMessage", {
        //     type: Message,
        //     args: { id: idArg() },
        //     resolve: (_root, { id }, ctx) => {
        //         return ctx.prisma.message.findUnique({
        //             where: { id: Number(id) },
        //         });
        //     },
        // });

        t.crud.message({
            resolve: (_root, args, ctx) => {
                return ctx.prisma.message.findFirst({
                    where: { id: Number(args.where.id) },
                });
            },
        });

        t.crud.messages({
            resolve: (_root, _args, ctx) => {
                return ctx.prisma.message.findMany({});
            },
        });
    },
});
