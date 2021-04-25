interface MessageType {
    id: number;
    content: string;
    date: string;
}
[];

export interface MessageProps {
    messages: MessageType;
}

export type Message = {
    id: number;
    content: string;
    date: string;
};
