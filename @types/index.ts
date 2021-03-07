interface MessageType {
    id: number;
    content: string;
    date: Date;
}
[];

export interface MessageProps {
    messages: MessageType;
}
