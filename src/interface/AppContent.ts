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
}