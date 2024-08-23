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
    NO_ACTIVITY: string;
    CREATE_ACTIVITY: string;
    CREATE_ACTIVITY_TASK: string;
    CREATE_ACTIVITY_DISCUSSION: string;
    CREATE_ACTIVITY_POLL: string;
    CREATE_ACTIVITY_END_TASK_REPORT: string;
    CREATE_ACTIVITY_PROGRESS_REPORT: string;
    CREATE_ACTIVITY_ERROR_REPORT: string;
    TASK: string;
    DISCUSSION: string;
    POLL: string;
    END_TASK_REPORT: string;
    PROGRESS_REPORT: string;
    ERROR_REPORT: string;
    PIN: string;

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
        this.JUST_RECENT = "先ほど来";
        this.NO_ACTIVITY = "このプロジェクトにはアクティビティがありません";
        this.CREATE_ACTIVITY = "アイテムを 1 つ選択して、チームの新しいアクティビティを作成します 😉";
        this.CREATE_ACTIVITY_DISCUSSION = "新しいディスカッションを作成すると、チームがより効率的に作業できるようになります 😉";
        this.CREATE_ACTIVITY_END_TASK_REPORT = "おい、リーダー！ 私は自分の任務を完了しました 😊";
        this.CREATE_ACTIVITY_ERROR_REPORT = "エラーを見つけました 😟";
        this.CREATE_ACTIVITY_PROGRESS_REPORT = "昨日私は何をしましたか 🧐";
        this.CREATE_ACTIVITY_TASK = "やあ！君に用事があるんだ 😎";
        this.CREATE_ACTIVITY_POLL = "投票しましょう。皆さんの意見が必要です 😊";
        this.TASK = "業務";
        this.POLL = "世論";
        this.DISCUSSION = "論う";
        this.END_TASK_REPORT = "タスク完了の報告";
        this.ERROR_REPORT = "バグレポート";
        this.PROGRESS_REPORT = "作業の進捗状況を報告";
        this.PIN = "ピン 📌";
    }
}