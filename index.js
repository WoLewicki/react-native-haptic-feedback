import { NativeModules } from "react-native";

const defaultOptions = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: false,
  debug: false,
};

class RNReactNativeHapticFeedback {
  static createTriggerOptions(options) {
    // if options is a boolean we're using an api <=1.6 and we should pass use it to set the enableVibrateFallback option
    if (typeof options === "boolean") {
      return {
        ...defaultOptions,
        enableVibrateFallback: options,
      };
    } else {
      return { ...defaultOptions, ...options };
    }
  }

  static trigger = (type = "selection", options = {}) => {
    const { debug, ...triggerOptions } = this.createTriggerOptions(options);

    try {
      NativeModules.RNReactNativeHapticFeedback.trigger(type, triggerOptions);
    } catch (err) {
      if (debug) {
        console.warn(err.message);
      }
    }
  };
}

export default RNReactNativeHapticFeedback;
