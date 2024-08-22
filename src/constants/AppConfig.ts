import { useContext } from "react";
import Context from "./Context";

export default class AppConfig {
    static APP_NAME = "TEAM WORKER";

    static getDate(date: Date, hasTime: boolean = false): string {
        if (!date) {
            return "";
        }

        let result = "";
        const year = date.getFullYear();
        const today = new Date();

        if (date.toISOString().substring(0, 10) !== today.toISOString().substring(0, 10)) { //is not today
            if (year !== today.getFullYear()) { // is not this year
                result = year + "/";
            }
            result += date.getMonth() + " " + date.getDate();
        }

        const format = (number: number) => {
            return number < 10 ? "0" + number : number;
        }

        const time = hasTime ? format(date.getHours()) + ":" + format(date.getMinutes()) : "";

        return result + time;
    }
}