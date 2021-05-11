import { subscriptionType } from "nexus";
import { Message } from "./Message";

let messages = [
    {
        id: 1,
        content: "This is a test message",
        date: "tomorrow",
    },
    {
        id: 2,
        content: "second message",
        date: "",
    },
    {
        id: 3,
        content: "Third message",
        date: "Day after",
    },
];

const onMessagesUpdates = (fn) => fn();

export const Subscription = subscriptionType({
    definition(t) {
        t.field("messageSub", {
            type: Message,
            subscribe(_root, _args, ctx) {
                // return (async function* () {
                //     while (true) {
                //         await new Promise((res) => setTimeout(res, 3000));

                //         yield Math.random() > 0.5;
                //     }
                // })();
                const channel = Math.random().toString(36).slice(2, 15);
                onMessagesUpdates(() =>
                    ctx.pubsub.publish(channel, { messages })
                );
                setTimeout(
                    () => ctx.pubsub.publish(channel, { messages }),
                    3000
                );
                return ctx.pubsub.asyncIterator(channel);
            },

            // resolve: (parent, args, { pubsub }) => {
            //     const channel = Math.random().toString(36).slice(2, 15);
            //     onMessagesUpdates(() => pubsub.publish(channel, { messages }));
            //     setTimeout(() => pubsub.publish(channel, { messages }), 0);
            //     return pubsub.asyncIterator(channel);
            //   },
            resolve: (_root, _args, ctx) => {
                return ctx.prisma.message.findFirst({ where: { id: 2 } });
            },
            // resolve: (eventData) => {
            //     return eventData;
            // }
        });
    },
});
