export default class Activity {
    id: number;
    name: string;
    createdTime: Date;
    isSeen: boolean;
    type: number;

    constructor(id: number = -1, name: string = "", type: number = 0, createdTime: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.createdTime = createdTime;
        this.isSeen = false;
        this.type = type;
    }
}