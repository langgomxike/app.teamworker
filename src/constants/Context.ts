import { createContext } from "react";
import AppContent from "../interface/AppContent";
import EnglishAppContent from "./EnglishAppContent";
import VietnameseAppContent from "./VietnameseAppContent";
import JapaneseAppContent from "./JapaneseAppContent";

export type AppContentType = {
    content: AppContent,
    setContent: (content: AppContent) => void,
}

export default class Context {
    static ENGLISH_CONTENT = new EnglishAppContent();
    static VIETNAMESE_CONTENT = new VietnameseAppContent();
    static JAPANESE_CONTENT = new JapaneseAppContent();
    static AppContentContext = createContext<AppContentType>({ content: this.ENGLISH_CONTENT, setContent: () => { } })
}