(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\nhtml,body{\n    width: 100%;\n    height:100%;\n  }\n\n.jumbotron {\n   background-color: transparent;\n   color: #fff\n  }\n\n.div-center button{\n    background-color: #01133f;\n    border: 2px solid #fff;\n    margin-bottom: 30px;\n  }\n\n.form-group label{\n    font-size: 16px;\n    font-weight: bold;\n    color: #fff\n  }\n\n.div-center{\n    margin: auto;\n  }\n\n.secao {\n    position: relative;\n  }\n\n#secao-01{\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#0000a5), to(#001123)) !important;\n    background-image: linear-gradient(#0000a5, #001123) !important;\n  }\n\n#secao-02{\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#001123), to(#0000a5)) !important;\n    background-image: linear-gradient(#001123, #0000a5) !important;\n  }\n\n.icone-scroll {\n    position: absolute;\n    bottom: 0em;\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -25px;\n    cursor: pointer;\n  }\n\n.scroll {\n    width: 15px;\n    height: 15px;\n    border-right: 2px solid #001083;\n    border-bottom: 2px solid #001083;\n    display: inline-block;\n    position: relative;\n  }\n\n.scroll-next {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin: 14px 0 0 16.5px;\n  }\n\n.scroll-top {\n    -webkit-transform: rotate(225deg);\n            transform: rotate(225deg);\n    margin: 19px 0 0 17px;\n  }\n\n.scroll-top + .scroll-top {\n    top: -15px;\n    margin-top: 0;\n  }\n\n#inputFilter{\n    margin-bottom: 10px;\n    float: right;\n  }\n\ntable td, .table th {\n    padding: 5px!important;\n  }\n\n.onoffswitch {\n    position: relative; width: 90px;\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\n  }\n\n.onoffswitch-checkbox {\n    display: none;\n  }\n\n.onoffswitch-label {\n    display: block; overflow: hidden; cursor: pointer;\n    border: 2px solid #999999; border-radius: 20px;\n  }\n\n.onoffswitch-inner {\n    display: block; width: 200%; margin-left: -100%;\n    -webkit-transition: margin 0.3s ease-in 0s;\n    transition: margin 0.3s ease-in 0s;\n  }\n\n.onoffswitch-inner:before, .onoffswitch-inner:after {\n    display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;\n    font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\n    box-sizing: border-box;\n  }\n\n.onoffswitch-inner:before {\n    content: \"ON\";\n    padding-left: 10px;\n    background-color: #34A7C1; color: #FFFFFF;\n  }\n\n.onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 10px;\n    background-color: #EEEEEE; color: #999999;\n    text-align: right;\n  }\n\n.onoffswitch-switch {\n    display: block; width: 18px; margin: 6px;\n    background: #FFFFFF;\n    position: absolute; top: 0; bottom: 0;\n    right: 56px;\n    border: 2px solid #999999; border-radius: 20px;\n    -webkit-transition: all 0.3s ease-in 0s;\n    transition: all 0.3s ease-in 0s; \n  }\n\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n  }\n\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px; \n  }\n\n@media screen and (min-height: 300px) and (max-height: 500px) {\n    #secao-01 h1,\n    label,\n    input {\n      font-size: 10px;\n      line-height: 0;\n    }\n    #formulario label,\n    button {\n      font-size: 10px !important;\n      line-height: 0;\n    }\n    #formulario input {\n      height: 25px !important;\n      font-size: 10px !important;\n    }\n    #formulario select {\n      height: 25px !important;\n      font-size: 8px !important;\n    }\n  }\n\n/*iphone 5*/\n\n@media screen and (min-height: 500px) and (max-height: 600px) {\n    #formulario {\n      line-height: 0.1;\n    }\n  }\n\n/*iphone 6,7,8 - S3-L70-pixel2,2xl*/\n\n@media screen and (min-height: 600px) and (max-height: 700px) {\n    #formulario {\n      line-height: 1.3;\n    }\n  }\n\n/*iphone 6,7,8 plus */\n\n@media screen and (min-height: 700px) and (max-height: 800px) {\n    #formulario {\n      line-height: 2;\n    }\n    #formulario div {\n      margin-bottom: 40px;\n    }\n  }\n\n/*iphone x */\n\n@media screen and (min-height: 800px) and (max-height: 900px) {\n    #formulario {\n      line-height: 3;\n    }\n  }\n\n/*ipad */\n\n@media screen and (min-height: 900px) and (max-height: 1500px) {\n    #formulario {\n      line-height: 3;\n    }\n    #formulario div {\n      margin-bottom: 50px;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,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QVM7O0FBQ1Q7SUFDRTtNQUNFLGVBQWU7S0FDaEI7SUFDRDtNQUNFLG9CQUFvQjtLQUNyQjtHQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5odG1sLGJvZHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIH1cbiAgLmp1bWJvdHJvbiB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIGNvbG9yOiAjZmZmXG4gIH1cbiAgLmRpdi1jZW50ZXIgYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTEzM2Y7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5mb3JtLWdyb3VwIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZlxuICB9XG4gIFxuICAuZGl2LWNlbnRlcntcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5zZWNhbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjc2VjYW8tMDF7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDAwYTUsICMwMDExMjMpICFpbXBvcnRhbnQ7XG4gIH1cbiAgI3NlY2FvLTAye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAxMTIzLCAjMDAwMGE1KSAhaW1wb3J0YW50O1xuICB9XG4gIC5pY29uZS1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBlbTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnNjcm9sbCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDEwODM7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDEwODM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2Nyb2xsLW5leHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBtYXJnaW46IDE0cHggMCAwIDE2LjVweDtcbiAgfVxuICAuc2Nyb2xsLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICBtYXJnaW46IDE5cHggMCAwIDE3cHg7XG4gIH1cbiAgLnNjcm9sbC10b3AgKyAuc2Nyb2xsLXRvcCB7XG4gICAgdG9wOiAtMTVweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICAjaW5wdXRGaWx0ZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIHRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5vbm9mZnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogOTBweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7IC1tb3otdXNlci1zZWxlY3Q6bm9uZTsgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIC5vbm9mZnN3aXRjaC1jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAub25vZmZzd2l0Y2gtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5OTk5OTsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMjAwJTsgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzIGVhc2UtaW4gMHM7XG4gIH1cbiAgLm9ub2Zmc3dpdGNoLWlubmVyOmJlZm9yZSwgLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jazsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiA1MCU7IGhlaWdodDogMzBweDsgcGFkZGluZzogMDsgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiBUcmVidWNoZXQsIEFyaWFsLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiT05cIjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0QTdDMTsgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIk9GRlwiO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTsgY29sb3I6ICM5OTk5OTk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLm9ub2Zmc3dpdGNoLXN3aXRjaCB7XG4gICAgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxOHB4OyBtYXJnaW46IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBib3R0b206IDA7XG4gICAgcmlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5OTk5OTsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluIDBzOyBcbiAgfVxuICAub25vZmZzd2l0Y2gtY2hlY2tib3g6Y2hlY2tlZCArIC5vbm9mZnN3aXRjaC1sYWJlbCAub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vbm9mZnN3aXRjaC1jaGVja2JveDpjaGVja2VkICsgLm9ub2Zmc3dpdGNoLWxhYmVsIC5vbm9mZnN3aXRjaC1zd2l0Y2gge1xuICAgIHJpZ2h0OiAwcHg7IFxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMzAwcHgpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAjc2VjYW8tMDEgaDEsXG4gICAgbGFiZWwsXG4gICAgaW5wdXQge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgfVxuICAgICNmb3JtdWxhcmlvIGxhYmVsLFxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAjZm9ybXVsYXJpbyBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjZm9ybXVsYXJpbyBzZWxlY3Qge1xuICAgICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgLyppcGhvbmUgNSovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAgICNmb3JtdWxhcmlvIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjE7XG4gICAgfVxuICB9XG4gIC8qaXBob25lIDYsNyw4IC0gUzMtTDcwLXBpeGVsMiwyeGwqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjAwcHgpIGFuZCAobWF4LWhlaWdodDogNzAwcHgpIHtcbiAgICAjZm9ybXVsYXJpbyB7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cbiAgfVxuICAvKmlwaG9uZSA2LDcsOCBwbHVzICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgICNmb3JtdWxhcmlvIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIH1cbiAgICAjZm9ybXVsYXJpbyBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gIH1cbiAgLyppcGhvbmUgeCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAjZm9ybXVsYXJpbyB7XG4gICAgICBsaW5lLWhlaWdodDogMztcbiAgICB9XG4gIH1cbiAgXG4gIC8qaXBhZCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogOTAwcHgpIGFuZCAobWF4LWhlaWdodDogMTUwMHB4KSB7XG4gICAgI2Zvcm11bGFyaW8ge1xuICAgICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgfVxuICAgICNmb3JtdWxhcmlvIGRpdiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgfVxuICAiXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/Documentos/UFRN/DESENVOLVIMENTO/Lib 2.0/biblioteca/public/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map