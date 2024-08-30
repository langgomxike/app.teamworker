import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, ref, onValue, child, Database, DataSnapshot } from 'firebase/database';
import firebaseConfig from "../../teamworker-account-service.json";

export enum FirebaseNode {
    "PROJECTS",
    "ACTIVITIES",
    "MESSAGES",
}

export default class SFirebase {
    private static app: FirebaseApp;
    private static firebaseDatabase: Database;

    private static init() {
        if (!this.app) {
            this.app = initializeApp(firebaseConfig);
        }

        if (!this.firebaseDatabase) {
            this.firebaseDatabase = getDatabase(this.app);
        }
    }

    static track(firebaseNode: Node, userId: number = -1, onChange: () => void = () => { }, onCancel: () => void = () => { }, onComplete: () => void = () => { }) {
        this.init();
        let firebaseReference = ref(this.firebaseDatabase, firebaseNode + "/USER_ID:" + userId);

        onValue(firebaseReference, () => { onChange(); onComplete() }, () => { onCancel(); onComplete() });
    }
}