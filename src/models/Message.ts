import Account from "./Account";

export default class Message {
    id: number;
    author: Account;
    content: string;
    file: string;
    type: number;
    createdTime: Date;

    constructor(id: number = -1, content: string = "", file = "", type: number = 0, author: Account = new Account()) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.type = type;
        this.file = file;
        this.createdTime = new Date();
    }
}