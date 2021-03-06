"use strict";

import {Ls} from "./common";

const t = Date.now();
let _diagnostic = {
  console: false
};

/**
 * dankLog
 * Just shows stuff in as dank as possible.
 * @param {String} name
 * @param {String} message
 * @param {String} status
 * @public
 */
function dankLog(name, message, status) {
  try {
    if (
      (Ls.available && Ls.getBoolean("gd_debug_ex")) ||
      (_diagnostic && _diagnostic.console === true)
    ) {
      let theme =
        status === "error"
          ? "background: #c4161e; color: #fff"
          : status === "warning"
          ? "background: #ff8c1c; color: #fff"
          : status === "info"
          ? "background: #ff0080; color: #fff"
          : "background: #44a5ab; color: #fff";
      const banner = console.log(
        "[" +
          (Date.now() - t) / 1000 +
          "s]" +
          "%c %c %c gdsdk %c %c %c " +
          name +
          " ",
        "background: #9854d8",
        "background: #6c2ca7",
        "color: #fff; background: #450f78;",
        "background: #6c2ca7",
        "background: #9854d8",
        theme,
        typeof message !== "undefined" ? message : ""
      );
      /* eslint-disable */
      console.log.apply(console, banner);
      /* eslint-enable */
    }
  } catch (error) {
    console.log(error);
  }
}
/**
 * setDankLog
 * @param {Object} diagnostic
 * @public
 */
function setDankLog(diagnostic) {
  _diagnostic = diagnostic;
}

export { dankLog, setDankLog };
