import { subscriptionType } from "nexus";
import { Message } from "./Message";
import prisma from "@/prisma/client";

export const Subscription = subscriptionType({
    definition(t) {
        t.field("messageSub", {
            type: Message,
            subscribe() {
                return (async function* () {
                    while (true) {
                        await new Promise((res) => setTimeout(res, 3000));

                        yield Math.random() > 0.5;
                    }
                })();
            },

            resolve: (eventData) => {
                return prisma.message.findFirst({ where: { id: 1 } });
                // return eventData;
            },
        });
    },
});
