export default class Activity {
    id: number;
    name: string;
    createdTime: Date;
    isSeen: boolean;

    constructor(id: number = -1, name: string = "", createdTime: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.createdTime = createdTime;
        this.isSeen = false;
    }
}