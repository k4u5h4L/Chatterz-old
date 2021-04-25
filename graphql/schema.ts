import { makeSchema } from "nexus";
import path from "path";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import * as types from "./Types";

export const schema = makeSchema({
    types,
    plugins: [
        nexusSchemaPrisma({
            experimentalCRUD: true,
            prismaClient: path.join(process.cwd(), "prisma", "client.ts"),
            outputs: {
                typegen: path.join(
                    process.cwd(),
                    "graphql",
                    "generated",
                    "nexusPrismaTypes.gen.ts"
                ),
            },
        }),
    ],
    outputs: {
        schema: path.join(process.cwd(), "schema.graphql"),
        typegen: path.join(
            process.cwd(),
            "graphql",
            "generated",
            "nexusTypes.gen.ts"
        ),
    },
    // typegenAutoConfig: {
    //     contextType: "Context.Context",
    //     sources: [
    //         {
    //             source: "@prisma/client",
    //             alias: "prisma",
    //         },
    //         {
    //             source: require.resolve("./context"),
    //             alias: "Context",
    //         },
    //     ],
    // },
});
