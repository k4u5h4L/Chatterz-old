import React from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:3000/api/socket", {
    query: {
        hello: "42",
    },
});

export default function Test() {
    return <div>Hello socket.io</div>;
}
