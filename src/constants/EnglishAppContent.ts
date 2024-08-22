import { ImageURISource } from 'react-native';
import AppContent, { AppContentType } from './../interface/AppContent';
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
    }
}