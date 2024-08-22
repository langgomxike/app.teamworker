import { ImageURISource } from "react-native";

export enum AppContentType {
    VN,
    EN,
    JA
}

export default interface AppContent {
    TYPE: AppContentType;
    SEARCH: string;
    MIME_TAB: string;
    JOINING_TAB: string;
    LANGUAGE_ICON: ImageURISource,
    PREFIX_TIME: string;
    YEAR: string;
    MONTH: string;
    DAY: string;
    HOUR: string;
    MINUTE: string;
    JUST_RECENT: string;
}