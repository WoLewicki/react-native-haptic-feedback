"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const defaultOptions = {
    enableVibrateFallback: false,
    ignoreAndroidSystemSettings: false,
    debug: false,
};
class HapticFeedback {
    static createTriggerOptions(options) {
        // if options is a boolean we're using an api <=1.6 and we should pass use it to set the enableVibrateFallback option
        if (typeof options === "boolean") {
            return Object.assign(Object.assign({}, defaultOptions), { enableVibrateFallback: options });
        }
        else {
            return Object.assign(Object.assign({}, defaultOptions), options);
        }
    }
}
_a = HapticFeedback;
HapticFeedback.trigger = (type = "selection", options = {}) => {
    const _b = _a.createTriggerOptions(options), { debug } = _b, triggerOptions = __rest(_b, ["debug"]);
    try {
        react_native_1.NativeModules.HapticFeedback.trigger(type, triggerOptions);
    }
    catch (err) {
        if (debug) {
            console.warn(err.message);
        }
    }
};
exports.default = HapticFeedback;
//# sourceMappingURL=index.js.map