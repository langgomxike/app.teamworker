import { ImageURISource } from 'react-native';
import AppContent, { AppContentType } from '../interface/AppContent';
export default class JapaneseAppContent implements AppContent {
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
        this.TYPE = AppContentType.JA;
        this.SEARCH = "検索する";
        this.MIME_TAB = "自分";
        this.JOINING_TAB = "参加する";
        this.LANGUAGE_ICON = require("../../assets/icons/ja.png");
        this.DAY = "日間";
        this.MONTH = "ヶ月";
        this.YEAR = "年間";
        this.HOUR = "時間";
        this.MINUTE = "分";
        this.PREFIX_TIME = "後";
        this.JUST_RECENT = "先ほど来"
    }
}