import { NativeModules } from "react-native";

const defaultOptions = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: false,
  debug: false,
};

interface HapticOptions {
  enableVibrateFallback?: boolean;
  ignoreAndroidSystemSettings?: boolean;
}

export enum IOSHapticTypes {
  selection = "selection",
  impactLight = "impactLight",
  impactMedium = "impactMedium",
  impactHeavy = "impactHeavy",
  success = "success",
  warning = "success",
  error = "error",
}

export enum AndroidHapticTypes {
  clockTick = "clockTick",
  contextClick = "contextClick",
  keyboardPress = "keyboardPress",
  keyboardRelease = "keyboardRelease",
  keyboardTap = "keyboardTap",
  longPress = "longPress",
  textHandleMove = "textHandleMove",
  virtualKey = "virtualKey",
  virtualKeyRelease = "virtualKeyRelease",
}

type HapticFeedbackTypes =
  | "rigid"
  | "soft"

  // ios
  | "selection"
  | "impactLight"
  | "impactMedium"
  | "impactHeavy"
  | "notificationSuccess"
  | "notificationWarning"
  | "notificationError"
  | "effectClick"
  | "effectDoubleClick"
  | "effectHeavyClick"
  | "effectTick";

export enum Event {
  tap = "tap",
  error = "error",
  cancelled = "cancelled",
}

export interface RegisterEventOptions {
  ios?: {
    hapticType?: string;
    tapticType?: string;
    fallbackVibrate?: string;
  };
  android?: {
    hapticType?: string;
    tapticType?: string;
    fallbackVibrate?: string;
  };
}

export class Haptic {
  private static trigger = () => {};

  private static playiOSHaptic(hapticType: IOSHapticTypes) {}
  private static playAndroidHaptic(hapticType: AndroidHapticTypes) {}

  public static playByEvent(event: Event, options?: HapticOptions) {
    console.log("### event", event, options);
  }

  public static ios = {
    playHapticFeedbackByType: this.trigger,
    playTapticFeedbackByType: this.trigger,
    playSystemSound: this.trigger,
  };

  public static android = {
    playByEvent: this.trigger,
    playHapticFeedbackByType: this.trigger,
    playTapticFeedbackByType: this.trigger,
  };

  public static registerEvent = (
    eventName: string,
    options: RegisterEventOptions
  ) => {};

  public static hasHaptic: () => null;

  public static hasTaptic: () => null;
}

// Haptic.ios.playHapticFeedbackBy();
// export class Haptic {
//   private static createTriggerOptions(options: HapticOptions) {
//     // if options is a boolean we're using an api <=1.6 and we should pass use it to set the enableVibrateFallback option
//     if (typeof options === "boolean") {
//       return {
//         ...defaultOptions,
//         enableVibrateFallback: options,
//       };
//     } else {
//       return { ...defaultOptions, ...options };
//     }
//   }

//   public static trigger = (
//     type: HapticFeedbackTypes = "selection",
//     options: HapticOptions = {}
//   ) => {
//     const { debug, ...triggerOptions } = this.createTriggerOptions(options);

//     try {
//       NativeModules.HapticFeedback.trigger(type, triggerOptions);
//     } catch (err: any) {
//       if (debug) {
//         console.warn(err.message);
//       }
//     }
//   };

// }
