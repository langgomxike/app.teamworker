import { ImageURISource } from 'react-native';
import AppContent, { AppContentType } from '../interface/AppContent';
export default class VietnameseAppContent implements AppContent {
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
        this.TYPE = AppContentType.VN;
        this.SEARCH = "Tìm kiếm";
        this.MIME_TAB = "Của tôi",
        this.JOINING_TAB = "Đang tham gia",
        this.LANGUAGE_ICON = require("../../assets/icons/vn.png");
        this.DAY = "ngày";
        this.MONTH = "tháng";
        this.YEAR = "năm";
        this.HOUR = "giờ";
        this.MINUTE = "phút";
        this.PREFIX_TIME = "trước";
        this.JUST_RECENT = "vừa mới gửi";
    }
   
}