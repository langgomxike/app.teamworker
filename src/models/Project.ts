import Activity from "./Activity";

export default class Project {
    id: number;
    name: string;
    description: string;
    coverImage: string;
    activities: Array<Activity>;

    constructor(id: number = -1, name: string = "", description: string = "", coverImage: string = "") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.coverImage = coverImage;
        this.activities = [];
    }

    //method
    countUnseenActivities() {
        let count = 0;

        this.activities.forEach(activity => {
            if (!activity.isSeen) {
                count++;
            }
        });

        return count;
    }
}