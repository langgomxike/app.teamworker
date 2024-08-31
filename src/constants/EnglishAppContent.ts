import { ImageURISource } from 'react-native';
import AppContent, { AppContentType } from './../interface/AppContent';
import AppConfig from './AppConfig';
export default class EnglishAppContent implements AppContent {
    SEARCH: string;
    MIME_TAB: string;
    JOINING_TAB: string;
    LANGUAGE_ICON: ImageURISource;
    TYPE: AppContentType;
    PREFIX_TIME: string;
    YEAR: string;
    MONTH: string;
    DAY: string;
    HOUR: string;
    MINUTE: string;
    JUST_RECENT: string;
    NO_ACTIVITY: string;
    CREATE_ACTIVITY: string;
    CREATE_ACTIVITY_TASK: string;
    CREATE_ACTIVITY_DISCUSSION: string;
    CREATE_ACTIVITY_POLL: string;
    CREATE_ACTIVITY_END_TASK_REPORT: string;
    CREATE_ACTIVITY_PROGRESS_REPORT: string;
    CREATE_ACTIVITY_ERROR_REPORT: string;
    CREATE_ACTIVITY_REMINDER: string;
    TASK: string;
    DISCUSSION: string;
    POLL: string;
    END_TASK_REPORT: string;
    PROGRESS_REPORT: string;
    ERROR_REPORT: string;
    PIN: string;
    REMINDER: string;
    STORAGE: string;
    ANALYSIS: string;
    STOP: string;
    QR: string;
    CAMERA_REQUEST: string;
    LOADING:string;
    LOGIN: string;


    constructor() {
        this.TYPE = AppContentType.EN;
        this.SEARCH = "Search";
        this.MIME_TAB = "Mine",
            this.JOINING_TAB = "Joining",
            this.LANGUAGE_ICON = require("../../assets/icons/en.png");
        this.DAY = "day(s)";
        this.MONTH = "month(s)";
        this.YEAR = "year(s)";
        this.HOUR = "hour(s)";
        this.MINUTE = "minute(s)";
        this.PREFIX_TIME = "ago";
        this.JUST_RECENT = "just recently";
        this.NO_ACTIVITY = "This project has no activity";
        this.CREATE_ACTIVITY = "Choose one item to create new activity for your team 😉";
        this.CREATE_ACTIVITY_DISCUSSION = "Creating a new discussion will help your team work more effectively 😉";
        this.CREATE_ACTIVITY_END_TASK_REPORT = "Hey leader! I completed my task 😊";
        this.CREATE_ACTIVITY_ERROR_REPORT = "I found an error 😟";
        this.CREATE_ACTIVITY_PROGRESS_REPORT = "What did I do yesterday 🧐";
        this.CREATE_ACTIVITY_TASK = "Hey bro! I have a task for you 😎";
        this.CREATE_ACTIVITY_POLL = "Let's vote. I need you guys' opinions 😊";
        this.TASK = "Task";
        this.POLL = "Poll";
        this.DISCUSSION = "Discussion";
        this.END_TASK_REPORT = "End Task Report";
        this.ERROR_REPORT = "Error Report";
        this.PROGRESS_REPORT = "Progress Report";
        this.PIN = "Pined 📌";
        this.CREATE_ACTIVITY_REMINDER = "Hey bro! work! work! 👀";
        this.REMINDER = "Reminder";
        this.STORAGE = "Images, videos, files in project 📁";
        this.ANALYSIS = "Analyze project 📈";
        this.STOP = "Stop project 🚫";
        this.QR = "QR code";
        this.CAMERA_REQUEST = AppConfig.APP_NAME + " needs camera permission";
        this.LOADING = "Loading...";
        this.LOGIN = "Login";
    }
}