import { ImageURISource } from 'react-native';
import AppContent, { AppContentType } from '../interface/AppContent';
import AppConfig from './AppConfig';
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
        this.NO_ACTIVITY = "Dự án này chưa có hoạt động nào";
        this.CREATE_ACTIVITY = "Tạo một hoạt động mới cho team nào 😉";
        this.CREATE_ACTIVITY_DISCUSSION = "Cùng thảo luận để cùng hiệu quả 😉";
        this.CREATE_ACTIVITY_END_TASK_REPORT = "'Tui' hoàn thành nhiệm vụ 'ròi ngheng' 😊";
        this.CREATE_ACTIVITY_ERROR_REPORT = "'Trời ơi' có lỗi 😟";
        this.CREATE_ACTIVITY_PROGRESS_REPORT = "Hôm qua mình làm gì á ta 🧐";
        this.CREATE_ACTIVITY_TASK = "Nhiệm vụ nóng hối, vừa thổi vừa chạy deadline 😎";
        this.CREATE_ACTIVITY_POLL = "Bình chọn! Bình chọn! Bình chọn 😊";
        this.TASK = "Nhiệm vụ";
        this.POLL = "Bình chọn";
        this.DISCUSSION = "Thảo luận";
        this.END_TASK_REPORT = "Báo cáo hoàn thành nhiệm vụ";
        this.ERROR_REPORT = "Báo cáo lỗi";
        this.PROGRESS_REPORT = "Báo cáo tiến trình làm việc";
        this.PIN = "Đã ghim 📌";
        this.CREATE_ACTIVITY_REMINDER = "Làm bài đi bạn ơi 👀";
        this.REMINDER = "Nhắc nhở";
        this.STORAGE = "Ảnh, video, file trong dự án 📁";
        this.ANALYSIS = "Phân tích dự án 📈";
        this.STOP = "Dừng dự án 🚫";
        this.QR = "Mã QR";
        this.CAMERA_REQUEST = AppConfig.APP_NAME + " cần quyền truy cập vào máy ảnh";
        this.LOADING = "Đang tải...";
        this.LOGIN = "Đăng nhập";
    }

}