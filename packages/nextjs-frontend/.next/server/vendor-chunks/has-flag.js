"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-flag";
exports.ids = ["vendor-chunks/has-flag"];
exports.modules = {

/***/ "(ssr)/../../node_modules/has-flag/index.js":
/*!********************************************!*\
  !*** ../../node_modules/has-flag/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nmodule.exports = (flag, argv = process.argv)=>{\n    const prefix = flag.startsWith(\"-\") ? \"\" : flag.length === 1 ? \"-\" : \"--\";\n    const position = argv.indexOf(prefix + flag);\n    const terminatorPosition = argv.indexOf(\"--\");\n    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBRyxDQUFDQyxNQUFNQyxPQUFPQyxRQUFRRCxJQUFJO0lBQzFDLE1BQU1FLFNBQVNILEtBQUtJLFVBQVUsQ0FBQyxPQUFPLEtBQU1KLEtBQUtLLE1BQU0sS0FBSyxJQUFJLE1BQU07SUFDdEUsTUFBTUMsV0FBV0wsS0FBS00sT0FBTyxDQUFDSixTQUFTSDtJQUN2QyxNQUFNUSxxQkFBcUJQLEtBQUtNLE9BQU8sQ0FBQztJQUN4QyxPQUFPRCxhQUFhLENBQUMsS0FBTUUsQ0FBQUEsdUJBQXVCLENBQUMsS0FBS0YsV0FBV0Usa0JBQWlCO0FBQ3JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlZXplLW5leHQvLi4vLi4vbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzPzZiNzIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2ID0gcHJvY2Vzcy5hcmd2KSA9PiB7XG5cdGNvbnN0IHByZWZpeCA9IGZsYWcuc3RhcnRzV2l0aCgnLScpID8gJycgOiAoZmxhZy5sZW5ndGggPT09IDEgPyAnLScgOiAnLS0nKTtcblx0Y29uc3QgcG9zaXRpb24gPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3NpdGlvbiA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvc2l0aW9uICE9PSAtMSAmJiAodGVybWluYXRvclBvc2l0aW9uID09PSAtMSB8fCBwb3NpdGlvbiA8IHRlcm1pbmF0b3JQb3NpdGlvbik7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJmbGFnIiwiYXJndiIsInByb2Nlc3MiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwibGVuZ3RoIiwicG9zaXRpb24iLCJpbmRleE9mIiwidGVybWluYXRvclBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/has-flag/index.js\n");

/***/ })

};
;