interface HapticOptions {
    enableVibrateFallback?: boolean;
    ignoreAndroidSystemSettings?: boolean;
}
declare type HapticFeedbackTypes = "selection" | "impactLight" | "impactMedium" | "impactHeavy" | "rigid" | "soft" | "notificationSuccess" | "notificationWarning" | "notificationError" | "clockTick" | "contextClick" | "keyboardPress" | "keyboardRelease" | "keyboardTap" | "longPress" | "textHandleMove" | "virtualKey" | "virtualKeyRelease" | "effectClick" | "effectDoubleClick" | "effectHeavyClick" | "effectTick";
declare class HapticFeedback {
    static createTriggerOptions(options: HapticOptions): {
        enableVibrateFallback: boolean;
        ignoreAndroidSystemSettings: boolean;
        debug: boolean;
    };
    static trigger: (type?: HapticFeedbackTypes, options?: HapticOptions) => void;
}
export default HapticFeedback;
