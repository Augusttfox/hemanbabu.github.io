// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

(window.webpackJsonp = window.webpackJsonp || []).push([
	[17], {
		"/GGi": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		"/uwM": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("AytR");
			class i {
				constructor() {}
				ngOnInit() {
					this.loader2 = n.a.s3Objectstudentassets + "assets/common-images/spinner.gif"
				}
			}
		},
		0: function(e, l, t) {
			e.exports = t("zUnb")
		},
		"134i": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("8Y7J");
			class i {
				constructor(e) {
					this.renderer = e, this.id = "growl-card", this.data = {
						icon: "",
						severity: "",
						summary: "",
						detail: "",
						time: 0
					}, this.dataChange = new n.m
				}
				ngOnChanges(e) {
					for (let l in e) "data" === l && this.data && this.show()
				}
				show() {
					switch (this.intervalSub && clearTimeout(this.intervalSub), this.data.severity) {
						case "success":
							this.data.icon = "icon-done", this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "var(--one)");
							break;
						case "error":
							this.data.icon = "icon-close-1", this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "var(--nine)");
							break;
						case "warn":
							this.data.icon = "icon-alert-o", this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "var(--eighteen)");
							break;
						default:
							this.data.icon = "icon-alert-o", this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "var(--eighteen)")
					}
					this.renderer.addClass(this.growlCardElement.nativeElement, "show");
					const e = (this.data.time ? this.data.time - 500 : 2500) / 1e3;
					this.renderer.setStyle(this.growlCardElement.nativeElement, "-webkit-animation", "fadein 0.5s, fadeout 0.5s " + e + "s"), this.renderer.setStyle(this.growlCardElement.nativeElement, "animation", "fadein 0.5s, fadeout 0.5s " + e + "s"), this.intervalSub = setTimeout(() => {
						this.renderer.removeClass(this.growlCardElement.nativeElement, "severity-" + (this.data.severity ? this.data.severity : "warn")), this.renderer.removeClass(this.growlCardElement.nativeElement, "show"), this.renderer.removeStyle(this.growlCardElement.nativeElement, "-webkit-animation"), this.renderer.removeStyle(this.growlCardElement.nativeElement, "animation"), this.dataChange.emit(void 0)
					}, this.data.time ? this.data.time : 3e3)
				}
				close() {
					this.renderer.removeClass(this.growlCardElement.nativeElement, "show")
				}
			}
		},
		"1YvG": function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("SVse"),
				o = t("7lOW"),
				a = t("HMdK"),
				s = t("QDnK"),
				r = t("vCwT"),
				u = t("Gl8U"),
				c = ["input[_ngcontent-%COMP%]{outline:0}input[type=radio][_ngcontent-%COMP%]:checked:after{width:7px;height:7px;border-radius:15px;top:-2px;left:-2px;position:relative;content:'';display:inline-block;visibility:visible;border:5px solid var(--one);background:var(--white)}input[type=radio][_ngcontent-%COMP%]:after{width:15px;height:15px;border-radius:15px;top:-2px;left:-2px;position:relative;background-color:var(--fifteen);content:'';display:inline-block;visibility:visible;border:1px solid var(--twelve);background:var(--white);cursor:pointer}.countryMarTop[_ngcontent-%COMP%], .fieldMarTop[_ngcontent-%COMP%]{margin-top:3px!important}input[type=radio][_ngcontent-%COMP%]{margin-right:5px}[_ngcontent-%COMP%]::-webkit-input-placeholder{font-weight:700;font-size:14px}[_ngcontent-%COMP%]::-moz-placeholder{font-weight:700;font-size:14px}[_ngcontent-%COMP%]:-ms-input-placeholder{font-weight:700;font-size:14px}[_ngcontent-%COMP%]::-ms-input-placeholder{font-weight:700;font-size:14px}[_ngcontent-%COMP%]::placeholder{font-weight:700;font-size:14px}textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{opacity:.7}textarea[_ngcontent-%COMP%]::-moz-placeholder{opacity:.7}textarea[_ngcontent-%COMP%]:-ms-input-placeholder{opacity:.7}textarea[_ngcontent-%COMP%]::-ms-input-placeholder{opacity:.7}textarea[_ngcontent-%COMP%]::placeholder{opacity:.7}textarea[_ngcontent-%COMP%]{width:100%;font-size:14px;border-color:var(--ten);padding:10px 0;text-indent:10px;background:var(--white)}.borderPhone[_ngcontent-%COMP%]{border-color:var(--sixtyFour)!important}.error_class[_ngcontent-%COMP%]{font-size:12px;color:var(--ten)}.inputLabel[_ngcontent-%COMP%]{position:relative;display:inline-block;padding-top:6px;font-family:Roboto;font-size:16px;line-height:1.5;overflow:hidden;width:100%}.space[_ngcontent-%COMP%]{margin-left:4px}.borderClass[_ngcontent-%COMP%]{border-radius:2px;border:1px solid}.radioOptC[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;border:1px solid;border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);border-top-color:transparent;border-radius:2px;padding:5px 13px;width:100%;height:40px;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87);background-color:transparent;box-shadow:none;caret-color:rgb(var(--pure-material-primary-rgb,33,150,243));transition:border .2s,box-shadow .2s}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], div[_ngcontent-%COMP%]::-webkit-datetime-edit{position:absolute;top:0;left:0;display:flex;border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);width:100%;max-height:100%;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);font-size:75%;line-height:15px;cursor:text;transition:color .2s,font-size .2s,line-height .2s}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before{content:'';display:block;box-sizing:border-box;margin-top:6px;border-top:1px solid;border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);min-width:10px;height:8px;pointer-events:none;box-shadow:inset 0 1px transparent;transition:border-color .2s,box-shadow .2s}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before{margin-right:4px;border-left:1px solid transparent;border-radius:4px 0}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after{flex-grow:1;margin-left:4px;border-right:1px solid transparent;border-radius:0 4px}.inputLabel[_ngcontent-%COMP%]:hover > input[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%]:hover > textarea[_ngcontent-%COMP%]{border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87);border-top-color:transparent}.inputLabel[_ngcontent-%COMP%]:hover > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%]:hover > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%]:hover > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%]:hover > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87)}.inputLabel[_ngcontent-%COMP%]:hover > input[_ngcontent-%COMP%]:not(:focus):placeholder-shown, .inputLabel[_ngcontent-%COMP%]:hover > textarea[_ngcontent-%COMP%]:not(:focus):placeholder-shown{border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87)}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:focus):placeholder-shown, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:not(:focus):placeholder-shown{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6)}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:focus):placeholder-shown + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:not(:focus):placeholder-shown + span[_ngcontent-%COMP%]{font-size:inherit;line-height:56px}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:focus):placeholder-shown + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:focus):placeholder-shown + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:not(:focus):placeholder-shown + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:not(:focus):placeholder-shown + span[_ngcontent-%COMP%]::before{border-top-color:transparent}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:focus{border-color:rgb(var(--pure-material-primary-rgb,33,150,243));border-top-color:transparent;box-shadow:inset 1px 0 var(--pure-material-safari-helper1),inset -1px 0 var(--pure-material-safari-helper1),inset 0 -1px var(--pure-material-safari-helper1);outline:0}.borderinputtop[_ngcontent-%COMP%]:focus{border-top-color:rgb(var(--pure-material-primary-rgb,33,150,243))!important}.float-left[_ngcontent-%COMP%]{float:left}.max-halfwidth[_ngcontent-%COMP%]{max-width:50%}.radiolabelopt[_ngcontent-%COMP%]{margin-left:2px}.rdlabel[_ngcontent-%COMP%]{width:100%;min-height:20px}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]{color:rgb(var(--pure-material-primary-rgb,33,150,243))}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]::before{border-top-color:var(--pure-material-safari-helper1)!important;box-shadow:inset 0 1px var(--pure-material-safari-helper1)}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled + span[_ngcontent-%COMP%]{border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)!important;border-top-color:transparent!important;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38);pointer-events:none}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled + span[_ngcontent-%COMP%]::before{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)!important}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled:placeholder-shown, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled:placeholder-shown + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled:placeholder-shown, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled:placeholder-shown + span[_ngcontent-%COMP%]{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)!important}.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled:placeholder-shown + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:disabled:placeholder-shown + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled:placeholder-shown + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]:disabled:placeholder-shown + span[_ngcontent-%COMP%]::before{border-top-color:transparent!important}@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none){.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .inputLabel[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before{transition-duration:.1s}}}.phoneC[_ngcontent-%COMP%]{display:flex;border:1px solid var(--inputB);border-radius:5px}.disableColor[_ngcontent-%COMP%]{color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)}.phoneC[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:30%;height:35px;border:none;background-color:var(--five);cursor:pointer}.phoneC[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:70%}.phoneC[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px;width:calc(100% - 20px);border:none;border-radius:3px;background:var(--white)}.errorInput[_ngcontent-%COMP%]{font-size:12px;color:var(--warnred);padding-left:5px}a[_ngcontent-%COMP%]{cursor:pointer;color:var(--twentyfive)}.messages[_ngcontent-%COMP%]{position:relative;top:10px;font-size:13px;color:var(--fourteen)}.flexDirection[_ngcontent-%COMP%]{justify-content:flex-end}.inputLabel[_ngcontent-%COMP%]   .inputIcons[_ngcontent-%COMP%]{position:absolute;right:11px;top:14px}.inputLabel[_ngcontent-%COMP%]   .icon-ios-locked[_ngcontent-%COMP%]:before, .inputLabel[_ngcontent-%COMP%]   .icon-person[_ngcontent-%COMP%]:before, .inputLabel[_ngcontent-%COMP%]   .icon-unlock[_ngcontent-%COMP%]:before{font-size:18px;color:var(--fourteen)}.errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus, .errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:focus){border-color:var(--nine);border-top-color:transparent}.errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]{color:var(--nine)}.simpleFont[_ngcontent-%COMP%]{font-size:13px}.errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:not(:focus):placeholder-shown{border-top-color:var(--nine)}.errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{border-color:var(--nine)}.errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .errorBox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before, .errorBox[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::after, .errorBox[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]::before{border-top-color:var(--nine)}input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{cursor:pointer;color:transparent;opacity:1;display:block;background:url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;width:15px;height:15px;border-width:thin}input[type=date][_ngcontent-%COMP%]::-webkit-clear-button{font-size:15px;margin-right:5px}.form-check[_ngcontent-%COMP%]{margin-right:50px;margin-bottom:10px}.phoneC[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.phoneC[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.customSelect[_ngcontent-%COMP%]{width:100%;border:1px solid var(--inputB);height:45px;background:var(--three);border-radius:2px;text-indent:8px}.pie-wrapper.progress-45[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%]{border-color:var(--darkgreen)}.pie-wrapper.progress-45[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{transform:rotate(162deg)}.pie-wrapper.progress-45[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{display:none}.pie-wrapper[_ngcontent-%COMP%]{height:1em;width:1em;float:left;margin:15px;position:relative}.pie-wrapper[_ngcontent-%COMP%]:nth-child(3n+1){clear:both}.pie-wrapper[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]{height:100%;width:100%;clip:rect(0,1em,1em,.5em);left:0;position:absolute;top:0}.pie-wrapper[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%]{height:100%;width:100%;border:.1em solid var(--thirtyfive);border-radius:50%;clip:rect(0,.5em,1em,0);left:0;position:absolute;top:0}.pie-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{background:var(--darkgrey);border-radius:50%;bottom:.4em;color:var(--five);cursor:default;display:block;font-size:.25em;left:.4em;line-height:2.8em;position:absolute;right:.4em;text-align:center;top:.4em}.pie-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .smaller[_ngcontent-%COMP%]{color:var(--fourtytwo);font-size:.45em;padding-bottom:20px;vertical-align:super}.pie-wrapper[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{height:100%;width:100%;border:.1em solid var(--fourtytwo);border-radius:50%}.pie-wrapper.style-2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{background:0 0;color:var(--fourtyfour)}.pie-wrapper.style-2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .smaller[_ngcontent-%COMP%]{color:var(--fourtytwo)}.uploadR[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.uploadR[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;align-items:center}.uploadC[_ngcontent-%COMP%]{padding:10px 25px;background:var(--two);width:40%}.check2[_ngcontent-%COMP%]{flex:0 50%}.cP[_ngcontent-%COMP%]{cursor:pointer}label[_ngcontent-%COMP%]{font-size:14px}input[type=checkbox][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem}input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid var(--white);border-bottom:2px solid var(--white);transform:rotateZ(37deg);transform-origin:100% 100%}input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{top:0;width:20px;height:20px;border:2px solid var(--fourtyfive);background-color:var(--fourtyfive);z-index:0}@media screen and (max-width:998px){.label[_ngcontent-%COMP%]{font-size:12px}}@media screen and (max-width:480px){.label[_ngcontent-%COMP%]{font-size:11px}}.control[_ngcontent-%COMP%]{font-family:Roboto;position:relative;padding-left:30px;margin-bottom:5px;padding-top:3px;padding-right:10px}.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;z-index:-1;opacity:0}.control_indicator[_ngcontent-%COMP%]{position:absolute;top:2px;left:0;height:15px;width:15px;background:var(--seventeen);border:0 solid var(--seven);border-radius:0}.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .control_indicator[_ngcontent-%COMP%], .control[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .control_indicator[_ngcontent-%COMP%]{background:var(--twentyeight)}.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .control_indicator[_ngcontent-%COMP%]{background:var(--one)}.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled ~ .control_indicator[_ngcontent-%COMP%]{background:var(--seventeen);opacity:.6;pointer-events:none}.control_indicator[_ngcontent-%COMP%]:after{box-sizing:unset;content:'';position:absolute;display:none}.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .control_indicator[_ngcontent-%COMP%]:after{display:block}.control-checkbox[_ngcontent-%COMP%]   .control_indicator[_ngcontent-%COMP%]:after{left:5px;top:2px;width:3px;height:8px;border:solid var(--white);border-width:0 2px 2px 0;transform:rotate(45deg)}.control-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled ~ .control_indicator[_ngcontent-%COMP%]:after{border-color:var(--fourtyone)}.control-checkbox[_ngcontent-%COMP%]   .control_indicator[_ngcontent-%COMP%]::before{content:'';display:block;position:absolute;left:0;top:0;width:15px;height:15px;margin-left:0;margin-top:0;background:var(--one);border-radius:0;opacity:.6;z-index:99999;transform:scale(0)}.iconInputPadd[_ngcontent-%COMP%]{padding:5px 40px 5px 13px!important}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.titlecase[_ngcontent-%COMP%]{text-transform:capitalize}.lowercase[_ngcontent-%COMP%]{text-transform:lowercase}@-webkit-keyframes s-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes s-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@-webkit-keyframes s-ripple-dup{0%{transform:scale(0)}30%,60%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes s-ripple-dup{0%{transform:scale(0)}30%,60%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}.input-group-addon[_ngcontent-%COMP%]{top:7px;right:1px;height:calc(100% - 8px);background:var(--six);justify-content:center;display:flex;align-items:center;min-width:40px;border-radius:3px;position:absolute;font-weight:500;padding:0 15px}@media screen and (max-width:320px){.inputLabel[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{font-size:60%}}.hide_button[_ngcontent-%COMP%]{display:none}.upload-box[_ngcontent-%COMP%]{height:50px;border:1px solid;display:flex;align-items:center;justify-content:center;cursor:pointer}.error-message[_ngcontent-%COMP%]{font-size:12px;color:var(--warnred);padding-top:5px}.disabled-box[_ngcontent-%COMP%]{border:1px solid var(--fiftysix);color:var(--fiftyNine);cursor:not-allowed}.policy-box[_ngcontent-%COMP%]{border:1px solid;padding-left:5px}.terms-text[_ngcontent-%COMP%]{max-height:400px;overflow:scroll;overflow-x:hidden}.agree-text[_ngcontent-%COMP%]{padding-top:10px}.agree-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--fiftyfour)!important}.agree-link[_ngcontent-%COMP%]{padding-top:10px;color:var(--fiftyfour)!important}.link[_ngcontent-%COMP%]{font-size:12px;color:var(--twentyfive);text-decoration:underline;cursor:pointer;padding-right:20px}.header-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.info-icon[_ngcontent-%COMP%]{background-color:var(--three);width:15px;height:15px;margin-bottom:10px;border-radius:50%;border:1px solid;display:flex;justify-content:center;cursor:pointer}"],
				d = t("s7LF");
			class p {
				constructor() {
					this.field = {}, this.value = "", this.selectedvalue = new n.m
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngAfterViewInit() {
					this.form.controls[this.field.name].setValue(this.value && this.value.length > 0 ? this.value : "")
				}
				selectedBranch() {
					if ("Branch" === this.field.name) {
						const e = document.getElementById(this.field.name);
						this.selectedbranch = e.options[e.selectedIndex].value, this.selectedvalue.emit(this.selectedbranch)
					}
				}
			}
			var h = n.nb({
				encapsulation: 0,
				styles: [c],
				data: {}
			});

			function g(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "option", [], null, null, null, null, null)), n.ob(1, 147456, null, 0, d.t, [n.k, n.C, [2, d.x]], {
					value: [0, "value"]
				}, null), n.ob(2, 147456, null, 0, d.E, [n.k, n.C, [8, null]], {
					value: [0, "value"]
				}, null), (e()(), n.Hb(3, null, ["", ""]))], (function(e, l) {
					e(l, 1, 0, l.context.$implicit.value), e(l, 2, 0, l.context.$implicit.value)
				}), (function(e, l) {
					e(l, 3, 0, l.context.$implicit.label)
				}))
			}

			function b(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " is required "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.label)
				}))
			}

			function m(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 23, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 1).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 1).onReset() && i), i
				}), null, null)), n.ob(1, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(3, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(4, 0, null, null, 2, "label", [], null, null, null, null, null)), n.ob(5, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.Hb(6, null, [" ", " ", " "])), (e()(), n.pb(7, 0, null, null, 14, "select", [
					["class", "customSelect"]
				], [
					[8, "id", 0],
					[8, "name", 0],
					[1, "disabled", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "click"],
					[null, "change"],
					[null, "blur"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "change" === l && (i = !1 !== n.zb(e, 11).onChange(t.target.value) && i), "blur" === l && (i = !1 !== n.zb(e, 11).onTouched() && i), "click" === l && (i = !1 !== o.selectedBranch() && i), i
				}), null, null)), n.ob(8, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(9, {
					disabled: 0
				}), n.ob(10, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.ob(11, 16384, null, 0, d.x, [n.C, n.k], null, null), n.Eb(1024, null, d.o, (function(e) {
					return [e]
				}), [d.x]), n.ob(13, 671744, null, 0, d.h, [
					[3, d.c],
					[8, null],
					[8, null],
					[6, d.o],
					[2, d.D]
				], {
					name: [0, "name"]
				}, null), n.Eb(2048, null, d.p, null, [d.h]), n.ob(15, 16384, null, 0, d.q, [
					[4, d.p]
				], null, null), (e()(), n.pb(16, 0, null, null, 3, "option", [
					["disabled", ""],
					["selected", ""],
					["value", ""]
				], null, null, null, null, null)), n.ob(17, 147456, null, 0, d.t, [n.k, n.C, [2, d.x]], {
					value: [0, "value"]
				}, null), n.ob(18, 147456, null, 0, d.E, [n.k, n.C, [8, null]], {
					value: [0, "value"]
				}, null), (e()(), n.Hb(-1, null, [" Select "])), (e()(), n.gb(16777216, null, null, 1, null, g)), n.ob(21, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, b)), n.ob(23, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form), e(l, 5, 0, t.field.labelStyle ? t.field.labelStyle : "");
					var n = e(l, 9, 0, !0 === t.field.disabled);
					e(l, 8, 0, "customSelect", n), e(l, 10, 0, t.field.styles ? t.field.styles : ""), e(l, 13, 0, t.field.name), e(l, 17, 0, ""), e(l, 18, 0, ""), e(l, 21, 0, t.field.options), e(l, 23, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError("required"))
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, n.zb(l, 3).ngClassUntouched, n.zb(l, 3).ngClassTouched, n.zb(l, 3).ngClassPristine, n.zb(l, 3).ngClassDirty, n.zb(l, 3).ngClassValid, n.zb(l, 3).ngClassInvalid, n.zb(l, 3).ngClassPending), e(l, 6, 0, t.field.label, "" === t.field.label ? "" : t.field.required ? "*" : ""), e(l, 7, 0, t.field.name, t.field.name, !0 === t.field.disabled || void 0, n.zb(l, 15).ngClassUntouched, n.zb(l, 15).ngClassTouched, n.zb(l, 15).ngClassPristine, n.zb(l, 15).ngClassDirty, n.zb(l, 15).ngClassValid, n.zb(l, 15).ngClassInvalid, n.zb(l, 15).ngClassPending)
				}))
			}

			function f(e) {
				return n.Jb(0, [(e()(), n.gb(16777216, null, null, 1, null, m)), n.ob(1, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					e(l, 1, 0, !l.component.field.copyHide)
				}), null)
			}
			class v {
				constructor() {
					this.enable = !1, this.showError = !1, this.field = {}, this.value = []
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngAfterViewInit() {}
				ngOnChanges(e) {
					e && setTimeout(() => {
						this.setDefaultArrayValue()
					}, 500)
				}
				setDefaultArrayValue() {
					this.field && this.field.value && this.field.value.length && this.field.value.forEach(e => {
						this.setValue(e)
					})
				}
				setValue(e) {
					let l = this.value;
					l.indexOf(e) > -1 ? ("other" === e && (l.splice(l.indexOf(e) + 1, 1), this.form.controls[this.field.name].clearValidators()), l.splice(l.indexOf(e), 1)) : l.push(e), this.value = void 0, this.value = [...l], this.value.includes("other") ? (this.enable = !0, this.data = {
						type: "text",
						name: "reason",
						label: "Reason",
						value: "",
						required: !0,
						minLength: 8,
						error: "pattern",
						message: "Enter valid text",
						description: null,
						customError: {
							error: !1,
							message: ""
						}
					}, this.form.controls[this.field.name].setValidators([d.y.required, d.y.minLength(10)])) : this.enable = !1, this.form.controls[this.field.name].setValue(l)
				}
				inputVal(e) {
					let l = new RegExp("/^[a-zA-z]+$/");
					if (e.target.value.length < 3 || l.test(e.target.value)) this.showError = !0;
					else {
						let l = e.target.value;
						this.form.controls[this.field.name].value.includes("other") && l && (this.form.controls[this.field.name].value.splice(this.form.controls[this.field.name].value.indexOf("other") + 1, 0, l), this.form.controls[this.field.name].setErrors(null), this.form.controls[this.field.name].clearValidators()), this.showError = !1
					}
				}
				validInput(e) {
					this.showError = "" === e.target.value
				}
			}
			var _ = n.nb({
				encapsulation: 0,
				styles: [c],
				data: {}
			});

			function y(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 6, "div", [
					["class", "form-check form-check"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 5, "label", [
					["class", "control control-checkbox font13"]
				], null, null, null, null, null)), n.ob(2, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(3, {
					disabled: 0,
					cP: 1
				}), (e()(), n.pb(4, 0, null, null, 0, "input", [
					["type", "checkbox"]
				], [
					[8, "id", 0],
					[8, "value", 0],
					[8, "checked", 0],
					[1, "disabled", 0]
				], [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.setValue(e.context.$implicit.value) && n), n
				}), null, null)), (e()(), n.pb(5, 0, null, null, 0, "div", [
					["class", "control_indicator"]
				], null, null, null, null, null)), (e()(), n.Hb(6, null, [" ", " "]))], (function(e, l) {
					var t = l.component,
						n = e(l, 3, 0, !0 === t.field.disabled, !t.field.disabled);
					e(l, 2, 0, "control control-checkbox font13", n)
				}), (function(e, l) {
					var t = l.component;
					e(l, 4, 0, l.context.$implicit.value, l.context.$implicit.value, t.field.value && t.field.value.includes(l.context.$implicit.value), !0 === t.field.disabled || void 0), e(l, 6, 0, l.context.$implicit.label)
				}))
			}

			function C(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "label", [
					["class", "inputLabel"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					disabled: 0
				}), (e()(), n.pb(3, 0, null, null, 0, "input", [
					["required", ""],
					["type", "text"]
				], [
					[8, "value", 0],
					[1, "required", 0]
				], [
					[null, "change"],
					[null, "keyup.enter"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "change" === l && (n = !1 !== i.inputVal(t) && n), "keyup.enter" === l && (n = !1 !== i.validInput(t) && n), n
				}), null, null)), (e()(), n.pb(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), n.Hb(5, null, [" ", " ", " "]))], (function(e, l) {
					var t = e(l, 2, 0, !0 === l.component.data.disabled);
					e(l, 1, 0, "inputLabel", t)
				}), (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.data.value ? t.data.value : "", !0 === t.data.required), e(l, 5, 0, t.data.label, t.data.required ? "*" : "")
				}))
			}

			function x(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " required "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.data.label)
				}))
			}

			function w(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " required "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.label)
				}))
			}

			function k(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.message)
				}))
			}

			function S(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.customError.message)
				}))
			}

			function O(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 24, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 1).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 1).onReset() && i), i
				}), null, null)), n.ob(1, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(3, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(4, 0, null, null, 9, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], null, null, null, null)), n.ob(5, 212992, null, 0, d.k, [
					[3, d.c],
					[8, null],
					[8, null]
				], {
					name: [0, "name"]
				}, null), n.Eb(2048, null, d.c, null, [d.k]), n.ob(7, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(8, 0, null, null, 1, "label", [
					["class", "form-check-label font13"]
				], null, null, null, null, null)), (e()(), n.Hb(9, null, [" ", " ", " "])), (e()(), n.pb(10, 0, null, null, 3, "div", [
					["class", "check2 fieldMarTop"]
				], null, null, null, null, null)), n.ob(11, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, y)), n.ob(13, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.pb(14, 0, null, null, 4, "div", [], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, C)), n.ob(16, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, x)), n.ob(18, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, w)), n.ob(20, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, k)), n.ob(22, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, S)), n.ob(24, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form), e(l, 5, 0, t.field.name), e(l, 11, 0, t.field.layout), e(l, 13, 0, t.field.options), e(l, 16, 0, t.enable), e(l, 18, 0, t.showError), e(l, 20, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError("required")), e(l, 22, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError(t.field.error)), e(l, 24, 0, t.field.customError && t.field.customError.error)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, n.zb(l, 3).ngClassUntouched, n.zb(l, 3).ngClassTouched, n.zb(l, 3).ngClassPristine, n.zb(l, 3).ngClassDirty, n.zb(l, 3).ngClassValid, n.zb(l, 3).ngClassInvalid, n.zb(l, 3).ngClassPending), e(l, 4, 0, n.zb(l, 7).ngClassUntouched, n.zb(l, 7).ngClassTouched, n.zb(l, 7).ngClassPristine, n.zb(l, 7).ngClassDirty, n.zb(l, 7).ngClassValid, n.zb(l, 7).ngClassInvalid, n.zb(l, 7).ngClassPending), e(l, 9, 0, t.field.label, "" === t.field.label ? "" : t.field.required ? "*" : "")
				}))
			}
			class P {
				constructor() {
					this.enable = !1, this.reason = "", this.showError = !1, this.data = {}, this.field = {}, this.response = new n.m
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngAfterViewInit() {
					this.setVal(this.field.value)
				}
				ngOnChanges(e) {
					e && setTimeout(() => {
						this.setVal(this.field.value)
					}, 500)
				}
				setVal(e) {
					"other" === e ? (this.enable = !0, this.data = {
						type: "text",
						name: "reason",
						label: "Reason",
						value: "",
						required: !0
					}, this.form.controls[this.field.name].setValue(e), this.form.controls[this.field.name].setValidators([d.y.required, d.y.minLength(10)])) : (this.enable = !1, this.showError = !1, this.form.controls[this.field.name].clearValidators(), this.form.controls[this.field.name].setValue(e)), "detail_type" === this.field.name ? !1 === e ? (this.field.emitValue({
						name: "marks",
						pattern: "^[0-9][.][0-9][0-9]?$|^[0-9]$|^10$",
						secLabel: "CGPA"
					}), this.form.controls.marks.setValidators([d.y.pattern("^[0-9][.][0-9][0-9]?$|^[0-9]$|^10$"), d.y.required]), this.form.controls.marks.setValue("")) : !0 === e && (this.field.emitValue({
						name: "marks",
						pattern: "^[1-9][0-9]?[.][0-9][0-9]?$|^[1-9][0-9]$|^100$",
						secLabel: "Percentage"
					}), this.form.controls.marks.setValidators([d.y.pattern("^[1-9][0-9]?[.][0-9][0-9]?$|^[1-9][0-9]$|^100$"), d.y.required]), this.form.controls.marks.setValue("")) : "not" === this.field.name && ("app" === e ? (this.field.emitValue({
						key: "Applicable",
						value: !1,
						label: "Applicable"
					}), this.form.controls.detail_type.setValidators([d.y.pattern("^(true|false)$"), d.y.required]), this.form.controls.detail_type.setValue("")) : "notapp" === e && (this.field.emitValue({
						key: "Not Applicable",
						value: !0,
						label: "Not Applicable"
					}), this.form.controls.detail_type.setValidators(null), this.form.controls.detail_type.setValue(""), this.form.controls.marks.setValidators([d.y.pattern("NA"), d.y.required]), this.form.controls.marks.setValue("NA")))
				}
				validText(e) {
					this.showError = 0 === e.target.value.length
				}
				validInput(e) {
					this.showError = "" === e.target.value
				}
				validateText(e) {
					let l = new RegExp("/^[a-zA-z]+$/");
					e.target.value < 3 || l.test(e.target.value) ? this.showError = !0 : (this.form.controls[this.field.name].setErrors(null), this.form.controls[this.field.name].clearValidators(), this.showError = !1)
				}
				emitCall(e) {
					let l = this.field.copy_ids && this.field.copy_ids.length ? this.field.copy_ids : [];
					this.field && "yes" === e && this.field.copy ? (this.field.copy_ids[0].copyValue = !0, this.response.emit({
						data: l && l.length ? l : [],
						value: e,
						copyValue: !0
					})) : this.field && "no" === e && this.field.copy && (this.field.copy_ids[0].copyValue = !1, this.response.emit({
						data: l && l.length ? l : [],
						value: e,
						copyValue: !1
					}))
				}
			}
			var M = n.nb({
				encapsulation: 0,
				styles: [c],
				data: {}
			});

			function I(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 9, "div", [
					["class", "form-check rdlabel"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.pb(2, 0, null, null, 7, "label", [], null, null, null, null, null)), n.ob(3, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(4, {
					disabled: 0,
					cP: 1,
					disableColor: 2
				}), (e()(), n.pb(5, 0, null, null, 2, "input", [
					["class", "float-left"],
					["type", "radio"]
				], [
					[8, "name", 0],
					[8, "value", 0],
					[8, "checked", 0],
					[1, "disabled", 0],
					[1, "required", 0]
				], [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "click" === l && (i.setVal(e.context.$implicit.value), n = !1 !== i.emitCall(e.context.$implicit.value) && n), n
				}), null, null)), n.ob(6, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(7, {
					disabled: 0
				}), (e()(), n.pb(8, 0, null, null, 1, "span", [
					["class", "radiolabelopt float-left"]
				], null, null, null, null, null)), (e()(), n.Hb(9, null, [" ", " "]))], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field.radioStyle ? t.field.radioStyle : "");
					var n = e(l, 4, 0, !0 === t.field.disabled, !t.field.disabled, !0 === t.field.disabled);
					e(l, 3, 0, n);
					var i = e(l, 7, 0, !0 === t.field.disabled);
					e(l, 6, 0, "float-left", i)
				}), (function(e, l) {
					var t = l.component;
					e(l, 5, 0, t.field.name, t.field.value ? t.field.value : "", l.context.$implicit.value === t.field.value, !0 === t.field.disabled || void 0, !0 === t.field.required), e(l, 9, 0, l.context.$implicit.label)
				}))
			}

			function D(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " required "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.label)
				}))
			}

			function N(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.message)
				}))
			}

			function z(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.customError.message)
				}))
			}

			function E(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 10, "label", [
					["class", "inputLabel"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					disabled: 0
				}), (e()(), n.pb(3, 0, null, null, 5, "input", [
					["type", "text"]
				], [
					[8, "value", 0],
					[1, "required", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "change"],
					[null, "focus"],
					[null, "keyup.enter"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "input" === l && (i = !1 !== n.zb(e, 4)._handleInput(t.target.value) && i), "blur" === l && (i = !1 !== n.zb(e, 4).onTouched() && i), "compositionstart" === l && (i = !1 !== n.zb(e, 4)._compositionStart() && i), "compositionend" === l && (i = !1 !== n.zb(e, 4)._compositionEnd(t.target.value) && i), "change" === l && (i = !1 !== o.validateText(t) && i), "focus" === l && (i = !1 !== o.validText(t) && i), "keyup.enter" === l && (i = !1 !== o.validInput(t) && i), i
				}), null, null)), n.ob(4, 16384, null, 0, d.d, [n.C, n.k, [2, d.a]], null, null), n.Eb(1024, null, d.o, (function(e) {
					return [e]
				}), [d.d]), n.ob(6, 671744, null, 0, d.h, [
					[3, d.c],
					[8, null],
					[8, null],
					[6, d.o],
					[2, d.D]
				], {
					name: [0, "name"]
				}, null), n.Eb(2048, null, d.p, null, [d.h]), n.ob(8, 16384, null, 0, d.q, [
					[4, d.p]
				], null, null), (e()(), n.pb(9, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), n.Hb(10, null, [" ", " ", " "]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.data.disabled);
					e(l, 1, 0, "inputLabel", n), e(l, 6, 0, t.field.name)
				}), (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.data.value ? t.data.value : "", !0 === t.data.required, n.zb(l, 8).ngClassUntouched, n.zb(l, 8).ngClassTouched, n.zb(l, 8).ngClassPristine, n.zb(l, 8).ngClassDirty, n.zb(l, 8).ngClassValid, n.zb(l, 8).ngClassInvalid, n.zb(l, 8).ngClassPending), e(l, 10, 0, t.data.label, t.data.required ? "*" : "")
				}))
			}

			function T(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, [" Reason required "]))], null, null)
			}

			function A(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 19, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 1).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 1).onReset() && i), i
				}), null, null)), n.ob(1, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(3, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(4, 0, null, null, 3, "label", [
					["class", "form-check-label font13"]
				], null, null, null, null, null)), n.ob(5, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(6, {
					disableColor: 0
				}), (e()(), n.Hb(7, null, [" ", " ", " "])), (e()(), n.pb(8, 0, null, null, 5, "div", [
					["class", "fieldMarTop"]
				], null, null, null, null, null)), n.ob(9, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(10, {
					flexColumn: 0,
					radioOptC: 1
				}), n.ob(11, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, I)), n.ob(13, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, D)), n.ob(15, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, N)), n.ob(17, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, z)), n.ob(19, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(20, 0, null, null, 7, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 21).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 21).onReset() && i), i
				}), null, null)), n.ob(21, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(23, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.gb(16777216, null, null, 1, null, E)), n.ob(25, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, T)), n.ob(27, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form);
					var n = e(l, 6, 0, !0 === t.field.disabled);
					e(l, 5, 0, "form-check-label font13", n);
					var i = e(l, 10, 0, !0 === t.radioType, !1 === t.radioType);
					e(l, 9, 0, "fieldMarTop", i), e(l, 11, 0, t.field.layout), e(l, 13, 0, t.field.options), e(l, 15, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError("required") && !t.showError), e(l, 17, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError(t.field.error) && !t.showError), e(l, 19, 0, t.field.customError && t.field.customError.error), e(l, 21, 0, t.form), e(l, 25, 0, t.enable), e(l, 27, 0, t.showError)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, n.zb(l, 3).ngClassUntouched, n.zb(l, 3).ngClassTouched, n.zb(l, 3).ngClassPristine, n.zb(l, 3).ngClassDirty, n.zb(l, 3).ngClassValid, n.zb(l, 3).ngClassInvalid, n.zb(l, 3).ngClassPending), e(l, 7, 0, t.field.label, "detail_type" === t.field.name || "not" === t.field.name ? "" : t.field.required ? "*" : ""), e(l, 20, 0, n.zb(l, 23).ngClassUntouched, n.zb(l, 23).ngClassTouched, n.zb(l, 23).ngClassPristine, n.zb(l, 23).ngClassDirty, n.zb(l, 23).ngClassValid, n.zb(l, 23).ngClassInvalid, n.zb(l, 23).ngClassPending)
				}))
			}
			var L = t("dzoM");
			class J {
				constructor(e) {
					this.serv = e, this.field = {}, this.infoFileFormat = new n.m, this.val = "icon-person"
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngOnInit() {
					this.field.answer && (this.field.value = this.field.answer, this.field.customError.error = !1, this.form.controls[this.field.name].setValue(this.field.answer)), this.field.value && (this.field.value.media_type.includes("audio") || this.field.value.media_type.includes("video") || this.field.value.media_type.includes("image") || this.field.value.media_type.includes("pdf")) && (this.download = !0)
				}
				ngOnChanges(e) {
					e && setTimeout(() => {
						this.setVal(this.field.value)
					}, 500)
				}
				setVal(e) {
					this.form.controls[this.field.name].setValue(e)
				}
				onUploadImg(e) {
					if (e && e.target && e.target.files && e.target.files.length) {
						const l = this.checkFileValid(e.target.files[0]);
						if ("fileformat-notsupported" === l) this.errorMessage = `Selected file [${e.target.files[0].name}] format is not supported for upload`, this.field.customError.error = !0, this.field.customError.message = "Upload a file with valid file format";
						else if ("filesize-notsupported" === l) this.errorMessage = `Selected file [${e.target.files[0].name}] size is not supported for upload`, this.field.customError.error = !0, this.field.customError.message = "Upload a file less than " + this.field.file_size / Math.pow(10, 6) + "MB";
						else {
							let l;
							this.errorMessage = null, l = {
								source: URL.createObjectURL(e.target.files[0]),
								file: e.target.files[0],
								type: e.target.files[0].type,
								media_type: this.field.upload_type ? this.field.upload_type : e.target.files[0].type.split("/")[0],
								data: "input",
								name: e.target.files[0].name,
								size: e.target.files[0].size,
								url: URL.createObjectURL(e.target.files[0])
							}, (l.media_type.includes("audio") || l.media_type.includes("video") || l.media_type.includes("image") || l.media_type.includes("pdf")) && (this.download = !0), this.field.value = l, this.field.customError.error = !1, this.form.controls[this.field.name].setValue(l)
						}
					}
				}
				checkFileValid(e) {
					if (this.field && this.field.file_type && this.field.allow_type) {
						let l;
						return Object.keys(this.field.file_type).forEach(e => {
							this.field.file_type[e] && (l = !0)
						}), this.field.file_type.audio && (e.type.includes("mp3") || e.type.includes("ogg") || e.type.includes("wav") || e.type.includes("mpeg") || e.type.includes("audio")) ? e.size <= this.field.file_size ? (this.field.upload_type = "audio", "supported") : (this.field.value = null, "filesize-notsupported") : this.field.file_type.video && (e.type.includes("mp4") || e.type.includes("3gp") || e.type.includes("ogg") || e.type.includes("webm") || e.type.includes("video")) ? e.size <= this.field.file_size ? (this.field.upload_type = "video", "supported") : (this.field.value = null, "filesize-notsupported") : this.field.file_type.document && (e.type.includes("rtf") || e.type.includes(".document") || e.type.includes("plain") || e.type.includes("msword") || e.type.includes(".text")) ? e.size <= this.field.file_size ? (this.field.upload_type = "document", "supported") : (this.field.value = null, "filesize-notsupported") : this.field.file_type.presentation && (e.type.includes("powerpoint") || e.type.includes("presentation")) ? e.size <= this.field.file_size ? (this.field.upload_type = "presentation", "supported") : (this.field.value = null, "filesize-notsupported") : this.field.file_type.spreadsheet && (e.type.includes("excel") || e.type.includes("sheet") || e.type.includes("csv")) ? e.size <= this.field.file_size ? (this.field.upload_type = "spreadsheet", "supported") : (this.field.value = null, "filesize-notsupported") : this.field.file_type.pdf && e.type.includes("pdf") ? e.size <= this.field.file_size ? (this.field.upload_type = "pdf", "supported") : (this.field.value = null, "filesize-notsupported") : this.field.file_type.image && (e.type.includes("png") || e.type.includes("gif") || e.type.includes("jpeg") || e.type.includes("tiff") || e.type.includes("svg") || e.type.includes("webp") || e.type.includes("icon")) ? e.size <= this.field.file_size ? (this.field.upload_type = "image", "supported") : (this.field.value = null, "filesize-notsupported") : l ? (this.field.value = null, "fileformat-notsupported") : e.size <= this.field.file_size ? (e.type.includes("pdf") && (this.field.upload_type = "pdf"), "supported") : (this.field.value = null, "filesize-notsupported")
					}
					return e.size <= this.field.file_size ? (e.type.includes("pdf") && (this.field.upload_type = "pdf"), "supported") : (this.field.value = null, "filesize-notsupported")
				}
				viewFile() {
					this.field.value && this.field.value.source ? this.viewLink = this.field.value.source : this.field.answer && this.field.answer.source && (this.viewLink = this.field.answer.source);
					const e = document.createElement("a");
					document.body.appendChild(e), e.href = this.viewLink, e.target = "_blank", e.click(), document.body.removeChild(e)
				}
				deleteFile() {
					document.getElementById("uploadMedia-" + this.field.cf_id).value = "", this.field.value && (this.field.value = null), this.field.answer && (this.field.answer = null), this.form.controls[this.field.name].setValue(null)
				}
				openFileInfo() {
					this.infoFileFormat.emit(this.field)
				}
			}
			var F = n.nb({
				encapsulation: 2,
				styles: [L.a],
				data: {}
			});

			function j(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "info-icon font12"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.openFileInfo() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["?"]))], null, null)
			}

			function R(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Upload a file"]))], null, null)
			}

			function H(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Replace the file"]))], null, null)
			}

			function B(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Replace the file"]))], null, null)
			}

			function V(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "error-message"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.errorMessage)
				}))
			}

			function q(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.value.name)
				}))
			}

			function K(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "link"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.viewFile() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, [" View "]))], null, null)
			}

			function U(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "radioOptC"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, K)), n.ob(2, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(3, 0, null, null, 1, "div", [
					["class", "link"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.deleteFile() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Delete"]))], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.download && t.field.value && !t.field.value.date_modified)
				}), null)
			}

			function G(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, U)), n.ob(2, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.field.value.file || t.field.answer.file)
				}), null)
			}

			function W(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "error-message"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " required "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.label)
				}))
			}

			function $(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "error-message"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.message)
				}))
			}

			function Q(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "error-message"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.customError.message)
				}))
			}

			function Y(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 32, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 1).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 1).onReset() && i), i
				}), null, null)), n.ob(1, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(3, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(4, 0, null, null, 4, "div", [
					["class", "header-container"]
				], null, null, null, null, null)), (e()(), n.pb(5, 0, null, null, 1, "label", [], null, null, null, null, null)), (e()(), n.Hb(6, null, [" ", " ", " "])), (e()(), n.gb(16777216, null, null, 1, null, j)), n.ob(8, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(9, 0, null, null, 23, "div", [], null, null, null, null, null)), (e()(), n.pb(10, 0, null, null, 9, "div", [
					["class", "upload-box"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var i = !0;
					return "click" === l && (i = !1 !== n.zb(e, 20).click() && i), i
				}), null, null)), n.ob(11, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(12, {
					"disabled-box": 0
				}), (e()(), n.pb(13, 0, null, null, 0, "i", [
					["class", "icon-download-1 font20"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, R)), n.ob(15, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, H)), n.ob(17, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, B)), n.ob(19, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(20, 0, [
					["imguploadFile", 1]
				], null, 0, "input", [
					["class", "hide_button"],
					["max-size", "1000000000"],
					["type", "file"]
				], [
					[8, "id", 0],
					[8, "disabled", 0]
				], [
					[null, "change"]
				], (function(e, l, t) {
					var n = !0;
					return "change" === l && (n = !1 !== e.component.onUploadImg(t) && n), n
				}), null, null)), (e()(), n.gb(16777216, null, null, 1, null, V)), n.ob(22, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, q)), n.ob(24, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, G)), n.ob(26, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, W)), n.ob(28, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, $)), n.ob(30, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Q)), n.ob(32, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form), e(l, 8, 0, t.field.allow_type);
					var n = e(l, 12, 0, t.field.disabled);
					e(l, 11, 0, "upload-box", n), e(l, 15, 0, !t.field.value && !t.field.answer), e(l, 17, 0, t.field.value && !t.field.answer), e(l, 19, 0, t.field.answer), e(l, 22, 0, t.errorMessage), e(l, 24, 0, t.field.value), e(l, 26, 0, !t.field.disabled && (t.field.value || t.field.answer)), e(l, 28, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError("required")), e(l, 30, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError(t.field.error)), e(l, 32, 0, t.field.customError && t.field.customError.error)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, n.zb(l, 3).ngClassUntouched, n.zb(l, 3).ngClassTouched, n.zb(l, 3).ngClassPristine, n.zb(l, 3).ngClassDirty, n.zb(l, 3).ngClassValid, n.zb(l, 3).ngClassInvalid, n.zb(l, 3).ngClassPending), e(l, 6, 0, t.field.label, t.field.required ? "*" : ""), e(l, 20, 0, n.rb(1, "", "uploadMedia-" + t.field.cf_id, ""), t.field.disabled)
				}))
			}
			class Z {
				constructor() {
					this.field = {}, this.termsChecked = new n.m, this.value = []
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngOnInit() {}
				checked(e) {
					if (e.target.checked) {
						const e = (new Date).toISOString();
						this.field.answer = e, this.form.controls[this.field.name].setValue(e)
					} else {
						const e = null;
						this.field.answer = e, this.form.controls[this.field.name].setValue(e)
					}
					this.termsChecked.emit(e.target.checked)
				}
			}
			var X = n.nb({
				encapsulation: 0,
				styles: [c],
				data: {}
			});

			function ee(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "policy-box"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "div", [
					["class", "terms-text"]
				], [
					[8, "innerHTML", 1]
				], null, null, null, null))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.question)
				}))
			}

			function le(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "agree-text"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "input", [
					["type", "checkbox"]
				], null, [
					[null, "change"]
				], (function(e, l, t) {
					var n = !0;
					return "change" === l && (n = !1 !== e.component.checked(t) && n), n
				}), null, null)), (e()(), n.pb(2, 0, null, null, 1, "a", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, [" * I agree to the terms and conditions "]))], null, null)
			}

			function te(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "agree-link"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "input", [
					["type", "checkbox"]
				], null, [
					[null, "change"]
				], (function(e, l, t) {
					var n = !0;
					return "change" === l && (n = !1 !== e.component.checked(t) && n), n
				}), null, null)), (e()(), n.Hb(-1, null, [" * I agree to the "])), (e()(), n.pb(3, 0, null, null, 1, "a", [
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), (e()(), n.Hb(-1, null, [" terms and conditions "]))], null, (function(e, l) {
					e(l, 3, 0, n.rb(1, "", l.component.field.question_link, ""))
				}))
			}

			function ne(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 11, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 1).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 1).onReset() && i), i
				}), null, null)), n.ob(1, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(3, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(4, 0, null, null, 1, "label", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, [" Terms & Conditions *"])), (e()(), n.gb(16777216, null, null, 1, null, ee)), n.ob(7, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, le)), n.ob(9, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, te)), n.ob(11, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form), e(l, 7, 0, "text" === t.field.policy_type), e(l, 9, 0, "text" === t.field.policy_type), e(l, 11, 0, "link" === t.field.policy_type)
				}), (function(e, l) {
					e(l, 0, 0, n.zb(l, 3).ngClassUntouched, n.zb(l, 3).ngClassTouched, n.zb(l, 3).ngClassPristine, n.zb(l, 3).ngClassDirty, n.zb(l, 3).ngClassValid, n.zb(l, 3).ngClassInvalid, n.zb(l, 3).ngClassPending)
				}))
			}

			function ie(e) {
				return n.Jb(0, [(e()(), n.gb(16777216, null, null, 1, null, ne)), n.ob(1, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					e(l, 1, 0, !l.component.field.profile)
				}), null)
			}
			class oe {
				constructor() {
					this.setvalue = new n.m, this.termschecked = new n.m, this.infoFileFormat = new n.m, this.radioResponse = new n.m, this.isCart = "/cart" === window.location.pathname, this.path = window.location.pathname
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngOnInit() {
					this.radioType = !(!this.path || !this.path.includes("profile"))
				}
				selectedvalue(e) {
					this.setvalue.emit(e)
				}
				termsChecked(e) {
					this.termschecked.emit(e)
				}
				fileFormatInfos(e) {
					this.infoFileFormat.emit(e)
				}
				radio(e) {
					this.radioResponse.emit(e)
				}
			}
			var ae = n.nb({
				encapsulation: 0,
				styles: [
					[".formElements[_ngcontent-%COMP%]{padding:10px 0}label[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.cartpad[_ngcontent-%COMP%]{padding-top:0}"]
				],
				data: {}
			});

			function se(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "textbox", [], null, null, null, s.b, s.a)), n.ob(1, 4833280, null, 0, r.a, [u.a], {
					field: [0, "field"],
					form: [1, "form"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field, t.form)
				}), null)
			}

			function re(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "dropdown", [], null, [
					[null, "selectedvalue"]
				], (function(e, l, t) {
					var n = !0;
					return "selectedvalue" === l && (n = !1 !== e.component.selectedvalue(t) && n), n
				}), f, h)), n.ob(1, 4243456, null, 0, p, [], {
					field: [0, "field"],
					value: [1, "value"],
					form: [2, "form"]
				}, {
					selectedvalue: "selectedvalue"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field, t.field.value, t.form)
				}), null)
			}

			function ue(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "checkbox", [], null, null, null, O, _)), n.ob(1, 4767744, null, 0, v, [], {
					field: [0, "field"],
					form: [1, "form"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field, t.form)
				}), null)
			}

			function ce(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "radio", [], null, [
					[null, "response"]
				], (function(e, l, t) {
					var n = !0;
					return "response" === l && (n = !1 !== e.component.radio(t) && n), n
				}), A, M)), n.ob(1, 4767744, null, 0, P, [], {
					field: [0, "field"],
					form: [1, "form"],
					radioType: [2, "radioType"]
				}, {
					response: "response"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field, t.form, t.radioType)
				}), null)
			}

			function de(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "file-upload", [], null, [
					[null, "infoFileFormat"]
				], (function(e, l, t) {
					var n = !0;
					return "infoFileFormat" === l && (n = !1 !== e.component.fileFormatInfos(t) && n), n
				}), Y, F)), n.ob(1, 638976, null, 0, J, [u.a], {
					field: [0, "field"],
					form: [1, "form"]
				}, {
					infoFileFormat: "infoFileFormat"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field, t.form)
				}), null)
			}

			function pe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "policy", [], null, [
					[null, "termsChecked"]
				], (function(e, l, t) {
					var n = !0;
					return "termsChecked" === l && (n = !1 !== e.component.termsChecked(t) && n), n
				}), ie, X)), n.ob(1, 114688, null, 0, Z, [], {
					field: [0, "field"],
					form: [1, "form"]
				}, {
					termsChecked: "termsChecked"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field, t.form)
				}), null)
			}

			function he(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 20, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0;
					return "submit" === l && (i = !1 !== n.zb(e, 1).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 1).onReset() && i), i
				}), null, null)), n.ob(1, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), n.Eb(2048, null, d.c, null, [d.j]), n.ob(3, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.pb(4, 0, null, null, 16, "div", [], null, null, null, null, null)), n.ob(5, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(6, {
					cartpad: 0,
					formElements: 1
				}), n.ob(7, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.ob(8, 16384, null, 0, i.q, [], {
					ngSwitch: [0, "ngSwitch"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, se)), n.ob(10, 278528, null, 0, i.r, [n.N, n.K, i.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, re)), n.ob(12, 278528, null, 0, i.r, [n.N, n.K, i.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ue)), n.ob(14, 278528, null, 0, i.r, [n.N, n.K, i.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ce)), n.ob(16, 278528, null, 0, i.r, [n.N, n.K, i.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, de)), n.ob(18, 278528, null, 0, i.r, [n.N, n.K, i.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, pe)), n.ob(20, 278528, null, 0, i.r, [n.N, n.K, i.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form);
					var n = e(l, 6, 0, t.isCart, !t.field.copyHide);
					e(l, 5, 0, n), e(l, 7, 0, t.field && t.field.elementStyle ? t.field.elementStyle : ""), e(l, 8, 0, !0), e(l, 10, 0, "text" === t.field.type || "longanswer" === t.field.type || "shortanswer" === t.field.type || "password" === t.field.type || "dob" === t.field.type || "phone" === t.field.type || "number" === t.field.type || "resume" === t.field.type || "file" === t.field.type), e(l, 12, 0, "dropdown" === t.field.type), e(l, 14, 0, "checkbox" === t.field.type), e(l, 16, 0, "radio" === t.field.type || "radiobutton" === t.field.type), e(l, 18, 0, "file_upload" === t.field.type), e(l, 20, 0, "policy" === t.field.type)
				}), (function(e, l) {
					e(l, 0, 0, n.zb(l, 3).ngClassUntouched, n.zb(l, 3).ngClassTouched, n.zb(l, 3).ngClassPristine, n.zb(l, 3).ngClassDirty, n.zb(l, 3).ngClassValid, n.zb(l, 3).ngClassInvalid, n.zb(l, 3).ngClassPending)
				}))
			}

			function ge(e) {
				return n.Jb(0, [(e()(), n.gb(16777216, null, null, 1, null, he)), n.ob(1, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field && t.field.type)
				}), null)
			}
			t("GQrn"), t.d(l, "a", (function() {
				return be
			})), t.d(l, "b", (function() {
				return Se
			}));
			var be = n.nb({
				encapsulation: 0,
				styles: [
					[".submitBtn[_ngcontent-%COMP%]{font-weight:700;height:40px;font-size:16px}.formSubmit[_ngcontent-%COMP%]{padding:0 50px;background:var(--one);color:var(--white);border:none;cursor:pointer;outline:0}.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.7}.borderClass[_ngcontent-%COMP%]{border-radius:2px;border:1px solid}.btnalign[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.btn[_ngcontent-%COMP%]{height:40px;min-width:140px;margin:25px 10px}.btn_multiple[_ngcontent-%COMP%]{margin-top:0}.btnLayout[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.hidden[_ngcontent-%COMP%]{display:none}.width100per[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:480px){.btn[_ngcontent-%COMP%]{height:40px;min-width:108px;margin:25px 10px}.mobileBtn[_ngcontent-%COMP%]{margin:10px}}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column}"]
				],
				data: {}
			});

			function me(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "btn mobileBtn"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.pb(2, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.btnType(t) && n), n
				}), o.b, o.a)), n.ob(3, 573440, null, 0, a.a, [n.C], {
					disable: [0, "disable"],
					loading: [1, "loading"],
					btnProperties: [2, "btnProperties"],
					padding: [3, "padding"],
					id: [4, "id"]
				}, {
					but: "but"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.btnContStyle), e(l, 3, 0, !t.form.valid, l.context.$implicit.loading, l.context.$implicit, t.padding, l.context.$implicit.type + l.context.$implicit.btnName + l.context.index)
				}), null)
			}

			function fe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, me)), n.ob(3, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.btnStyle), e(l, 3, 0, t.buttonList)
				}), null)
			}

			function ve(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.pb(2, 0, null, null, 1, "field-builder", [], null, [
					[null, "termschecked"],
					[null, "radioResponse"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "termschecked" === l && (n = !1 !== i.termschecked(t) && n), "radioResponse" === l && (n = !1 !== i.radio(t) && n), n
				}), ge, ae)), n.ob(3, 114688, null, 0, oe, [], {
					field: [0, "field"],
					form: [1, "form"]
				}, {
					termschecked: "termschecked",
					radioResponse: "radioResponse"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.rowStyle), e(l, 3, 0, l.context.$implicit, t.form)
				}), null)
			}

			function _e(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, ve)), n.ob(2, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(e, l) {
					e(l, 2, 0, l.context.$implicit)
				}), null)
			}

			function ye(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "])), (e()(), n.gb(16777216, null, null, 1, null, _e)), n.ob(3, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(e, l) {
					e(l, 3, 0, l.component.fields)
				}), (function(e, l) {
					e(l, 1, 0, l.component.activeBranch)
				}))
			}

			function Ce(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(2, {
					width100per: 0
				}), n.ob(3, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.pb(4, 0, null, null, 1, "field-builder", [], null, [
					[null, "setvalue"],
					[null, "termschecked"],
					[null, "infoFileFormat"],
					[null, "radioResponse"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "setvalue" === l && (n = !1 !== i.selectedValue(t) && n), "termschecked" === l && (n = !1 !== i.termschecked(t) && n), "infoFileFormat" === l && (n = !1 !== i.fileFormatInfos(t) && n), "radioResponse" === l && (n = !1 !== i.radioResponse(t) && n), n
				}), ge, ae)), n.ob(5, 114688, null, 0, oe, [], {
					field: [0, "field"],
					form: [1, "form"],
					origin: [2, "origin"]
				}, {
					setvalue: "setvalue",
					termschecked: "termschecked",
					infoFileFormat: "infoFileFormat",
					radioResponse: "radioResponse"
				})], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.rowStyle);
					e(l, 1, 0, n), e(l, 3, 0, t.rowStyle), e(l, 5, 0, l.context.$implicit, t.form, t.origin)
				}), null)
			}

			function xe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, null, null, null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, Ce)), n.ob(2, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.gb(0, null, null, 0))], (function(e, l) {
					e(l, 2, 0, l.component.fields)
				}), null)
			}

			function we(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "btn"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.pb(2, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.btnType(t) && n), n
				}), o.b, o.a)), n.ob(3, 573440, null, 0, a.a, [n.C], {
					disable: [0, "disable"],
					loading: [1, "loading"],
					btnProperties: [2, "btnProperties"],
					padding: [3, "padding"],
					icons: [4, "icons"],
					id: [5, "id"]
				}, {
					but: "but"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.btnContStyle), e(l, 3, 0, !t.form.valid && 0 !== l.context.index, l.context.$implicit.loading, l.context.$implicit, t.padding, l.context.$implicit && l.context.$implicit.icons, l.context.$implicit.type + l.context.$implicit.btnName + l.context.index)
				}), null)
			}

			function ke(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, we)), n.ob(3, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.btnStyle), e(l, 3, 0, t.buttonList)
				}), null)
			}

			function Se(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 16, "div", [], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 15, "form", [
					["class", "form-horizontal"],
					["novalidate", ""]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngSubmit"],
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "submit" === l && (i = !1 !== n.zb(e, 6).onSubmit(t) && i), "reset" === l && (i = !1 !== n.zb(e, 6).onReset() && i), "ngSubmit" === l && (i = !1 !== o.onSubmits(o.form) && i), i
				}), null, null)), n.ob(2, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(3, {
					btnLayout: 0
				}), n.ob(4, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.ob(5, 16384, null, 0, d.B, [], null, null), n.ob(6, 540672, null, 0, d.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, {
					ngSubmit: "ngSubmit"
				}), n.Eb(2048, null, d.c, null, [d.j]), n.ob(8, 16384, null, 0, d.r, [
					[4, d.c]
				], null, null), (e()(), n.gb(16777216, null, null, 1, null, fe)), n.ob(10, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ye)), n.ob(12, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, xe)), n.ob(14, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ke)), n.ob(16, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 3, 0, "end" === t.layout);
					e(l, 2, 0, "form-horizontal", n), e(l, 4, 0, t.ly), e(l, 6, 0, t.form), e(l, 10, 0, "top" === t.buttonPosition), e(l, 12, 0, t.formLength && t.activeBranch), e(l, 14, 0, !t.formLength && !t.activeBranch), e(l, 16, 0, "bottom" === t.buttonPosition)
				}), (function(e, l) {
					e(l, 1, 0, n.zb(l, 8).ngClassUntouched, n.zb(l, 8).ngClassTouched, n.zb(l, 8).ngClassPristine, n.zb(l, 8).ngClassDirty, n.zb(l, 8).ngClassValid, n.zb(l, 8).ngClassInvalid, n.zb(l, 8).ngClassPending)
				}))
			}
		},
		"2L1b": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		"2tQG": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("8Y7J");
			class i {
				constructor() {
					this.publishTypes = [{
						type: "Learning Path",
						text: "Learning Paths",
						title: "My Learning Paths",
						params: "mylearningpaths"
					}, {
						type: "Course",
						text: "Courses",
						title: "My Courses",
						params: "mycourses"
					}, {
						type: "Practice",
						text: "Practices",
						title: "My Practices",
						params: "mypractices"
					}, {
						type: "Project",
						text: "Projects",
						title: "My Projects",
						params: "myprojects"
					}, {
						type: "Drive",
						text: "Drives",
						title: "My Drives",
						params: "mydrives"
					}, {
						type: "Hiring",
						text: "Hirings",
						title: "My Hirings",
						params: "myhirings"
					}, {
						type: "Contest",
						text: "Contests",
						title: "My Contests",
						params: "mycontests"
					}, {
						type: "Hackathon",
						text: "Hackathons",
						title: "My Hackathons",
						params: "myhackathons"
					}, {
						type: "Quiz",
						text: "Quizzes",
						title: "My Quizzes",
						params: "myquizzes"
					}, {
						type: "Exam",
						text: "Exams",
						title: "My Exams",
						params: "myexams"
					}, {
						type: "Assessment",
						text: "Assessments",
						title: "My Assessments",
						params: "myassessments"
					}, {
						type: "Lab",
						text: "Labs",
						title: "My Labs",
						params: "mylabs"
					}, {
						type: "Challenge",
						text: "Challenges",
						title: "My Challenges",
						params: "mychallenges"
					}, {
						type: "Test",
						text: "Tests",
						title: "My Tests",
						params: "mytests"
					}, {
						type: "Test",
						text: "Tests",
						title: "Job Preparatory",
						params: "mytests2"
					}]
				}
				getPublishTypeDetailsByType(e) {
					return this.publishTypes.filter(l => l.type === e)[0]
				}
				getAllPublishTypeDetails() {
					return this.publishTypes
				}
				getPublishTypeByParams(e) {
					let l = this.publishTypes.filter(l => l.params == e)[0];
					return l ? l.type : "Course"
				}
				getPublishParamsByType(e) {
					let l = this.publishTypes.filter(l => l.type.toLowerCase() === (e || "").toLowerCase())[0];
					return l ? l.params : "mycourses"
				}
			}
			i.ngInjectableDef = n.R({
				factory: function() {
					return new i
				},
				token: i,
				providedIn: "root"
			})
		},
		"3F6C": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		"3m+6": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("8Y7J");
			t("EFyh"), t("c14U"), t("4WDQ");
			class i {
				constructor(e, l, t, i) {
					this.loginservice = e, this.cartservice = l, this.router = t, this.globalservice = i, this.closable = !0, this.headRequired = !0, this.applychipsvalue = new n.m, this.removechipval = new n.m, this.removechip = new n.m, this.testForm = {}, this.apply = new n.m, this.dChange = new n.m, this.visibleChange = new n.m, this.sendKey = new n.m, this.submitDialog = new n.m, this.cancelNow = {
						multipleBtn: !1,
						btnName: "Clear",
						id: "dcancel",
						type: "dialog"
					}, this.applyNow = {
						multipleBtn: !1,
						btnName: "Apply",
						id: "dapply",
						type: "dialog"
					}, this.dyn = {}, this.schoolData = JSON.parse(localStorage.getItem("school_details"))
				}
				getScreenSize(e) {
					this.clientWidth = window.innerWidth
				}
				ngOnInit() {
					this.clientWidth = window.innerWidth, this.videoCourse && this.videoCourse.added && (this.addbtn.btnName = "Added"), this.globalservice.confirmFlag.subscribe(e => {
						e && (this.headRequired = !0, this.visible = !0, this.checkselect = !1, this.confiormLogOff = !0, this.closable = !1, this.contentData = "logoffConfiorm", this.header = "Already Logged in")
					})
				}
				close() {
					this.visible = !1, this.visibleChange.emit(this.visible)
				}
				removeOpt(e) {
					this.value.find(l => l.value === e).check = !1, this.removechip.emit(e)
				}
				applyChips() {
					this.value = this.value.filter(e => e.check), this.applychipsvalue.emit(this.value)
				}
				addTocart(e, l) {
					if (this.videoCourse && this.videoCourse.id)
						if ("cart" !== l || this.videoCourse.added) "details" === l && this.router.navigate(["course/product"], {
							queryParams: {
								id: this.videoCourse.id
							}
						});
						else {
							const e = {
								id: this.videoCourse.id,
								school_code: this.schoolData.school_code,
								googleToken: ""
							};
							this.globalservice.getCaptchaToken("addtoCart").then(l => {
								e.googleToken = l, this.cartservice.checkProductValidity(e).subscribe(e => {
									e && e.success && "InValid" === e.message && (this.videoCourse.productvalidity = "InValid"), this.videoCourse.productvalidity = e && "Valid" === e.message ? "Valid" : "InValid", this.videoCourse.productvalidity = e && "Valid" === e.message ? "Valid" : "InValid";
									const l = {
										id: this.videoCourse.id,
										list: this.videoCourse
									};
									this.videoCourse.added = !0, this.addbtn.btnName = "Added";
									let t = JSON.parse(localStorage.getItem("cart"));
									t = t && t.length ? t.map(e => e.id) : [], localStorage.getItem("token") && l.list && l.list.id && !t.includes(l.list.id) && this.cartservice.addCartItemToDB({
										id: l.list.id
									}).subscribe(e => {}), this.cartservice.storeLocal(l), this.cartservice.updateCartlength()
								})
							})
						}
				}
				getFilter(e, l) {
					this.dChange.emit({
						data: e,
						type: l
					})
				}
				applyDialog(e, l) {
					this.apply.emit(!!l), this.close()
				}
				emitKey(e) {
					this.sendKey.emit(e)
				}
				emitSubmit(e) {
					this.submitDialog.emit(e)
				}
				emitEmails() {
					this.submitDialog.emit(this.sharedEmails)
				}
				confiormLogedOff() {
					this.globalservice.confirmFlagLogOff.next(!0)
				}
			}
		},
		"4WDQ": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return p
			}));
			var n = t("mrSG"),
				i = t("IheW"),
				o = t("AytR"),
				a = t("2Vo4"),
				s = t("XNiG"),
				r = t("z6cu"),
				u = t("lJxs"),
				c = t("JIr8"),
				d = t("8Y7J");
			class p {
				constructor(e) {
					this.http = e, this.commonGrowl = new a.a({}), this.verifiedOtp = !1, this.api = o.a.HOST.link, this.abcSchool = ["2dc2d7d3-f10f-4f51-ba1e-148f87cd94d0", "158608c5-6868-4850-8baf-f1da3d041bb2"], this.timezones = [{
						label: "(GMT -12:00) Eniwetok, Kwajalein",
						value: "-12:00"
					}, {
						label: "(GMT -11:00) Midway Island, Samoa",
						value: "-11:00"
					}, {
						label: "(GMT -10:00) Hawaii",
						value: "-10:00"
					}, {
						label: "(GMT -9:30) Taiohae",
						value: "-09:30"
					}, {
						label: "(GMT -9:00) Alaska",
						value: "-09:00"
					}, {
						label: "(GMT -8:00) Pacific Time (US & Canada)",
						value: "-08:00"
					}, {
						label: "(GMT -7:00) Mountain Time (US & Canada)",
						value: "-07:00"
					}, {
						label: "(GMT -6:00) Central Time (US & Canada), Mexico City",
						value: "-06:00"
					}, {
						label: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",
						value: "-05:00"
					}, {
						label: "(GMT -4:30) Caracas",
						value: "-04:30"
					}, {
						label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
						value: "-04:00"
					}, {
						label: "(GMT -3:30) Newfoundland",
						value: "-03:30"
					}, {
						label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown",
						value: "-03:00"
					}, {
						label: "(GMT -2:00) Mid-Atlantic",
						value: "-02:00"
					}, {
						label: "(GMT -1:00) Azores, Cape Verde Islands",
						value: "-01:00"
					}, {
						label: "(GMT) Western Europe Time, London, Lisbon, Casablanca",
						value: "+00:00"
					}, {
						label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",
						value: "+01:00"
					}, {
						label: "(GMT +2:00) Kaliningrad, South Africa",
						value: "+02:00"
					}, {
						label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
						value: "+03:00"
					}, {
						label: "(GMT +3:30) Tehran",
						value: "+03:30"
					}, {
						label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",
						value: "+04:00"
					}, {
						label: "(GMT +4:30) Kabul",
						value: "+04:30"
					}, {
						label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
						value: "+05:00"
					}, {
						label: "(GMT +5:30) Mumbai, Kolkata, Chennai, New Delhi",
						value: "+05:30"
					}, {
						label: "(GMT +5:45) Kathmandu, Pokhara",
						value: "+05:45"
					}, {
						label: "(GMT +6:00) Almaty, Dhaka, Colombo",
						value: "+06:00"
					}, {
						label: "(GMT +6:30) Yangon, Mandalay",
						value: "+06:30"
					}, {
						label: "(GMT +7:00) Bangkok, Hanoi, Jakarta",
						value: "+07:00"
					}, {
						label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
						value: "+08:00"
					}, {
						label: "(GMT +8:45) Eucla",
						value: "+08:45"
					}, {
						label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
						value: "+09:00"
					}, {
						label: "(GMT +9:30) Adelaide, Darwin",
						value: "+09:30"
					}, {
						label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
						value: "+10:00"
					}, {
						label: "(GMT +10:30) Lord Howe Island",
						value: "+10:30"
					}, {
						label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
						value: "+11:00"
					}, {
						label: "(GMT +11:30) Norfolk Island",
						value: "+11:30"
					}, {
						label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
						value: "+12:00"
					}, {
						label: "(GMT +12:45) Chatham Islands",
						value: "+12:45"
					}, {
						label: "(GMT +13:00) Apia, Nukualofa",
						value: "+13:00"
					}, {
						label: "(GMT +14:00) Line Islands, Tokelau",
						value: "+14:00"
					}], this.symbols = ["\xa1", "\xa2", "\xa3", "\xa4", "\xa5", "\xa6", "\xa7", "\xa8", "\xa9", "\xaa", "\xab", "\xac", "\xae", "\xaf", "\xb0", "\xb1", "\xb2", "\xb3", "\u2a2f", "\xb4", "\xb5", "\xb6", "\xb7", "\xb8", "\xb9", "\xba", "\xbb", "\xbc", "\xbd", "\xbe", "\xbf", "\xc0", "\xc1", "\xc2", "\xc3", "\xc4", "\xc5", "\xc6", "\xc7", "\xc8", "\xc9", "\xca", "\xcb", "\xcc", "\xcd", "\xce", "\xcf", "\xd0", "\xd1", "\xd2", "\xd3", "\xd4", "\xd5", "\xd6", "\xd7", "\xd8", "\xd9", "\xda", "\xdb", "\xdc", "\xdd", "\xde", "\xdf", "\xe0", "\xe1", "\xe2", "\xe3", "\xe4", "\xe5", "\xe6", "\xe7", "\xe8", "\xe9", "\xea", "\xeb", "\xec", "\xed", "\xee", "\xef", "\xf0", "\xf1", "\xf2", "\xf3", "\xf4", "\xf5", "\xf6", "\xf7", "\xf8", "\xf9", "\xfa", "\xfb", "\xfc", "\xfd", "\xfe", "\xff", "\u0100", "\u0101", "\u0102", "\u0103", "\u0104", "\u0105", "\u0106", "\u0107", "\u0108", "\u0109", "\u010a", "\u010b", "\u010c", "\u010d", "\u010e", "\u010f", "\u0110", "\u0111", "\u0112", "\u0113", "\u0116", "\u0117", "\u0118", "\u0119", "\u011a", "\u011b", "\u011c", "\u011d", "\u011e", "\u011f", "\u0120", "\u0121", "\u0122", "\u0124", "\u0125", "\u0126", "\u0127", "\u0128", "\u0129", "\u012a", "\u012b", "\u012e", "\u012f", "\u0130", "\u0131", "\u0132", "\u0133", "\u0134", "\u0135", "\u0136", "\u0137", "\u0138", "\u0139", "\u013a", "\u013b", "\u013c", "\u013d", "\u013e", "\u013f", "\u0140", "\u0141", "\u0142", "\u0143", "\u0144", "\u0145", "\u0146", "\u0147", "\u0148", "\u0149", "\u014a", "\u014b", "\u014c", "\u014d", "\u0150", "\u0151", "\u0152", "\u0153", "\u0154", "\u0155", "\u0156", "\u0157", "\u0158", "\u0159", "\u015a", "\u015b", "\u015c", "\u015d", "\u015e", "\u015f", "\u0160", "\u0161", "\u0162", "\u0163", "\u0164", "\u0165", "\u0166", "\u0167", "\u0168", "\u0169", "\u016a", "\u016b", "\u016c", "\u016d", "\u016e", "\u016f", "\u0170", "\u0171", "\u0172", "\u0173", "\u0174", "\u0175", "\u0176", "\u0177", "\u0178", "\u0179", "\u017a", "\u017b", "\u017c", "\u017d", "\u017e", "\u0192", "\u01b5", "\u01f5", "\u0237", "\u02c6", "\u02c7", "\u02d8", "\u02d9", "\u02da", "\u02db", "\u02dc", "\u039b", "\u03a0", "\u03a3", "\u03a6", "\u03a8", "\u03a9", "\u03b1", "\u03b2", "\u03b3", "\u03b4", "\u03b5", "\u03b6", "\u03b7", "\u03b8", "\u03b9", "\u03ba", "\u03bb", "\u03bc", "\u03bd", "\u03be", "\u03bf", "\u03c0", "\u03c1", "\u03c2", "\u03c3", "\u03c4", "\u03c5", "\u03c6", "\u03c7", "\u03c8", "\u03c9", "\u03d1", "\u03d2", "\u03d5", "\u03d6", "\u03dc", "\u03dd", "\u03f0", "\u03f1", "\u03f5", "\u03f6", "\u0401", "\u0402", "\u0403", "\u0404", "\u0405", "\u0406", "\u0407", "\u0408", "\u0409", "\u040a", "\u040b", "\u040c", "\u040e", "\u040f", "\u0410", "\u0411", "\u0412", "\u0413", "\u0414", "\u0415", "\u0416", "\u0417", "\u0418", "\u0419", "\u041a", "\u041b", "\u041c", "\u041d", "\u041e", "\u041f", "\u0420", "\u0421", "\u0422", "\u0423", "\u0424", "\u0425", "\u0426", "\u0427", "\u0428", "\u0429", "\u042a", "\u042b", "\u042c", "\u042d", "\u042e", "\u042f", "\u0430", "\u0431", "\u0432", "\u0433", "\u0434", "\u0435", "\u0436", "\u0437", "\u0438", "\u0439", "\u043a", "\u043b", "\u043c", "\u043d", "\u043e", "\u043f", "\u0440", "\u0441", "\u0442", "\u0443", "\u0444", "\u0445", "\u0446", "\u0447", "\u0448", "\u0449", "\u044a", "\u044b", "\u044c", "\u044d", "\u044e", "\u044f", "\u0451", "\u0452", "\u0453", "\u0454", "\u0455", "\u0456", "\u0457", "\u0458", "\u0459", "\u045a", "\u045b", "\u045c", "\u045e", "\u045f", "\u2010", "\u2013", "\u2014", "\u2015", "\u2016", "\u2018", "\u2019", "\u201a", "\u201c", "\u201d", "\u201e", "\u2020", "\u2021", "\u2022", "\u2025", "\u2026", "\u2030", "\u2031", "\u2032", "\u2033", "\u2034", "\u2035", "\u2039", "\u203a", "\u203e", "\u2041", "\u2043", "\u2044", "\u204f", "\u2057", "\u20ac", "\u2105", "\u2116", "\u2117", "\u211d", "\u211e", "\u2122", "\u2124", "\u2126", "\u2127", "\u2128", "\u2129", "\u212b", "\u2135", "\u2136", "\u2137", "\u2138", "\u2153", "\u2154", "\u2155", "\u2156", "\u2157", "\u2158", "\u2159", "\u215a", "\u215b", "\u215c", "\u215d", "\u215e", "\u2190", "\u2191", "\u2192", "\u2193", "\u2194", "\u2195", "\u2196", "\u2197", "\u2198", "\u2199", "\u219a", "\u219b", "\u219d", "\u219e", "\u219f", "\u21a0", "\u21a1", "\u21a2", "\u21a3", "\u21a4", "\u21a5", "\u21a6", "\u21a7", "\u21a9", "\u21aa", "\u21ab", "\u21ac", "\u21ad", "\u21ae", "\u21b0", "\u21b1", "\u21b2", "\u21b3", "\u21b5", "\u21b6", "\u21b7", "\u21ba", "\u21bb", "\u21bc", "\u21bd", "\u21be", "\u21bf", "\u21c0", "\u21c1", "\u21c2", "\u21c3", "\u21c4", "\u21c5", "\u21c6", "\u21c7", "\u21c8", "\u21c9", "\u21ca", "\u21cb", "\u21cc", "\u21cd", "\u21ce", "\u21cf", "\u21d0", "\u21d1", "\u21d2", "\u21d3", "\u21d4", "\u21d5", "\u21d6", "\u21d7", "\u21d8", "\u21d9", "\u21da", "\u21db", "\u21dd", "\u21e4", "\u21e5", "\u21f5", "\u21fd", "\u21fe", "\u21ff", "\u2200", "\u2201", "\u2202", "\u2203", "\u2204", "\u2205", "\u2207", "\u2208", "\u2209", "\u220b", "\u220c", "\u220f", "\u2210", "\u2211", "\u2212", "\u2213", "\u2214", "\u2216", "\u2217", "\u2218", "\u221a", "\u221d", "\u221e", "\u221f", "\u2220", "\u2221", "\u2222", "\u2223", "\u2224", "\u2225", "\u2226", "\u2227", "\u2228", "\u2229", "\u222a", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230", "\u2231", "\u2232", "\u2233", "\u2234", "\u2235", "\u2236", "\u2237", "\u2238", "\u223a", "\u223b", "\u223c", "\u223d", "\u223e", "\u223f", "\u2240", "\u2241", "\u2242", "\u2243", "\u2244", "\u2245", "\u2246", "\u2247", "\u2248", "\u2249", "\u224a", "\u224b", "\u224c", "\u224d", "\u224e", "\u224f", "\u2250", "\u2251", "\u2252", "\u2253", "\u2254", "\u2255", "\u2256", "\u2257", "\u2259", "\u225a", "\u225c", "\u225f", "\u2260", "\u2261", "\u2262", "\u2264", "\u2265", "\u2266", "\u2267", "\u2268", "\u2269", "\u226a", "\u226b", "\u226c", "\u226d", "\u226e", "\u226f", "\u2270", "\u2271", "\u2272", "\u2273", "\u2274", "\u2275", "\u2276", "\u2277", "\u2278", "\u2279", "\u227a", "\u227b", "\u227c", "\u227d", "\u227e", "\u227f", "\u2280", "\u2281", "\u2282", "\u2283", "\u2284", "\u2285", "\u2286", "\u2287", "\u2288", "\u2289", "\u228a", "\u228b", "\u228d", "\u228e", "\u228f", "\u2290", "\u2291", "\u2292", "\u2293", "\u2294", "\u2295", "\u2296", "\u2297", "\u2298", "\u2299", "\u229a", "\u229b", "\u229d", "\u229e", "\u229f", "\u22a0", "\u22a1", "\u22a2", "\u22a3", "\u22a4", "\u22a5", "\u22a7", "\u22a8", "\u22a9", "\u22aa", "\u22ab", "\u22ac", "\u22ad", "\u22ae", "\u22af", "\u22b0", "\u22b2", "\u22b3", "\u22b4", "\u22b5", "\u22b6", "\u22b7", "\u22b8", "\u22b9", "\u22ba", "\u22bb", "\u22bd", "\u22be", "\u22bf", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u22c4", "\u22c5", "\u22c6", "\u22c7", "\u22c8", "\u22c9", "\u22ca", "\u22cb", "\u22cc", "\u22cd", "\u22ce", "\u22cf", "\u22d0", "\u22d1", "\u22d2", "\u22d3", "\u22d4", "\u22d5", "\u22d6", "\u22d7", "\u22d8", "\u22d9", "\u22da", "\u22db", "\u22de", "\u22df", "\u22e0", "\u22e1", "\u22e2", "\u22e3", "\u22e6", "\u22e7", "\u22e8", "\u22e9", "\u22ea", "\u22eb", "\u22ec", "\u22ed", "\u22ee", "\u22ef", "\u22f0", "\u22f1", "\u22f2", "\u22f3", "\u22f4", "\u22f5", "\u22f6", "\u22f7", "\u22f9", "\u22fa", "\u22fb", "\u22fc", "\u22fd", "\u22fe", "\u2305", "\u2306", "\u2308", "\u2309", "\u230a", "\u230b", "\u230c", "\u230d", "\u230e", "\u230f", "\u2310", "\u2312", "\u2313", "\u2315", "\u2316", "\u231c", "\u231d", "\u231e", "\u231f", "\u2322", "\u2323", "\u232d", "\u232e", "\u2336", "\u233d", "\u233f", "\u237c", "\u23b0", "\u23b1", "\u23b4", "\u23b5", "\u23b6", "\u23dc", "\u23dd", "\u23df", "\u23e2", "\u23e7", "\u2423", "\u24c8", "\u2500", "\u2502", "\u250c", "\u2510", "\u2514", "\u2518", "\u251c", "\u2524", "\u252c", "\u2534", "\u253c", "\u2550", "\u2551", "\u2552", "\u2553", "\u2554", "\u2555", "\u2556", "\u2557", "\u2558", "\u2559", "\u255a", "\u255b", "\u255c", "\u255d", "\u255e", "\u255f", "\u2560", "\u2561", "\u2562", "\u2563", "\u2564", "\u2565", "\u2566", "\u2567", "\u2568", "\u2569", "\u25a1", "\u25aa", "\u25ab", "\u25ad", "\u25ae", "\u25b1", "\u25b3", "\u25b4", "\u25b5", "\u25b8", "\u25b9", "\u25bd", "\u25be", "\u25bf", "\u25c2", "\u25c3", "\u25ca", "\u25cb", "\u25ec", "\u25ef", "\u25f8", "\u25f9", "\u25fa", "\u25fb", "\u25fc", "\u2605", "\u2606", "\u2640", "\u2642", "\u2660", "\u2663", "\u2665", "\u2666", "\u266a", "\u266d", "\u266e", "\u266f", "\u2713", "\u2717", "\u2720", "\u2736", "\u2758", "\u27f5", "\u27f6", "\u27f7", "\u27f8", "\u27f9", "\u27fa", "\u27fc", "\u27ff", "\u2902", "\u2903", "\u2904", "\u2905", "\u290c", "\u290d", "\u290e", "\u290f", "\u2910", "\u2911", "\u2912", "\u2913", "\u2916", "\u2919", "\u291a", "\u291b", "\u291c", "\u291d", "\u291e", "\u291f", "\u2920", "\u2923", "\u2924", "\u2925", "\u2926", "\u2927", "\u2928", "\u2929", "\u292a", "\u2933", "\u2935", "\u2936", "\u2937", "\u2938", "\u2939", "\u293c", "\u293d", "\u2945", "\u2948", "\u2949", "\u294a", "\u294b", "\u294e", "\u294f", "\u2950", "\u2951", "\u2952", "\u2953", "\u2954", "\u2955", "\u2956", "\u2957", "\u2958", "\u295a", "\u295b", "\u295c", "\u295d", "\u295e", "\u295f", "\u2961", "\u2962", "\u2963", "\u2964", "\u2965", "\u2966", "\u2967", "\u2968", "\u2969", "\u296a", "\u296b", "\u296c", "\u296d", "\u296e", "\u296f", "\u2970", "\u2971", "\u2972", "\u2973", "\u2974", "\u2975", "\u29b3", "\u29b4", "\u29b5", "\u29b6", "\u29b7", "\u29b9", "\u29bb", "\u29bc", "\u29be", "\u29bf", "\u29c0", "\u29c1", "\u29c2", "\u29c3", "\u29c4", "\u29c5", "\u29c9", "\u29cd", "\u29ce", "\u29cf", "\u29d0", "\u29da", "\u29dc", "\u29dd", "\u29de", "\u29eb", "\u29f4", "\u29f6", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06", "\u2a0c", "\u2a0d", "\u2a10", "\u2a11", "\u2a12", "\u2a13", "\u2a14", "\u2a15", "\u2a16", "\u2a17", "\u2a22", "\u2a23", "\u2a24", "\u2a25", "\u2a26", "\u2a27", "\u2a29", "\u2a2a"], this.api_link = o.a.HOST.link, this.showTop = new a.a(!1), this.enableSignUp = new a.a(!1), this.activetab = new a.a(""), this.isSignup = new a.a(!1), this.ispublicCourse = new a.a(!1), this.isPublicFeeds = new a.a(!1), this.isPublicFeedsandCourses = new a.a(!1), this.isAllowFeedsMAin = new a.a(!1), this.logoutTrigger = new a.a(!1), this.cartTotalItems = new a.a(0), this.search = new a.a({}), this.schoolLogo = new a.a(""), this.schoolName = new a.a(""), this.publishType = new a.a(""), this.confirmFlag = new a.a(!1), this.confirmFlagLogOff = new a.a(!1), this.previousUrl = "/", this.loginUrls = ["/attendancesettings", "/course", "/cart", "/accountsettings", "/dashboard"], this.publicUrls = ["/result", "/contest/public", "/setpassword", "/forgot", "contest/account", "/loginredirect", "/course/product", "/resetpassword", "/mycourses/details", "/mydrivedetails", "/mycdetails", "/test", "no-network", "/compiler-instruction"], this.sidebarVisibilityChange = new s.b, this.searchUrl = "", this.contestToTestSchoolId = ["a8037be9-b7d2-4a86-ae87-9b160f7c81a9", "69cb8138-b47b-4cd0-98b8-44dbd5da2b3c", "e50db77c-513c-4486-a2a8-bfdb1aba3fa4"], o.a.production ? (this.bucket = "exams-media", this.verify_img_bucket = "prod-student-verification-images", this.assets_bucket = "prod-users-asset", this.proctoring_bucket = "prod-proctoring-screen", this.drive_bucket = "examly-data", this.content_bucket = "exams-media-content", this.hirebucket = "neo-hire") : (this.bucket = "exams-media-stage", this.verify_img_bucket = "dev-student-verification-images", this.assets_bucket = "dev-users-asset", this.proctoring_bucket = "dev-proctoring-screen", this.drive_bucket = "examly-data-stage", this.content_bucket = "exams-media-stage-content", this.hirebucket = "neo-hire")
				}
				addGoogleAnalytics() {
					return new Promise((e, l) => {
						if (!document.getElementById("google-analytics") && o.a.g_measurement_id) {
							const l = document.createElement("script");
							l.src = "https://www.googletagmanager.com/gtag/js?id=" + o.a.g_measurement_id, l.type = "text/javascript", l.id = "google-analytics", document.getElementsByTagName("head")[0].appendChild(l), l.onload = () => {
								const t = document.createElement("script");
								t.text = `window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${o.a.g_measurement_id}');`, l.append(t), e(!0)
							}, l.onerror = () => {
								e(!1)
							}
						} else e(!0)
					})
				}
				pathConfigGA() {
					document.getElementById("google-analytics") && o.a.g_measurement_id && window.dataLayer && gtag("config", o.a.g_measurement_id, {
						page_path: location.pathname
					})
				}
				userConfigGA(e) {
					document.getElementById("google-analytics") && o.a.g_measurement_id && window.dataLayer && gtag("config", o.a.g_measurement_id, {
						user_id: "student-" + e
					})
				}
				eventEmitterGA(e, l) {
					document.getElementById("google-analytics") && o.a.g_measurement_id && window.dataLayer && gtag("event", e, l)
				}
				toggleVisibility() {
					this.sidebarVisibilityChange.next(!1)
				}
				getUserToken() {
					const e = JSON.parse(localStorage.getItem("token"));
					return e && e.token ? e.token : ""
				}
				options(e) {
					return {
						headers: new i.h({
							"Content-Type": "application/json",
							Authorization: e && e.token ? e.token : this.getUserToken()
						})
					}
				}
				getSchoolLoginDetails() {
					return this.http.get(this.api_link + "/school/login")
				}
				getSignedUrl(e) {
					return this.http.post(this.api_link + "/getsignedurl", e, this.options(null))
				}
				getPrivateSignedDownloadUrl(e) {
					return this.http.post(this.api_link + "/getprivatesigneddownloadurl", e, this.options(null))
				}
				getSignedDownloadUrlWIthoutAuthorization(e) {
					return this.http.post(this.api_link + "/getSignedDownloadUrlWIthoutAuthorization", e, this.options(null))
				}
				getGSignedUrl(e) {
					return this.http.post(this.api_link + "/getGSignedUrl", e, this.options(null))
				}
				uploadUsingSignedUrl(e, l) {
					return this.http.put(e, l, {
						observe: "response"
					})
				}
				uploadUsingSignedUrlWithProgress(e, l) {
					return this.http.put(e, l, {
						observe: "events",
						reportProgress: !0
					}).pipe(Object(u.a)(e => this.getUploadStatus(e)), Object(c.a)(e => this.uploadError(e)))
				}
				getUploadStatus(e) {
					switch (e.type) {
						case i.f.Sent:
							return {
								severity: "warn", status: "Upload started"
							};
						case i.f.UploadProgress:
							return {
								severity: "warn", status: `Uploading: (${Math.round(100*e.loaded/e.total)}%)`
							};
						case i.f.Response:
							return {
								severity: "success", status: "Upload completed"
							};
						default:
							return {
								severity: "error", status: "Upload failed!"
							}
					}
				}
				uploadError(e) {
					let l = {
						severity: "error",
						status: "Upload failed. Try again later"
					};
					return e.error instanceof ErrorEvent && (l = {
						severity: "error",
						status: "Network error. Upload failed"
					}), Object(r.a)(l)
				}
				uploadGCPUsingSignedUrl(e, l) {
					const t = new i.h({});
					return t.set("Content-Type", l && l.type ? l.type : "application/octet-stream"), this.http.put(e, l, {
						headers: t,
						observe: "response"
					})
				}
				uploadGCPUsingSignedUrlWithProgress(e, l) {
					const t = new i.h({});
					return t.set("Content-Type", l && l.type ? l.type : "application/octet-stream"), this.http.put(e, l, {
						headers: t,
						observe: "events",
						reportProgress: !0,
						params: {
							"ngsw-bypass": "true"
						}
					}).pipe(Object(u.a)(e => this.getUploadStatus(e)), Object(c.a)(e => this.uploadError(e)))
				}
				convert_IST_TO_EPOCH(e) {
					return new Date(e).getTime()
				}
				getBranchName() {
					const e = JSON.parse(localStorage.getItem("token"));
					return e && e.purpose && e.institute_type ? "Placement Process App" === e.purpose ? "Campus" : "Exams App" === e.purpose && "training_institute" !== e.institute_type ? "Colleges / Schools" : "Branch" : "Branch"
				}
				school_code() {
					return JSON.parse(localStorage.getItem("school_details")).school_code
				}
				sendPushDetails(e) {
					return e.school_code = this.school_code(), this.http.post(this.api_link + "/users/sendpushmsg", e, this.options(null)).pipe(Object(c.a)(this.handleError))
				}
				sendPushToken(e) {
					return this.http.post(this.api_link + "/users/sendpushtoken", e, this.options(null))
				}
				updateLoginURLS(e, l) {
					e && e.allow_drives && this.loginUrls.push("/drives"), e && (e.allow_courses || e.allow_course_projects || e.allow_learning_paths || e.allow_practices || e.allow_quizzes || e.allow_exams || e.allow_lab_courses || e.allow_hackathons || e.allow_challenges || e.allow_company_specific_tests || e.allow_assessments) && this.loginUrls.push("/mycourses"), (e && e.allow_dashboard && e.enableTwoFactorAuthentication && this.verifiedOtp || e && e.allow_dashboard && !e.enableTwoFactorAuthentication) && this.loginUrls.push("/dashboard"), e && e.allow_leaderboard && this.loginUrls.push("/leaderboard"), e && e.allow_contest && this.loginUrls.push("/mycontest"), e && e.allowselling && this.loginUrls.push("/course"), e && e.allow_certificates && this.loginUrls.push("/certificates"), e && e.disableProfile || this.loginUrls.push("/profile")
				}
				defaultRedirection() {
					let e = JSON.parse(localStorage.getItem("school_details"));
					e = !(!e || !e.schools_metadata) && e.schools_metadata;
					const l = JSON.parse(localStorage.getItem("token")),
						t = localStorage.getItem("path");
					switch (!0) {
						case t && t.includes("contest") && e && e.allow_contest:
							return "/mycontest";
						case t && t.includes("drives") && e && e.allow_drives:
							return "/drives";
						case t && t.includes("type=mycourses") && e && e.allow_courses:
							return "/mycourses?type=mycourses";
						case t && t.includes("type=mylearningpaths") && e && e.allow_learning_paths:
							return "/mycourses?type=mylearningpaths";
						case t && t.includes("type=mypractices") && e && e.allow_practices:
							return "/mycourses?type=mypractices";
						case t && t.includes("type=myprojects") && e && e.allow_course_projects:
							return "/mycourses?type=myprojects";
						case t && t.includes("type=myhackathons") && e && e.allow_hackathons:
							return "/mycourses?type=myhackathons";
						case t && t.includes("type=myquizzes") && e && e.allow_quizzes:
							return "/mycourses?type=myquizzes";
						case t && t.includes("type=myexams") && e && e.allow_exams:
							return "/mycourses?type=myexams";
						case t && t.includes("type=myassessments") && e && e.allow_assessments:
							return "/mycourses?type=myassessments";
						case t && t.includes("type=mylabs") && e && e.allow_lab_courses:
							return "/mycourses?type=mylabs";
						case t && t.includes("type=mychallenges") && e && e.allow_challenges:
							return "/mycourses?type=mychallenges";
						case t && t.includes("type=mytests") && e && e.allow_company_specific_tests:
							return "/mycourses?type=mytests";
						case t && t.includes("type=mytests2") && e && e.allow_company_specific_tests:
							return "/mycourses?type=mytests2";
						case t && t.includes("project?id") && l && l.enableFeatures && l.enableFeatures.allow_projects:
						case t && t.includes("QR-code-scanner?qr_id"):
							return t;
						case t && t.includes("profile") && (!e || !e.disableProfile):
							return "/profile";
						case e && e.allow_dashboard && e.enableTwoFactorAuthentication && this.verifiedOtp || e && e.allow_dashboard && !e.enableTwoFactorAuthentication:
							return "/dashboard";
						case e && e.allow_courses && e.enableTwoFactorAuthentication && this.verifiedOtp || e && e.allow_courses && !e.enableTwoFactorAuthentication:
							return "/mycourses?type=mycourses";
						case e && e.allow_contest && e.enableTwoFactorAuthentication && this.verifiedOtp || e && e.allow_contest && !e.enableTwoFactorAuthentication:
							return "/mycontest";
						case e && e.allow_drives && e.enableTwoFactorAuthentication && this.verifiedOtp || e && e.allow_drives && !e.enableTwoFactorAuthentication:
							return "/drives";
						default:
							return "/accountsettings"
					}
				}
				getSpecificSchoolId() {
					return ["158608c5-6868-4850-8baf-f1da3d041bb2", "9519e793-dde4-419a-b877-e081f00b2ecc"]
				}
				timezone(e, l) {
					let t = "+" === l.charAt(0),
						n = (l = l.replace(t ? "+" : "-", "")).split(":"),
						i = parseInt(n[0]),
						o = parseInt(n[1]);
					return e = (e = new Date(e)).setTime(e.getTime() + 60 * e.getTimezoneOffset() * 1e3), e = new Date(e), t ? (e = new Date(e.setHours(e.getHours() + i)), e = new Date(e.setMinutes(e.getMinutes() + o))) : (e = new Date(e.setHours(e.getHours() - i)), e = new Date(e.setMinutes(e.getMinutes() - o))), e
				}
				getPlatformSettings(e) {
					return this.http.post(this.api_link + "/school/getPlatformSettings", e, this.options(null)).pipe(Object(c.a)(this.handleError.bind(this)))
				}
				setEnabledFeatures(e) {
					const l = JSON.parse(localStorage.getItem("token"));
					l && e && (l.enable_features = e, localStorage.setItem("token", JSON.stringify(l)))
				}
				getSetEnabledFeatures() {
					if (localStorage.getItem("token")) {
						const e = JSON.parse(localStorage.getItem("token"));
						this.getPlatformSettings({
							school_id: e.school_id
						}).subscribe(e => {
							e && e.enabledFeatures && this.setEnabledFeatures(e.enabledFeatures)
						})
					}
				}
				setEnableFeatures() {
					this.getSetEnabledFeatures()
				}
				resetToken() {
					this.getSetEnabledFeatures(), setInterval(() => this.getSetEnabledFeatures(), 3e5)
				}
				publicNavigation(e, l) {
					let t = "/login";
					return e.allow_public_buying ? (this.ispublicCourse.next(!0), t = "/course") : this.ispublicCourse.next(!1), t
				}
				loadCaptchaScript(e) {
					return new Promise((l, t) => n.__awaiter(this, void 0, void 0, (function*() {
						const t = "https://www.google.com/recaptcha/api.js?render=" + e;
						if (document.querySelector('script[src^="https://www.gstatic.com/recaptcha"]')) l({
							script: e,
							loaded: !0,
							status: "Loaded"
						});
						else {
							const n = {
									script: e,
									loaded: !0,
									status: "Loaded"
								},
								i = {
									script: e,
									loaded: !1,
									status: "Loaded"
								};
							yield this.loadScript("script", t, "text/javascript", "", "captcha", [], !0, n, i).then(e => {
								l(e)
							}).catch(e => {})
						}
					})))
				}
				getCaptchaToken(e) {
					return new Promise(l => {
						if (e) try {
							const t = JSON.parse(localStorage.getItem("school_details"));
							t && t.captcha ? window.grecaptcha ? window.grecaptcha.ready(() => {
								window.grecaptcha.execute(t.captcha, {
									action: e
								}).then(e => {
									l(e)
								})
							}) : this.loadCaptchaScript(t.captcha).then(n => {
								let i = setInterval(() => {
									window.grecaptcha && (clearInterval(i), window.grecaptcha.ready(() => {
										window.grecaptcha.execute(t.captcha, {
											action: e
										}).then(e => {
											l(e)
										})
									}))
								}, 500)
							}) : this.getSchoolLoginDetails().subscribe(t => {
								t && t.data && t.data.captcha ? this.loadCaptchaScript(t.data.captcha).then(n => {
									let i = setInterval(() => {
										window.grecaptcha && (clearInterval(i), window.grecaptcha.ready(() => {
											window.grecaptcha.execute(t.data.captcha, {
												action: e
											}).then(e => {
												l(e)
											})
										}))
									}, 500)
								}) : l("")
							})
						} catch (t) {
							l(!1)
						} else l("")
					})
				}
				loadScript(e, l, t, i, o, a, s, r, u) {
					return new Promise((i, c) => n.__awaiter(this, void 0, void 0, (function*() {
						if (document.getElementById(o)) i(!0);
						else {
							const n = document.createElement(e);
							"link" === e ? (n.href = l, n.rel = "stylesheet") : "script" === e && (n.src = l), s && (n.defer = s), r && (n.onload = i(r)), u && (n.onerror = i(u)), "MathJax" === o && (yield this.loadMathDelimiter()), n.type = t, document.getElementsByTagName("head")[0].appendChild(n), n.onload = () => {
								if (n.id = o, "shaka" === o) shaka.polyfill.installAll();
								else if (a && a.length) {
									const e = [];
									a.forEach(l => {
										e.push(this.loadScript(l.element, l.url, l.type, l.rel, l.id, l.child))
									}), Promise.all(e).then(() => {
										i(!0)
									})
								} else i(!0)
							}, n.onerror = () => {
								c(!1)
							}
						}
					})))
				}
				loadMathDelimiter() {
					return new Promise((e, l) => {
						const t = document.createElement("script");
						t.text = "MathJax = {\n    tex: {\n      inlineMath: [['$', '$']]\n    },\n    svg: {\n      fontCache: 'global'\n    }\n  };", document.getElementsByTagName("head")[0].appendChild(t), e(!0)
					})
				}
				clearLocalStorage() {
					localStorage.removeItem("token"), localStorage.removeItem("ssologin"), this.logoutTrigger.next(!0);
					for (let e = localStorage.length - 1; e > -1; e -= 1) {
						const l = localStorage.key(e);
						l && "session_data" !== l && "school_details" !== l && localStorage.removeItem(l)
					}
				}
				uniqBy(e, l) {
					const t = "function" == typeof l ? l : e => e[l];
					return [...e.reduce((e, l) => {
						const n = null == l ? l : t(l);
						return e.has(n) || e.set(n, l), e
					}, new Map).values()]
				}
				roundDigit(e, l) {
					return Math.floor(e * Math.pow(10, l)) / Math.pow(10, l)
				}
				addZeroInfront(e) {
					return e < 0 || e > 9 ? e : "0" + e
				}
				sleep(e) {
					return new Promise((l, t) => {
						setTimeout(() => {
							l()
						}, e)
					})
				}
				inIframe() {
					try {
						return window.self !== window.top
					} catch (e) {
						return !0
					}
				}
				getResultfromRedis(e) {
					return this.http.post(this.api_link + "/xor1pE8aM9R", e, this.options(null))
				}
				neoPATRedirection(e) {
					return this.http.post(this.api_link + "/nSdo1IkS8d0", e, this.options(null))
				}
				getHtml2Canvas() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.html2canvas) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/html2canvas/html2canvas.js",
								type: "text/javascript",
								rel: "",
								id: "html2canvas"
							};
							yield this.loadScript(e.element, e.url, e.type, e.rel, e.id), this.html2canvas = html2canvas
						}
						return this.html2canvas
					}))
				}
				getjsPDF() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.jspdf) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/jsPDF/jspdf.js",
								type: "text/javascript",
								rel: "",
								id: "jspdf"
							};
							yield this.loadScript(e.element, e.url, e.type, e.rel, e.id), this.jspdf = jspdf
						}
						return this.jspdf
					}))
				}
				handleError(e) {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (e.error instanceof ErrorEvent);
						else {
							let l, t = !1;
							try {
								l = JSON.parse(localStorage.getItem("ssologin"))
							} catch (e) {
								l = null
							}(e && 401 === e.status || 406 === e.status) && !l && (401 === e.status && (this.commonGrowl.next({
								severity: "error",
								summary: "Session Expired!!",
								detail: "Please Login again"
							}), t = !0), localStorage, 406 === e.status && (this.setRedirectionToLogin(), t = yield this.getconfirmation()), t && (localStorage.clear(), setTimeout(() => {
								const e = window.location.host;
								"app.examly.net" === e || "app.exam.ly" === e || "app.examly.io" === e || "app.examly.test" === e.split(":")[0] ? "/admin/login" !== window.location.pathname && (window.location.href = "/admin/login") : "/login" !== window.location.pathname && (window.location.href = "/login")
							}, 1e3)), this.resetRedirectionToLogin())
						}
						return Object(r.a)("Something bad happened; please try again later.")
					}))
				}
				getconfirmation() {
					return new Promise((e, l) => n.__awaiter(this, void 0, void 0, (function*() {
						this.confirmFlag.next(!0), this.confirmFlagLogOff.subscribe(l => {
							l && e(!0)
						})
					})))
				}
				blockRedirection() {
					localStorage.removeItem("noRedirect"), localStorage.setItem("noRedirect", JSON.stringify({
						noRedirection: !0
					}))
				}
				setRedirectionToLogin() {
					localStorage.removeItem("redirect"), localStorage.setItem("redirect", JSON.stringify({
						redirect: "Login"
					}))
				}
				resetRedirectionToLogin() {
					localStorage.removeItem("redirect")
				}
				checkMyMeetingReminder() {
					return this.http.post(this.api_link + "/live_session/checkMyMeetReminder", {}, this.options(null)).pipe(Object(c.a)(this.handleError.bind(this)))
				}
				checkValidFile(e) {
					return new Promise((l, t) => {
						const n = new FileReader;
						n.onload = function(e) {
							e.target.result.substr(0, 8).match(/%PDF-1.[0-7]/) ? l(!0) : t(!1)
						}, n.readAsText(e)
					})
				}
				convertImageUrlToBase64(e) {
					return new Promise((l, t) => {
						this.http.get(e, {
							responseType: "blob"
						}).subscribe(e => {
							this.blobToBase64(e).then(e => {
								e = JSON.parse(JSON.stringify(e)), l(e)
							})
						})
					})
				}
				loadDragScript() {
					let e = document.createElement("script");
					e.type = "text/javascript", e.async = !0, e.src = "https://images.examly.io/scripts/drag-script.js", e.id = "dynamic_drag_script", document.body.appendChild(e)
				}
				removeDragScript() {
					let e = document.getElementById("dynamic_drag_script");
					null != e && e.remove()
				}
				blobToBase64(e) {
					return new Promise((l, t) => {
						const n = new FileReader;
						n.onloadend = () => l(n.result), n.readAsDataURL(e)
					})
				}
				changeS3bucket(e, l, t = this.bucket) {
					return e && e.includes(t + "/") && (e = e.replace(new RegExp(t + "/", "g"), l + "/")), e
				}
				switchBucket(e, l) {
					return JSON.parse(this.changeS3bucket(JSON.stringify(e), l))
				}
				getAdmissionReportSchoolDetails() {
					return this.http.get(this.api_link + "/school/getAdmissionReportSchoolDetails", this.options(null)).pipe(Object(c.a)(this.handleError.bind(this)))
				}
				generateSsoQrUrl(e, l) {
					let t = e[0] + "//" + e[2] + "/loginredirect/QR-code-scanner?qr_id=" + l.data,
						n = JSON.parse(localStorage.getItem("ssologintoken")),
						i = JSON.parse(localStorage.getItem("token")),
						o = JSON.parse(localStorage.getItem("school_details"));
					return t = `${t}&tokenid=${n.token}&email=${i.email}&school_code=${o.school_code}`, t
				}
			}
			p.ngInjectableDef = d.R({
				factory: function() {
					return new p(d.V(i.c))
				},
				token: p,
				providedIn: "root"
			})
		},
		"5U9e": function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return r
			}));
			var n = t("2Vo4"),
				i = t("wxn8"),
				o = t("EPgW"),
				a = t("AytR"),
				s = t("8Y7J");
			class r {
				constructor(e) {
					this.testService = e, this.socket_url = a.a.HOST.SOCKET_LINK, this.messageRecieved = new n.a(null), this.connectionId = null
				}
				connect(e, l) {
					this.socket = new i.a({
						url: this.socket_url,
						closeObserver: {
							next: () => {
								this.connect(e, l)
							}
						}
					}), this.socket.next({
						action: "userconnect",
						data: {
							school_id: e,
							user_id: l
						}
					}), this.socket.subscribe(e => {
						e.connectionId && (this.connectionId = e.connectionId), this.messageRecieved.next(e)
					}, e => {})
				}
				removeMessage() {
					this.messageRecieved.next(void 0)
				}
				sendMessage(e) {
					this.testService.sendMessageToSocket(e).then(e => {})
				}
			}
			r.ngInjectableDef = s.R({
				factory: function() {
					return new r(s.V(o.a))
				},
				token: r,
				providedIn: "root"
			})
		},
		"5VGF": function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("SVse"),
				o = t("s7LF");
			t("SiHs"), t("4WDQ"), t.d(l, "a", (function() {
				return a
			})), t.d(l, "b", (function() {
				return _
			}));
			var a = n.nb({
				encapsulation: 0,
				styles: [
					[".options[_ngcontent-%COMP%]{position:absolute;overflow-y:auto;max-height:225px;padding:5px 0;z-index:10;border-radius:3px;left:0;border:1px solid var(--fourteen);background:var(--three);min-width:100%;max-width:210px}.pad1[_ngcontent-%COMP%]{margin-left:4px;font-size:14px;padding-bottom:5px;display:flex}.selectallclass[_ngcontent-%COMP%]{margin-top:3px;margin-left:4px}.selectcheck[_ngcontent-%COMP%]{display:flex;flex-direction:row}.mydropdown[_ngcontent-%COMP%]{border:none;text-indent:5px;cursor:pointer;height:100%;font-size:14px;align-items:center;border:1px solid var(--sixteen);border-radius:3px;display:flex;justify-content:space-between;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:var(--three);min-height:37px}.disabled_dd[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.sdouter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}li[_ngcontent-%COMP%]{border:0;cursor:pointer;font-weight:400;margin:1px 0;padding:4px .25em 6px;text-align:left;white-space:nowrap;display:block;position:relative}li[_ngcontent-%COMP%]:hover{border-color:silver;background:var(--twenty);color:var(--twentyone);border-radius:3px}.cursor[_ngcontent-%COMP%]{cursor:pointer}.checkbox[_ngcontent-%COMP%]{width:16px;height:16px;line-height:12px;border-radius:2px;text-align:center;border:1px solid var(--fourteen)}.search-div[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;width:100%;overflow:hidden;text-overflow:ellipsis}.search[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border:1px solid var(--fourteen);border-radius:3px}.position1[_ngcontent-%COMP%]{margin:8px 5px}.searchbox[_ngcontent-%COMP%]{width:70%;border:0;border-radius:3px;height:23px;max-width:78%}.selected-bg[_ngcontent-%COMP%]{border-radius:3px;background-color:var(--twentytwo);color:var(--three)}.each-option[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.padding-left[_ngcontent-%COMP%]{padding-left:4px}.padding[_ngcontent-%COMP%]{border:0;cursor:pointer;padding:1px 0;text-align:left;white-space:nowrap;position:relative;font-size:14px;font-family:Roboto}.icon-padding[_ngcontent-%COMP%]{padding-right:9px}.customIcon[_ngcontent-%COMP%]{padding-right:15px;color:var(--sixteen);font-size:10px;position:relative;bottom:1px}.search-icon[_ngcontent-%COMP%]{position:absolute;padding:2px 0;top:3px;font-size:15px}.searchicon-left[_ngcontent-%COMP%]{padding-right:6px;top:1px;position:relative;font-size:15px}.hide-x[_ngcontent-%COMP%]{overflow-x:hidden}.width90[_ngcontent-%COMP%]{width:90%}.width100[_ngcontent-%COMP%]{width:100%}.inner-text[_ngcontent-%COMP%]{width:Calc(100% - 25px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.icon-width[_ngcontent-%COMP%]{width:25px}.main-container[_ngcontent-%COMP%]{position:relative}.ap_options[_ngcontent-%COMP%]{width:225px;position:absolute;background:var(--fifteen);overflow-y:scroll;max-height:200px;padding:5px;display:block;z-index:10;visibility:visible;border-radius:3px;left:0;opacity:1.044;border:1px solid var(--fourteen);background:var(--fifteen);min-width:100%}.ap_mydropdown[_ngcontent-%COMP%]{text-align:left;line-height:initial;border:none;text-indent:5px;cursor:pointer;height:100%;font-size:14px;align-items:center;border-radius:3px;display:flex;justify-content:space-between;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:var(--fifteen);min-height:37px}@media screen and (max-device-width:992px){.padding[_ngcontent-%COMP%]{font-size:12px}}.profileDropDown[_ngcontent-%COMP%]{width:95%;margin:0 auto;cursor:pointer}"]
				],
				data: {}
			});

			function s(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "span", [
					["class", "inner-text"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.placeHolder)
				}))
			}

			function r(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "span", [
					["class", "inner-text"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.selectPlaceHolder())
				}))
			}

			function u(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "span", [
					["class", "inner-text"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " items selected "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.selectedItems.length)
				}))
			}

			function c(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "span", [
					["class", "icon-padding icon-angle-down icon-width"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.styles && t.styles.icon ? t.styles.icon : "")
				}), null)
			}

			function d(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "span", [], [
					[8, "className", 0]
				], null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.styles && t.styles.icon ? t.styles.icon : "")
				}), (function(e, l) {
					e(l, 0, 0, n.rb(1, "customIcon ", l.component.dropdownstyle.arrowIcon, ""))
				}))
			}

			function p(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "span", [
					["class", "search-div"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, [
					["search", 1]
				], null, 0, "input", [
					["class", "searchbox preventBlur"],
					["placeholder", "Search"],
					["type", "text"]
				], [
					[8, "value", 0]
				], [
					[null, "keyup"]
				], (function(e, l, t) {
					var i = !0;
					return "keyup" === l && (i = !1 !== e.component.searchApplied(n.zb(e, 1).value) && i), i
				}), null, null)), (e()(), n.pb(2, 0, null, null, 0, "span", [
					["class", "icon icon-search search-icon"]
				], null, null, null, null, null))], null, (function(e, l) {
					e(l, 1, 0, n.rb(1, "", l.component.searchData, ""))
				}))
			}

			function h(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "span", [
					["class", "search-div"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 2, "span", [
					["class", "icon icon-search search-icon"]
				], null, null, null, null, null)), n.ob(2, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(3, {
					"searchicon-left": 0
				}), (e()(), n.pb(4, 0, [
					["search", 1]
				], null, 0, "input", [
					["class", "searchbox preventBlur"],
					["placeholder", "Search"],
					["type", "text"]
				], [
					[8, "value", 0]
				], [
					[null, "keyup"]
				], (function(e, l, t) {
					var i = !0;
					return "keyup" === l && (i = !1 !== e.component.searchApplied(n.zb(e, 4).value) && i), i
				}), null, null))], (function(e, l) {
					var t = l.component,
						n = e(l, 3, 0, t.value === t.coursedash);
					e(l, 2, 0, "icon icon-search search-icon", n)
				}), (function(e, l) {
					e(l, 4, 0, n.rb(1, "", l.component.searchData, ""))
				}))
			}

			function g(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 6, "div", [
					["class", "search"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					position1: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, p)), n.ob(4, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, h)), n.ob(6, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.value === t.coursedash);
					e(l, 1, 0, "search", n), e(l, 4, 0, t.value !== t.coursedash), e(l, 6, 0, t.value === t.coursedash)
				}), null)
			}

			function b(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 8, "div", [
					["class", "pad1"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 5, "input", [
					["class", "checkbox preventBlur"],
					["name", "dropdown"],
					["type", "checkbox"],
					["value", "all_selected"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "click"],
					[null, "change"],
					[null, "blur"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "change" === l && (i = !1 !== n.zb(e, 2).onChange(t.target.checked) && i), "blur" === l && (i = !1 !== n.zb(e, 2).onTouched() && i), "ngModelChange" === l && (i = !1 !== (o.all_selected = t) && i), "click" === l && (i = !1 !== o.selectOption("all") && i), i
				}), null, null)), n.ob(2, 16384, null, 0, o.b, [n.C, n.k], null, null), n.Eb(1024, null, o.o, (function(e) {
					return [e]
				}), [o.b]), n.ob(4, 671744, null, 0, o.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, o.o]
				], {
					name: [0, "name"],
					model: [1, "model"]
				}, {
					update: "ngModelChange"
				}), n.Eb(2048, null, o.p, null, [o.s]), n.ob(6, 16384, null, 0, o.q, [
					[4, o.p]
				], null, null), (e()(), n.pb(7, 0, null, null, 1, "div", [
					["class", "selectallclass padding"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Select All"]))], (function(e, l) {
					e(l, 4, 0, "dropdown", l.component.all_selected)
				}), (function(e, l) {
					e(l, 1, 0, n.zb(l, 6).ngClassUntouched, n.zb(l, 6).ngClassTouched, n.zb(l, 6).ngClassPristine, n.zb(l, 6).ngClassDirty, n.zb(l, 6).ngClassValid, n.zb(l, 6).ngClassInvalid, n.zb(l, 6).ngClassPending)
				}))
			}

			function m(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "input", [
					["class", "checkbox preventBlur"],
					["name", "dropdown"],
					["type", "checkbox"],
					["value", "selectedArray[i]"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "change"],
					[null, "blur"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "change" === l && (i = !1 !== n.zb(e, 1).onChange(t.target.checked) && i), "blur" === l && (i = !1 !== n.zb(e, 1).onTouched() && i), "ngModelChange" === l && (i = !1 !== (o.selectedArray[e.parent.context.index] = t) && i), i
				}), null, null)), n.ob(1, 16384, null, 0, o.b, [n.C, n.k], null, null), n.Eb(1024, null, o.o, (function(e) {
					return [e]
				}), [o.b]), n.ob(3, 671744, null, 0, o.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, o.o]
				], {
					name: [0, "name"],
					isDisabled: [1, "isDisabled"],
					model: [2, "model"]
				}, {
					update: "ngModelChange"
				}), n.Eb(2048, null, o.p, null, [o.s]), n.ob(5, 16384, null, 0, o.q, [
					[4, o.p]
				], null, null)], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, "dropdown", t.maxSelected && t.selectedItems.length === t.maxSelected && !t.selectedItems.includes(l.parent.context.$implicit.value), t.selectedArray[l.parent.context.index])
				}), (function(e, l) {
					e(l, 0, 0, n.zb(l, 5).ngClassUntouched, n.zb(l, 5).ngClassTouched, n.zb(l, 5).ngClassPristine, n.zb(l, 5).ngClassDirty, n.zb(l, 5).ngClassValid, n.zb(l, 5).ngClassInvalid, n.zb(l, 5).ngClassPending)
				}))
			}

			function f(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 10, "div", [
					["class", "padding"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 9, "li", [
					["class", "each-option hide-x"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.selectOption(e.context.$implicit, e.context.index) && n), n
				}), null, null)), n.ob(2, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(3, {
					"selected-bg": 0
				}), (e()(), n.gb(16777216, null, null, 1, null, m)), n.ob(5, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(6, 0, null, null, 4, "label", [
					["class", "padding-left cursor hide-x"]
				], null, null, null, null, null)), n.ob(7, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(8, {
					width90: 0,
					width100: 1
				}), n.ob(9, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.Hb(10, null, ["", ""]))], (function(e, l) {
					var t = l.component,
						n = e(l, 3, 0, t.selectedArray[l.context.index]);
					e(l, 2, 0, "each-option hide-x", n), e(l, 5, 0, "multi" === t.type);
					var i = e(l, 8, 0, "multi" === t.type, "multi" !== t.type);
					e(l, 7, 0, "padding-left cursor hide-x", i), e(l, 9, 0, t.styles && t.styles.labelFont ? t.styles.labelFont : "")
				}), (function(e, l) {
					e(l, 10, 0, l.context.$implicit.label)
				}))
			}

			function v(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, [
					[2, 0],
					["selectChild", 1]
				], null, 11, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(2, {
					options: 0,
					ap_options: 1
				}), (e()(), n.pb(3, 0, null, null, 8, "div", [
					["class", "sdouter"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, g)), n.ob(5, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(6, 0, null, null, 5, "ul", [], null, null, null, null, null)), (e()(), n.pb(7, 0, null, null, 2, "div", [
					["class", "selectcheck"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, b)), n.ob(9, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, f)), n.ob(11, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !t.overLayClass, "ap_options" === t.overLayClass);
					e(l, 1, 0, n), e(l, 5, 0, "multi" === t.type || !0 === t.search), e(l, 9, 0, "multi" === t.type), e(l, 11, 0, t.optionArray)
				}), null)
			}

			function _(e) {
				return n.Jb(0, [n.Fb(402653184, 1, {
					selectToggle: 0
				}), n.Fb(671088640, 2, {
					selectChild: 0
				}), (e()(), n.pb(2, 0, null, null, 18, "div", [
					["class", "main-container"]
				], null, null, null, null, null)), n.ob(3, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(4, {
					profileDropDown: 0
				}), (e()(), n.pb(5, 0, [
					[1, 0],
					["selectToggle", 1]
				], null, 13, "div", [], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "click" === l && (n = !1 !== (i.disabled ? "" : i.mySelectBoxOpen()) && n), n
				}), null, null)), n.ob(6, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(7, {
					mydropdown: 0,
					ap_mydropdown: 1,
					disabled_dd: 2
				}), n.ob(8, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, s)), n.ob(10, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, r)), n.ob(12, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, u)), n.ob(14, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, c)), n.ob(16, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, d)), n.ob(18, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, v)), n.ob(20, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 4, 0, "profile_select" === t.dropDownClass);
					e(l, 3, 0, "main-container", n);
					var i = e(l, 7, 0, !t.dropDownClass, "ap_mydropdown" === t.dropDownClass, t.disabled);
					e(l, 6, 0, i), e(l, 8, 0, t.styles), e(l, 10, 0, t.selectedItems && 0 === t.selectedItems.length), e(l, 12, 0, t.selectedItems && 1 === t.selectedItems.length), e(l, 14, 0, t.selectedItems && t.selectedItems.length >= 2), e(l, 16, 0, !(t.dropdownstyle && t.dropdownstyle.arrowIcon)), e(l, 18, 0, t.dropdownstyle && t.dropdownstyle.arrowIcon), e(l, 20, 0, !0 === t.filter_active)
				}), null)
			}
		},
		"7lOW": function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("Pj5t"),
				o = t("/uwM"),
				a = t("SVse");
			t("HMdK"), t.d(l, "a", (function() {
				return s
			})), t.d(l, "b", (function() {
				return d
			}));
			var s = n.nb({
				encapsulation: 2,
				styles: [
					[".submitBtn{font-weight:700;height:40px;font-size:16px;border-radius:2px;position:relative;font-family:Roboto}.formSubmit{padding:10px;height:100%;width:100%;font-size:15px;background:var(--one);color:var(--white);border:none;cursor:pointer}.bfWeight:before{font-weight:800}.disabled{cursor:not-allowed!important;opacity:.7}.iconPos{font-size:16px;margin-right:5px}button:focus-visible{outline:2px solid var(--seven)}.jcc{justify-content:center}@media screen and (min-device-width:641px) and (max-device-width:1024px){.btnprop{font-size:13px}}@media screen and (max-device-width:992px){.formSubmit{font-size:12px}}.loader-cont{position:absolute;top:0;left:0;right:0;bottom:0;justify-content:center;align-items:center;display:flex;z-index:10;background-color:var(--white)}.loader{width:18px;height:18px}"]
				],
				data: {}
			});

			function r(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "iconPos"]
				], [
					[8, "innerHTML", 1]
				], null, null, null, null))], null, (function(e, l) {
					e(l, 0, 0, l.component.btnProperties.showIcon)
				}))
			}

			function u(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(1, null, ["", ""]))], null, (function(e, l) {
					e(l, 1, 0, l.component.btnProperties.btnName)
				}))
			}

			function c(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "loader-cont"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 2, "div", [
					["class", "loader"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "app-loader", [
					["type", "type3"]
				], null, null, null, i.b, i.a)), n.ob(3, 114688, null, 0, o.a, [], {
					type: [0, "type"]
				}, null)], (function(e, l) {
					e(l, 3, 0, "type3")
				}), null)
			}

			function d(e) {
				return n.Jb(0, [n.Fb(402653184, 1, {
					button: 0
				}), (e()(), n.pb(1, 0, [
					[1, 0],
					["button", 1]
				], null, 11, "button", [
					["class", "submitBtn formSubmit"]
				], [
					[8, "id", 0],
					[8, "tabIndex", 0],
					[8, "disabled", 0]
				], [
					[null, "keyup.enter"],
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "keyup.enter" === l && (n = !1 !== i.emitCall(i.btnProperties.btnName) && n), "click" === l && (n = !1 !== i.emitCall(i.btnProperties.btnName) && n), n
				}), null, null)), n.ob(2, 278528, null, 0, a.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(3, {
					disabled: 0,
					butIcon: 1
				}), n.ob(4, 278528, null, 0, a.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(5, {
					"margin-left": 0,
					padding: 1,
					color: 2,
					"font-size": 3,
					background: 4,
					border: 5,
					width: 6,
					"font-weight": 7
				}), (e()(), n.pb(6, 0, null, null, 4, "div", [
					["class", "container jcc"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, r)), n.ob(8, 16384, null, 0, a.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, u)), n.ob(10, 16384, null, 0, a.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, c)), n.ob(12, 16384, null, 0, a.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 3, 0, t.btnProperties && "true" === t.btnProperties.disable || !0 === t.disable && (!(t.btnProperties && t.btnProperties.disable) || "true" === (t.btnProperties && t.btnProperties.disable)), t.icons);
					e(l, 2, 0, "submitBtn formSubmit", n);
					var i = e(l, 5, 0, t.btnProperties.marginleft, t.padding, t.btnProperties && t.btnProperties.fontColor ? t.btnProperties.fontColor : t.fontColor, t.fontSize, t.btnProperties && t.btnProperties.background ? t.btnProperties.background : t.background, t.btnProperties && t.btnProperties.border ? t.btnProperties.border : "", t.btnProperties && t.btnProperties.width ? t.btnProperties.width : "", t.btnProperties && t.btnProperties.fontWeight ? t.btnProperties.fontWeight : "");
					e(l, 4, 0, i), e(l, 8, 0, t.icons && t.btnProperties && t.btnProperties.showIcon), e(l, 10, 0, t.btnProperties && t.btnProperties.btnName), e(l, 12, 0, t.loading)
				}), (function(e, l) {
					var t = l.component;
					e(l, 1, 0, n.rb(1, "", t.id ? t.id : "", ""), n.rb(1, "", t.tabindex ? t.tabindex : "0", ""), t.btnProperties && t.btnProperties.disable ? "true" === t.btnProperties.disable : t.disable)
				}))
			}
		},
		AytR: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			const n = {
				production: !0,
				HOST: {
					COOKIE_LINK: "https://api.examly.io/api",
					link: "https://api.examly.io/api",
					link2: "https://service-fb-examly-io-7tvaoi4e5q-uk.a.run.app/api",
					HOST_LINK: "https://api.examly.io/api",
					SOCKET_LINK: "wss://qqpy0fj9dj.execute-api.us-east-1.amazonaws.com/prod",
					IDE_domain: "examlyiopb.examly.io",
					RECOGN_LINK: "https://audio-recognition-7tvaoi4e5q-uk.a.run.app",
					MS_drives: "https://drives.examly.io/api",
					COE_HOST_LINK: "https://coe-micro-service-7tvaoi4e5q-uc.a.run.app/api"
				},
				FireBaseKeys: {
					apiKey: "AIzaSyAkr8brtk7ROyrQKwJJ3VllLonn7eF5gPM",
					authDomain: "examly-push.firebaseapp.com",
					databaseURL: "https://examly-push.firebaseio.com",
					projectId: "examly-push",
					storageBucket: "examly-push.appspot.com",
					messagingSenderId: "41726353840",
					appId: "1:41726353840:web:fc55659a4eff056a"
				},
				cloud_provider_queue: {
					QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-cloud-provider-prod",
					region: "us-east-1"
				},
				event_stream: {
					StreamName: "examly-prod-stream-event",
					region: "us-east-1"
				},
				submit_stream: {
					StreamName: "examly-prod-stream-submit",
					region: "us-east-1"
				},
				vi_stream: {
					StreamName: "examly-prod-vi-submit",
					region: "us-east-1"
				},
				program_compiler_handler: {
					cloudUrl: "https://compiler-handler-7tvaoi4e5q-uk.a.run.app"
				},
				program_compile_queue: {
					QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-prod-program-compile",
					region: "us-east-1"
				},
				essay_compile_queue: {
					QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-prod-essay-compile",
					region: "us-east-1"
				},
				debugger_queue: {
					QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-prod-debugger",
					region: "us-east-1"
				},
				speed_test: "https://us-east4-examly-events.cloudfunctions.net/ghj-cvbnm-uiop-prod-ghj-cvbnm-uiop",
				razorpay: {
					key: "rzp_live_uxjVE0KhCFdZeO"
				},
				instructionTime: 25,
				g_measurement_id: "G-0FNBXHRR67",
				s3ObjectPrefix: "https://s3.amazonaws.com/exams-media/",
				s3ObjectVerifiedPic: "https://s3.amazonaws.com/prod-student-verification-images/",
				s3Objectstudentassets: "https://s3.amazonaws.com/prod-users-asset/",
				s3ObjectDriveBucket: "https://s3.amazonaws.com/examly-data/",
				s3ObjectProctorBucket: "https://s3.amazonaws.com/prod-proctoring-screen/",
				gitHub: {
					authURL: "https://github.com/login/oauth/authorize?scope=read:user%20repo%20write:public_key%20user%20read:user%20user:email%20repo&allow_signup=true&client_id=",
					clientID: "fed95352b3a11893ccf8",
					returnURL: "https://neocoder.examly.io/githubredirect-handler?id=",
					organization_name: "iamneo-production"
				}
			}
		},
		CHyA: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		EFyh: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return d
			}));
			var n = t("IheW"),
				i = t("AytR"),
				o = t("2Vo4"),
				a = t("z6cu"),
				s = t("JIr8"),
				r = t("4WDQ"),
				u = t("8Y7J"),
				c = t("cUpR");
			class d {
				constructor(e, l, t) {
					this.http = e, this.title = l, this.globalService = t, this.api = i.a.HOST.link, this.setResetLogin = !1, this.getEmail = new o.a(null), this.userInfo = new o.a(null), this.Passvariable = new o.a(null), this.verificationTimeLeft = 0, this.userData = JSON.parse(localStorage.getItem("token"))
				}
				getSchoolLoginDetails() {
					return this.http.get(this.api + "/school/login")
				}
				loginStatus() {
					return localStorage.getItem("token")
				}
				usersLogin(e) {
					return this.http.post(this.api + "/users/login", e)
				}
				checkotp(e) {
					const l = JSON.parse(localStorage.getItem("school_details"));
					return l && l.school_id && (e.school_id = l.school_id), this.http.post(this.api + "/users/checkotp", e)
				}
				networkStatus() {
					return this.http.get(this.api + "/school/status")
				}
				setLocalstorage(e) {
					return new Promise((l, t) => {
						let n;
						e && e.data && this.globalService.getAdmissionReportSchoolDetails().subscribe(t => {
							t && (n = {
								school_domain: e.data.school_domain,
								school_code: e.data.school_code,
								school_id: e.data.school_id,
								school_name: e.data.school_name,
								push_enabled: e.data.push_enabled,
								schools_metadata: e.data.schools_metadata,
								captcha: e.data && e.data.captcha ? e.data.captcha : "",
								institute_type: e.data.institute_type,
								purpose: e.data.purpose,
								enable_features: e.data.enable_features,
								pwa_short_name: e.data.pwa_short_name,
								drive_restrictions: e.data.drive_restrictions,
								admission_report_permission: t
							}, this.title.setTitle(e.data.pwa_short_name ? e.data.pwa_short_name : "Examly"), localStorage.getItem("school_details") && localStorage.removeItem("school_details"), n = JSON.stringify(n), localStorage.setItem("school_details", n), this.schoolData = JSON.parse(localStorage.getItem("school_details")), l(!0))
						})
					})
				}
				sendSignup(e) {
					return this.http.post(this.api + "/school/studentsignup", e)
				}
				checkEmailExist(e) {
					return this.http.post(this.api + "/signin/lookup", e)
				}
				checkEmailExists(e, l) {
					let t;
					return this.schoolData || (this.schoolData = JSON.parse(localStorage.getItem("school_details"))), t = this.schoolData, this.http.post(this.api + "/signin/lookup", {
						email: e,
						school_id: t.school_id,
						school_code: t.school_code,
						googleToken: l
					})
				}
				login(e) {
					return this.http.post(this.api + "/signin/verify", e)
				}
				loginUser(e, l) {
					let t;
					return this.schoolData || (this.schoolData = JSON.parse(localStorage.getItem("school_details"))), t = this.schoolData, this.http.post(this.api + "/signin/verify", {
						hash: this.userInfo.value.key,
						password: l,
						school_id: t.school_id,
						school_code: t.school_code,
						googleToken: e
					})
				}
				getschool_id() {
					const e = JSON.parse(localStorage.getItem("token"));
					let l;
					return e ? l = e.school_branch_department_users[0].school_id : this.schoolData && (l = this.schoolData.school_id), l
				}
				sendForgotPasswordLink(e) {
					return this.http.post(this.api + "/users/sendemailforforget", e)
				}
				checkEmailOtp(e) {
					return this.http.post(this.api + "/users/checkotp", e)
				}
				setPassword(e) {
					return this.http.post(this.api + "/users/setpassword", e)
				}
				sendActivationLink(e) {
					return this.http.post(this.api + "/resendLink", e)
				}
				userPermissionList(e) {
					return this.http.get(this.api + "/school/" + e.purpose + "/userpermissionList", this.options(e)).pipe(Object(s.a)(this.handleError.bind(this)))
				}
				handleError(e) {
					if (e.error instanceof ErrorEvent);
					else if (e && 401 === e.status) {
						this.globalService.commonGrowl.next({
							severity: "error",
							summary: "Session Expired!!",
							detail: "Please Login again"
						});
						for (let e = localStorage.length - 1; e > -1; e -= 1) {
							const l = localStorage.key(e);
							l && "session_data" !== l && localStorage.removeItem(l)
						}
						setTimeout(() => {
							const e = window.location.host;
							"app.examly.net" === e || "app.exam.ly" === e || "app.examly.io" === e || "app.examly.test" === e.split(":")[0] ? "/admin/login" !== window.location.pathname && (window.location.href = "/admin/login") : "/login" !== window.location.pathname && (window.location.href = "/login")
						}, 3e3)
					}
					return Object(a.a)("Something bad happened; please try again later.")
				}
				options(e) {
					return {
						headers: new n.h({
							"Content-Type": "application/json",
							Authorization: e && e.token ? e.token : this.getUserToken()
						})
					}
				}
				getUserToken() {
					const e = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : this.userDetails;
					return e && e.token ? e.token : ""
				}
				loginwithunp(e) {
					return e.school_code = this.schoolData ? this.schoolData.school_code : JSON.parse(localStorage.getItem("school_details")).school_code, this.http.post(this.api + "/users/login", e)
				}
				schoolstatus(e, l) {
					return this.http.post(this.api + "/schoolStatus/", {
						school_id: e
					}, this.options(l))
				}
				getPpaProfile(e, l, t) {
					const n = new URLSearchParams;
					return n.set("s_id", e), n.set("school_id", l), n.set("user_id", t.user_id), this.options(t).search = n, this.http.get(this.api + "/users/getprofile", this.options(t)).pipe(Object(s.a)(this.handleError.bind(this)))
				}
				getsso(e) {
					return this.http.post(this.api + "/users/getsso", e)
				}
				logout(e) {
					return this.http.put(this.api + "/logout", e, this.options(this.userData))
				}
				findOS() {
					let e = "Unknown OS";
					return -1 != navigator.appVersion.indexOf("Win") && (e = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && (e = "MacOS"), -1 != navigator.appVersion.indexOf("X11") && (e = "UNIX"), -1 != navigator.appVersion.indexOf("Linux") && (e = "Linux"), -1 != navigator.appVersion.indexOf("Android") && (e = "Android"), -1 == navigator.appVersion.indexOf("iPhone") && -1 == navigator.appVersion.indexOf("iPad") || (e = "iOS"), e
				}
				checkIfStudentExist(e) {
					return this.http.post(this.api + "/user/exist", e)
				}
			}
			d.ngInjectableDef = u.R({
				factory: function() {
					return new d(u.V(n.c), u.V(c.j), u.V(r.a))
				},
				token: d,
				providedIn: "root"
			})
		},
		EPgW: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return p
			}));
			var n = t("mrSG"),
				i = t("IheW"),
				o = t("2Vo4"),
				a = t("HDdC"),
				s = t("4WDQ"),
				r = t("EFyh"),
				u = t("AytR"),
				c = t("8Y7J"),
				d = t("iInd");
			class p {
				constructor(e, l, t, n) {
					this.http = e, this.globalService = l, this.ls = t, this.router = n, this.api_link = u.a.HOST.link, this.recognLink = u.a.HOST.RECOGN_LINK, this.compile_url = u.a.program_compiler_handler.cloudUrl, this.programmingLangs = [{
						label: "Bash (5.1)",
						value: "Bash",
						aceCode: "csharp",
						mainFile: "file.sh",
						code: 11
					}, {
						label: "C# (6.10)",
						value: "C#",
						aceCode: "csharp",
						mainFile: "file.cs",
						code: 10
					}, {
						label: "C (17)",
						value: "C",
						aceCode: "c_cpp",
						mainFile: "file.cpp",
						code: 7
					}, {
						label: "C++ (17)",
						value: "C++",
						aceCode: "c_cpp",
						mainFile: "file.cpp",
						code: 7
					}, {
						label: "Clojure (1.4)",
						value: "Clojure",
						aceCode: "clojure",
						mainFile: "file.clj",
						code: 2
					}, {
						label: "Go (1.7)",
						value: "Go",
						aceCode: "golang",
						mainFile: "file.go",
						code: 6
					}, {
						label: "Java (11)",
						value: "Java",
						aceCode: "java",
						mainFile: "file.java",
						code: 8
					}, {
						label: "Java JDBC connectivity (11)",
						value: "Java_jdbc",
						aceCode: "java",
						mainFile: "file.java",
						code: 19
					}, {
						label: "MySQL (8.0)",
						value: "MySQL",
						aceCode: "mysql",
						mainFile: "file.sql",
						code: 13
					}, {
						label: "Objective-C (4.8)",
						value: "Objective-C",
						aceCode: "objectivec",
						mainFile: "file.m",
						code: 12
					}, {
						label: "Perl (5.0)",
						value: "Perl",
						aceCode: "perl",
						mainFile: "file.pl",
						code: 14
					}, {
						label: "PHP (7.4)",
						value: "PHP",
						aceCode: "php",
						mainFile: "file.php",
						code: 3
					}, {
						label: "Plain Javascript 10)",
						value: "Plain Javascript",
						aceCode: "javascript",
						mainFile: "file.js",
						code: 4
					}, {
						label: "Python (3.8)",
						value: "Python",
						aceCode: "python",
						mainFile: "file.py",
						code: 0
					}, {
						label: "Ruby (1.9)",
						value: "Ruby",
						aceCode: "ruby",
						mainFile: "file.rb",
						code: 1
					}, {
						label: "Rust (1.27)",
						value: "Rust",
						aceCode: "rust",
						mainFile: "file.rs",
						code: 15
					}, {
						label: "VB.NET (4.7)",
						value: "VB.NET",
						aceCode: "vbscript",
						mainFile: "file.vb",
						code: 9
					}, {
						label: "R (3.5)",
						value: "R",
						aceCode: "r",
						mainFile: "file.r",
						code: 16
					}, {
						label: "MySQL (8.0) Verbose",
						value: "MySQL Verbose",
						aceCode: "mysql",
						mainFile: "file.sql",
						code: 18
					}, {
						label: "C (17) (std=c++17)",
						value: "Cc++11",
						aceCode: "c_cpp",
						mainFile: "file.cpp",
						code: 20
					}, {
						label: "C++ (17) (std=c++17)",
						value: "C++c++11",
						aceCode: "c_cpp",
						mainFile: "file.cpp",
						code: 20
					}], this.progFileBasedLangs = [{
						label: "Java",
						value: "Java",
						aceCode: "java",
						defaultFiles: [{
							label: "Main.java",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "JDBC",
						value: "Javadb",
						aceCode: "java",
						defaultFiles: [{
							label: "Main.java",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Python",
						value: "Python",
						aceCode: "python",
						defaultFiles: [{
							label: "main.py",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Python with mysql",
						value: "Pythondb",
						aceCode: "python",
						defaultFiles: [{
							label: "main.py",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Python with Datascience",
						value: "PyDatascience",
						aceCode: "python",
						defaultFiles: [{
							label: "main.py",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "R",
						value: "R",
						aceCode: "r",
						defaultFiles: [{
							label: "main.R",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "JavaScript",
						value: "JavaScript",
						aceCode: "javascript",
						defaultFiles: [{
							label: "index.js",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Verilog",
						value: "Verilog",
						aceCode: "Verilog",
						defaultFiles: [{
							label: "code.v",
							data: "",
							id: "main",
							blockdelete: !0
						}, {
							label: "codetb.v",
							data: "",
							id: "testbench",
							blockdelete: !0
						}]
					}, {
						label: "Vhdl",
						value: "Vhdl",
						aceCode: "Vhdl",
						defaultFiles: [{
							label: "code.vhdl",
							data: "",
							id: "main",
							blockdelete: !0
						}, {
							label: "codetb.vhdl",
							data: "",
							id: "testbench",
							blockdelete: !0
						}]
					}, {
						label: "JavaScript with mongodb",
						value: "JavaScriptMongo",
						aceCode: "javascript",
						defaultFiles: [{
							label: "index.js",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Mongodb Standalone",
						value: "Mongo",
						aceCode: "javascript",
						defaultFiles: [{
							label: "mongo.js",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Java with Oracledb",
						value: "JavaOracledb",
						aceCode: "java",
						defaultFiles: [{
							label: "Main.java",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Oracledb Standalone",
						value: "Oracledb",
						aceCode: "mysql",
						defaultFiles: [{
							label: "oracle.sql",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "DotNET with MsSQL",
						value: "DotNetMssql",
						aceCode: "DotNetMssql",
						defaultFiles: [{
							label: "Program.cs",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "SQL Server (2019)",
						value: "SqlServer",
						aceCode: "mysql",
						defaultFiles: [{
							label: "main.sql",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "C++",
						value: "CPP",
						aceCode: "cpp",
						defaultFiles: [{
							label: "Main.cpp",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Cassandra Standalone",
						value: "Cassandra",
						aceCode: "Cassandra",
						defaultFiles: [{
							label: "main.cql",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Java Cassandra Connectivity",
						value: "JavaCassandra",
						aceCode: "java",
						defaultFiles: [{
							label: "Main.java",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "MySQL (8.0)",
						value: "MySQL",
						aceCode: "mysql",
						defaultFiles: [{
							label: "file.sql",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "PostgreSQL (13.6)",
						value: "PSQL",
						aceCode: "mysql",
						defaultFiles: [{
							label: "main.sql",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Gnu Prolog",
						value: "GnuProlog",
						aceCode: "prolog",
						defaultFiles: [{
							label: "main.pg",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Cobol",
						value: "Cobol",
						aceCode: "cobol",
						defaultFiles: [{
							label: "main.cbl",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}, {
						label: "Scala",
						value: "Scala",
						aceCode: "scala",
						defaultFiles: [{
							label: "Main.scala",
							data: "",
							id: "main",
							blockdelete: !0
						}]
					}], this.complexities = [{
						label: "O(1)",
						value: 1
					}, {
						label: "O(loglog N)",
						value: 2
					}, {
						label: "O(log N)",
						value: 3
					}, {
						label: "O(N)",
						value: 4
					}, {
						label: "O(N log N)",
						value: 5
					}, {
						label: "O(N^2)",
						value: 6
					}, {
						label: "O(N^C)",
						value: 7
					}], this.editor_theme = "ace/theme/monokai", this.isOffline = new o.a(!1), this.isPresentationChange = new o.a(0), this.isWindowChange = new o.a(!1), this.isWindowResize = new o.a(!1), this.updateQuestionCount = new o.a(!1), this.topicAnalysisDisable = ["6e9f386c-f4f2-4f17-a400-84830a96c52d", "69cb8138-b47b-4cd0-98b8-44dbd5da2b3c"], this.markDisable = ["b105beab-33a5-41df-b8e2-943e10d1eb76"], this.projectHeaderDisable = ["28eded5d-1a5f-4ff9-97b2-d40ca32ab5f6", "fa4cb1e4-ce65-4288-91e0-1468e724cc56"], this.embedSchoolIds = ["b105beab-33a5-41df-b8e2-943e10d1eb76", "f061d0d2-2b67-4249-85a4-1a5a845c274b", "c1201bea-e18b-49e9-a604-dd3d96f40042", "de1e754f-d84c-45f3-a27a-2a381be77e09", "99449c5f-0ee5-4211-a326-7881cb9e4387"], this.crispVideoEnabledSchools = ["158608c5-6868-4850-8baf-f1da3d041bb2", "2d016bdf-3b5f-4482-bcac-fe60e17cfa41", "513a4bac-95a4-4863-8b8b-7a0f38c172c5", "29d3ca55-dccd-4151-9f73-a8dd1c81d7ec"], this.ipSkipSchools = ["f515cb79-3b45-4acf-a78b-d972f34b31df", "fe6502f0-dfe5-4ec3-b181-3e8e34b19894"], this.isTestPaused = !1, this.redirectToInstaSchools = ["ea11b177-c518-4467-9c3f-e721e26506a8", "781936e1-7cba-4666-a975-0a7ec447cace"], this.driveCustomLables = ["781936e1-7cba-4666-a975-0a7ec447cace", "d5986deb-f358-4156-8ac0-373bd93591ae"], this.POSENET_CONFIG = {
						decodingMethod: "multi-person",
						flipPoseHorizontal: !0,
						minPoseConfidence: .25,
						minPartConfidence: .15,
						maxPoseDetections: 5,
						nmsRadius: 30,
						showVideo: !1,
						showPoints: !1
					}, this.NET_SPEED_TEST_SIZE = 2, this.PROC_DB_CONFIG = {
						dbName: "data",
						objectName: "pi",
						maxImgCount: 30,
						db: void 0
					}, this.PROC_ERR_CONFIG = {
						reconnectMaxCount: 3,
						reconnectInterval: 300
					}, this.webcamBlackList = ["OBS Virtual Camera", "AlterCam Virtual Camera"], this.FACEAPI_CONFIG = {
						inputSize: 320,
						scoreThreshold: .5,
						distance: .5,
						schoolIds: ["158608c5-6868-4850-8baf-f1da3d041bb2", "513a4bac-95a4-4863-8b8b-7a0f38c172c5", "3caaf750-d2be-4174-97f5-ee646ad838d3", "5fd4397f-29d0-47b3-b877-245b55f6fcb3"]
					}, this.externalScoresArray = ["learn.wileynxt", "itrackglobal", "www.wileynxt.com", "uat.wileynxt.com"], this.BLAZEFACE_CONFIG = {
						minPoseConfidence: .95,
						minAngleConfidence: 25,
						MODEL_HEAD_EAR_COORD_X: .7,
						MODEL_HEAD_RIGHT_EYE_COORD: [.3, .3, .7],
						MODEL_HEAD_BOUNDING_SPHERE_CENTER_COORD: [0, .3, .3],
						MODEL_HEAD_BOUNDING_SPHERE_RADIUS: 1.35
					}, this.setUserDetails()
				}
				setUserDetails() {
					this.userData = JSON.parse(localStorage.getItem("token")), this.schoolData = JSON.parse(localStorage.getItem("school_details")), this.studentData = JSON.parse(localStorage.getItem("studentData")), this.ppaData = JSON.parse(localStorage.getItem("ppaData"))
				}
				removeCopyPasteHandler() {
					window.removeEventListener("copy", this.handleCopy, !0), window.removeEventListener("cut", this.handleCopy, !0), window.removeEventListener("paste", this.handlePaste, !0), window.removeEventListener("drop", this.handlePaste, !0), window.removeEventListener("dragstart", this.handleDragStart, !0)
				}
				copyPasteHandler() {
					this.disableCopyPaste = !0, window.addEventListener("copy", this.handleCopy, !0), window.addEventListener("cut", this.handleCopy, !0), window.addEventListener("paste", this.handlePaste, !0), window.addEventListener("drop", this.handlePaste, !0), window.addEventListener("dragstart", this.handleDragStart, !0)
				}
				handleCopy(e) {
					document.getSelection(), "/project" === window.location.pathname && this.projectData && this.projectData.image && this.projectData.image.includes("jupyter") || (e.clipboardData.setData("text/plain", "Could not copy"), e.preventDefault())
				}
				handlePaste(e) {
					e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), document.execCommand("insertTEXT", !1, this.copiedText)
				}
				removePasteHandler() {
					window.removeEventListener("paste", this.handlePaste, !0)
				}
				handleDragStart(e) {
					e.dataTransfer.clearData(), e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation()
				}
				httpRequestOptions() {
					return {
						headers: new i.h({
							"Content-Type": "application/json",
							Authorization: this.userData ? this.userData.token : ""
						})
					}
				}
				onlineHandle() {
					this.isOffline.next(!1), this.fireStoredEvent()
				}
				offlineHandle() {
					this.isOffline.next(!0)
				}
				detectOffline() {
					window.ononline = this.onlineHandle.bind(this), window.onoffline = this.offlineHandle.bind(this)
				}
				removeDetectOffline() {
					this.isOffline.next(!1), window.ononline = null, window.onoffline = null
				}
				presentationHandler() {
					navigator.userAgent.includes("SEB") ? this.isPresentationChange.next(0) : this.isPresentationChange.next(this.presentationAvailability ? this.presentationAvailability.value ? 1 : 0 : 2), this.testData.client_data.hasExternalMonitor = this.isPresentationChange.getValue()
				}
				detectPresentation() {
					return new Promise((e, l) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							if (window.PresentationRequest) {
								const l = new window.PresentationRequest(window.location.href);
								this.presentationAvailability = yield l.getAvailability(), this.presentationAvailability ? (this.isPresentationChange.next(this.presentationAvailability.value ? 1 : 0), this.testData.client_data.hasExternalMonitor = this.isPresentationChange.getValue(), this.presentationAvailability.onchange = this.presentationHandler.bind(this), e(this.presentationAvailability.value)) : (this.isPresentationChange.next(2), this.testData.client_data.hasExternalMonitor = 2, e(!1))
							} else this.isPresentationChange.next(2), this.testData.client_data.hasExternalMonitor = 2, e(!1)
						} catch (l) {
							this.isPresentationChange.next(2), this.testData.client_data.hasExternalMonitor = 2, e(!1)
						}
					})))
				}
				removePresentationLeave() {
					this.isPresentationChange.next(0), this.presentationAvailability && (this.presentationAvailability.onchange = void 0, this.presentationAvailability = void 0)
				}
				windowBlurHandler() {
					this.isWindowChange.next(!0)
				}
				detectWindowMove() {
					window.onblur = this.windowBlurHandler.bind(this)
				}
				removeWindowMove() {
					this.isWindowChange.next(!1), window.onblur = null
				}
				detectLeaveAlert() {
					window.onbeforeunload = e => {
						e.preventDefault(), e.returnValue = ""
					}
				}
				detectLeaveScreen() {
					window.onbeforeunload = e => {
						localStorage.removeItem("alreadyRedirected")
					}
				}
				removeLeaveAlert() {
					window.onbeforeunload = null
				}
				checkManualProcAllowed() {
					const e = JSON.parse(localStorage.getItem("token"));
					return !!(e && e.enable_features && e.enable_features.allow_manual_proctoring)
				}
				getLeaderboardConstants() {
					return new Promise((e, l) => {
						if (this.leaderBoardConstants) e(this.leaderBoardConstants);
						else {
							let l = "";
							l = u.a.production ? "prod-users-asset" : "dev-users-asset", this.http.get("https://s3.amazonaws.com/" + l + "/assets/lecvalues.json").subscribe(l => {
								this.leaderBoardConstants = l, e(l)
							}, l => {
								e(!1)
							})
						}
					})
				}
				downloadSonarQubeReport(e) {
					return new Promise((l, t) => {
						let n = "dev-users-asset";
						u.a.production && (n = "prod-users-asset"), this.http.get(`https://s3.amazonaws.com/${n}/sonarQubeReports/${this.schoolData.school_id}/${e}`).subscribe(e => {
							l(e)
						}, e => {
							l(!1)
						})
					})
				}
				loadDigitalFont() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						return yield this.globalService.loadScript("link", "https://images.examly.io/icons2/examly-digital.css", "text/css", "stylesheet", "examly-digital"), !0
					}))
				}
				getMathJax() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.MathJax) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/MathJax/tex-mml-chtml.js",
								type: "text/javascript",
								rel: "",
								id: "MathJax"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.MathJax = MathJax
						}
						return this.MathJax
					}))
				}
				getCryptoJS() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.CryptoJS) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/aes.js",
								type: "text/javascript",
								rel: "",
								id: "cryptojs"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.CryptoJS = CryptoJS
						}
						return this.CryptoJS
					}))
				}
				getJitsi() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.JitsiMeetExternalAPI) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/jitsi/external_api.js",
								type: "text/javascript",
								rel: "",
								id: "JitsiMeetExternalAPI"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.JitsiMeetExternalAPI = JitsiMeetExternalAPI
						}
						return this.JitsiMeetExternalAPI
					}))
				}
				getTwilio() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.TwilioMeetExternalAPI) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/twilio/twilio-video.min.js",
								type: "text/javascript",
								rel: "",
								id: "TwilioMeetExternalAPI"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.TwilioMeetExternalAPI = Twilio
						}
						return this.TwilioMeetExternalAPI
					}))
				}
				getQrCode() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.QRCode) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/qrcode/qrcode",
								type: "text/javascript",
								rel: "",
								id: "QRCode"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.QRCode = QRCode
						}
						return this.QRCode
					}))
				}
				getAWS() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.AWS) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/aws-sdk-2.676.0.min.js",
								type: "text/javascript",
								rel: "",
								id: "awssdk"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.AWS = AWS, this.AWS.events.on("retry", e => {
								if (e && e.error && "RequestTimeTooSkewed" === e.error.name) {
									var l = Date.parse(e.httpResponse.headers.date),
										t = (new Date).getTime();
									this.AWS.config.systemClockOffset = Math.abs(t - l), e.error.retryable = !0
								}
							})
						}
						return this.AWS
					}))
				}
				getBlockly() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.Blockly) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/blockly/blockly_compressed.min.js",
								type: "text/javascript",
								rel: "",
								id: "blockly",
								child: [{
									element: "script",
									url: "https://images.examly.io/scripts/blockly/blocks_compressed.min.js",
									type: "text/javascript",
									rel: "",
									id: "blocks"
								}, {
									element: "script",
									url: "https://images.examly.io/scripts/blockly/javascript_compressed.min.js",
									type: "text/javascript",
									rel: "",
									id: "javascriptGenerator"
								}, {
									element: "script",
									url: "https://images.examly.io/scripts/blockly/en.min.js",
									type: "text/javascript",
									rel: "",
									id: "english"
								}, {
									element: "script",
									url: "https://images.examly.io/scripts/blockly/python_compressed.min.js",
									type: "text/javascript",
									rel: "",
									id: "pythonGenerator"
								}, {
									element: "script",
									url: "https://images.examly.io/scripts/blockly/php_compressed.min.js",
									type: "text/javascript",
									rel: "",
									id: "PHPGenerator"
								}]
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id, e.child), this.Blockly = Blockly
						}
						return this.Blockly
					}))
				}
				getFirebase() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.firebase) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/FireBase/firebase-app.js",
								type: "text/javascript",
								rel: "",
								id: "firebaseapp",
								child: [{
									element: "script",
									url: "https://images.examly.io/scripts/FireBase/firebase-auth.js",
									type: "text/javascript",
									rel: "",
									id: "firebaseauth"
								}, {
									element: "script",
									url: "https://images.examly.io/scripts/FireBase/firebase-firestore.js",
									type: "text/javascript",
									rel: "",
									id: "firebasefirestore"
								}, {
									element: "script",
									url: "https://images.examly.io/scripts/FireBase/firebase-messaging.js",
									type: "text/javascript",
									rel: "",
									id: "firebasmessaging"
								}]
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id, e.child), this.firebase = firebase, this.firebase.initializeApp(u.a.FireBaseKeys)
						}
						return this.firebase
					}))
				}
				getDrawio() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.DiagramEditor) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/diagram/diagram-editor.js",
								type: "text/javascript",
								rel: "",
								id: "drawio"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.DiagramEditor = DiagramEditor
						}
						return this.DiagramEditor
					}))
				}
				getStackBlitz() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.StackBlitzSDK) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/stackblitz.js",
								type: "text/javascript",
								rel: "",
								id: "stackblitz"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.StackBlitzSDK = StackBlitzSDK
						}
						return this.StackBlitzSDK
					}))
				}
				getAce() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.ace) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/ace/ace.js",
								type: "text/javascript",
								rel: "",
								id: "aceeditor"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.ace = ace
						}
						return this.ace
					}))
				}
				getRecordRTC() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.RecordRTC) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/RecordRTC.js",
								type: "text/javascript",
								rel: "",
								id: "recordrtc"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.RecordRTC = RecordRTC
						}
						return this.RecordRTC
					}))
				}
				getQuill() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.Quill) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/quill-new.min.js",
								type: "text/javascript",
								rel: "",
								id: "quill-editor",
								child: [{
									element: "link",
									url: "https://images.examly.io/scripts/quill-new.snow.css",
									type: "text/css",
									rel: "stylesheet",
									id: "quill-style"
								}]
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id, e.child), this.Quill = Quill
						}
						return this.Quill
					}))
				}
				getInlineDebugger() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.createAllVisualizersFromHtmlAttrs) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/inline-debugger.js",
								type: "text/javascript",
								rel: "",
								id: "inlinedebugger"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), this.createAllVisualizersFromHtmlAttrs = createAllVisualizersFromHtmlAttrs
						}
						return this.createAllVisualizersFromHtmlAttrs
					}))
				}
				getPosenet() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.posenet) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/TensorFlow/tf.min.js",
								type: "text/javascript",
								rel: "",
								id: "tfjs",
								child: [{
									element: "script",
									url: "https://images.examly.io/scripts/TensorFlow/posenet.min.js",
									type: "text/javascript",
									rel: "",
									id: "tfjs-posenet"
								}]
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id, e.child), this.posenet = yield posenet.load()
						}
						return this.posenet
					}))
				}
				getSpeechCommands() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.speechCommands) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/TensorFlow/tf.min.js",
								type: "text/javascript",
								rel: "",
								id: "tfjs",
								child: [{
									element: "script",
									url: "https://images.examly.io/scripts/TensorFlow/speech-commands.min.js",
									type: "text/javascript",
									rel: "",
									id: "tfjs-speech-commands"
								}]
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id, e.child), this.speechCommands = speechCommands
						}
						return this.speechCommands
					}))
				}
				getFaceApi() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.faceapi) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/TensorFlow/faceApi/face-api.min.js",
								type: "text/javascript",
								rel: "",
								id: "tfjs-faceapi"
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id), yield faceapi.nets.tinyFaceDetector.loadFromUri("https://images.examly.io/scripts/TensorFlow/faceApi/weights"), yield faceapi.nets.faceLandmark68TinyNet.loadFromUri("https://images.examly.io/scripts/TensorFlow/faceApi/weights"), yield faceapi.nets.faceRecognitionNet.loadFromUri("https://images.examly.io/scripts/TensorFlow/faceApi/weights"), this.faceapi = faceapi
						}
						return this.faceapi
					}))
				}
				getBlazeFace() {
					return n.__awaiter(this, void 0, void 0, (function*() {
						if (!this.blazeFace) {
							const e = {
								element: "script",
								url: "https://images.examly.io/scripts/TensorFlow/blazeFace/tfjs.js",
								type: "text/javascript",
								rel: "",
								id: "tfjs-2.0",
								child: [{
									element: "script",
									url: "https://images.examly.io/scripts/TensorFlow/blazeFace/blazeface.min.js",
									type: "text/javascript",
									rel: "",
									id: "tfjs-blazeface"
								}]
							};
							yield this.globalService.loadScript(e.element, e.url, e.type, e.rel, e.id, e.child), this.blazeFace = yield blazeface.load({
								maxFaces: 100,
								iouThreshold: .5
							})
						}
						return this.blazeFace
					}))
				}
				authSDK() {
					return new Promise((e, l) => {
						this.http.get(this.api_link + "/getToken", this.httpRequestOptions()).subscribe(l => n.__awaiter(this, void 0, void 0, (function*() {
							const t = yield this.getCryptoJS();
							l = JSON.parse(t.AES.decrypt(l.data, this.userData.user_id).toString(t.enc.Utf8));
							const i = new Promise((e, t) => n.__awaiter(this, void 0, void 0, (function*() {
									if (l && l.c) {
										const t = yield this.getAWS();
										t.config.correctClockSkew = !0, t.config.region = u.a.debugger_queue.region, t.config.credentials = new t.CognitoIdentityCredentials({
											IdentityPoolId: l.c.IdentityPoolId,
											IdentityId: l.c.IdentityId,
											Logins: {
												"cognito-identity.amazonaws.com": l.c.Token
											}
										}), t.config.credentials.get(l => {
											e(!l)
										})
									} else e(!1)
								}))),
								o = new Promise((e, t) => n.__awaiter(this, void 0, void 0, (function*() {
									l && l.f ? (yield this.getFirebase()).auth().signInWithCustomToken(l.f).then(() => {
										e(!0)
									}).catch(l => {
										e(!1)
									}) : e(!1)
								})));
							Promise.all([i, o]).then(l => {
								e(!(!l[0] || !l[1]))
							})
						})), l => {
							e(!1)
						})
					})
				}
				getTestType() {
					return this.testData.test_type || (this.testData.test_type = "Rule Based Test" === this.testData.t_type ? "Dynamic" === this.testData.isTestruletype ? "dynamic" : "static" : "normal"), this.testData.test_type
				}
				checkAccessKey(e) {
					return new Promise((l, t) => {
						if (this.userData && this.testData) return this.http.post(this.api_link + "/student/" + this.userData.user_id + "/course/" + this.testData.c_id + "/test/" + this.testData.t_id + "/pretake", {
							access_key: e
						}, this.httpRequestOptions()).subscribe(e => {
							l(e)
						}, () => {
							t(!1)
						});
						l(!1)
					})
				}
				getBasicData() {
					return new Promise((e, l) => n.__awaiter(this, void 0, void 0, (function*() {
						this.testData.client_data = {
							OS: {
								name: "",
								version: ""
							},
							browser: {
								name: "",
								major: "",
								version: ""
							},
							Public_IP: ""
						}, Promise.all([this.getIpAddress(), this.getBrowserName(), this.getOS()]).then(l => {
							l && l.length && e(!!(l[0] && l[1] && l[2]))
						}).catch(l => {
							e(!1)
						})
					})))
				}
				getObject(e) {
					return new Promise((l, t) => this.http.get(e, {
						responseType: "text"
					}).subscribe(e => {
						l(e)
					}, e => {
						l(!1)
					}))
				}
				uploadUsingSDK(e, l, t) {
					return new a.a(n => {
						const i = new AWS.S3({
								httpOptions: {
									timeout: 3e5
								}
							}),
							o = {
								Bucket: "exams-media-stage",
								Key: e,
								Body: l
							};
						this.api_link.includes(".io") && (o.Bucket = "exams-media"), (e.includes("screen") || "proctoring" === t) && (o.Bucket = "dev-proctoring-screen", this.api_link.includes(".io") && (o.Bucket = "prod-proctoring-screen")), i.upload(o, {
							partSize: 5242880,
							queueSize: 1
						}, (e, l) => {
							e ? n.error(e) : (n.next({
								progress: 100,
								Key: l.Key
							}), n.complete())
						}).on("httpUploadProgress", e => {
							const l = parseInt((100 * e.loaded / e.total).toString(), 10);
							n.next({
								progress: l
							})
						})
					})
				}
				getIpAddress() {
					return new Promise((e, l) => {
						this.schoolData && this.ipSkipSchools.includes(this.schoolData.school_id) ? (this.testData.client_data.Public_IP = "", e(!0)) : this.http.get("https://icanhazip.com/", {
							responseType: "text"
						}).subscribe(l => {
							this.testData.client_data.Public_IP = l.trim(), e(!0)
						}, l => {
							this.http.get("https://api.ipify.org/", {
								responseType: "text"
							}).subscribe(l => {
								this.testData.client_data.Public_IP = l.toString().trim(), e(!0)
							}, l => {
								e(!1)
							})
						})
					})
				}
				getBrowserName() {
					return new Promise((e, l) => {
						let t = navigator.userAgent,
							n = navigator.appName,
							i = "" + parseFloat(navigator.appVersion),
							o = parseInt(navigator.appVersion, 10),
							a = -1,
							s = -1,
							r = -1; - 1 != (s = t.indexOf("OPR/")) ? (n = "Opera", i = t.substring(s + 4)) : -1 != (s = t.indexOf("Opera")) ? (n = "Opera", i = t.substring(s + 6), -1 != (s = t.indexOf("Version")) && (i = t.substring(s + 8))) : -1 != (s = t.indexOf("Edg")) ? (n = "Microsoft Edge", i = t.substring(s + 4)) : -1 != (s = t.indexOf("MSIE")) ? (n = "Microsoft Internet Explorer", i = t.substring(s + 5)) : -1 != (s = t.indexOf("Chrome")) ? (n = "Chrome", i = t.substring(s + 7)) : -1 != (s = t.indexOf("CriOS")) ? (n = "Chrome", i = t.substring(s + 6)) : -1 != (s = t.indexOf("Safari")) ? (n = "Safari", i = t.substring(s + 7), -1 != (s = t.indexOf("Version")) && (i = t.substring(s + 8))) : -1 != (s = t.indexOf("Firefox")) ? (n = "Firefox", i = t.substring(s + 8)) : (a = t.lastIndexOf(" ") + 1) < (s = t.lastIndexOf("/")) && (n = t.substring(a, s), i = t.substring(s + 1), n.toLowerCase() == n.toUpperCase() && (n = navigator.appName)), -1 != (r = i.indexOf(";")) && (i = i.substring(0, r)), -1 != (r = i.indexOf(" ")) && (i = i.substring(0, r)), o = parseInt("" + i, 10), isNaN(o) && (i = "" + parseFloat(navigator.appVersion), o = parseInt(navigator.appVersion, 10)), this.testData.client_data.browser.name = n, this.testData.client_data.browser.major = "" + o, this.testData.client_data.browser.version = i, e(!0)
					})
				}
				getOS() {
					return new Promise((e, l) => {
						let t = "Unknown OS"; - 1 != navigator.appVersion.indexOf("Win") && (t = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && (t = "MacOS"), -1 != navigator.appVersion.indexOf("X11") && (t = "UNIX"), -1 != navigator.appVersion.indexOf("Linux") && (t = "Linux"), -1 != navigator.appVersion.indexOf("Android") && (t = "Android"), -1 == navigator.appVersion.indexOf("iPhone") && -1 == navigator.appVersion.indexOf("iPad") || (t = "iOS"), this.testData.client_data.OS.name = t, e(!0)
					})
				}
				checkTestState() {
					let e = JSON.parse(localStorage.getItem("itl-" + this.testData.c_id + this.testData.t_id));
					return this.testData.client_data.ltiData = e || !1, this.http.post(this.api_link + "/mM5YsmcTM6Msoj5r", {
						user_id: this.userData.user_id,
						c_id: this.testData.c_id,
						t_id: this.testData.t_id,
						attempt_no: this.testData.attempt_no,
						client_data: this.testData.client_data,
						test_type: this.getTestType(),
						test_tracking_data: this.testData.test_tracking_data,
						retakeenable: this.testData.retakeenable,
						mod_id: this.testData.mod_id,
						sub_mod_id: this.testData.sub_mod_id
					}, this.httpRequestOptions())
				}
				getTestTakingDetail(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/testtakingdetails", {
							id: e
						}, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							if (e && e.success) {
								const l = yield this.getCryptoJS();
								e.data = l.AES.decrypt(e.data, this.userData.user_id).toString(l.enc.Utf8)
							}
							l(e)
						})), e => {
							l(!1)
						})
					})
				}
				startTest(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/9DECJfxqhu0cgJAQ", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							const t = yield this.getCryptoJS();
							e = JSON.parse(t.AES.decrypt(e.data, this.userData.user_id).toString(t.enc.Utf8)), l(e)
						})), e => {
							l(!1)
						})
					})
				}
				resumeTest(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/sEKMRyOJKjIzZbUa", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							const t = yield this.getCryptoJS();
							e = JSON.parse(t.AES.decrypt(e.data, this.userData.user_id).toString(t.enc.Utf8)), l(e)
						})), e => {
							l(!1)
						})
					})
				}
				generateSerachKeys(e) {
					let l = [];
					for (let t in e)
						if (e[t]) {
							let n = e[t];
							n = n.split(" "), n.forEach(e => {
								for (let t = 0; t < e.length; t += 1)
									for (let n = t + 1; n <= e.length; n += 1) l.push(e.substring(t, n))
							})
						} return l
				}
				setHistoryEvent(e) {
					return new Promise((l, t) => n.__awaiter(this, void 0, void 0, (function*() {
						(yield this.getFirebase()).firestore().collection("student_programming_events").add(JSON.parse(JSON.stringify({
							user_id: e.user_id,
							c_id: e.c_id,
							t_id: e.t_id,
							q_id: e.q_id,
							attempt_no: e.attempt_no,
							s_question_id: e.s_question_id,
							question_type: e.question_type,
							event_type: e.event_type,
							testcase_passed: e.testcase_passed,
							no_test_cases: e.no_test_cases,
							testcase_percentage: e.testcase_percentage,
							event_data: e.l_event_data,
							updatedAt: e.updatedAt
						}))).then(() => {
							l(!0)
						}).catch(e => {
							l(!1)
						})
					})))
				}
				fireStoredEvent() {
					return new Promise((e, l) => {
						let t = localStorage.getItem("session_data");
						if (t) {
							t = JSON.parse(t);
							const e = [],
								l = [];
							t.forEach((t, n) => {
								l.push(new Promise((l, n) => {
									this.hitHttpCall(t).then(n => {
										if (n) {
											let e, n, i = 0;
											t && t.payload && (e = t.payload.s_question_id ? t.payload.s_question_id : null, n = t.payload.event_type ? t.payload.event_type : null), "submit-program" !== n && "option-click" !== n || (this.testData.frozen_data.frozen_test_data.forEach(l => {
												l.questions.forEach(l => {
													l.s_question_id === e && (i++, l.online = !0)
												})
											}), i && this.updateQuestionCount.next(!0)), l(!0)
										} else e.push(t), l(!1)
									})
								}))
							}), Promise.all(l).then(() => {
								e && e.length ? localStorage.setItem("session_data", JSON.stringify(e)) : localStorage.removeItem("session_data")
							})
						} else e(!0)
					})
				}
				hitHttpCall(e) {
					return new Promise((l, t) => {
						const n = new i.h({
							"Content-Type": "application/json",
							Authorization: e.token
						});
						return "" === e.payload ? this.http.get(e.url, {
							headers: n
						}).subscribe(() => {
							l(!0)
						}, e => {
							l(!(!e || 401 !== e.status && 400 !== e.status))
						}) : this.http.post(e.url, e.payload, {
							headers: n
						}).subscribe(() => {
							l(!0)
						}, e => {
							l(!(!e || 401 !== e.status && 400 !== e.status))
						})
					})
				}
				storeInLocal(e) {
					const l = {
						payload: e,
						timestamp: Date.now(),
						url: u.a.HOST.link2 + "/question/all/event",
						token: this.userData.token
					};
					let t = localStorage.getItem("session_data");
					t ? (t = JSON.parse(t), t.push(l), localStorage.setItem("session_data", JSON.stringify(t))) : localStorage.setItem("session_data", JSON.stringify([l]))
				}
				setEvent(e) {
					return new Promise((l, t) => {
						this.http.post(u.a.HOST.link2 + "/question/all/event", e, this.httpRequestOptions()).subscribe(e => {
							l(e)
						}, l => {
							this.storeInLocal(e), t(!1)
						})
					})
				}
				setLastEvent(e, l) {
					return new Promise((t, i) => n.__awaiter(this, void 0, void 0, (function*() {
						"submit-program" !== l.event_type || "programming" !== l.question_type && "programming_file_based" !== l.question_type && "html_css_js" !== l.question_type && "frontend_technology" !== l.question_type && "diagram" !== l.question_type || this.setHistoryEvent(l);
						const n = (yield this.getFirebase()).firestore(),
							i = [];
						i.push(n.collection("student_questions").doc("" + e).set(JSON.parse(JSON.stringify(l)))), l.l_event_data && l.l_event_data.remaining_time && i.push(this.setEvent({
							s_question_id: e,
							event_type: l.event_type,
							event_data: JSON.stringify({
								answer: l.l_event_data.answer,
								remaining_time: {
									overall: l.l_event_data.remaining_time.overall,
									time_spent: l.l_event_data.remaining_time.time_spent,
									tabswitched: l.l_event_data.remaining_time.tabswitched,
									resume_no: l.l_event_data.remaining_time.resume_no,
									exp_resume: l.l_event_data.remaining_time.exp_resume,
									hasExternalMonitor: l.l_event_data.remaining_time.hasExternalMonitor
								}
							}),
							attempt_no: l.attempt_no,
							browser_createdAt: l.updatedAt
						})), Promise.all(i).then(() => {
							t({
								success: !0,
								s_question_id: l.s_question_id,
								event_type: l.event_type,
								sectionIndex: l.sectionIndex
							})
						}).catch(e => {
							t({
								success: !1,
								s_question_id: l.s_question_id,
								event_type: l.event_type,
								sectionIndex: l.sectionIndex
							})
						})
					})))
				}
				setLiveData(e) {
					return new Promise((l, t) => n.__awaiter(this, void 0, void 0, (function*() {
						const t = (yield this.getFirebase()).firestore(),
							n = Object.assign({}, JSON.parse(JSON.stringify(e)));
						t.collection(`school_live_metrics/${e.school_id}/live_course_test/${e.c_id}_${e.t_id}/live_students`).doc(e.user_id).set(n, {
							merge: !0
						}).then(() => {
							l(!0)
						}).catch(e => {
							console.log(e), l(!1)
						})
					})))
				}
				updateTestDailyDurationSpent(e) {
					return new Promise((l, t) => n.__awaiter(this, void 0, void 0, (function*() {
						const t = (yield this.getFirebase()).firestore();
						let n = new Date(e.updatedAt).toLocaleDateString("fr-CA", {
							timeZone: "Asia/Kolkata"
						});
						const i = n.split("-")[2] + "_" + n.split("-")[1] + "_" + n.split("-")[0],
							o = Object.assign({}, JSON.parse(JSON.stringify(e)));
						let a = {};
						e.attempt_no ? a[o.attempt_no] = o : a = o, t.collection(`students_dailytime_spent/${i}/schools/${e.school_id}/users/${e.user_id}/courses/${e.c_id}/entity`).doc(e.entity_id).set(a, {
							merge: !0
						}).then(() => {
							l(!0)
						}).catch(e => {
							console.log(e), l(!1)
						})
					})))
				}
				getURL(e) {
					return this.http.get(e)
				}
				testRating(e) {
					return this.http.post(this.api_link + "/test/student/rating", e, this.httpRequestOptions())
				}
				publishToStream(e) {
					return this.http.post(u.a.HOST.link2 + "/publishPubSub", e, this.httpRequestOptions())
				}
				publishToVIStream(e) {
					return this.http.post(u.a.HOST.link2 + "/vidPubSub", e, this.httpRequestOptions())
				}
				testSubmitBE(e, l, t, n, i, o) {
					return new Promise((a, s) => {
						this.http.post(this.api_link + "/school/" + e + "/student/" + n + "/course/" + l + "/test/" + t + "/submit/" + i, o, this.httpRequestOptions()).subscribe(e => {
							a(e)
						}, () => {
							a(!1)
						})
					})
				}
				sonarQubeReport(e) {
					return this.http.post(this.api_link + "/generateSonarQubeReport", e, this.httpRequestOptions())
				}
				reportQuestion(e) {
					return this.http.post(this.api_link + "/addfeedback", e, this.httpRequestOptions())
				}
				getTestPublicAnalysis(e) {
					return this.http.post(this.api_link + "/v2/test/student/publicresultanalysis", e)
				}
				getTestAnalysisById(e) {
					return this.http.post(this.api_link + "/v2/test/student/resultanalysis", {
						id: e
					}, this.httpRequestOptions())
				}
				getContent(e) {
					return this.http.get(this.api_link + "/get_contentbank/" + e, this.httpRequestOptions())
				}
				updateViewORDownloadCount(e) {
					return this.http.put(this.api_link + "/studentcontent/viewORdownloadCount", e, this.httpRequestOptions())
				}
				createInstance(e, l, t, n, i) {
					return this.http.post(this.api_link + "/courses/createInstance", {
						key: e,
						image: l,
						project_id: t,
						course_id: n,
						node_pool: i
					}, this.httpRequestOptions())
				}
				fetchCompileResult(e) {
					return this.http.post(this.compile_url, e)
				}
				createInstanceForTest(e) {
					return this.http.post(this.api_link + "/test/student/createInstance", {
						data: e
					}, this.httpRequestOptions())
				}
				getProject(e, l, t) {
					return this.http.post(this.api_link + "/courses/project", {
						project_id: e,
						c_id: l,
						user_id: t
					}, this.httpRequestOptions())
				}
				stopInstance(e, l, t) {
					return this.http.post(this.api_link + "/courses/stopInstance", {
						key: e,
						project_id: l,
						course_id: t
					}, this.httpRequestOptions())
				}
				stopInstanceBulk(e) {
					return this.http.post(this.api_link + "/test/student/stopInstance", {
						data: e
					}, this.httpRequestOptions())
				}
				instanceHeartBeat(e, l) {
					return this.http.post(this.api_link + "/courses/instanceHeartBeat", {
						key: e,
						id: l
					}, this.httpRequestOptions())
				}
				isSiteUp(e) {
					return this.http.post(this.api_link + "/courses/isReachable", {
						url: e
					}, this.httpRequestOptions())
				}
				submitProject(e) {
					return this.http.post(this.api_link + "/courses/submitproject", e, this.httpRequestOptions())
				}
				runTestCases(e) {
					return this.http.post(this.api_link + "/courses/runtestcase", e, this.httpRequestOptions())
				}
				runProjectTestCases(e) {
					return this.http.post(this.api_link + "/test/student/runprojecttestcase", e, this.httpRequestOptions())
				}
				resizeHandler() {
					window.innerHeight >= screen.height - 30 && window.innerWidth >= screen.width - 30 ? this.isWindowResize.next(!1) : this.isWindowResize.next(!0)
				}
				detectWindowResize() {
					window.onresize = this.resizeHandler.bind(this)
				}
				removeWindowResize() {
					this.isWindowResize.next(!1), window.onresize = null
				}
				goFullScreen() {
					if (document.fullscreenEnabled) {
						const l = document.documentElement;
						if (l.requestFullscreen) {
							try {
								l.requestFullscreen().then(() => {
									setTimeout(() => {
										this.testData.c_modules.off_screen && this.testData.c_modules.offscreencount && !this.userscreenHeight && !this.globalService.skipScreenCheck && (this.userscreenHeight = document.scrollingElement.clientHeight)
									}, 1e3)
								}).catch(() => {})
							} catch (e) {}
							addEventListener("fullscreenchange", e => {
								this.skipscreenCheck || this.globalService.skipScreenCheck || !this.userscreenHeight || setTimeout(() => {
									this.checkuserHeight()
								}, 1e3)
							})
						}
					}
				}
				checkuserHeight() {
					this.testData && this.testData.c_modules && this.testData.c_modules.off_screen && this.testData.c_modules.offscreencount && !this.globalService.skipScreenCheck && this.userscreenHeight != document.scrollingElement.clientHeight && this.isWindowResize.next(!0)
				}
				exitFullScreen() {
					document.fullscreenElement && document.exitFullscreen && document.exitFullscreen().catch(() => {})
				}
				checkProctoringAllowed() {
					const e = JSON.parse(localStorage.getItem("token"));
					return !!(e && e.enable_features && e.enable_features.allow_proctoring)
				}
				getMediaDevice(e) {
					return n.__awaiter(this, void 0, void 0, (function*() {
						return new Promise((l, t) => {
							navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia(e).then(e => {
								l(e)
							}).catch(e => {
								t(e)
							}) : t("Could not access camera or microphone")
						})
					}))
				}
				getUserCamera() {
					return new Promise((e, l) => {
						const t = e => {
							let t = "";
							switch (e.name) {
								case "AbortError":
									t = "Could not access camera or microphone";
									break;
								case "NotAllowedError":
									t = "Please unblock camera and microphone";
									break;
								case "NotFoundError":
									t = "Camera or microphone not found";
									break;
								default:
									t = "Could not access camera or microphone"
							}
							l(t)
						};
						this.getMediaDevice({
							video: {
								facingMode: "user"
							},
							audio: !0
						}).then(l => {
							if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return e(l);
							navigator.mediaDevices.enumerateDevices().then(i => n.__awaiter(this, void 0, void 0, (function*() {
								let n = !1;
								if (l.getVideoTracks().forEach(e => {
										const l = e.getSettings(),
											t = i.find(e => e.deviceId === l.deviceId);
										n = !!this.webcamBlackList.find(e => t.label.includes(e))
									}), n) {
									const l = i.filter(e => "videoinput" === e.kind && !this.webcamBlackList.find(l => e.label.includes(l)));
									try {
										let n;
										for (const t of l) {
											const l = yield this.getMediaDevice({
												video: {
													deviceId: t.deviceId,
													facingMode: "user"
												},
												audio: !0
											}).catch(e => {
												n = e
											});
											if (l) {
												e(l);
												break
											}
										}
										n && t(n)
									} catch (o) {
										t(o)
									}
								} else e(l)
							}))).catch(e => {
								t(e)
							})
						}).catch(e => {
							t(e)
						})
					})
				}
				getRTCBlob(e) {
					return new Promise((l, t) => {
						e && "recording" === e.getState() ? e.stopRecording(() => {
							l(e.getBlob())
						}) : l(!1)
					})
				}
				uploadToS3WithRetry(e, l, t = 2, i) {
					return new Promise((o, a) => n.__awaiter(this, void 0, void 0, (function*() {
						const n = yield this.getAWS();
						for (; t;) {
							let s;
							t -= 1, s = !(!(n && n.config && n.config.credentials && n.config.credentials) || n.config.credentials.expired) || (yield this.authSDK()), s && (yield this.uploadToS3WithSDK(e, l, i)) ? (t = 0, o(!0)) : t || a("AWS Error")
						}
					})))
				}
				uploadToS3WithSDK(e, l, t) {
					return new Promise((i, o) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							yield this.uploadUsingSDK(e, l, t).subscribe(() => {}, e => {
								i(!1)
							}, () => {
								i(!0)
							})
						} catch (n) {
							i(!1)
						}
					})))
				}
				uploadToS3(e, l, t) {
					return new Promise((i, o) => n.__awaiter(this, void 0, void 0, (function*() {
						let n = {
							file_name: e,
							type: l.type,
							extend: !0,
							Bucket_name: null
						};
						t && (n.Bucket_name = t), this.globalService.getSignedUrl(n).subscribe(e => {
							e && e.data ? this.globalService.uploadUsingSignedUrl(e.data.url, l).subscribe(e => {
								e && 200 === e.status ? i(!0) : o("Network error occured!")
							}, e => {
								o(e.message)
							}) : o("Network error occured!")
						}, e => {
							o(e.message)
						})
					})))
				}
				calculateMbps(e, l) {
					if (l) {
						const t = (Math.round(8 * e / l) / 1024).toFixed(2);
						return Number((Number(t) / 1024).toFixed(2))
					}
					return 0
				}
				generateRandomData(e) {
					const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]{}|;':,./<>?",
						t = 1024 * e * 1024;
					let n = "";
					for (let i = 0; i < t; i++) n += l.charAt(Math.floor(Math.random() * l.length));
					return n
				}
				getUploadSpeed() {
					return new a.a(e => {
						let l = 0,
							t = 0;
						const n = 1024 * this.NET_SPEED_TEST_SIZE * 1024,
							o = i => {
								if (t = (new Date).getTime(), l < t) {
									const o = this.calculateMbps(n, (t - l) / 1e3 * (i.loaded > n ? 1 : n / i.loaded));
									return e.next(o), o
								}
								return 0
							},
							a = this.httpRequestOptions();
						this.http.post(u.a.speed_test, {
							message: this.generateRandomData(this.NET_SPEED_TEST_SIZE)
						}, Object.assign({}, a, {
							observe: "events",
							reportProgress: !0,
							params: {
								"ngsw-bypass": "true",
								api_key: "BxSp@6878%qws"
							}
						})).subscribe(t => {
							switch (t.type) {
								case i.f.Sent:
									l = (new Date).getTime();
									break;
								case i.f.UploadProgress:
									o(t), t.loaded >= n && e.complete();
									break;
								case i.f.Response:
									o({
										loaded: 1024 * this.NET_SPEED_TEST_SIZE * 1024
									}), e.complete()
							}
						}, l => {
							e.error(l.message)
						})
					})
				}
				getDownloadSpeed() {
					return new a.a(e => {
						let l = 0,
							t = 0;
						const n = 1024 * this.NET_SPEED_TEST_SIZE * 1024,
							o = i => {
								if (t = (new Date).getTime(), l < t) {
									const o = this.calculateMbps(n, (t - l) / 1e3 * (i.loaded > n ? 1 : n / i.loaded));
									return e.next(o), o
								}
								return 0
							},
							a = this.httpRequestOptions();
						this.http.get(u.a.speed_test, Object.assign({}, a, {
							observe: "events",
							reportProgress: !0,
							params: {
								"ngsw-bypass": "true",
								api_key: "BxSp@6878%qws"
							}
						})).subscribe(t => {
							switch (t.type) {
								case i.f.ResponseHeader:
									l = (new Date).getTime();
									break;
								case i.f.DownloadProgress:
									o(t), t.loaded >= n && e.complete();
									break;
								case i.f.Response:
									o({
										loaded: 1024 * this.NET_SPEED_TEST_SIZE * 1024
									}), e.complete()
							}
						}, l => {
							e.error(l.message)
						})
					})
				}
				getUserScreenShare() {
					return new Promise((e, l) => {
						if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
							const t = "Could not access screen share. Use Desktop/Laptop Google Chrome(>72) or FireFox(>66)";
							navigator.mediaDevices.getDisplayMedia({
								cursor: "always",
								logicalSurface: !0
							}).then(n => {
								this.screenShareMedia = n;
								const i = document.createElement("video");
								i.srcObject = n;
								const o = i.srcObject.getVideoTracks();
								if (o && o[0]) {
									const i = o[0].getSettings();
									i ? "monitor" === i.displaySurface || "Primary Monitor" === o[0].label ? e(n) : l("Please share <b>Entire screen</b>") : (console.log("errorMsg1", t), l(t))
								} else console.log("errorMsg2", t), l(t)
							}).catch(e => {
								switch (console.log("errorMsg3", e), e.name) {
									case "NotAllowedError":
										l("Permission Denied. Please share your screen!");
										break;
									default:
										console.log("errorMsg", t), l(t)
								}
							})
						} else l("Screen sharing is required. Use Desktop/Laptop Google Chrome (>72) or FireFox(>66)")
					})
				}
				evaluateBodyParts(e, l, t, n) {
					const i = [];
					for (let o = 0; o < e.length; o++) {
						const a = e[o];
						if (a.score < l) "nose" !== a.part && "leftEye" !== a.part && "rightEye" !== a.part && "leftEar" !== a.part && "rightEar" !== a.part || i.push(a.part);
						else if (n) {
							const {
								y: e,
								x: l
							} = a.position;
							this.drawPoint(t, e, l, 3, "aqua")
						}
					}
					return i && i.length ? "d" : "ok"
				}
				drawPoint(e, l, t, n, i) {
					e.beginPath(), e.arc(t, l, n, 0, 2 * Math.PI), e.fillStyle = i, e.fill()
				}
				estimationHandler(e) {
					const l = {
						msg: "",
						severity: "success"
					};
					switch (e) {
						case "lq":
							l.msg = "Image quality is poor!", l.severity = "error";
							break;
						case "np":
							l.msg = "Could not find your face!", l.severity = "error";
							break;
						case "mp":
							l.msg = "May be another person found!", l.severity = "error";
							break;
						case "d":
							l.msg = "You may be distracted or not looking at the screen!", l.severity = "warn"
					}
					return l
				}
				getProjectData(e, l) {
					return this.http.post(this.api_link + "/project/details", {
						project_id: l,
						c_id: e
					}, this.httpRequestOptions())
				}
				testNetworkStatus() {
					return new Promise((e, l) => {
						const t = u.a.HOST.link2.split("api")[0],
							n = l => {
								this.onlineHandle(), e(!0)
							},
							i = () => {
								this.offlineHandle(), e(!1)
							},
							o = setTimeout(() => {
								i(), a.unsubscribe()
							}, 5e3),
							a = this.http.get(t, {
								responseType: "text"
							}).subscribe(e => {
								clearTimeout(o), n(), a.unsubscribe()
							}, e => {
								clearTimeout(o), i(), a.unsubscribe()
							})
					})
				}
				getProcDB() {
					return new Promise((e, l) => {
						if (this.PROC_DB_CONFIG.db) e(this.PROC_DB_CONFIG.db);
						else if ("indexedDB" in window) {
							const t = window.indexedDB.open(this.PROC_DB_CONFIG.dbName);
							t.onupgradeneeded = () => {
								t.result.createObjectStore(this.PROC_DB_CONFIG.objectName)
							}, t.onsuccess = () => {
								this.PROC_DB_CONFIG.db = t.result, e(this.PROC_DB_CONFIG.db)
							}, t.onerror = e => {
								console.error("PIQ(002): ", e), l(e)
							}
						} else console.error("PIQ(001): "), l("IndexedDB not supported!")
					})
				}
				putProcImgInDB(e, l, t) {
					return new Promise((n, i) => {
						const o = e.transaction(this.PROC_DB_CONFIG.objectName, "readwrite").objectStore(this.PROC_DB_CONFIG.objectName).put(t, l);
						o.onerror = e => {
							console.error("PIQ(003): ", e), i(e)
						}, o.onsuccess = () => {
							n(!0)
						}
					})
				}
				getProcImgInDB(e, l) {
					return new Promise((t, n) => {
						const i = e.transaction(this.PROC_DB_CONFIG.objectName, "readonly").objectStore(this.PROC_DB_CONFIG.objectName).get(l);
						i.onerror = e => {
							console.error("PIQ(004): ", e), n(e)
						}, i.onsuccess = e => {
							t(e.target.result)
						}
					})
				}
				getAllProcImgKeysInDB(e) {
					return new Promise((l, t) => {
						const n = e.transaction(this.PROC_DB_CONFIG.objectName, "readonly").objectStore(this.PROC_DB_CONFIG.objectName).getAllKeys();
						n.onerror = e => {
							console.error("PIQ(005): ", e), t(e)
						}, n.onsuccess = e => {
							l(e.target.result)
						}
					})
				}
				getProcImgCountInDB(e) {
					return new Promise((l, t) => {
						const n = e.transaction(this.PROC_DB_CONFIG.objectName, "readonly").objectStore(this.PROC_DB_CONFIG.objectName).getAllKeys();
						n.onerror = e => {
							console.error("PIQ(006): ", e), t(e)
						}, n.onsuccess = e => {
							let t = 0;
							e.target.result && e.target.result.length && (t = e.target.result.length), l(t)
						}
					})
				}
				deleteProcImgInDB(e, l) {
					return new Promise((t, n) => {
						const i = e.transaction(this.PROC_DB_CONFIG.objectName, "readwrite").objectStore(this.PROC_DB_CONFIG.objectName).delete(l);
						i.onerror = e => {
							console.error("PIQ(007): ", e), n(e)
						}, i.onsuccess = e => {
							t(!0)
						}
					})
				}
				clearProcImgDB(e) {
					return new Promise((l, t) => {
						const n = e.transaction(this.PROC_DB_CONFIG.objectName, "readwrite").objectStore(this.PROC_DB_CONFIG.objectName).clear();
						n.onerror = e => {
							console.error("PIQ(008): ", e), t(e)
						}, n.onsuccess = e => {
							l(!0)
						}
					})
				}
				getStProcDetails(e) {
					return this.http.post(this.api_link + "/proctor/stprocdetails", e, this.httpRequestOptions())
				}
				downloadStudentAnalysis(e) {
					return this.http.post(this.api_link + "/downloadStudentAnalysis", e, this.httpRequestOptions())
				}
				createQRString(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/HlAKDlkpodASesd", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							l(e)
						})), e => {
							l(!1)
						})
					})
				}
				QRuploadToS3(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/BdsaBDASbdASDU", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							l(e)
						})), e => {
							l(!1)
						})
					})
				}
				getServerTime(e) {
					return new Promise((l, t) => {
						this.userData = e, this.http.get(this.api_link + "/DJKAnsdnauADsa", this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							l(e)
						})), e => {
							l(!1)
						})
					})
				}
				generateQR(e) {
					return new Promise((l, t) => n.__awaiter(this, void 0, void 0, (function*() {
						try {
							const t = yield this.QRCode.toDataURL(e);
							l(t)
						} catch (t) {
							l(!1)
						}
					})))
				}
				getS3FileURL(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/DmsdndqApkgwpko", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							l(e)
						})), e => {
							l(!1)
						})
					})
				}
				extractComments(e, l) {
					let t = [];
					if (e && "string" == typeof l) {
						let n = Object.entries(e);
						for (const [e, i] of n) switch (e) {
							case "singleLine_singleChar": {
								let e = 0,
									n = "",
									o = [],
									a = 1,
									s = "";
								for (const t of l) 0 == e ? t == i ? e = 1 : ['"', "'", "`"].includes(t) && (s = t, e = 5) : 1 == e ? "\n" == t ? (o.push({
									comment: n,
									line: a
								}), n = "", e = 0) : n += t : 5 == e ? t == s ? e = 0 : "\\" == t && (e = 6) : 6 == e && (e = 5), "\n" == t && (a += 1);
								1 == e && o.push({
									comment: n,
									line: a
								}), t.push(...o);
								break
							}
							case "singleLine_doubleChar": {
								let e = 0,
									n = "",
									o = [],
									a = 1,
									s = "";
								for (const t of l) 0 == e ? t == i ? e = 1 : ['"', "'", "`"].includes(t) && (s = t, e = 5) : 1 == e ? e = t == i ? 2 : 0 : 2 == e ? "\n" == t ? (o.push({
									comment: n,
									line: a
								}), n = "", e = 0) : n += t : 5 == e ? t == s ? e = 0 : "\\" == t && (e = 6) : 6 == e && (e = 5), "\n" == t && (a += 1);
								2 == e && o.push({
									comment: n,
									line: a
								}), t.push(...o);
								break
							}
							case "multiLine": {
								let e = 0,
									n = "",
									i = [],
									o = 1,
									a = 1,
									s = "";
								for (const t of l) 0 == e ? "/" == t ? e = 1 : ['"', "'", "`"].includes(t) && (s = t, e = 5) : 1 == e ? "*" == t ? (a = o, e = 3) : e = 0 : 3 == e ? "*" == t ? e = 4 : n += t : 4 == e ? "/" == t ? (i.push({
									comment: n,
									line: a
								}), n = "", e = 0) : (n += "*", "*" != t && (n += t, e = 3)) : 5 == e ? t == s ? e = 0 : "\\" == t && (e = 6) : 6 == e && (e = 5), "\n" == t && (o += 1);
								t.push(...i);
								break
							}
							case "regex": {
								let e, n = i,
									o = [];
								for (; e = n.exec(l);) {
									let t = 1;
									for (let n = 0; n < e.index; n++) "\n" == l[n] && t++;
									o.push({
										comment: e[0],
										line: t
									})
								}
								t.push(...o);
								break
							}
							default:
								continue
						}
					}
					return t
				}
				checkArrayInString(e, l) {
					return l.some(l => !!e.includes(l))
				}
				updateEditCount(e) {
					this.testData && this.testData.c_modules && this.testData.c_modules.answer_edit_restrict && (e && (e.program_submitted_count > 1 ? this.testData.curr_submit_count += 1 : this.testData.curr_submit_count || (this.testData.curr_submit_count = 0)), this.testData.max_edit_allowed = this.testData.c_modules.max_edit_count - this.testData.curr_submit_count)
				}
				vectorAvg(e, l) {
					return [(e[0] + l[0]) / 2, (e[1] + l[1]) / 2]
				}
				vectorSubtract(e, l) {
					return [e[0] - l[0], e[1] - l[1]]
				}
				vectorAddition(...e) {
					const l = [0, 0];
					for (const t of e) l[0] += t[0], l[1] += t[1];
					return l
				}
				vectorMultiply(e, l) {
					return [e[0] * l, e[1] * l]
				}
				calcangle(e, l, t) {
					let n = (l[1] - e[1]) / (l[0] - e[0]),
						i = (t[1] - e[1]) / (t[0] - e[0]),
						o = Math.abs((n - i) / (1 + n * i));
					return o = 180 * Math.atan(o) / Math.PI, o
				}
				estimatePoseForBlazeFace(e) {
					try {
						const l = e[2],
							t = e[4],
							n = this.vectorAvg(e[5], t),
							i = this.vectorSubtract(l, n),
							o = this.vectorMultiply(this.vectorSubtract(t, n), 1 / this.BLAZEFACE_CONFIG.MODEL_HEAD_EAR_COORD_X);
						if (this.calcangle([0, 0, 0], i, o) < this.BLAZEFACE_CONFIG.minAngleConfidence) return "d"
					} catch (l) {}
					return "ok"
				}
				getBlobFromImageUrl(e) {
					return new Promise((l, t) => this.http.get(e, {
						responseType: "blob"
					}).subscribe(e => {
						l(e)
					}, e => {
						l(!1)
					}))
				}
				getFrontEndLanguage() {
					return new Promise((e, l) => this.http.get(u.a.s3Objectstudentassets + "assets/fetech.json").subscribe(l => {
						e(l)
					}, l => {
						e(!1)
					}))
				}
				generateProctorFileName(e) {
					const l = this.globalService.convert_IST_TO_EPOCH(this.testData.instanceTime),
						t = this.userData.user_id + "/remote-proctoring/" + this.schoolData.school_id + "/" + this.testData.c_id + "/" + this.testData.t_id + "/" + this.userData.user_id + "/" + this.testData.attempt_no;
					switch (e) {
						case "image":
							return t + `/images/image_${l}-curr_time-${this.testData.t_counter}`;
						case "audio":
							return t + `/audios/audio_${l}-curr_time-${this.testData.t_counter}`;
						case "video":
							return t + `/videos/video_${l}-curr_time-${this.testData.t_counter}`;
						case "screen":
							return t + `/screen_${l}-curr_time-${this.testData.t_counter}`
					}
				}
				getLiveProctoringData(e) {
					return this.http.post(this.api_link + "/student/test/liveProctoring", e || {
						c_id: this.testData.c_id,
						t_id: this.testData.t_id
					}, this.ls.options(this.userData))
				}
				getLiveScreenShareData() {
					return this.http.post(this.api_link + "/student/test/liveScreenShare", {
						c_id: this.testData.c_id,
						t_id: this.testData.t_id
					}, this.ls.options(this.userData))
				}
				getLiveScreenShareDataTwilio() {
					return this.http.post(this.api_link + "/student/test/liveScreenShareTwilio", {
						c_id: this.testData.c_id,
						t_id: this.testData.t_id
					}, this.ls.options(this.userData))
				}
				sendFileForAudioAnalysis(e) {
					return this.http.post(this.recognLink + "/recognition", {
						file_name: e
					})
				}
				sendMessageToSocket(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/tests/sendMessageWS", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							l(e)
						})), e => {
							console.log(e), l(!1)
						})
					})
				}
				reOpenProject(e) {
					return this.http.post(this.api_link + "/courses/reopenproject", e, this.httpRequestOptions())
				}
				commitToGit(e) {
					return this.http.post(this.api_link + "/courses/savetogit", e, this.httpRequestOptions())
				}
				getBuildStatus(e) {
					return this.http.post(this.api_link + "/courses/getBuildStatus", e, this.httpRequestOptions())
				}
				getUserGithubDetail() {
					return this.http.get(this.api_link + "/users/getGithubDetail", this.httpRequestOptions())
				}
				switchS3bucket(e) {
					return (e = (e = JSON.stringify(e)).replace(new RegExp(this.globalService.bucket + "/", "g"), this.globalService.content_bucket + "/")).includes(this.globalService.content_bucket + "/cloudlab_starters/") && (e = this.switchCloudQuesS3bucket(e)), JSON.parse(e)
				}
				getLiveTestData(e) {
					return new Promise((l, t) => {
						this.http.post(this.api_link + "/getTestLiveData", e, this.httpRequestOptions()).subscribe(e => n.__awaiter(this, void 0, void 0, (function*() {
							l(e)
						})), e => {
							console.log(e), l({
								success: !0
							})
						})
					})
				}
				switchCloudQuesS3bucket(e) {
					return e.replace(new RegExp(this.globalService.content_bucket + "/cloudlab_starters/", "g"), this.globalService.bucket + "/cloudlab_starters/")
				}
				getclipboard() {
					return new Promise((e, l) => n.__awaiter(this, void 0, void 0, (function*() {
						window.navigator.clipboard.readText().then(l => {
							this.clipboard_data = l, e(!0)
						}).catch(e => {
							l(e)
						})
					})))
				}
				setCurrentQuesForCopyPaste() {
					"programming_file_based" === this.testData.current_q.question_type ? this.currAnswer = this.testData.current_q.langList[this.testData.current_q.langListIndex].files ? this.testData.current_q.langList[this.testData.current_q.langListIndex].files[0].data : null : "programming" === this.testData.current_q.question_type ? this.currAnswer = this.testData.current_q.langList[this.testData.current_q.langListIndex] ? this.testData.current_q.langList[this.testData.current_q.langListIndex].codeEntered : null : "html_css_js" === this.testData.current_q.question_type ? (this.currAnswer = {}, this.currAnswer.htmlCodeEntered = this.testData.current_q.answer.htmlCodeEntered, this.currAnswer.cssCodeEntered = this.testData.current_q.answer.cssCodeEntered, this.currAnswer.jsCodeEntered = this.testData.current_q.answer.jsCodeEntered) : this.currAnswer = "essay_email_writing" === this.testData.current_q.question_type || "descriptive_answer_writing_text" === this.testData.current_q.question_type || "descriptive_answer_writing" === this.testData.current_q.question_type ? this.testData.current_q.answer : null, this.allowcopycheck = !0
				}
				logoutAfterUpload() {
					let e = {};
					this.userData && this.userData.user_id && (e.user_id = this.userData.user_id, e.school_id = this.userData.school_id, e.user_role = "student", e.email = this.userData.email), this.ls.logout(e).subscribe(e => {
						this.globalService.clearLocalStorage()
					})
				}
				switchBucket(e) {
					return e = (e = JSON.stringify(e)).replace(new RegExp(this.globalService.content_bucket + "/", "g"), this.globalService.bucket + "/"), JSON.parse(e)
				}
				formatBucktForFrozenData(e) {
					return new Promise((l, t) => {
						e && e.forEach(e => {
							let l = e.questions.map(e => ((e = this.switchS3bucket(e)).answer && (e.answer = this.switchBucket(e.answer)), e.last_event && (e.last_event = this.switchBucket(e.last_event)), e));
							e.questions = l
						}), l(e)
					})
				}
			}
			p.ngInjectableDef = c.R({
				factory: function() {
					return new p(c.V(i.c), c.V(s.a), c.V(r.a), c.V(d.m))
				},
				token: p,
				providedIn: "root"
			})
		},
		GDbA: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return d
			}));
			var n = t("2Vo4"),
				i = t("lJxs"),
				o = t("IheW"),
				a = t("AytR"),
				s = t("EFyh"),
				r = t("JIr8"),
				u = t("4WDQ"),
				c = t("8Y7J");
			class d {
				constructor(e, l, t) {
					this.http = e, this.loginservice = l, this.globalService = t, this.api = a.a.HOST.link, this.teamsSubject = new n.a([])
				}
				getAllTeams(e) {
					let l = new o.i;
					l.set("dataIds", this.loginservice.schoolId);
					let t = this.loginservice.options(null);
					return t.search = l, this.http.get(this.api + "/team/getCourseDetails/" + e, t).pipe(Object(r.a)(this.loginservice.handleError.bind(this)))
				}
				createTeam(e) {
					return this.http.post(this.api + "/team", e, this.loginservice.options(null)).pipe(Object(r.a)(this.loginservice.handleError.bind(this))).pipe(Object(i.a)(() => this.getAllTeams(e.c_id)))
				}
				getTeamChannelID(e) {
					return this.http.post(this.api + "/team/getTeamChannelID", e, this.loginservice.options(null)).pipe(Object(r.a)(this.loginservice.handleError.bind(this)))
				}
				joinTeam(e) {
					return this.http.post(this.api + "/team/add-to-team", e, this.loginservice.options(null)).pipe(Object(r.a)(this.loginservice.handleError.bind(this)))
				}
				getGitAcessToken(e) {
					return this.http.post(this.api + "/team/github-getGitAccessToken", {
						code: e
					}, this.loginservice.options(null))
				}
				getGitUserDetails(e) {
					return this.http.post(this.api + "/team/github-getUserDetails", e, this.loginservice.options(null)).pipe(Object(r.a)(this.loginservice.handleError.bind(this))).subscribe(e => this.teamsSubject.next(e), e => this.teamsSubject.error(e)), this.teamsSubject.asObservable()
				}
				inviteStudentToRepo(e) {
					return this.http.post(this.api + "/team/invite-student-to-repo", e, this.loginservice.options(null)).pipe(Object(r.a)(this.loginservice.handleError.bind(this)))
				}
				exitTeam(e) {
					return this.http.post(this.api + "/team/exitTeam", e, this.loginservice.options(null)).pipe(Object(r.a)(this.loginservice.handleError.bind(this)))
				}
			}
			d.ngInjectableDef = c.R({
				factory: function() {
					return new d(c.V(o.c), c.V(s.a), c.V(u.a))
				},
				token: d,
				providedIn: "root"
			})
		},
		GQrn: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return o
			}));
			var n = t("8Y7J"),
				i = t("s7LF");
			class o {
				constructor() {
					this.onSubmit = new n.m, this.btnStyle = {}, this.termsChecked = new n.m, this.buttonList = [], this.displayForm = new n.m, this.fileFormatInfo = new n.m, this.customizeRowStyle = {}, this.buttonPosition = "bottom", this.rowStyle = {}, this.schoolData = JSON.parse(localStorage.getItem("school_details")), this.type = "", this.indexOfCheckbox = []
				}
				ngOnInit() {}
				ngOnChanges(e) {
					this.ly = this.layout;
					let l = 100 / this.count;
					l ? (this.rowStyle = void 0, this.rowStyle = {
						width: "calc(" + l + "% - 25px)"
					}) : this.rowStyle = this.customizeRowStyle;
					for (let t = 0; t < this.fields.length; t++)
						if ("policy" === this.fields[t].type) {
							const e = this.fields.splice(t, 1);
							e && e.length && this.fields.push(e[0])
						} this.generateForm(), this.activeBranch = this.activeBranch
				}
				ngAfterContentInit() {
					this.displayForm && this.displayForm.emit()
				}
				generateQuestionsForCopy() {
					let e = [],
						l = [];
					if (this.fields.forEach((e, t) => {
							e && e.copy_from && e.copyFrom && (l.push({
								from: this.fields[t].copyFrom,
								to: this.fields[t].cf_id
							}), this.indexOfCheckbox.push(t))
						}), this.copy_ids = l, this.fields.forEach((l, t) => {
							if (l.copy_from) {
								let t = this.fields.find(e => e.cf_id === l.copyFrom),
									n = l.question || l.name;
								t && (t.question || t.name) && "resume" !== (t.question || t.name) && (l.question || l.name) && "resume" !== (t.question || t.name) && e.push(`Do you want to copy ${t.question||t.name} as ${n} ?`)
							}
						}), this.indexOfCheckbox && this.indexOfCheckbox.length > 0) {
						let l = 0,
							t = 0;
						for (let n of this.indexOfCheckbox) this.fields.splice(n + l, 0, {
							type: "radiobutton",
							label: e[t],
							name: e[t],
							copy: !0,
							copyValue: !1,
							options: [{
								label: "Yes",
								value: "yes"
							}, {
								label: "No",
								value: "no"
							}],
							copyIndex: this.indexOfCheckbox[t],
							copy_ids: [{
								from: this.fields[n + l].copyFrom,
								to: this.fields[n + l].cf_id
							}]
						}), l++, t++
					}
				}
				generateForm() {
					const e = {};
					if (this.fields)
						if (this.formLength && this.activeBranch)
							for (let l = 0; l < this.formLength; l++) this.formbuilder(e, this.fields[l]);
						else this.formbuilder(e, this.fields);
					this.autoCopyfun()
				}
				formbuilder(e, l) {
					this.generateQuestionsForCopy();
					for (const t of l)
						if ("checkbox" === t.type || "file" === t.type || "dropdown" === t.type || "checked" === t.type || "dob" === t.type || "resume" === t.type || "radio" === t.type || "radiobutton" === t.type || "text" !== t.type && "phone" !== t.type && "number" !== t.type && "shortanswer" !== t.type && "longanswer" !== t.type)
							if ("file" === t.type || "resume" === t.type || "file_upload" === t.type || "policy" === t.type) e[t.name] = t.required ? new i.g(t.value || "", [i.y.required]) : new i.g;
							else if ("checked" === t.type) {
						let l = {};
						for (let e of t.options) l[e.label] = t.required ? new i.g(t.value || "", [t.required ? i.y.required : null]) : new i.g;
						e[t.name] = new i.e([]), e[t.name].push(l)
					} else e[t.name] = t.required ? new i.g(t.value || "", [t.required ? i.y.required : null]) : new i.g;
					else {
						const l = [i.y.pattern(t.regex ? t.regex : ""), i.y.minLength(t.minLength ? t.minLength : 0)];
						t.required && l.push(i.y.required), e[t.name] = new i.g(t.value || "", l)
					}
					this.form = void 0, this.form = new i.i(e)
				}
				onSubmits(e) {
					if (!this.buttonList.find(e => e && e.loading))
						if (e && e.from && "additional" === e.from && (this.type = e.type, e = this.form.getRawValue()), !1 === this.form.valid) "Cancel" === this.type ? (this.form.reset(), this.onSubmit.emit({
							value: e,
							type: this.type
						})) : "Previous" === this.type ? this.onSubmit.emit({
							value: e,
							type: this.type
						}) : (this.markAlltouched(), this.onSubmit.emit(void 0));
						else if (e || (e = this.form.getRawValue()), "Cancel" === this.type) this.form.reset(), this.onSubmit.emit({
						value: e,
						type: this.type
					});
					else {
						let l, t = [],
							n = !1;
						if (this.fields.forEach(e => {
								"radiobutton" === e.type && e.copyIndex && e.copy_ids && e.copy_ids.length && e.copy_ids[0].copyValue && (t.push({
									id: e.copy_ids
								}), n = !0), "profile" === e.profile && (l = e.profile)
							}), t && t.length) {
							let n, i;
							t.forEach(t => {
								if (t.id[0].copyValue) {
									let o, a;
									n = t.id[0].from, i = t.id[0].to, this.fields.forEach(e => {
										e.cf_id === n ? o = e.name : e.cf_id === i && (a = e.name)
									}), "profile" === l ? e.value[a] = e.value[o] : e[a] = e[o]
								}
							})
						}
						this.onSubmit.emit({
							value: e,
							type: this.type
						})
					}
				}
				markAlltouched() {
					for (let e in this.form.controls) this.form.controls[e].markAsTouched()
				}
				btnType(e) {
					this.type = e.type
				}
				selectedValue(e) {
					if ("publiccontest" === this.origin) this.schoolData && "college" === this.schoolData.institute_type ? (this.fields[2].options = this.params.batches.filter(l => l.branch_id === e), this.fields[3].options = this.params.degrees.filter(l => l.branch_id === e)) : this.fields[2].options = this.params.targetexams.filter(l => l.branch_id === e);
					else if ("signup" === this.origin && this.schoolData && "college" === this.schoolData.institute_type)
						for (let l of this.fields) "Batch" === l.name && (l.options = this.params.batches.filter(l => l.branch_id === e)), "Degree" === l.name && (l.options = this.params.degrees.filter(l => l.branch_id === e)), "Department" === l.name && (l.options = this.params.departments.filter(l => l.branch_id === e))
				}
				termschecked(e) {
					this.termsChecked.emit(e)
				}
				fileFormatInfos(e) {
					this.fileFormatInfo.emit(e)
				}
				radioResponse(e) {
					e.data.forEach("yes" === e.value ? l => {
						this.fields.find(t => {
							t.cf_id === l.to && "resume" !== t.label && e.copyValue && ("profile" !== t.profile ? (t.copyValue = !0, t.copyHide = !0, this.form.controls[t.question].disable()) : t.disabled = !0)
						})
					} : e => {
						this.fields.find(l => {
							l.cf_id === e.to && "resume" !== l.label && ("profile" !== l.profile ? (l.copyValue = !1, l.copyHide = !1, this.form.controls[l.question].enable()) : l.disabled = !1)
						})
					})
				}
				getValue(e) {
					return this.fields.find(l => l.cf_id === e)
				}
				autoCopyfun() {
					this.fields.forEach((e, l) => {
						e.copy_from && e.copyFrom && "profile" === e.profile && e.value === this.getValue(e.copyFrom).value && (e.disabled = !0)
					})
				}
			}
		},
		Gl8U: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return p
			}));
			var n = t("IheW"),
				i = t("AytR"),
				o = t("2Vo4"),
				a = t("cp0P"),
				s = t("LRne"),
				r = t("EFyh"),
				u = t("JIr8"),
				c = t("4WDQ"),
				d = t("8Y7J");
			class p {
				constructor(e, l, t) {
					this.httpClient = e, this.loginservice = l, this.globalService = t, this.api = i.a.HOST.link, this.fValue = {}, this.school_code = JSON.parse(localStorage.getItem("school_details")) && JSON.parse(localStorage.getItem("school_details")).school_code ? JSON.parse(localStorage.getItem("school_details")).school_code : "", this.school_id = JSON.parse(localStorage.getItem("school_details")) && JSON.parse(localStorage.getItem("school_details")).school_id ? JSON.parse(localStorage.getItem("school_details")).school_id : "", this.userData = JSON.parse(localStorage.getItem("token")), this.noRedirect = new o.a({}), this.loader = new o.a(!1), this.isRollNoMandatory = new o.a(!1), this.vStatus = new o.a({}), this.branchOrder = [], this.customFieldsValue = [], this.basicFields = [], this.degreeValue = [], this.formData = JSON.parse(localStorage.getItem("formData")), this.isFilled = {}, this.activeBranch = 1, this.acadDetails = !1, this.personalData = !1, this.customData = !!(JSON.parse(localStorage.getItem("customFieldsValue")) && JSON.parse(localStorage.getItem("customFieldsValue")).length > 0), this.pers = !1, this.isRedirected = !1, this.nextAddData = [], this.showPersonal = !1, this.showAcademic = !1, this.showAdditional = !1, this.countryList = [{
						label: "Country",
						value: void 0
					}, {
						label: "Afghanistan (+93)",
						value: "+93",
						code: "AF"
					}, {
						label: "Aland Islands (+358)",
						value: "+358",
						code: "AX"
					}, {
						label: "Albania (+355)",
						value: "+355",
						code: "AL"
					}, {
						label: "Algeria (+213)",
						value: "+213",
						code: "DZ"
					}, {
						label: "American Samoa (+1 684)",
						value: "+1 684",
						code: "AS"
					}, {
						label: "Andorra (+376)",
						value: "+376",
						code: "AD"
					}, {
						label: "Angola (+244)",
						value: "+244",
						code: "AO"
					}, {
						label: "Anguilla (+1 264)",
						value: "+1 264",
						code: "AI"
					}, {
						label: "Antarctica (+672)",
						value: "+672",
						code: "AQ"
					}, {
						label: "Antigua (+1268)",
						value: "+1268",
						code: "AG"
					}, {
						label: "Argentina (+54)",
						value: "+54",
						code: "AR"
					}, {
						label: "Armenia (+374)",
						value: "+374",
						code: "AM"
					}, {
						label: "Aruba (+297)",
						value: "+297",
						code: "AW"
					}, {
						label: "Australia (+61)",
						value: "+61",
						code: "AU"
					}, {
						label: "Austria (+43)",
						value: "+43",
						code: "AT"
					}, {
						label: "Azerbaijan (+994)",
						value: "+994",
						code: "AZ"
					}, {
						label: "Bahamas (+1 242)",
						value: "+1 242",
						code: "BS"
					}, {
						label: "Bahrain (+973)",
						value: "+973",
						code: "BH"
					}, {
						label: "Bangladesh (+880)",
						value: "+880",
						code: "BD"
					}, {
						label: "Barbados (+1 246)",
						value: "+1 246",
						code: "BB"
					}, {
						label: "Belarus (+375)",
						value: "+375",
						code: "BY"
					}, {
						label: "Belgium (+32)",
						value: "+32",
						code: "BE"
					}, {
						label: "Belize (+501)",
						value: "+501",
						code: "BZ"
					}, {
						label: "Benin (+229)",
						value: "+229",
						code: "BJ"
					}, {
						label: "Bermuda (+1 441)",
						value: "+1 441",
						code: "BM"
					}, {
						label: "Bhutan (+975)",
						value: "+975",
						code: "BT"
					}, {
						label: "Bolivia (+591)",
						value: "+591",
						code: "BO"
					}, {
						label: "Bosnia (+387)",
						value: "+387",
						code: "BA"
					}, {
						label: "Botswana (+267)",
						value: "+267",
						code: "BW"
					}, {
						label: "Brazil (+55)",
						value: "+55",
						code: "BR"
					}, {
						label: "BIOT (+246)",
						value: "+246",
						code: "IO"
					}, {
						label: "Brunei Darussalam (+673)",
						value: "+673",
						code: "BN"
					}, {
						label: "Bulgaria (+359)",
						value: "+359",
						code: "BG"
					}, {
						label: "Burkina Faso (+226)",
						value: "+226",
						code: "BF"
					}, {
						label: "Burundi (+257)",
						value: "+257",
						code: "BI"
					}, {
						label: "Cambodia (+855)",
						value: "+855",
						code: "KH"
					}, {
						label: "Cameroon (+237)",
						value: "+237",
						code: "CM"
					}, {
						label: "Canada (+1)",
						value: "+1",
						code: "CA"
					}, {
						label: "Cape Verde (+238)",
						value: "+238",
						code: "CV"
					}, {
						label: "Cayman Islands (+ 345)",
						value: "+ 345",
						code: "KY"
					}, {
						label: "Central African Republic (+236)",
						value: "+236",
						code: "CF"
					}, {
						label: "Chad (+235)",
						value: "+235",
						code: "TD"
					}, {
						label: "Chile (+56)",
						value: "+56",
						code: "CL"
					}, {
						label: "China (+86)",
						value: "+86",
						code: "CN"
					}, {
						label: "Christmas Island (+61)",
						value: "+61",
						code: "CX"
					}, {
						label: "Cocos (Keeling) Islands (+61)",
						value: "+61",
						code: "CC"
					}, {
						label: "Colombia (+57)",
						value: "+57",
						code: "CO"
					}, {
						label: "Comoros (+269)",
						value: "+269",
						code: "KM"
					}, {
						label: "Congo (+242)",
						value: "+242",
						code: "CG"
					}, {
						label: "Congo DRC (+243)",
						value: "+243",
						code: "CD"
					}, {
						label: "Cook Islands (+682)",
						value: "+682",
						code: "CK"
					}, {
						label: "Costa Rica (+506)",
						value: "+506",
						code: "CR"
					}, {
						label: "Cote d Ivoire (+225)",
						value: "+225",
						code: "CI"
					}, {
						label: "Croatia (+385)",
						value: "+385",
						code: "HR"
					}, {
						label: "Cuba (+53)",
						value: "+53",
						code: "CU"
					}, {
						label: "Cyprus (+357)",
						value: "+357",
						code: "CY"
					}, {
						label: "Czech Republic (+420)",
						value: "+420",
						code: "CZ"
					}, {
						label: "Denmark (+45)",
						value: "+45",
						code: "DK"
					}, {
						label: "Djibouti (+253)",
						value: "+253",
						code: "DJ"
					}, {
						label: "Dominica (+1 767)",
						value: "+1 767",
						code: "DM"
					}, {
						label: "Dominican Republic (+1 849)",
						value: "+1 849",
						code: "DO"
					}, {
						label: "Ecuador (+593)",
						value: "+593",
						code: "EC"
					}, {
						label: "Egypt (+20)",
						value: "+20",
						code: "EG"
					}, {
						label: "El Salvador (+503)",
						value: "+503",
						code: "SV"
					}, {
						label: "Equatorial Guinea (+240)",
						value: "+240",
						code: "GQ"
					}, {
						label: "Eritrea (+291)",
						value: "+291",
						code: "ER"
					}, {
						label: "Estonia (+372)",
						value: "+372",
						code: "EE"
					}, {
						label: "Ethiopia (+251)",
						value: "+251",
						code: "ET"
					}, {
						label: "Falkland Islands (Malvinas) (+500)",
						value: "+500",
						code: "FK"
					}, {
						label: "Faroe Islands (+298)",
						value: "+298",
						code: "FO"
					}, {
						label: "Fiji (+679)",
						value: "+679",
						code: "FJ"
					}, {
						label: "Finland (+358)",
						value: "+358",
						code: "FI"
					}, {
						label: "France (+33)",
						value: "+33",
						code: "FR"
					}, {
						label: "French Guiana (+594)",
						value: "+594",
						code: "GF"
					}, {
						label: "French Polynesia (+689)",
						value: "+689",
						code: "PF"
					}, {
						label: "Gabon (+241)",
						value: "+241",
						code: "GA"
					}, {
						label: "Gambia (+220)",
						value: "+220",
						code: "GM"
					}, {
						label: "Georgia (+995)",
						value: "+995",
						code: "GE"
					}, {
						label: "Germany (+49)",
						value: "+49",
						code: "DE"
					}, {
						label: "Ghana (+233)",
						value: "+233",
						code: "GH"
					}, {
						label: "Gibraltar (+350)",
						value: "+350",
						code: "GI"
					}, {
						label: "Greece (+30)",
						value: "+30",
						code: "GR"
					}, {
						label: "Greenland (+299)",
						value: "+299",
						code: "GL"
					}, {
						label: "Grenada (+1 473)",
						value: "+1 473",
						code: "GD"
					}, {
						label: "Guadeloupe (+590)",
						value: "+590",
						code: "GP"
					}, {
						label: "Guam (+1 671)",
						value: "+1 671",
						code: "GU"
					}, {
						label: "Guatemala (+502)",
						value: "+502",
						code: "GT"
					}, {
						label: "Guernsey (+44)",
						value: "+44",
						code: "GG"
					}, {
						label: "Guinea (+224)",
						value: "+224",
						code: "GN"
					}, {
						label: "Guinea-Bissau (+245)",
						value: "+245",
						code: "GW"
					}, {
						label: "Guyana (+595)",
						value: "+595",
						code: "GY"
					}, {
						label: "Haiti (+509)",
						value: "+509",
						code: "HT"
					}, {
						label: "Holy See (+379)",
						value: "+379",
						code: "VA"
					}, {
						label: "Honduras (+504)",
						value: "+504",
						code: "HN"
					}, {
						label: "Hong Kong (+852)",
						value: "+852",
						code: "HK"
					}, {
						label: "Hungary (+36)",
						value: "+36",
						code: "HU"
					}, {
						label: "Iceland (+354)",
						value: "+354",
						code: "IS"
					}, {
						label: "India (+91)",
						value: "+91",
						code: "IN"
					}, {
						label: "Indonesia (+62)",
						value: "+62",
						code: "ID"
					}, {
						label: "Iran (+98)",
						value: "+98",
						code: "IR"
					}, {
						label: "Iraq (+964)",
						value: "+964",
						code: "IQ"
					}, {
						label: "Ireland (+353)",
						value: "+353",
						code: "IE"
					}, {
						label: "Isle of Man (+44)",
						value: "+44",
						code: "IM"
					}, {
						label: "Israel (+972)",
						value: "+972",
						code: "IL"
					}, {
						label: "Italy (+39)",
						value: "+39",
						code: "IT"
					}, {
						label: "Jamaica (+1 876)",
						value: "+1 876",
						code: "JM"
					}, {
						label: "Japan (+81)",
						value: "+81",
						code: "JP"
					}, {
						label: "Jersey (+44)",
						value: "+44",
						code: "JE"
					}, {
						label: "Jordan (+962)",
						value: "+962",
						code: "JO"
					}, {
						label: "Kazakhstan (+7 7)",
						value: "+7 7",
						code: "KZ"
					}, {
						label: "Kenya (+254)",
						value: "+254",
						code: "KE"
					}, {
						label: "Kiribati (+686)",
						value: "+686",
						code: "KI"
					}, {
						label: "North Korea (+850)",
						value: "+850",
						code: "KP"
					}, {
						label: "South Korea (+82)",
						value: "+82",
						code: "KR"
					}, {
						label: "Kuwait (+965)",
						value: "+965",
						code: "KW"
					}, {
						label: "Kyrgyzstan (+996)",
						value: "+996",
						code: "KG"
					}, {
						label: "Laos (+856)",
						value: "+856",
						code: "LA"
					}, {
						label: "Latvia (+371)",
						value: "+371",
						code: "LV"
					}, {
						label: "Lebanon (+961)",
						value: "+961",
						code: "LB"
					}, {
						label: "Lesotho (+266)",
						value: "+266",
						code: "LS"
					}, {
						label: "Liberia (+231)",
						value: "+231",
						code: "LR"
					}, {
						label: "Libyan Arab Jamahiriya (+218)",
						value: "+218",
						code: "LY"
					}, {
						label: "Liechtenstein (+423)",
						value: "+423",
						code: "LI"
					}, {
						label: "Lithuania (+370)",
						value: "+370",
						code: "LT"
					}, {
						label: "Luxembourg (+352)",
						value: "+352",
						code: "LU"
					}, {
						label: "Macao (+853)",
						value: "+853",
						code: "MO"
					}, {
						label: "Macedonia (+389)",
						value: "+389",
						code: "MK"
					}, {
						label: "Madagascar (+261)",
						value: "+261",
						code: "MG"
					}, {
						label: "Malawi (+265)",
						value: "+265",
						code: "MW"
					}, {
						label: "Malaysia (+60)",
						value: "+60",
						code: "MY"
					}, {
						label: "Maldives (+960)",
						value: "+960",
						code: "MV"
					}, {
						label: "Mali (+223)",
						value: "+223",
						code: "ML"
					}, {
						label: "Malta (+356)",
						value: "+356",
						code: "MT"
					}, {
						label: "Marshall Islands (+692)",
						value: "+692",
						code: "MH"
					}, {
						label: "Martinique (+596)",
						value: "+596",
						code: "MQ"
					}, {
						label: "Mauritania (+222)",
						value: "+222",
						code: "MR"
					}, {
						label: "Mauritius (+230)",
						value: "+230",
						code: "MU"
					}, {
						label: "Mayotte (+262)",
						value: "+262",
						code: "YT"
					}, {
						label: "Mexico (+52)",
						value: "+52",
						code: "MX"
					}, {
						label: "Micronesia (+691)",
						value: "+691",
						code: "FM"
					}, {
						label: "Moldova (+373)",
						value: "+373",
						code: "MD"
					}, {
						label: "Monaco (+377)",
						value: "+377",
						code: "MC"
					}, {
						label: "Mongolia (+976)",
						value: "+976",
						code: "MN"
					}, {
						label: "Montenegro (+382)",
						value: "+382",
						code: "ME"
					}, {
						label: "Montserrat (+1664)",
						value: "+1664",
						code: "MS"
					}, {
						label: "Morocco (+212)",
						value: "+212",
						code: "MA"
					}, {
						label: "Mozambique (+258)",
						value: "+258",
						code: "MZ"
					}, {
						label: "Myanmar (+95)",
						value: "+95",
						code: "MM"
					}, {
						label: "Namibia (+264)",
						value: "+264",
						code: "NA"
					}, {
						label: "Nauru (+674)",
						value: "+674",
						code: "NR"
					}, {
						label: "Nepal (+977)",
						value: "+977",
						code: "NP"
					}, {
						label: "Netherlands (+31)",
						value: "+31",
						code: "NL"
					}, {
						label: "Netherlands Antilles (+599)",
						value: "+599",
						code: "AN"
					}, {
						label: "New Caledonia (+687)",
						value: "+687",
						code: "NC"
					}, {
						label: "New Zealand (+64)",
						value: "+64",
						code: "NZ"
					}, {
						label: "Nicaragua (+505)",
						value: "+505",
						code: "NI"
					}, {
						label: "Niger (+227)",
						value: "+227",
						code: "NE"
					}, {
						label: "Nigeria (+234)",
						value: "+234",
						code: "NG"
					}, {
						label: "Niue (+683)",
						value: "+683",
						code: "NU"
					}, {
						label: "Norfolk Island (+672)",
						value: "+672",
						code: "NF"
					}, {
						label: "Northern Mariana Islands (+1 670)",
						value: "+1 670",
						code: "MP"
					}, {
						label: "Norway (+47)",
						value: "+47",
						code: "NO"
					}, {
						label: "Oman (+968)",
						value: "+968",
						code: "OM"
					}, {
						label: "Pakistan (+92)",
						value: "+92",
						code: "PK"
					}, {
						label: "Palau (+680)",
						value: "+680",
						code: "PW"
					}, {
						label: "Palestinian Territory, Occupied (+970)",
						value: "+970",
						code: "PS"
					}, {
						label: "Panama (+507)",
						value: "+507",
						code: "PA"
					}, {
						label: "Papua New Guinea (+675)",
						value: "+675",
						code: "PG"
					}, {
						label: "Paraguay (+595)",
						value: "+595",
						code: "PY"
					}, {
						label: "Peru (+51)",
						value: "+51",
						code: "PE"
					}, {
						label: "Philippines (+63)",
						value: "+63",
						code: "PH"
					}, {
						label: "Pitcairn (+872)",
						value: "+872",
						code: "PN"
					}, {
						label: "Poland (+48)",
						value: "+48",
						code: "PL"
					}, {
						label: "Portugal (+351)",
						value: "+351",
						code: "PT"
					}, {
						label: "Puerto Rico (+1 939)",
						value: "+1 939",
						code: "PR"
					}, {
						label: "Qatar (+974)",
						value: "+974",
						code: "QA"
					}, {
						label: "Romania (+40)",
						value: "+40",
						code: "RO"
					}, {
						label: "Russia (+7)",
						value: "+7",
						code: "RU"
					}, {
						label: "Rwanda (+250)",
						value: "+250",
						code: "RW"
					}, {
						label: "Reunion (+262)",
						value: "+262",
						code: "RE"
					}, {
						label: "Saint Barthelemy (+590)",
						value: "+590",
						code: "BL"
					}, {
						label: "Saint Helena (+290)",
						value: "+290",
						code: "SH"
					}, {
						label: "Saint Kitts and Nevis (+1 869)",
						value: "+1 869",
						code: "KN"
					}, {
						label: "Saint Lucia (+1 758)",
						value: "+1 758",
						code: "LC"
					}, {
						label: "Saint Martin (+590)",
						value: "+590",
						code: "MF"
					}, {
						label: "Saint Pierre (+508)",
						value: "+508",
						code: "PM"
					}, {
						label: "Saint Vincent (+1 784)",
						value: "+1 784",
						code: "VC"
					}, {
						label: "Samoa (+685)",
						value: "+685",
						code: "WS"
					}, {
						label: "San Marino (+378)",
						value: "+378",
						code: "SM"
					}, {
						label: "Sao Tome and Principe (+239)",
						value: "+239",
						code: "ST"
					}, {
						label: "Saudi Arabia (+966)",
						value: "+966",
						code: "SA"
					}, {
						label: "Senegal (+221)",
						value: "+221",
						code: "SN"
					}, {
						label: "Serbia (+381)",
						value: "+381",
						code: "RS"
					}, {
						label: "Seychelles (+248)",
						value: "+248",
						code: "SC"
					}, {
						label: "Sierra Leone (+232)",
						value: "+232",
						code: "SL"
					}, {
						label: "Singapore (+65)",
						value: "+65",
						code: "SG"
					}, {
						label: "Slovakia (+421)",
						value: "+421",
						code: "SK"
					}, {
						label: "Slovenia (+386)",
						value: "+386",
						code: "SI"
					}, {
						label: "Solomon Islands (+677)",
						value: "+677",
						code: "SB"
					}, {
						label: "Somalia (+252)",
						value: "+252",
						code: "SO"
					}, {
						label: "South Africa (+27)",
						value: "+27",
						code: "ZA"
					}, {
						label: "South Georgia (+500)",
						value: "+500",
						code: "GS"
					}, {
						label: "Spain (+34)",
						value: "+34",
						code: "ES"
					}, {
						label: "Sri Lanka (+94)",
						value: "+94",
						code: "LK"
					}, {
						label: "Sudan (+249)",
						value: "+249",
						code: "SD"
					}, {
						label: "Surilabel (+597)",
						value: "+597",
						code: "SR"
					}, {
						label: "Svalbard and Jan Mayen (+47)",
						value: "+47",
						code: "SJ"
					}, {
						label: "Swaziland (+268)",
						value: "+268",
						code: "SZ"
					}, {
						label: "Sweden (+46)",
						value: "+46",
						code: "SE"
					}, {
						label: "Switzerland (+41)",
						value: "+41",
						code: "CH"
					}, {
						label: "Syrian Arab Republic (+963)",
						value: "+963",
						code: "SY"
					}, {
						label: "Taiwan (+886)",
						value: "+886",
						code: "TW"
					}, {
						label: "Tajikistan (+992)",
						value: "+992",
						code: "TJ"
					}, {
						label: "Tanzania (+255)",
						value: "+255",
						code: "TZ"
					}, {
						label: "Thailand (+66)",
						value: "+66",
						code: "TH"
					}, {
						label: "Timor-Leste (+670)",
						value: "+670",
						code: "TL"
					}, {
						label: "Togo (+228)",
						value: "+228",
						code: "TG"
					}, {
						label: "Tokelau (+690)",
						value: "+690",
						code: "TK"
					}, {
						label: "Tonga (+676)",
						value: "+676",
						code: "TO"
					}, {
						label: "Trinidad and Tobago (+1 868)",
						value: "+1 868",
						code: "TT"
					}, {
						label: "Tunisia (+216)",
						value: "+216",
						code: "TN"
					}, {
						label: "Turkey (+90)",
						value: "+90",
						code: "TR"
					}, {
						label: "Turkmenistan (+993)",
						value: "+993",
						code: "TM"
					}, {
						label: "Turks and Caicos Islands (+1 649)",
						value: "+1 649",
						code: "TC"
					}, {
						label: "Tuvalu (+688)",
						value: "+688",
						code: "TV"
					}, {
						label: "Uganda (+256)",
						value: "+256",
						code: "UG"
					}, {
						label: "Ukraine (+380)",
						value: "+380",
						code: "UA"
					}, {
						label: "United Arab Emirates (+971)",
						value: "+971",
						code: "AE"
					}, {
						label: "United Kingdom (+44)",
						value: "+44",
						code: "GB"
					}, {
						label: "United States (+1)",
						value: "+1",
						code: "US"
					}, {
						label: "Uruguay (+598)",
						value: "+598",
						code: "UY"
					}, {
						label: "Uzbekistan (+998)",
						value: "+998",
						code: "UZ"
					}, {
						label: "Vanuatu (+678)",
						value: "+678",
						code: "VU"
					}, {
						label: "Venezuela (+58)",
						value: "+58",
						code: "VE"
					}, {
						label: "Vietnam (+84)",
						value: "+84",
						code: "VN"
					}, {
						label: "Virgin Islands, British (+1 284)",
						value: "+1 284",
						code: "VG"
					}, {
						label: "Virgin Islands, U.S. (+1 340)",
						value: "+1 340",
						code: "VI"
					}, {
						label: "Wallis and Futuna (+681)",
						value: "+681",
						code: "WF"
					}, {
						label: "Yemen (+967)",
						value: "+967",
						code: "YE"
					}, {
						label: "Zambia (+260)",
						value: "+260",
						code: "ZM"
					}, {
						label: "Zimbabwe (+263)",
						value: "+263",
						code: "ZW"
					}], this.schoolDetails = JSON.parse(localStorage.getItem("school_details"))
				}
				options() {
					return {
						headers: new n.h({
							"Content-Type": "application/json",
							Authorization: this.userData.token
						})
					}
				}
				options2() {
					return {
						headers: new n.h({
							Authorization: this.userData.token
						})
					}
				}
				getcountryList() {
					return this.countryList
				}
				customFieldsWithBranchnSchool(e, l, t) {
					return this.httpClient.get(this.api + "/branch/" + l + "/school/" + this.getSclId() + "/studentcustomfields", this.loginservice.options(e))
				}
				getAllCustomFields(e, l, t) {
					let n = [];
					return l.map(l => {
						n.push(this.customFieldsWithBranchnSchool(e, l.branch_id, t))
					}), Object(a.a)(n)
				}
				getGenericMandatoryFields(e) {
					return this.userData = e, this.httpClient.get(this.api + "/users/getprofile?s_id=" + e.student_ppa_profiles[0].s_profile_id + "&school_id=" + this.getSclId(), this.loginservice.options(this.userData))
				}
				getSclId() {
					return JSON.parse(localStorage.getItem("school_details")) && JSON.parse(localStorage.getItem("school_details")).school_id ? JSON.parse(localStorage.getItem("school_details")).school_id : ""
				}
				formatDob(e) {
					return e && e.length > 10 ? e.substring(0, 10) : e
				}
				getFormValues(e, l) {
					if (0 !== Object.entries(this.fValue).length && this.fValue.constructor === Object || this.formData.constructor === Object) {
						let t;
						(this.fValue.name || this.formData.name) && (t = this.fValue.name ? this.fValue.name : this.formData.name, t = t.split("$"));
						for (let n = 0; n < e.length; n++)
							if ("firstname" !== e[n].name && "lastname" !== e[n].name || !t) {
								if ("profile_pic" === e[n]) return this.fValue[e[n]] ? this.fValue[e[n]] : this.formData[e[n]];
								if ("country_code" === e[n]) return this.fValue[e[n]] ? this.fValue[e[n]] : this.formData && this.formData.phone_number ? this.formData.phone_number.code : "";
								"dob" === e[n].name ? (e[n].value = this.formatDob(this.fValue[e[n].name] ? this.fValue[e[n].name] : this.formData[e[n].name]), e[n].disabled = !!this.formData[e[n].name] && "" != this.formData[e[n].name]) : "phone" === e[n].name ? (e[n].value = this.fValue[e[n].name] ? this.fValue[e[n].name] : this.formData[e[n].name], e[n].disabled = !!(this.formData[e[n].name] && this.formData && this.formData.phone_number) && "" !== this.formData[e[n].name]) : l ? "current_backlogs" === e[n].name ? (e[n].value = this.fValue[e[n].name] || 0 === this.fValue[e[n].name] ? this.fValue[e[n].name] : this.formData.student_ppa_profiles[0][e[n].name] || 0 === this.formData.student_ppa_profiles[0][e[n].name] ? this.formData.student_ppa_profiles[0][e[n].name] : "", e[n].disabled = !(!this.formData.student_ppa_profiles[0][e[n].name] && 0 !== this.formData.student_ppa_profiles[0][e[n].name]) && "" !== this.formData.student_ppa_profiles[0][e[n].name]) : "backlog_history" === e[n].name || "interested_for_placement" === e[n].name ? (e[n].value = !0 === this.fValue[e[n].name] || !1 === this.fValue[e[n].name] ? this.fValue[e[n].name] : this.formData.student_ppa_profiles[0][e[n].name], e[n].disabled = !![!0, !1].includes(this.formData.student_ppa_profiles[0][e[n].name])) : (e[n].value = this.fValue[e[n].name] ? this.fValue[e[n].name] : this.formData.student_ppa_profiles[0][e[n].name], e[n].disabled = !!this.formData.student_ppa_profiles[0][e[n].name]) : (e[n].value = this.fValue[e[n].name] ? this.fValue[e[n].name] : this.formData[e[n].name], e[n].disabled = !!this.formData[e[n].name] && "" != this.formData[e[n].name])
							} else {
								e[n].value = "firstname" === e[n].name ? t[0] : t[1];
								const l = this.formData.name ? this.formData.name.split("$") : "";
								"firstname" === e[n].name && (e[n].disabled = !(!l || !l[0] || "" === l[0])), "lastname" === e[n].name && (e[n].disabled = !(!l || !l[1] || "" === l[1]))
							}
					}
				}
				setDegreeValue(e) {
					this.formData = JSON.parse(localStorage.getItem("formData"));
					const l = [];
					if (this.degreeValue.length)
						for (let n = 0; n < e.length; n++) {
							const t = "is_" + e[n].key.replace("_marks", "") + "_percentage";
							for (let i = 0; i < this.degreeValue.length; i++)
								if (e[n].value === this.degreeValue[i].degree) {
									const o = {
										degree: e[n].value,
										detail_type: null,
										marks: this.degreeValue[i].marks ? this.degreeValue[i].marks : this.formData.student_ppa_profiles[0][e[n].key],
										label: e[n].value,
										disabled: !!this.formData.student_ppa_profiles[0][e[n].key],
										not: !!this.degreeValue[i].not,
										mandatory: this.degreeValue[i].mandatory,
										error: !1
									};
									o.detail_type = !o.marks && 0 !== o.marks || "NA" === o.marks ? null : this.degreeValue[i].detail_type ? this.degreeValue[i].detail_type : this.formData.student_ppa_profiles[0][t], l.push(o)
								} else if (this.formData.student_ppa_profiles[0][e[n].key]) {
								const o = {
									degree: e[n].value,
									detail_type: null,
									marks: this.formData.student_ppa_profiles[0][e[n].key],
									label: e[n].value,
									disabled: !!this.formData.student_ppa_profiles[0][e[n].key],
									not: !!this.degreeValue[i].not,
									mandatory: this.degreeValue[i].mandatory,
									error: !1
								};
								o.detail_type = !o.marks && 0 !== o.marks || "NA" === o.marks ? null : this.formData.student_ppa_profiles[0][t], l.push(o)
							}
						} else
							for (let n = 0; n < e.length; n++) {
								const t = "is_" + e[n].key.replace("_marks", "") + "_percentage";
								this.fValue[e[n].key] = this.formData.student_ppa_profiles[0][e[n].key], this.fValue[t] = this.formData.student_ppa_profiles[0][t];
								const i = {
									degree: e[n].value,
									detail_type: null,
									marks: this.formData.student_ppa_profiles[0][e[n].key],
									label: e[n].value,
									disabled: !!this.formData.student_ppa_profiles[0][e[n].key],
									not: !1
								};
								i.detail_type = !i.marks && 0 !== i.marks || "NA" === i.marks ? null : this.formData.student_ppa_profiles[0][t], l.push(i)
							}
					this.degreeValue = void 0;
					let t = l.filter((e, l, t) => t.findIndex(l => l.degree === e.degree) === l);
					this.degreeValue = [...t]
				}
				setDegreeValueOnNext(e) {
					this.degreeValue = void 0, this.degreeValue = e
				}
				getStudentPermissionList(e) {
					return this.httpClient.get(this.api + "/student/permissionlist", this.loginservice.options(e))
				}
				blockSideNavRedirection() {
					this.globalService.blockRedirection(), this.noRedirect.next({
						status: !0
					})
				}
				allowSideNavRedirection() {
					localStorage.removeItem("noRedirect"), this.noRedirect.next({
						status: !1
					})
				}
				unfilledBasicFilled(e) {
					JSON.parse(localStorage.getItem("school_details"));
					const l = JSON.parse(localStorage.getItem("basicFiels")),
						t = l.find(e => "First Name" === e.label),
						n = l.find(e => "Last Name" === e.label),
						i = l.find(e => "Phone No" === e.label),
						o = l.find(e => "Gender" === e.label),
						a = l.find(e => "dob" === e.label),
						s = l.find(e => "Profile Picture" === e.label),
						r = JSON.parse(localStorage.getItem("ppaData"));
					let u = null,
						c = null;
					if (e && null !== e.name) {
						const l = e.name.split("$");
						l && l.length && l[0] && (u = l[0]), l && l.length && l[1] && (c = l[1])
					}
					return r.verification_status >= 2 ? !!(t.value && null === u || n.value && null === c || a.value && null === e.dob || a.value && !e.dob || o.value && !e.gender || i.value && (null === e.phone_number || null === e.phone) || s.value && (!e.profile_pic || "https://s3.amazonaws.com/exams-media-stage/assets/common-images/profile-default.jpg" === e.profile_pic)) : !!(t.hide && null === u || n.hide && null === c || a.hide && null === e.dob || a.hide && !e.dob || o.hide && !e.gender || i.hide && (null === e.phone_number || null === e.phone) || s.hide && (!e.profile_pic || "https://s3.amazonaws.com/exams-media-stage/assets/common-images/profile-default.jpg" === e.profile_pic))
				}
				checkRedirect(e, l, t, n, i) {
					this.resetVariable(), this.formData = n, this.basicFields = e.school_student_custom_fields.basic_info_field, this.schoolFields = e.school_student_custom_fields.custom_fields;
					const o = l,
						a = n.student_custom_fields;
					return localStorage.setItem("basicFiels", JSON.stringify(e.school_student_custom_fields.basic_info_field)), this.unfilledBasicFilled(e) ? (this.personalData = !0, this.acadDetails = this.checkAcad(e, "check", i), this.isFilled.acad = !this.acadDetails, o && o.length > 0 && void 0 !== l[0] ? this.getCustomArray(a, o, t).subscribe(e => {
						const l = e.dataToFIll && e.dataToFIll.length && e.dataToFIll.find(e => e.length);
						if ((e && e.isCustom || this.showAcademic) && l) return e && e.mandatoryUnfilled || (this.isFilled.add = !0), this.showAdditional = !0, localStorage.setItem("customFieldsValue", JSON.stringify(e.dataToFIll)), this.customData = !0, this.blockSideNavRedirection(), Object(s.a)("personal");
						this.customData = !1
					}) : this.customData = !1, this.pers = !0, this.blockSideNavRedirection(), Object(s.a)("personal")) : this.checkAcad(e, void 0, i) ? (this.isFilled.per = !0, this.acadDetails = !0, o && o.length > 0 && void 0 !== l[0] ? this.getCustomArray(a, o, t).subscribe(e => {
						const l = e.dataToFIll && e.dataToFIll.length && e.dataToFIll.find(e => e.length);
						if (e && e.isCustom && l) return e && e.mandatoryUnfilled || (this.isFilled.add = !0), this.showAdditional = !0, localStorage.setItem("customFieldsValue", JSON.stringify(e.dataToFIll)), this.customData = !0, this.blockSideNavRedirection(), Object(s.a)("acad");
						this.customData = !1
					}) : this.customData = !1, this.blockSideNavRedirection(), Object(s.a)("acad")) : (this.isFilled.per = !0, this.isFilled.acad = !0, this.getCustomArray(a, o, t).subscribe(l => {
						const t = l.dataToFIll && l.dataToFIll.length && l.dataToFIll.find(e => e.length),
							n = JSON.parse(localStorage.getItem("ppaData"));
						return l.isCustom && this.showAcademic && this.checkAcad(e, "check", i) && t || l.mandatoryUnfilled || n.verification_status < 2 && l.isCustom ? (this.showAdditional = !0, localStorage.setItem("customFieldsValue", JSON.stringify(l.dataToFIll)), this.customData = !0, Object(s.a)(!0)) : (this.isFilled.add = !0, this.customData = !1, Object(s.a)(!1))
					}), !0 === this.customData ? (this.blockSideNavRedirection(), Object(s.a)("custom")) : (this.isFilled.add = !0, Object(s.a)(!1)))
				}
				checkAcad(e, l, t) {
					let n, i = e.school_student_custom_fields.basic_info_field;
					const o = e.student_ppa_profiles[0];
					e && e.student_ppa_profiles[0] && e.student_ppa_profiles[0].verification_status && this.vStatus.next({
						verification_status: e.student_ppa_profiles[0].verification_status
					});
					const a = t.purpose;
					let s = !0;
					const r = [];
					let u;
					if (u = "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) ? ["10th Percentage", "12th Percentage", "Diploma Percentage", "UG CGPA", "PG CGPA", "SSLC Board", "SSLC District", "SSLC State", "HSC Board", "HSC District", "HSC State", "Registration Number", "Roll No", "Year of Admission", "Backlogs History", "Current Backlogs", "Interested for Placement", "Work Experience"] : ["10th Percentage", "12th Percentage", "Diploma Percentage", "UG CGPA", "PG CGPA", "Registration Number", "Roll No", "Backlogs History", "Current Backlogs", "Interested for Placement", "Work Experience"], n = e.school_student_custom_fields.basic_info_field.filter(e => !u.includes(e.label) && "Email ID" !== e.label), this.showPersonal = !!n.find(e => !0 === e.hide), i = e.school_student_custom_fields.basic_info_field.filter(e => u.includes(e.label)), this.showAcademic = !!i.find(e => !0 === e.hide), i.forEach(e => {
							"10th Percentage" === e.label ? r.push(this.validate(o, "tenth_marks", e.value, e.hide)) : "12th Percentage" === e.label ? r.push(this.validate(o, "twelfth_marks", e.value, e.hide)) : "Diploma Percentage" === e.label ? r.push(this.validate(o, "diploma_marks", e.value, e.hide)) : "UG CGPA" === e.label ? r.push(this.validate(o, "ug_marks", e.value, e.hide)) : "PG CGPA" === e.label ? r.push(this.validate(o, "pg_marks", e.value, e.hide)) : "Registration Number" === e.label || "Roll No" === e.label ? r.push(this.validate(o, "roll_no", e.value, e.hide)) : "Backlogs History" === e.label ? r.push(this.validate(o, "backlog_history", e.value, e.hide, !0)) : "Current Backlogs" === e.label ? r.push(this.validate(o, "current_backlogs", e.value, e.hide, !1)) : "Interested for Placement" === e.label ? r.push(this.validate(o, "interested_for_placement", e.value, e.hide, !0)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "SSLC Board" === e.label ? r.push(this.validate(o, "sslc_board", e.value, e.hide)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "SSLC District" === e.label ? r.push(this.validate(o, "sslc_district", e.value, e.hide)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "SSLC State" === e.label ? r.push(this.validate(o, "sslc_state", e.value, e.hide)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "HSC Board" === e.label ? r.push(this.validate(o, "hsc_board", e.value, e.hide)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "HSC District" === e.label ? r.push(this.validate(o, "hsc_district", e.value, e.hide)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "HSC State" === e.label ? r.push(this.validate(o, "hsc_state", e.value, e.hide)) : "Placement Process App" === a && this.schoolDetails.admission_report_permission.schoolIds.includes(this.schoolDetails.school_id) && "Year of Admission" === e.label ? r.push(this.validate(o, "year_of_admission", e.value, e.hide)) : "Work Experience" === e.label && r.push(this.validate(o, "work_experience", e.value, e.hide))
						}), "Recruitment" === a) {
						let e = this.schoolDetails && this.schoolDetails.schools_metadata && this.schoolDetails.schools_metadata.enable_degree_list;
						r.push(this.validate(o, "degree", e, !1)), r.push(this.validate(o, "degree", e, !1)) && e && (this.showAcademic = !0)
					}
					return s = r.findIndex(e => !1 === e) > -1, s
				}
				validate(e, l, t, n, i) {
					const o = JSON.parse(localStorage.getItem("ppaData"));
					return t ? i ? (!0 === e[l] || !1 === e[l]) && "NA" !== e[l] : !(!e[l] && 0 !== e[l] || "NA" === e[l]) : !(n && o.verification_status < 2 && (i ? !0 !== e[l] && !1 !== e[l] || "NA" === e[l] : !e[l] && 0 !== e[l] || "NA" === e[l]))
				}
				getCustomArray(e, l, t) {
					const n = [];
					let i = !1,
						o = !1;
					if (e) {
						for (let s = 0; s < t.length; s++)
							if (e.find(e => e.branch_id === t[s].branch_id)) {
								for (let a = 0; a < e.length; a++)
									if (t[s].branch_id === e[a].branch_id)
										if (l[s] && l[s].length > 0) {
											for (let t = 0; t < l[s].length; t++)
												if (e[a] && -1 === e[a].fields.findIndex(e => e.cf_id === l[s][t].cf_id)) l[s][t].hide || "dob" === l[s][t].type || l[s][t].archive || (n[s] ? n[s].push(l[s][t]) : n.push([l[s][t]]), i = !0, l[s][t].mandatory && (o = !0));
												else if (!l[s][t].hide && "dob" !== l[s][t].type && !l[s][t].archive)
												if (l[s][t].mandatory) {
													let r = e[a].fields.findIndex(e => e.cf_id === l[s][t].cf_id);
													if (e[a].fields[r].answer && 0 === e[a].fields[r].answer.length || [!0, !1, void 0, "", null].includes(e[a].fields[r].answer) || "policy" === e[a].fields[r].type && e[a].fields[r].answer && new Date(e[a].fields[r].answer) < new Date(l[s][t].date_modified)) n[s] ? n[s].push(l[s][t]) : n.push([l[s][t]]), i = !0, o = !0;
													else {
														const o = l[s][t];
														o.answer = e[a].fields[r].answer, o.disable = !0, n[s] ? n[s].push(o) : n.push([o]), i = !0
													}
												} else {
													let o = e[a].fields.findIndex(e => e.cf_id === l[s][t].cf_id);
													if (e[a].fields[o].answer && 0 === e[a].fields[o].answer.length || [!0, !1, void 0, "", null].includes(e[a].fields[o].answer)) n[s] ? n[s].push(l[s][t]) : n.push([l[s][t]]);
													else {
														const r = l[s][t];
														r.answer = e[a].fields[o].answer, r.disable = !0, n[s] ? n[s].push(r) : n.push([r]), i = !0
													}
												} n[s] || (n[s] = [])
										} else n[s] || (n[s] = [])
							} else if (l[s])
							for (let e = 0; e < l[s].length - 1; e++) l[s][e].hide || "dob" === l[s][e].type || l[s][e].archive || (n[s] ? n[s].push(l[s][e]) : n.push([l[s][e]]), i = !0, l[s][e].mandatory && (o = !0))
					} else
						for (let s = 0; s < t.length; s++)
							if (l[s]) {
								for (let e = 0; e < l[s].length - 1; e++) l[s][e].hide || "dob" === l[s][e].type || l[s][e].archive || (n[s] ? n[s].push(l[s][e]) : n.push([l[s][e]]), i = !0, l[s][e].mandatory && (o = !0));
								n[s] || (n[s] = [])
							} const a = {
						dataToFIll: n,
						isCustom: i,
						mandatoryUnfilled: o
					};
					return Object(s.a)(a)
				}
				getAllBranchFields(...e) {
					let l = [],
						t = [];
					for (let n = 0; n < this.userData.school_branch_department_users.length; n++) t.push(this.customFieldsWithBranchnSchool(this.userData, this.userData.school_branch_department_users[n].branch_id, this.school_id).subscribe(e => {
						l.push(e.studentCustomFields.student_custom_fields.fields)
					}));
					return Object(a.a)(t)
				}
				generateCustomFieldsForDB(e) {
					const l = JSON.parse(localStorage.getItem("token")),
						t = JSON.parse(localStorage.getItem("formData")),
						n = l.school_branch_department_users.map(e => e.branch_id),
						i = t.student_custom_fields,
						o = [];
					return n.forEach((l, t) => {
						const n = i ? i.find(e => e.branch_id === l) : null,
							a = e ? e.find(e => e.branch_id.value === l) : null;
						let s;
						a && (s = {}, s.fields = a.fields, s.branch_id = l);
						const r = this.schoolFields.find(e => e.branch_id === l),
							u = {
								branch_id: l,
								fields: []
							};
						r && r.fields.length && r.fields.forEach(e => {
							let l, t, i = e;
							s && s.fields && s.fields.length && s.fields.find(l => l.cf_id === e.cf_id) ? t = s.fields.find("resume" === e.type ? l => l.type === e.type : l => l.cf_id === e.cf_id) : n && n.fields && n.fields.length && n.fields.find(l => l.cf_id === e.cf_id) && (l = n.fields.find("resume" === e.type ? l => l.type === e.type : l => l.cf_id === e.cf_id)), t && ![!0, !1, void 0, null, ""].includes(t.answer) ? (i.answer = t.answer, u.fields.push(i)) : l && ![!0, !1, void 0, null, ""].includes(l.answer) && (i.answer = l.answer, u.fields.push(i))
						}), u && u.fields && u.fields.length && o.push(u)
					}), o
				}
				saveData(e) {
					return this.httpClient.post(this.api + "/v2/users/update", e, this.options2())
				}
				uploadFile(e, l, t, n, o) {
					return new Promise((n, a) => {
						let s, r, u;
						if (o && "pdf" === l) {
							let e = this.branchOrder.length > 0 && this.branchOrder[this.activeBranch - 1] && this.branchOrder[this.activeBranch - 1].value ? this.branchOrder[this.activeBranch - 1].value : JSON.parse(localStorage.getItem("branches"))[this.activeBranch - 1].value;
							r = t + this.school_id + "/" + this.userData.email + "-" + e + "-" + this.userData.user_id + "-resume", s = "application/pdf"
						}
						const c = {
							file_name: r,
							type: s,
							Bucket_name: this.globalService.assets_bucket
						};
						this.loader.next(!0), this.getSignedUrl(c).subscribe(l => {
							this.uploadUsingSignedUrl(l.data.url, e).subscribe(e => {
								this.loader.next(!1), e && 200 === e.status ? (u = i.a.s3Objectstudentassets + c.file_name, n(u)) : n(!1)
							}, e => {
								this.loader.next(!1)
							})
						}, e => {
							this.loader.next(!1)
						})
					})
				}
				updateToken(e) {
					const l = JSON.parse(localStorage.getItem("token")),
						t = JSON.parse(localStorage.getItem("ppaData"));
					e && e.profile_pic && e.profile_pic !== i.a.s3Objectstudentassets + "assets/common-images/profile-default.jpg" && (l.profile_pic = e.profile_pic), e && e.name && e.name.length && (l.name = e.name), e && e.gender && (l.gender = e.gender), e && e.dob && (l.dob = e.dob), e && e.roll_no && (l.roll_no = e.roll_no, t.roll_no = e.roll_no), e && e.degree && (t.degree = e.degree, l.student_ppa_profiles[0].degree = e.degree), e && e.phone && e.country_code && (l.phone = e.phone, l.phone_number = {
						code: e.country_code,
						number: e.phone
					}), e && e.sslc_board && (t.sslc_board = e.sslc_board, l.student_ppa_profiles[0].sslc_board = e.sslc_board), e && e.sslc_district && (t.sslc_district = e.sslc_district, l.student_ppa_profiles[0].sslc_district = e.sslc_district), e && e.sslc_state && (t.sslc_state = e.sslc_state, l.student_ppa_profiles[0].sslc_state = e.sslc_state), e && e.hsc_board && (t.hsc_board = e.hsc_board, l.student_ppa_profiles[0].hsc_board = e.hsc_board), e && e.hsc_district && (t.hsc_district = e.hsc_district, l.student_ppa_profiles[0].hsc_district = e.hsc_district), e && e.hsc_state && (t.hsc_state = e.hsc_state, l.student_ppa_profiles[0].hsc_state = e.hsc_state), e && e.year_of_admission && (t.year_of_admission = e.year_of_admission, l.student_ppa_profiles[0].year_of_admission = e.year_of_admission), localStorage.removeItem("ppaData"), localStorage.setItem("ppaData", JSON.stringify(t)), localStorage.removeItem("token"), localStorage.setItem("token", JSON.stringify(l))
				}
				resetVariable() {
					this.fValue = {}, this.branchOrder = [], this.customFieldsValue = [], this.basicFields = [], this.degreeValue = [], this.isFilled = {}, this.activeBranch = 1, this.acadDetails = !1, this.showAdditional = !1, this.personalData = !1, this.customData = !1, this.nextAddData = []
				}
				fillAddData(e, l) {
					this.nextAddData[e - 1] ? this.nextAddData[e - 1] = l : this.nextAddData.push(l)
				}
				getSignedUrl(e) {
					return this.httpClient.post(this.api + "/getsignedurl", e, this.options())
				}
				getSignedUrlForAnyType(e) {
					return this.httpClient.post(this.api + "/get_signedurl_all", e, this.options())
				}
				getTaSignedUrl(e) {
					return this.httpClient.post(this.api + "/get_ta_signed_url", e, this.options())
				}
				uploadUsingSignedUrl(e, l) {
					return this.httpClient.put(e, l, {
						observe: "response"
					})
				}
				uploadUsingSignedUrlWithOptions(e, l) {
					return this.httpClient.put(e, l, {
						observe: "response"
					})
				}
				studentCustomFields(e, l) {
					return this.httpClient.get(this.api + "/branch/" + e + "/studentcustomfields/" + l, this.loginservice.options(null))
				}
				schoolCustomFields(e, l) {
					return this.httpClient.get(this.api + "/branch/" + e + "/school/" + l + "/studentcustomfields", this.loginservice.options(null)).pipe(Object(u.a)(this.loginservice.handleError.bind(this)))
				}
				publicProfileCustomFields(e) {
					return this.httpClient.post(this.api + "/publicprofile/studentcustomfields", e, this.loginservice.options(null))
				}
				getPpaProfile(e) {
					return this.httpClient.get(this.api + "/users/getprofile?s_id=" + e + "&school_id=" + this.getSclId(), this.loginservice.options(null))
				}
				updateRollNo(e) {
					return this.httpClient.post(this.api + "/users/updaterollno", e, this.loginservice.options(null))
				}
				changesRequest(e) {
					return this.httpClient.post(this.api + "/users/requestchanges", e, this.loginservice.options(null))
				}
				profilePublish(e) {
					return this.httpClient.put(this.api + "/users/ppapublish", e, this.options())
				}
				changePassword(e, l) {
					return this.httpClient.post(this.api + "/users/reset", e, this.loginservice.options(null))
				}
				generateOtp(e) {
					return this.httpClient.post(this.api + "/users/generateOtp", e, this.loginservice.options(null))
				}
				sendOtp(e) {
					return this.httpClient.post(this.api + "/users/sendOtp", e, this.loginservice.options(null))
				}
				verifyOtp(e) {
					return this.httpClient.post(this.api + "/users/verifyOtp", e, this.loginservice.options(null))
				}
				validateOtp(e) {
					return this.httpClient.post(this.api + "/users/validateOtp", e, this.loginservice.options(null))
				}
				reasonReject(e) {
					return this.httpClient.post(this.api + "/users/reasonreject", e, this.loginservice.options(null))
				}
				changeEmailID(e) {
					return e.school_code = this.school_code, this.httpClient.post(this.api + "/users/resetEmailId", e, this.loginservice.options(null))
				}
				getEmailFromId(e) {
					return this.httpClient.post(this.api + "/publicprofile/getPublicProfileEmail", e, this.loginservice.options(null))
				}
			}
			p.ngInjectableDef = d.R({
				factory: function() {
					return new p(d.V(n.c), d.V(r.a), d.V(c.a))
				},
				token: p,
				providedIn: "root"
			})
		},
		HMdK: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("8Y7J");
			class i {
				constructor(e) {
					this.renderer = e, this.but = new n.m, this.btnProperties = "", this.padding = "", this.background = "", this.fontColor = "", this.border = "", this.bty = {
						"font-size": "12px"
					}
				}
				ngOnChanges(e) {
					for (let l in e) "loading" === l && this.loadingHandle()
				}
				loadingHandle() {
					this.renderer.setStyle(this.button.nativeElement, "cursor", this.loading ? "not-allowed" : "pointer")
				}
				emitCall(e) {
					this.loading || this.but.emit({
						valid: !0,
						type: e
					})
				}
			}
		},
		Kfth: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			})), t("EFyh");
			class n {
				constructor(e, l) {
					this.Router = e, this.loginservice = l
				}
				ngOnInit() {}
				loadLink() {
					this.params && this.params.email && this.loginservice.getEmail.next(this.params), this.Router.navigateByUrl("/" + this.routerLink)
				}
			}
		},
		Lqxq: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		Mx2V: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("8Y7J");
			class i {
				constructor() {
					this.emitChips = new n.m, this.removeOption = new n.m, this.selecChips = new n.m, this.chipswidth = ""
				}
				getScreenSize(e) {
					window.innerWidth > 1440 ? (this.bigscreen = !0, this.mobile = !1, this.screenWidth = window.innerWidth) : window.innerWidth > 768 ? (this.mobile = !1, this.screenWidth = window.innerWidth) : (this.mobile = !0, this.screenWidth = window.innerWidth)
				}
				ngOnInit() {
					window.innerWidth > 1440 ? (this.bigscreen = !0, this.mobile = !1, this.screenWidth = document.documentElement.clientWidth) : document.documentElement.clientWidth > 768 ? (this.screenWidth = document.documentElement.clientWidth, this.mobile = !1) : (this.screenWidth = document.documentElement.clientWidth, this.mobile = !0)
				}
				btnEmit(e, l) {
					this.emitChips.emit(l)
				}
				remove(e) {
					this.removeOption.emit(e)
				}
				returnSelectedChips(e) {
					this.returnChips && this.selecChips.emit(e)
				}
			}
		},
		Pj5t: function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("SVse");
			t("/uwM"), t.d(l, "a", (function() {
				return o
			})), t.d(l, "b", (function() {
				return u
			}));
			var o = n.nb({
				encapsulation: 0,
				styles: [
					[".load-main[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.8);width:100%;height:100vh;position:fixed;top:0;left:0;z-index:10;opacity:.5;visibility:visible;transition:all .5s}.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:after{border-radius:50%;width:50px;height:50px}.loader[_ngcontent-%COMP%]{margin:60px auto;font-size:4px;position:relative;text-indent:-9999em;border-top:1.1em solid var(--thirtyfour);border-right:1.1em solid var(--thirtyfour);border-bottom:1.1em solid var(--thirtyfour);border-left:1.1em solid var(--white);transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}.loadpos[_ngcontent-%COMP%]{margin:unset;top:50%;left:50%}.type3[_ngcontent-%COMP%]{color:var(--inputB);font-size:18px}.animate[_ngcontent-%COMP%]{-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8;display:flex;justify-content:center;align-items:center}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.spinload[_ngcontent-%COMP%]{height:100%;width:100%}@media screen and (min-device-width:0px) and (max-device-width:768px){.loadpos[_ngcontent-%COMP%]{left:45%}}"]
				],
				data: {}
			});

			function a(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "loader"]
				], null, null, null, null, null))], null, null)
			}

			function s(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "div", [
					["class", "load-main"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, [
					[1, 0],
					["loader", 1]
				], null, 1, "div", [
					["class", "loader loadpos"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 0, "i", [
					["class", "icon-load-c"]
				], null, null, null, null, null))], null, null)
			}

			function r(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "spinload"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 2, "div", [
					["class", "animate"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "i", [
					["class", "icon-load--c type3"]
				], null, null, null, null, null)), n.ob(3, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null)], (function(e, l) {
					e(l, 3, 0, l.component.loaderStyle)
				}), null)
			}

			function u(e) {
				return n.Jb(0, [n.Fb(671088640, 1, {
					loader: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, a)), n.ob(2, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, s)), n.ob(4, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, r)), n.ob(6, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, "type1" === t.type), e(l, 4, 0, "type2" === t.type), e(l, 6, 0, "type3" === t.type)
				}), null)
			}
		},
		QDnK: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return d
			})), t.d(l, "b", (function() {
				return H
			}));
			var n = t("dzoM"),
				i = t("8Y7J"),
				o = t("SVse"),
				a = t("s7LF"),
				s = t("Z2Xd"),
				r = t("Kfth"),
				u = t("iInd"),
				c = t("EFyh"),
				d = (t("vCwT"), t("Gl8U"), i.nb({
					encapsulation: 2,
					styles: [n.a],
					data: {}
				}));

			function p(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), i.Hb(1, null, [" ", " ", " "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field.label, t.field.required ? "*" : "")
				}))
			}

			function h(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 7, "input", [
					["class", "font-18"],
					["placeholder", " "]
				], [
					[1, "type", 0],
					[8, "id", 0],
					[8, "name", 0],
					[8, "value", 0],
					[1, "disabled", 0],
					[1, "required", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "focus"],
					[null, "keyup"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var n = !0,
						o = e.component;
					return "input" === l && (n = !1 !== i.zb(e, 3)._handleInput(t.target.value) && n), "blur" === l && (n = !1 !== i.zb(e, 3).onTouched() && n), "compositionstart" === l && (n = !1 !== i.zb(e, 3)._compositionStart() && n), "compositionend" === l && (n = !1 !== i.zb(e, 3)._compositionEnd(t.target.value) && n), "focus" === l && (n = !1 !== o.changeValue() && n), "keyup" === l && (n = !1 !== o.changeuppercase(t, o.field, o.field.name) && n), n
				}), null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					iconInputPadd: 0,
					uppercase: 1,
					lowercase: 2,
					titlecase: 3,
					borderinputtop: 4
				}), i.ob(3, 16384, null, 0, a.d, [i.C, i.k, [2, a.a]], null, null), i.Eb(1024, null, a.o, (function(e) {
					return [e]
				}), [a.d]), i.ob(5, 671744, null, 0, a.h, [
					[3, a.c],
					[8, null],
					[8, null],
					[6, a.o],
					[2, a.D]
				], {
					name: [0, "name"]
				}, null), i.Eb(2048, null, a.p, null, [a.h]), i.ob(7, 16384, null, 0, a.q, [
					[4, a.p]
				], null, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.field && t.field.icon && t.field.icon.icon, t.field.fieldcase_type && "capitalcase" === t.field.fieldcase_type, t.field.fieldcase_type && "smallcase" === t.field.fieldcase_type, t.field.fieldcase_type && "titlecase" === t.field.fieldcase_type, t.field.label && t.field.label.length >= 60);
					e(l, 1, 0, "font-18", n), e(l, 5, 0, t.field.name)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 1, [t.field.type, t.field.name, t.field.name, t.field.value ? t.field.value : "", !0 === t.field.disabled || void 0, !0 === t.field.required, i.zb(l, 7).ngClassUntouched, i.zb(l, 7).ngClassTouched, i.zb(l, 7).ngClassPristine, i.zb(l, 7).ngClassDirty, i.zb(l, 7).ngClassValid, i.zb(l, 7).ngClassInvalid, i.zb(l, 7).ngClassPending])
				}))
			}

			function g(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), i.Hb(1, null, [" ", " ", " "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field.label, t.field.required ? "*" : "")
				}))
			}

			function b(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 2, "span", [], [
					[8, "className", 0]
				], [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.iconAction() && n), n
				}), null, null)), i.ob(1, 278528, null, 0, o.p, [i.s, i.k, i.C], {
					ngStyle: [0, "ngStyle"]
				}, null), i.Cb(2, {
					cursor: 0
				})], (function(e, l) {
					var t = e(l, 2, 0, l.component.field.icon.action ? "pointer" : "");
					e(l, 1, 0, t)
				}), (function(e, l) {
					e(l, 0, 0, i.rb(1, "", l.component.field.icon.icon, " inputIcons"))
				}))
			}

			function m(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "span", [
					["class", "input-group-addon font13"]
				], null, null, null, null, null)), (e()(), i.Hb(1, null, ["", ""]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.suffix)
				}))
			}

			function f(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 10, "label", [
					["class", "inputLabel"]
				], null, null, null, null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					disabled: 0
				}), (e()(), i.gb(16777216, null, null, 1, null, h)), i.ob(4, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, g)), i.ob(6, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, b)), i.ob(8, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, m)), i.ob(10, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.field.disabled);
					e(l, 1, 0, "inputLabel", n), e(l, 4, 0, !t.field.multiline), e(l, 6, 0, t.field.label.length < 60), e(l, 8, 0, t.field.icon && t.field.icon.required), e(l, 10, 0, t.field.suffix)
				}), null)
			}

			function v(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 7, "input", [
					["class", "fieldMarTop"],
					["placeholder", " "],
					["style", "border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;"]
				], [
					[1, "type", 0],
					[8, "id", 0],
					[8, "name", 0],
					[8, "value", 0],
					[1, "disabled", 0],
					[1, "required", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "focus"],
					[null, "keyup"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var n = !0,
						o = e.component;
					return "input" === l && (n = !1 !== i.zb(e, 3)._handleInput(t.target.value) && n), "blur" === l && (n = !1 !== i.zb(e, 3).onTouched() && n), "compositionstart" === l && (n = !1 !== i.zb(e, 3)._compositionStart() && n), "compositionend" === l && (n = !1 !== i.zb(e, 3)._compositionEnd(t.target.value) && n), "focus" === l && (n = !1 !== o.changeValue() && n), "keyup" === l && (n = !1 !== o.changeuppercase(t, o.field, o.field.name) && n), n
				}), null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					iconInputPadd: 0,
					uppercase: 1,
					lowercase: 2,
					titlecase: 3
				}), i.ob(3, 16384, null, 0, a.d, [i.C, i.k, [2, a.a]], null, null), i.Eb(1024, null, a.o, (function(e) {
					return [e]
				}), [a.d]), i.ob(5, 671744, null, 0, a.h, [
					[3, a.c],
					[8, null],
					[8, null],
					[6, a.o],
					[2, a.D]
				], {
					name: [0, "name"]
				}, null), i.Eb(2048, null, a.p, null, [a.h]), i.ob(7, 16384, null, 0, a.q, [
					[4, a.p]
				], null, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.field && t.field.icon && t.field.icon.icon, t.field.fieldcase_type && "capitalcase" === t.field.fieldcase_type, t.field.fieldcase_type && "smallcase" === t.field.fieldcase_type, t.field.fieldcase_type && "titlecase" === t.field.fieldcase_type);
					e(l, 1, 0, "fieldMarTop", n), e(l, 5, 0, t.field.name)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 1, [t.field.type, t.field.name, t.field.name, t.field.value ? t.field.value : "", !0 === t.field.disabled || void 0, !0 === t.field.required, i.zb(l, 7).ngClassUntouched, i.zb(l, 7).ngClassTouched, i.zb(l, 7).ngClassPristine, i.zb(l, 7).ngClassDirty, i.zb(l, 7).ngClassValid, i.zb(l, 7).ngClassInvalid, i.zb(l, 7).ngClassPending])
				}))
			}

			function _(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 2, "span", [], [
					[8, "className", 0]
				], [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.iconAction() && n), n
				}), null, null)), i.ob(1, 278528, null, 0, o.p, [i.s, i.k, i.C], {
					ngStyle: [0, "ngStyle"]
				}, null), i.Cb(2, {
					cursor: 0
				})], (function(e, l) {
					var t = e(l, 2, 0, l.component.field.icon.action ? "pointer" : "");
					e(l, 1, 0, t)
				}), (function(e, l) {
					e(l, 0, 0, i.rb(1, "", l.component.field.icon.icon, " inputIcons"))
				}))
			}

			function y(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "span", [
					["class", "input-group-addon font13"]
				], null, null, null, null, null)), (e()(), i.Hb(1, null, ["", ""]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.suffix)
				}))
			}

			function C(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 10, "label", [
					["class", "inputLabel"]
				], null, null, null, null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					disabled: 0
				}), (e()(), i.pb(3, 0, null, null, 1, "span", [
					["class", "simpleFont"]
				], null, null, null, null, null)), (e()(), i.Hb(4, null, [" ", " ", " "])), (e()(), i.gb(16777216, null, null, 1, null, v)), i.ob(6, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, _)), i.ob(8, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, y)), i.ob(10, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.field.disabled);
					e(l, 1, 0, "inputLabel", n), e(l, 6, 0, !t.field.multiline), e(l, 8, 0, t.field.icon && t.field.icon.required), e(l, 10, 0, t.field.suffix)
				}), (function(e, l) {
					var t = l.component;
					e(l, 4, 0, t.field.label, t.field.required ? "*" : "")
				}))
			}

			function x(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 5, "input", [
					["class", "font-18"],
					["formControlName", "dob"],
					["id", "dob"],
					["max", "2100-12-31"],
					["name", "dob"],
					["placeholder", " "],
					["type", "date"]
				], [
					[8, "value", 0],
					[1, "disabled", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "focus"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var n = !0,
						o = e.component;
					return "input" === l && (n = !1 !== i.zb(e, 1)._handleInput(t.target.value) && n), "blur" === l && (n = !1 !== i.zb(e, 1).onTouched() && n), "compositionstart" === l && (n = !1 !== i.zb(e, 1)._compositionStart() && n), "compositionend" === l && (n = !1 !== i.zb(e, 1)._compositionEnd(t.target.value) && n), "focus" === l && (n = !1 !== o.changeValue() && n), n
				}), null, null)), i.ob(1, 16384, null, 0, a.d, [i.C, i.k, [2, a.a]], null, null), i.Eb(1024, null, a.o, (function(e) {
					return [e]
				}), [a.d]), i.ob(3, 671744, null, 0, a.h, [
					[3, a.c],
					[8, null],
					[8, null],
					[6, a.o],
					[2, a.D]
				], {
					name: [0, "name"]
				}, null), i.Eb(2048, null, a.p, null, [a.h]), i.ob(5, 16384, null, 0, a.q, [
					[4, a.p]
				], null, null)], (function(e, l) {
					e(l, 3, 0, "dob")
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, t.field.value && t.field.value.length ? t.field.value.substring(0, 10) : "", !0 === t.field.disabled || void 0, i.zb(l, 5).ngClassUntouched, i.zb(l, 5).ngClassTouched, i.zb(l, 5).ngClassPristine, i.zb(l, 5).ngClassDirty, i.zb(l, 5).ngClassValid, i.zb(l, 5).ngClassInvalid, i.zb(l, 5).ngClassPending)
				}))
			}

			function w(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 0, "span", [], [
					[8, "className", 0]
				], null, null, null, null))], null, (function(e, l) {
					e(l, 0, 0, i.rb(1, "", l.component.field.icon.icon, " inputIcons"))
				}))
			}

			function k(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 8, "label", [
					["class", "inputLabel"]
				], null, null, null, null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					disabled: 0
				}), (e()(), i.gb(16777216, null, null, 1, null, x)), i.ob(4, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.pb(5, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), i.Hb(6, null, [" Date of Birth ", " "])), (e()(), i.gb(16777216, null, null, 1, null, w)), i.ob(8, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.field.disabled);
					e(l, 1, 0, "inputLabel", n), e(l, 4, 0, !t.field.multiline), e(l, 8, 0, t.field.icon && t.field.icon.required)
				}), (function(e, l) {
					e(l, 6, 0, l.component.field.required ? "*" : "")
				}))
			}

			function S(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 3, "span", [
					["class", "font13"]
				], null, null, null, null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					disableColor: 0
				}), (e()(), i.Hb(3, null, [" ", " ", " "]))], (function(e, l) {
					var t = e(l, 2, 0, !0 === l.component.field.disabled);
					e(l, 1, 0, "font13", t)
				}), (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.field.label, t.field.required ? "*" : "")
				}))
			}

			function O(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 3, "option", [
					["class", "countryMarTop"],
					["style", "height:100px !important"]
				], [
					[8, "selected", 0]
				], null, null, null, null)), i.ob(1, 147456, null, 0, a.t, [i.k, i.C, [8, null]], null, null), i.ob(2, 147456, null, 0, a.E, [i.k, i.C, [8, null]], null, null), (e()(), i.Hb(3, null, [" ", " "]))], null, (function(e, l) {
					e(l, 0, 0, l.component.pc === l.context.index), e(l, 3, 0, l.context.$implicit.label)
				}))
			}

			function P(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 7, "input", [
					["class", "font-18"],
					["placeholder", " "],
					["type", "tel"]
				], [
					[8, "id", 0],
					[8, "name", 0],
					[1, "disabled", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "focus"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var n = !0,
						o = e.component;
					return "input" === l && (n = !1 !== i.zb(e, 3)._handleInput(t.target.value) && n), "blur" === l && (n = !1 !== i.zb(e, 3).onTouched() && n), "compositionstart" === l && (n = !1 !== i.zb(e, 3)._compositionStart() && n), "compositionend" === l && (n = !1 !== i.zb(e, 3)._compositionEnd(t.target.value) && n), "focus" === l && (n = !1 !== o.changeValue() && n), n
				}), null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					disabled: 0
				}), i.ob(3, 16384, null, 0, a.d, [i.C, i.k, [2, a.a]], null, null), i.Eb(1024, null, a.o, (function(e) {
					return [e]
				}), [a.d]), i.ob(5, 671744, null, 0, a.h, [
					[3, a.c],
					[8, null],
					[8, null],
					[6, a.o],
					[2, a.D]
				], {
					name: [0, "name"]
				}, null), i.Eb(2048, null, a.p, null, [a.h]), i.ob(7, 16384, null, 0, a.q, [
					[4, a.p]
				], null, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.field.disabled);
					e(l, 1, 0, "font-18", n), e(l, 5, 0, t.field.name)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, t.field.name, t.field.name, !0 === t.field.disabled || void 0, i.zb(l, 7).ngClassUntouched, i.zb(l, 7).ngClassTouched, i.zb(l, 7).ngClassPristine, i.zb(l, 7).ngClassDirty, i.zb(l, 7).ngClassValid, i.zb(l, 7).ngClassInvalid, i.zb(l, 7).ngClassPending)
				}))
			}

			function M(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 10, "div", [
					["class", "phoneC fieldMarTop"]
				], null, null, null, null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					borderPhone: 0
				}), (e()(), i.pb(3, 0, null, null, 4, "select", [
					["class", "mySelect "]
				], [
					[1, "disabled", 0]
				], [
					[null, "change"]
				], (function(e, l, t) {
					var n = !0;
					return "change" === l && (n = !1 !== e.component.setOption(t) && n), n
				}), null, null)), i.ob(4, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(5, {
					disabled: 0
				}), (e()(), i.gb(16777216, null, null, 1, null, O)), i.ob(7, 278528, null, 0, o.l, [i.N, i.K, i.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), i.pb(8, 0, null, null, 2, "div", [], null, null, null, null, null)), (e()(), i.gb(16777216, null, null, 1, null, P)), i.ob(10, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.field.disabled);
					e(l, 1, 0, "phoneC fieldMarTop", n);
					var i = e(l, 5, 0, !0 === t.field.disabled);
					e(l, 4, 0, "mySelect ", i), e(l, 7, 0, t.field.options), e(l, 10, 0, !t.field.multiline)
				}), (function(e, l) {
					e(l, 3, 0, !0 === l.component.field.disabled || void 0)
				}))
			}

			function I(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 8, "div", [
					["class", "uploadR"]
				], null, null, null, null, null)), (e()(), i.pb(1, 0, null, null, 6, "label", [], [
					[1, "for", 0]
				], null, null, null, null)), i.ob(2, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					ngClass: [0, "ngClass"]
				}, null), i.Cb(3, {
					disabled: 0
				}), (e()(), i.pb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), i.Hb(5, null, ["Resume ", ""])), (e()(), i.pb(6, 0, null, null, 1, "div", [
					["class", "uploadC"]
				], null, null, null, null, null)), (e()(), i.Hb(7, null, [" ", " "])), (e()(), i.pb(8, 0, null, null, 0, "input", [
					["accept", "application/pdf"],
					["type", "file"]
				], [
					[8, "id", 0]
				], [
					[null, "change"]
				], (function(e, l, t) {
					var n = !0;
					return "change" === l && (n = !1 !== e.component.uploadResume(t) && n), n
				}), null, null))], (function(e, l) {
					var t = e(l, 3, 0, !0 === l.component.field.disabled);
					e(l, 2, 0, t)
				}), (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field.name), e(l, 5, 0, t.field.required ? "*" : ""), e(l, 7, 0, t.field.value && t.field.value.length && !0 !== t.field.value ? "Uploaded" : "Upload"), e(l, 8, 0, t.field.name)
				}))
			}

			function D(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "label", [], null, null, null, null, null)), (e()(), i.Hb(1, null, [" ", "", " "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.field.label, t.field.required ? "*" : "")
				}))
			}

			function N(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 7, "textarea", [
					["class", "form-control borderClass fieldMarTop"],
					["rows", "9"]
				], [
					[2, "is-invalid", null],
					[8, "id", 0],
					[1, "disabled", 0],
					[8, "placeholder", 0],
					[8, "value", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "keyup"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var n = !0,
						o = e.component;
					return "input" === l && (n = !1 !== i.zb(e, 3)._handleInput(t.target.value) && n), "blur" === l && (n = !1 !== i.zb(e, 3).onTouched() && n), "compositionstart" === l && (n = !1 !== i.zb(e, 3)._compositionStart() && n), "compositionend" === l && (n = !1 !== i.zb(e, 3)._compositionEnd(t.target.value) && n), "keyup" === l && (n = !1 !== o.changeuppercase(t, o.field, o.field.name) && n), n
				}), null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					disabled: 0,
					uppercase: 1,
					lowercase: 2,
					titlecase: 3
				}), i.ob(3, 16384, null, 0, a.d, [i.C, i.k, [2, a.a]], null, null), i.Eb(1024, null, a.o, (function(e) {
					return [e]
				}), [a.d]), i.ob(5, 671744, null, 0, a.h, [
					[3, a.c],
					[8, null],
					[8, null],
					[6, a.o],
					[2, a.D]
				], {
					name: [0, "name"]
				}, null), i.Eb(2048, null, a.p, null, [a.h]), i.ob(7, 16384, null, 0, a.q, [
					[4, a.p]
				], null, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, !0 === t.field.disabled, t.field.fieldcase_type && "capitalcase" === t.field.fieldcase_type, t.field.fieldcase_type && "smallcase" === t.field.fieldcase_type, t.field.fieldcase_type && "titlecase" === t.field.fieldcase_type);
					e(l, 1, 0, "form-control borderClass fieldMarTop", n), e(l, 5, 0, t.field.name)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 1, [t.isDirty && !t.isValid, t.field.name, !0 === t.field.disabled || void 0, t.field.label, t.field.value ? t.field.value : "", i.zb(l, 7).ngClassUntouched, i.zb(l, 7).ngClassTouched, i.zb(l, 7).ngClassPristine, i.zb(l, 7).ngClassDirty, i.zb(l, 7).ngClassValid, i.zb(l, 7).ngClassInvalid, i.zb(l, 7).ngClassPending])
				}))
			}

			function z(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 21, "div", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "submit"],
					[null, "reset"]
				], (function(e, l, t) {
					var n = !0;
					return "submit" === l && (n = !1 !== i.zb(e, 1).onSubmit(t) && n), "reset" === l && (n = !1 !== i.zb(e, 1).onReset() && n), n
				}), null, null)), i.ob(1, 540672, null, 0, a.j, [
					[8, null],
					[8, null]
				], {
					form: [0, "form"]
				}, null), i.Eb(2048, null, a.c, null, [a.j]), i.ob(3, 16384, null, 0, a.r, [
					[4, a.c]
				], null, null), (e()(), i.gb(16777216, null, null, 1, null, p)), i.ob(5, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, f)), i.ob(7, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, C)), i.ob(9, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, k)), i.ob(11, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, S)), i.ob(13, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, M)), i.ob(15, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, I)), i.ob(17, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, D)), i.ob(19, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, N)), i.ob(21, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.form), e(l, 5, 0, t.field.label.length >= 60), e(l, 7, 0, "phone" !== t.field.type && "longanswer" !== t.field.type && "dob" !== t.field.type && "resume" !== t.field.type && "file" !== t.field.type && !t.field.simple), e(l, 9, 0, "phone" !== t.field.type && "longanswer" !== t.field.type && "dob" !== t.field.type && "resume" !== t.field.type && "file" !== t.field.type && t.field.simple), e(l, 11, 0, "dob" === t.field.type), e(l, 13, 0, "phone" === t.field.type), e(l, 15, 0, "phone" === t.field.type), e(l, 17, 0, "resume" === t.field.type), e(l, 19, 0, t.field.multiline || "longanswer" === t.field.type), e(l, 21, 0, t.field.multiline || "longanswer" === t.field.type)
				}), (function(e, l) {
					e(l, 0, 0, i.zb(l, 3).ngClassUntouched, i.zb(l, 3).ngClassTouched, i.zb(l, 3).ngClassPristine, i.zb(l, 3).ngClassDirty, i.zb(l, 3).ngClassValid, i.zb(l, 3).ngClassInvalid, i.zb(l, 3).ngClassPending)
				}))
			}

			function E(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), i.Hb(1, null, [" ", " required "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.label)
				}))
			}

			function T(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), i.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.message)
				}))
			}

			function A(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "div", [
					["class", "errorInput"]
				], null, null, null, null, null)), (e()(), i.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.customError.message)
				}))
			}

			function L(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 6, "div", [], null, null, null, null, null)), (e()(), i.gb(16777216, null, null, 1, null, E)), i.ob(2, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, T)), i.ob(4, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, A)), i.ob(6, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, !(t.field.customError && t.field.customError.error) && t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError("required")), e(l, 4, 0, t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError(t.field.error)), e(l, 6, 0, t.field.customError && t.field.customError.error)
				}), null)
			}

			function J(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), i.Hb(1, null, ["", ""]))], null, (function(e, l) {
					e(l, 1, 0, l.component.field.description.data)
				}))
			}

			function F(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 2, "div", [
					["class", "space"]
				], null, null, null, null, null)), (e()(), i.pb(1, 0, null, null, 1, "app-link-test", [
					["target", "_blank"]
				], null, null, null, s.b, s.a)), i.ob(2, 114688, null, 0, r.a, [u.m, c.a], {
					data: [0, "data"],
					target: [1, "target"],
					routerLink: [2, "routerLink"],
					color: [3, "color"],
					id: [4, "id"],
					params: [5, "params"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.field.description.link, "_blank", t.field.description.url, i.rb(1, "", t.field.description.styles && t.field.description.styles.color ? t.field.description.styles.color : "var(--one)", ""), t.field.description.id, t.field.description.params)
				}), null)
			}

			function j(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 7, "div", [
					["class", "container messages"]
				], null, null, null, null, null)), i.ob(1, 278528, null, 0, o.k, [i.r, i.s, i.k, i.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), i.Cb(2, {
					flexDirection: 0
				}), i.ob(3, 278528, null, 0, o.p, [i.s, i.k, i.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, J)), i.ob(5, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, F)), i.ob(7, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.field.description && "end" === t.field.description.layout);
					e(l, 1, 0, "container messages", n), e(l, 3, 0, t.field.description && t.field.description.styles ? t.field.description.styles : ""), e(l, 5, 0, t.field.description.data), e(l, 7, 0, t.field.description.link)
				}), null)
			}

			function R(e) {
				return i.Jb(0, [(e()(), i.pb(0, 0, null, null, 4, "div", [
					["class", "dfsb"]
				], null, null, null, null, null)), (e()(), i.gb(16777216, null, null, 1, null, L)), i.ob(2, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, j)), i.ob(4, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, !(t.field.customError && t.field.customError.error) && t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError("required") || t.form.get(t.field.name) && t.form.get(t.field.name).touched && t.form.get(t.field.name).hasError(t.field.error) || t.field.customError && t.field.customError.error), e(l, 4, 0, t.field.description)
				}), null)
			}

			function H(e) {
				return i.Jb(0, [(e()(), i.gb(16777216, null, null, 1, null, z)), i.ob(1, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), i.gb(16777216, null, null, 1, null, R)), i.ob(3, 16384, null, 0, o.m, [i.N, i.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, !t.field.copyHide), e(l, 3, 0, !t.field.copyHide)
				}), null)
			}
		},
		SiHs: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return i
			}));
			var n = t("8Y7J");
			t("4WDQ");
			class i {
				constructor(e, l) {
					this.dash_serv = e, this.renderer = l, this.defaultSelected = [], this.placeHolder = "Select", this.dropDownEmit = new n.m, this.disabled = !1, this.dropdownstyle = {}, this.filter_active = !1, this.selectedItems = [], this.all_selected = !1, this.styles = {
						backgroundColor: "white",
						color: "black"
					}, this.selectedArray = [], this.searchData = "", this.selectedItems = [], this.renderer.listen("window", "click", e => {
						this.selectToggle && this.selectToggle.nativeElement.contains(e.target) || this.selectChild && this.selectChild.nativeElement.contains(e.target) || (this.filter_active = !1)
					})
				}
				ngOnInit() {
					if ("limit" === this.formName || "lb_type" === this.formName) {
						const e = [];
						e.push(!0), this.selectedArray = void 0, this.selectedArray = [...e], this.selectedItems.push(this.optionArray[0].value), this.selectedLabel = this.optionArray[0].label
					}
					this.defaultSelected && this.defaultSelected.length && (this.selectedArray = void 0, this.selectedItems = void 0, this.selectedArray = [], this.selectedItems = [], this.selectedItems = [...this.defaultSelected])
				}
				ngOnChanges(e) {
					this.defaultSelected && 0 !== this.defaultSelected.length || (this.selectedArray = void 0, this.selectedArray = [], this.all_selected = !1, this.selectedItems = void 0, this.selectedItems = []), this.defaultSelected && this.defaultSelected.length && (this.selectedItems = void 0, this.selectedItems = [], this.selectedItems = [...this.defaultSelected])
				}
				mySelectBoxOpen() {
					(this.selectedItems && this.optionArray && this.selectedItems.length === this.optionArray.length || this.selectedItems && this.optionArray && this.maxSelected && this.selectedItems.length === this.maxSelected) && (this.all_selected = !0), this.optionArray && this.optionArray.length ? (!1 === this.filter_active ? (this.dash_serv.toggleVisibility(), this.filter_active = !this.filter_active) : this.filter_active = !1, this.selectedArray = [], this.optionArray.forEach(e => {
						this.selectedItems.includes(e.value) ? this.selectedArray.push(!0) : this.selectedArray.push(!1)
					})) : this.filter_active = !1
				}
				selectOption(e, l) {
					const t = {
							formName: this.formName
						},
						n = [...this.selectedArray];
					if ("multi" === this.type)
						if (this.selectedItems.length)
							if ("all" !== e) {
								const t = this.selectedItems.indexOf(e.value);
								t >= 0 ? (n[l] = !1, this.selectedItems.splice(t, 1)) : this.maxSelected && this.maxSelected <= this.selectedItems.length ? n[l] = !1 : (n[l] = !0, this.selectedItems.push(e.value)), this.all_selected = !!(this.selectedItems.length === this.optionArray.length || this.maxSelected && this.selectedItems.length === this.maxSelected)
							} else this.selectedItems.length === this.optionArray.length || this.maxSelected && this.selectedItems.length >= this.maxSelected ? (this.optionArray.forEach((e, l) => {
								n[l] = !1
							}), this.selectedItems = [], this.all_selected = !1) : this.maxSelected ? (this.all_selected = !0, JSON.parse(JSON.stringify(this.optionArray)).splice(0, this.maxSelected).forEach((e, l) => {
								n[l] = !0, this.selectedItems.push(e.value)
							})) : (this.all_selected = !0, this.selectedItems = [], this.optionArray.forEach((e, l) => {
								n[l] = !0, this.selectedItems.push(e.value)
							}));
					else "all" !== e ? (this.selectedLabel = e.label, n[l] = !0, this.selectedItems.push(e.value)) : this.maxSelected ? (this.all_selected = !0, JSON.parse(JSON.stringify(this.optionArray)).splice(0, this.maxSelected).forEach((e, l) => {
						n[l] = !0, this.selectedItems.push(e.value)
					})) : (this.all_selected = !0, this.optionArray.forEach((e, l) => {
						n[l] = !0, this.selectedItems.push(e.value)
					}));
					else this.optionArray.forEach((e, l) => {
						n[l] = !1
					}), this.selectedItems.length && this.selectedItems[0] === e.value ? (n[l] = !1, this.selectedItems = []) : (n[l] = !0, this.selectedLabel = e.label, this.selectedItems[0] = e.value), this.filter_active = !1;
					this.selectedItems.length > 0 && this.optionArray.length && this.selectedItems.length === this.optionArray.length && (this.all_selected = !0), this.selectedArray = void 0, this.selectedArray = [...n], t.value = this.selectedItems, this.dropDownEmit.emit(t)
				}
				searchApplied(e) {
					let l;
					this.selectedArray = void 0, this.selectedArray = [], l = [], this.options_copy && this.options_copy.length > 0 || (this.options_copy = void 0, this.options_copy = [...this.optionArray]), this.searchData = e, e && e.length ? (e = e.toLowerCase(), this.options_copy.forEach(t => {
						t.label.toLowerCase().includes(e) && (l.push(t), this.selectedItems.indexOf(t.value) >= 0 ? this.selectedArray.push(!0) : this.selectedArray.push(!1))
					})) : this.options_copy.forEach(e => {
						l.push(e), this.selectedItems.indexOf(e.value) >= 0 ? this.selectedArray.push(!0) : this.selectedArray.push(!1)
					}), this.optionArray = void 0, this.optionArray = [...l], this.all_selected = !!(this.selectedItems.length > 0 && this.optionArray.length && this.selectedItems.length === this.optionArray.length)
				}
				findLabel(e) {
					let l;
					this.optionArray.forEach(t => {
						if (t.value === e) return l = t.label, !1
					})
				}
				selectPlaceHolder() {
					if (this.optionArray && this.optionArray.length) {
						const e = this.optionArray.find(e => e.value === this.selectedItems[0]);
						return e ? e.label : this.placeHolder
					}
					return this.placeHolder
				}
			}
		},
		Wbze: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		Z2Xd: function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("SVse");
			t("Kfth"), t("iInd"), t("EFyh"), t.d(l, "a", (function() {
				return o
			})), t.d(l, "b", (function() {
				return a
			}));
			var o = n.nb({
				encapsulation: 0,
				styles: [
					[".linkText[_ngcontent-%COMP%]{color:var(--twentyfive);cursor:pointer}"]
				],
				data: {}
			});

			function a(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "a", [
					["class", "linkText"]
				], [
					[8, "id", 0],
					[8, "target", 0]
				], [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.loadLink() && n), n
				}), null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(2, {
					color: 0
				}), (e()(), n.Hb(3, null, [" ", "\n"]))], (function(e, l) {
					var t = e(l, 2, 0, l.component.color);
					e(l, 1, 0, t)
				}), (function(e, l) {
					var t = l.component;
					e(l, 0, 0, n.rb(1, "", t.id, ""), n.rb(1, "", t.target, "")), e(l, 3, 0, t.data)
				}))
			}
		},
		c14U: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return d
			}));
			var n = t("AytR"),
				i = t("2Vo4"),
				o = t("4WDQ"),
				a = t("EFyh"),
				s = t("wK2T"),
				r = t("JIr8"),
				u = t("8Y7J"),
				c = t("IheW");
			class d {
				constructor(e, l, t, o) {
					this.http = e, this.globalSerive = l, this.loginService = t, this.feedService = o, this.api_url = n.a.HOST.link, this.cartData = new i.a({}), this.boughtListIds = [], this.freeProduct = !1
				}
				storeLocal(e) {
					let l = JSON.parse(localStorage.getItem("cart"));
					l && l.length ? l.find(l => !!(l && l.id && e && e.list && l.id === e.list.id)) || (l.push(e.list), this.globalSerive.cartTotalItems.next(l.length), localStorage.removeItem("cart"), localStorage.setItem("cart", JSON.stringify(l))) : (l = [], l.push(e.list), this.globalSerive.cartTotalItems.next(l.length), localStorage.setItem("cart", JSON.stringify(l)))
				}
				updateCartlength() {
					let e = [];
					e = JSON.parse(localStorage.getItem("cart")), this.globalSerive.cartTotalItems.next(e && e.length ? e.length : 0)
				}
				checkProductValidity(e) {
					return this.http.post(this.api_url + "/products/v2/checkvalidity", e)
				}
				createOrder(e) {
					return this.http.post(this.api_url + "/student/createpublicorder", e)
				}
				validateDiscount(e) {
					return this.http.post(this.api_url + "/products/discounts/checkv2", e)
				}
				addCartItemToDB(e) {
					return this.http.post(this.api_url + "/products/addcart", e, this.loginService.options(null))
				}
				removeCartItemFromDB(e) {
					return this.http.post(this.api_url + "/products/removecart", e, this.loginService.options(null))
				}
				getUserCartList(e) {
					return new Promise((l, t) => {
						const i = {
								user_id: e.user_id
							},
							o = JSON.parse(localStorage.getItem("school_details"));
						this.getCartList(i, e).subscribe(e => {
							if (e && e.success && e.data && e.data.length) {
								const l = [];
								let t = [];
								e.data.forEach(e => {
									e.products && (t = [...e.products.entity_ids, ...t], t = [...new Set(t)])
								});
								const i = {
									c_id: t,
									school_code: o.school_code,
									googleToken: ""
								};
								this.globalSerive.getCaptchaToken("getCourseCount").then(t => {
									i.googleToken = t, this.feedService.getFeatureData(i).subscribe(t => {
										e.data && e.data.length ? (e.data.forEach(e => {
											if (e && e.products) {
												const i = e.products;
												i.entity_ids.forEach(e => {
													(t.data ? t.data.filter(l => e === l.c_id) : []).forEach(e => {
														i.practiceCount = i.practise_count + e.practise_count ? e.practise_count : 0, i.assessmentCount = i.assessmentCount + e.test_count ? e.test_count : 0
													})
												}), i.productName = i.title, i.image || (i.image = n.a.s3Objectstudentassets + "assets/common-images/market/Course.png"), i.reviewCount = i.review_count, i.rating = i.ratings, i.hoursContent = i.product_duration, i.originalPrice = i.price ? i.price : 0, i.compare_price = i.compare_price ? i.compare_price : 0, l.push(i)
											}
										}), localStorage.removeItem("cart"), localStorage.setItem("cart", JSON.stringify(l)), this.globalSerive.cartTotalItems.next(l.length)) : (localStorage.removeItem("cart"), this.globalSerive.cartTotalItems.next(0))
									})
								})
							}
						})
					})
				}
				getCartList(e, l) {
					return this.http.post(this.api_url + "/products/cartlist", e, this.loginService.options(l))
				}
				boughtList(e) {
					this.boughtListIds = e
				}
				setFreeProduct(e) {
					this.freeProduct = e
				}
				setReview(e) {
					return this.http.post(this.api_url + "/products/setreview", e, this.loginService.options(null)).pipe(Object(r.a)(this.loginService.handleError.bind(this)))
				}
			}
			d.ngInjectableDef = u.R({
				factory: function() {
					return new d(u.V(c.c), u.V(o.a), u.V(a.a), u.V(s.a))
				},
				token: d,
				providedIn: "root"
			})
		},
		crnd: function(e, l, t) {
			var n = {
				"../../components/mycourse-details/mycourse-details.module.ngfactory": ["SVIN", 1, 2, 5, 14, 0, 23],
				"./components/contest-details/contest-details.module.ngfactory": ["37ci", 2, 4, 13, 0, 45],
				"./components/drive-details/drive-details.module.ngfactory": ["tvbo", 1, 2, 4, 13, 16, 0, 37],
				"./components/ide-playground/ide-playground.module.ngfactory": ["OTtn", 1, 3, 8, 10, 0, 38],
				"./components/public-profile/public-profile.module.ngfactory": ["/g1e", 1, 0, 42],
				"./components/qr-code-scanner/qr-code-scanner.module.ngfactory": ["HmQE", 1, 0, 43],
				"./containers/account-settings/account-settings.module.ngfactory": ["Ffdu", 6, 0, 44],
				"./containers/attendance-settings/attendance-settings.module.ngfactory": ["Ow1l", 47],
				"./containers/cart/cart.module.ngfactory": ["6uid", 11, 0, 32],
				"./containers/certificate-layout/certificate-layout.module.ngfactory": ["Mc+y", 5, 0, 29],
				"./containers/chat-layout/chat-layout.module.ngfactory": ["kknU", 0, 24],
				"./containers/compiler-instruction/compiler-instruction.module.ngfactory": ["UfKf", 10, 0, 48],
				"./containers/contest-registration/contest-registration.module.ngfactory": ["XRgS", 0, 49],
				"./containers/course-details-layout/courselayout.module.ngfactory": ["toUQ", 1, 5, 4, 14, 0, 33],
				"./containers/course-list-layout/courselist.module.ngfactory": ["kPgy", 4, 11, 15, 0, 40],
				"./containers/dashboard/dashboard/dashboard.module.ngfactory": ["59EG", 3, 9, 0, 35],
				"./containers/exams-results-layout/exams-results-layout.module.ngfactory": ["vsxb", 1, 0, 25],
				"./containers/feeds-layout/feeds.module.ngfactory": ["oA29", 0, 26],
				"./containers/init-form/init-form.module.ngfactory": ["1JWK", 0, 34],
				"./containers/leaderboard-layout/leaderboard-layout.module.ngfactory": ["+IeH", 5, 0, 30],
				"./containers/login/login.module.ngfactory": ["P7g6", 0, 41],
				"./containers/my-course-layout/mycourse.module.ngfactory": ["0roz", 2, 6, 11, 15, 0, 28],
				"./containers/network-check/network-check.module.ngfactory": ["kYUb", 0, 39],
				"./containers/profile/profile.module.ngfactory": ["oRgF", 1, 16, 0, 36],
				"./containers/project/project.module.ngfactory": ["MYUn", 0, 27],
				"./containers/result-analysis/result-analysis.module.ngfactory": ["bcz7", 1, 3, 6, 8, 9, 12, 0, 31],
				"./containers/test-taking/test-taking.module.ngfactory": ["for5", 1, 2, 3, 6, 8, 9, 10, 12, 0, 22],
				"src/app/components/no-network/no-network.module.ngfactory": ["w/ig", 46]
			};

			function i(e) {
				var l = n[e];
				return l ? Promise.all(l.slice(1).map(t.e)).then((function() {
					return t(l[0])
				})) : Promise.resolve().then((function() {
					var l = new Error("Cannot find module '" + e + "'");
					throw l.code = "MODULE_NOT_FOUND", l
				}))
			}
			i.keys = function() {
				return Object.keys(n)
			}, i.id = "crnd", e.exports = i
		},
		dzoM: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			var n = ["input{outline:0}input[type=radio]:checked:after{width:7px;height:7px;border-radius:15px;top:-2px;left:-2px;position:relative;content:'';display:inline-block;visibility:visible;border:5px solid var(--one);background:var(--white)}input[type=radio]:after{width:15px;height:15px;border-radius:15px;top:-2px;left:-2px;position:relative;background-color:var(--fifteen);content:'';display:inline-block;visibility:visible;border:1px solid var(--twelve);background:var(--white);cursor:pointer}.countryMarTop,.fieldMarTop{margin-top:3px!important}input[type=radio]{margin-right:5px}::-webkit-input-placeholder{font-weight:700;font-size:14px}::-moz-placeholder{font-weight:700;font-size:14px}:-ms-input-placeholder{font-weight:700;font-size:14px}::-ms-input-placeholder{font-weight:700;font-size:14px}::placeholder{font-weight:700;font-size:14px}textarea::-webkit-input-placeholder{opacity:.7}textarea::-moz-placeholder{opacity:.7}textarea:-ms-input-placeholder{opacity:.7}textarea::-ms-input-placeholder{opacity:.7}textarea::placeholder{opacity:.7}textarea{width:100%;font-size:14px;border-color:var(--ten);padding:10px 0;text-indent:10px;background:var(--white)}.borderPhone{border-color:var(--sixtyFour)!important}.error_class{font-size:12px;color:var(--ten)}.inputLabel{position:relative;display:inline-block;padding-top:6px;font-family:Roboto;font-size:16px;line-height:1.5;overflow:hidden;width:100%}.space{margin-left:4px}.borderClass{border-radius:2px;border:1px solid}.radioOptC{display:flex;justify-content:flex-start}.inputLabel>input,.inputLabel>textarea{box-sizing:border-box;margin:0;border:1px solid;border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);border-top-color:transparent;border-radius:2px;padding:5px 13px;width:100%;height:40px;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87);background-color:transparent;box-shadow:none;caret-color:rgb(var(--pure-material-primary-rgb,33,150,243));transition:border .2s,box-shadow .2s}.inputLabel>input+span,.inputLabel>textarea+span,div::-webkit-datetime-edit{position:absolute;top:0;left:0;display:flex;border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);width:100%;max-height:100%;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);font-size:75%;line-height:15px;cursor:text;transition:color .2s,font-size .2s,line-height .2s}.inputLabel>input+span::after,.inputLabel>input+span::before,.inputLabel>textarea+span::after,.inputLabel>textarea+span::before{content:'';display:block;box-sizing:border-box;margin-top:6px;border-top:1px solid;border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6);min-width:10px;height:8px;pointer-events:none;box-shadow:inset 0 1px transparent;transition:border-color .2s,box-shadow .2s}.inputLabel>input+span::before,.inputLabel>textarea+span::before{margin-right:4px;border-left:1px solid transparent;border-radius:4px 0}.inputLabel>input+span::after,.inputLabel>textarea+span::after{flex-grow:1;margin-left:4px;border-right:1px solid transparent;border-radius:0 4px}.inputLabel:hover>input,.inputLabel:hover>textarea{border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87);border-top-color:transparent}.inputLabel:hover>input+span::after,.inputLabel:hover>input+span::before,.inputLabel:hover>textarea+span::after,.inputLabel:hover>textarea+span::before{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87)}.inputLabel:hover>input:not(:focus):placeholder-shown,.inputLabel:hover>textarea:not(:focus):placeholder-shown{border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.87)}.inputLabel>input:not(:focus):placeholder-shown,.inputLabel>textarea:not(:focus):placeholder-shown{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.6)}.inputLabel>input:not(:focus):placeholder-shown+span,.inputLabel>textarea:not(:focus):placeholder-shown+span{font-size:inherit;line-height:56px}.inputLabel>input:not(:focus):placeholder-shown+span::after,.inputLabel>input:not(:focus):placeholder-shown+span::before,.inputLabel>textarea:not(:focus):placeholder-shown+span::after,.inputLabel>textarea:not(:focus):placeholder-shown+span::before{border-top-color:transparent}.inputLabel>input:focus,.inputLabel>textarea:focus{border-color:rgb(var(--pure-material-primary-rgb,33,150,243));border-top-color:transparent;box-shadow:inset 1px 0 var(--pure-material-safari-helper1),inset -1px 0 var(--pure-material-safari-helper1),inset 0 -1px var(--pure-material-safari-helper1);outline:0}.borderinputtop:focus{border-top-color:rgb(var(--pure-material-primary-rgb,33,150,243))!important}.float-left{float:left}.max-halfwidth{max-width:50%}.radiolabelopt{margin-left:2px}.rdlabel{width:100%;min-height:20px}.inputLabel>input:focus+span,.inputLabel>textarea:focus+span{color:rgb(var(--pure-material-primary-rgb,33,150,243))}.inputLabel>input:focus+span::after,.inputLabel>input:focus+span::before,.inputLabel>textarea:focus+span::after,.inputLabel>textarea:focus+span::before{border-top-color:var(--pure-material-safari-helper1)!important;box-shadow:inset 0 1px var(--pure-material-safari-helper1)}.inputLabel>input:disabled,.inputLabel>input:disabled+span,.inputLabel>textarea:disabled,.inputLabel>textarea:disabled+span{border-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)!important;border-top-color:transparent!important;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38);pointer-events:none}.inputLabel>input:disabled+span::after,.inputLabel>input:disabled+span::before,.inputLabel>textarea:disabled+span::after,.inputLabel>textarea:disabled+span::before{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)!important}.inputLabel>input:disabled:placeholder-shown,.inputLabel>input:disabled:placeholder-shown+span,.inputLabel>textarea:disabled:placeholder-shown,.inputLabel>textarea:disabled:placeholder-shown+span{border-top-color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)!important}.inputLabel>input:disabled:placeholder-shown+span::after,.inputLabel>input:disabled:placeholder-shown+span::before,.inputLabel>textarea:disabled:placeholder-shown+span::after,.inputLabel>textarea:disabled:placeholder-shown+span::before{border-top-color:transparent!important}@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none){.inputLabel>input,.inputLabel>input+span,.inputLabel>input+span::after,.inputLabel>input+span::before,.inputLabel>textarea,.inputLabel>textarea+span,.inputLabel>textarea+span::after,.inputLabel>textarea+span::before{transition-duration:.1s}}}.phoneC{display:flex;border:1px solid var(--inputB);border-radius:5px}.disableColor{color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38)}.phoneC select{width:30%;height:35px;border:none;background-color:var(--five);cursor:pointer}.phoneC div{width:70%}.phoneC input{padding:10px;width:calc(100% - 20px);border:none;border-radius:3px;background:var(--white)}.errorInput{font-size:12px;color:var(--warnred);padding-left:5px}a{cursor:pointer;color:var(--twentyfive)}.messages{position:relative;top:10px;font-size:13px;color:var(--fourteen)}.flexDirection{justify-content:flex-end}.inputLabel .inputIcons{position:absolute;right:11px;top:14px}.inputLabel .icon-ios-locked:before,.inputLabel .icon-person:before,.inputLabel .icon-unlock:before{font-size:18px;color:var(--fourteen)}.errorBox>input:focus,.errorBox>input:not(:focus){border-color:var(--nine);border-top-color:transparent}.errorBox>input:focus+span{color:var(--nine)}.simpleFont{font-size:13px}.errorBox>input:not(:focus):placeholder-shown{border-top-color:var(--nine)}.errorBox>input{border-color:var(--nine)}.errorBox>input+span::after,.errorBox>input+span::before,.errorBox>textarea+span::after,.errorBox>textarea+span::before{border-top-color:var(--nine)}input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;color:transparent;opacity:1;display:block;background:url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;width:15px;height:15px;border-width:thin}input[type=date]::-webkit-clear-button{font-size:15px;margin-right:5px}.form-check{margin-right:50px;margin-bottom:10px}.phoneC input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.phoneC input[type=number]{-moz-appearance:textfield}.customSelect{width:100%;border:1px solid var(--inputB);height:45px;background:var(--three);border-radius:2px;text-indent:8px}.pie-wrapper.progress-45 .pie .half-circle{border-color:var(--darkgreen)}.pie-wrapper.progress-45 .pie .left-side{transform:rotate(162deg)}.pie-wrapper.progress-45 .pie .right-side{display:none}.pie-wrapper{height:1em;width:1em;float:left;margin:15px;position:relative}.pie-wrapper:nth-child(3n+1){clear:both}.pie-wrapper .pie{height:100%;width:100%;clip:rect(0,1em,1em,.5em);left:0;position:absolute;top:0}.pie-wrapper .pie .half-circle{height:100%;width:100%;border:.1em solid var(--thirtyfive);border-radius:50%;clip:rect(0,.5em,1em,0);left:0;position:absolute;top:0}.pie-wrapper .label{background:var(--darkgrey);border-radius:50%;bottom:.4em;color:var(--five);cursor:default;display:block;font-size:.25em;left:.4em;line-height:2.8em;position:absolute;right:.4em;text-align:center;top:.4em}.pie-wrapper .label .smaller{color:var(--fourtytwo);font-size:.45em;padding-bottom:20px;vertical-align:super}.pie-wrapper .shadow{height:100%;width:100%;border:.1em solid var(--fourtytwo);border-radius:50%}.pie-wrapper.style-2 .label{background:0 0;color:var(--fourtyfour)}.pie-wrapper.style-2 .label .smaller{color:var(--fourtytwo)}.uploadR input{display:none}.uploadR label{display:flex;justify-content:space-between;width:100%;align-items:center}.uploadC{padding:10px 25px;background:var(--two);width:40%}.check2{flex:0 50%}.cP{cursor:pointer}label{font-size:14px}input[type=checkbox]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem}input[type=checkbox]:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid var(--white);border-bottom:2px solid var(--white);transform:rotateZ(37deg);transform-origin:100% 100%}input[type=checkbox]:checked+label:after{top:0;width:20px;height:20px;border:2px solid var(--fourtyfive);background-color:var(--fourtyfive);z-index:0}@media screen and (max-width:998px){.label{font-size:12px}}@media screen and (max-width:480px){.label{font-size:11px}}.control{font-family:Roboto;position:relative;padding-left:30px;margin-bottom:5px;padding-top:3px;padding-right:10px}.control input{position:absolute;z-index:-1;opacity:0}.control_indicator{position:absolute;top:2px;left:0;height:15px;width:15px;background:var(--seventeen);border:0 solid var(--seven);border-radius:0}.control input:focus~.control_indicator,.control:hover input~.control_indicator{background:var(--twentyeight)}.control input:checked~.control_indicator{background:var(--one)}.control input:disabled~.control_indicator{background:var(--seventeen);opacity:.6;pointer-events:none}.control_indicator:after{box-sizing:unset;content:'';position:absolute;display:none}.control input:checked~.control_indicator:after{display:block}.control-checkbox .control_indicator:after{left:5px;top:2px;width:3px;height:8px;border:solid var(--white);border-width:0 2px 2px 0;transform:rotate(45deg)}.control-checkbox input:disabled~.control_indicator:after{border-color:var(--fourtyone)}.control-checkbox .control_indicator::before{content:'';display:block;position:absolute;left:0;top:0;width:15px;height:15px;margin-left:0;margin-top:0;background:var(--one);border-radius:0;opacity:.6;z-index:99999;transform:scale(0)}.iconInputPadd{padding:5px 40px 5px 13px!important}.uppercase{text-transform:uppercase}.titlecase{text-transform:capitalize}.lowercase{text-transform:lowercase}@-webkit-keyframes s-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes s-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@-webkit-keyframes s-ripple-dup{0%{transform:scale(0)}30%,60%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes s-ripple-dup{0%{transform:scale(0)}30%,60%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}.input-group-addon{top:7px;right:1px;height:calc(100% - 8px);background:var(--six);justify-content:center;display:flex;align-items:center;min-width:40px;border-radius:3px;position:absolute;font-weight:500;padding:0 15px}@media screen and (max-width:320px){.inputLabel>input+span{font-size:60%}}.hide_button{display:none}.upload-box{height:50px;border:1px solid;display:flex;align-items:center;justify-content:center;cursor:pointer}.error-message{font-size:12px;color:var(--warnred);padding-top:5px}.disabled-box{border:1px solid var(--fiftysix);color:var(--fiftyNine);cursor:not-allowed}.policy-box{border:1px solid;padding-left:5px}.terms-text{max-height:400px;overflow:scroll;overflow-x:hidden}.agree-text{padding-top:10px}.agree-text a{color:var(--fiftyfour)!important}.agree-link{padding-top:10px;color:var(--fiftyfour)!important}.link{font-size:12px;color:var(--twentyfive);text-decoration:underline;cursor:pointer;padding-right:20px}.header-container{display:flex;justify-content:space-between;align-items:center}.info-icon{background-color:var(--three);width:15px;height:15px;margin-bottom:10px;border-radius:50%;border:1px solid;display:flex;justify-content:center;cursor:pointer}"]
		},
		jyHg: function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("SVse"),
				o = t("s7LF"),
				a = t("7lOW"),
				s = t("HMdK"),
				r = t("5VGF"),
				u = t("SiHs"),
				c = t("4WDQ"),
				d = t("rp83"),
				p = t("Mx2V");
			t("3m+6"), t("EFyh"), t("c14U"), t("iInd"), t.d(l, "a", (function() {
				return h
			})), t.d(l, "b", (function() {
				return N
			}));
			var h = n.nb({
				encapsulation: 0,
				styles: [
					[".overlay[_ngcontent-%COMP%]{top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);z-index:999;transition:all .5s}.textcenter[_ngcontent-%COMP%]{justify-content:flex-end;margin-right:5%;margin-bottom:10px;margin-top:10px}.text-app[_ngcontent-%COMP%]{height:20px;border-radius:4px;background-color:var(--nine);color:var(--white);padding:8px 15px}.text-cancel[_ngcontent-%COMP%]{border-radius:4px;border:solid 1px var(--five);margin-right:10px;height:20px;padding:8px 15px}.dialog[_ngcontent-%COMP%]{z-index:1000;position:fixed;right:0;left:0;top:25%;margin:0 auto;min-height:200px;width:90%;max-width:880px;background-color:var(--three);padding-left:0;padding-top:0;padding-right:0;box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.dialog__close-btn[_ngcontent-%COMP%]{border:0;background:0 0;color:var(--thirtyfour);position:absolute;right:8px;font-size:13px;cursor:pointer;top:17px}.width60[_ngcontent-%COMP%]{width:60%}.width100[_ngcontent-%COMP%]{width:100%}.curs[_ngcontent-%COMP%]{cursor:pointer}.header[_ngcontent-%COMP%]{border:0;top:10px;left:30px;font-weight:500;padding-left:10px}.headerpart[_ngcontent-%COMP%]{border-bottom:1px solid var(--greycardborder);width:100%;padding-bottom:15px;padding-top:15px;background-color:var(--three);color:var(--fourtynine)}.minwidth[_ngcontent-%COMP%], .vbodyvideo[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:unset;object-fit:unset}.flxwrap[_ngcontent-%COMP%]{flex-wrap:wrap}.flexbs100[_ngcontent-%COMP%]{flex-basis:100%}.flexbs50[_ngcontent-%COMP%]{flex-basis:50%}.vcoursepad[_ngcontent-%COMP%]{margin:12px 15px 5px 12px}.icon-applied-drives[_ngcontent-%COMP%]:before, .icon-assesment[_ngcontent-%COMP%]:before, .icon-clock-outline[_ngcontent-%COMP%]:before{position:relative;top:1px;font-size:14px}.vcount[_ngcontent-%COMP%]{border:1px solid var(--ten);background:var(--nineteen);color:var(--fifteen);font-size:12px}.vcountMarg[_ngcontent-%COMP%]{margin:5px 0}.vdesc[_ngcontent-%COMP%]{color:var(--sixtyTwo);margin-top:5px;max-height:150px;overflow:hidden;position:relative}.overDesc[_ngcontent-%COMP%]{position:absolute;bottom:0;height:30px;width:100%;opacity:.5;background:#fff;box-shadow:3px 3px 5px 6px #fff}.fw500[_ngcontent-%COMP%]{font-weight:500}.vtitle[_ngcontent-%COMP%]{font-size:23px}.vcoursebody[_ngcontent-%COMP%]{max-width:320px;border-radius:5px}.dfout[_ngcontent-%COMP%]{justify-content:space-between;flex-wrap:wrap;margin:10px;height:140px}.dwidth[_ngcontent-%COMP%]{width:45%;margin:10px 0}.dfbtnout[_ngcontent-%COMP%]{justify-content:center;margin:15px 0}.testStartmarg[_ngcontent-%COMP%]{margin:0 20px}.accSet[_ngcontent-%COMP%]{padding:2% 5% 0}.shareFeed[_ngcontent-%COMP%]{margin:10px 20px}.shareFeedText[_ngcontent-%COMP%]{font-size:14px;color:var(--fiftyfour)}.sharetextarea[_ngcontent-%COMP%]{width:calc(100% - 6px);resize:none;padding-left:6px;border:2px solid var(--fiftysix)}.shareBtnArea[_ngcontent-%COMP%]{display:flex;justify-content:center;color:var(--three)}.shareDialogButton[_ngcontent-%COMP%]{background:var(--btnBlue);height:25px;width:80px;display:flex;align-items:center;justify-content:center;font-weight:500;border-radius:2px;cursor:pointer}.marLeft2per[_ngcontent-%COMP%]{margin-left:2%}@media screen and (min-device-width:0px) and (max-device-width:480px){.vcount[_ngcontent-%COMP%]{font-size:10px}}@media screen and (max-device-width:480px){.mfldir[_ngcontent-%COMP%]{flex-direction:column}.mobVideoDiv[_ngcontent-%COMP%]{height:450px;overflow-y:auto}.vcoursebody[_ngcontent-%COMP%]{max-width:unset}.mobVideoDiv[_ngcontent-%COMP%]::-webkit-scrollbar{width:3px}.mobVideoDiv[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--thirteen);outline:0;border-radius:3px}.mobVideoDiv[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--white)}}.fontWhite[_ngcontent-%COMP%]{color:var(--three)}.margin_top[_ngcontent-%COMP%]{margin-top:20px}.logOffText[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10px;text-align:center;color:var(--fourtynine)}.text-ok[_ngcontent-%COMP%]{height:20px;border-radius:4px;background-color:var(--nine);color:var(--white);padding:8px 30px}"]
				],
				data: {
					animation: [{
						type: 7,
						name: "dialog",
						definitions: [{
							type: 1,
							expr: "void => *",
							animation: [{
								type: 6,
								styles: {
									transform: "scale3d(.3, .3, .3)"
								},
								offset: null
							}, {
								type: 4,
								styles: null,
								timings: 100
							}],
							options: null
						}, {
							type: 1,
							expr: "* => void",
							animation: [{
								type: 4,
								styles: {
									type: 6,
									styles: {
										transform: "scale3d(.0, .0, .0)"
									},
									offset: null
								},
								timings: 100
							}],
							options: null
						}],
						options: {}
					}]
				}
			});

			function g(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "span", [
					["class", "header"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.Hb(2, null, [" ", " "]))], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.headerStyle && t.headerStyle.inner ? t.headerStyle.inner : "")
				}), (function(e, l) {
					e(l, 2, 0, l.component.header)
				}))
			}

			function b(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "i", [
					["class", "icon-close-1 dialog__close-btn"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.close() && n), n
				}), null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					fontWhite: 0
				})], (function(e, l) {
					var t = e(l, 2, 0, "accountSettings" === l.component.contentData);
					e(l, 1, 0, "icon-close-1 dialog__close-btn", t)
				}), null)
			}

			function m(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 6, "div", [
					["class", "headerpart"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, g)), n.ob(3, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(4, 0, null, null, 2, "span", [], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, b)), n.ob(6, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.headerStyle), e(l, 3, 0, t.header), e(l, 6, 0, t.closable)
				}), null)
			}

			function f(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 14, "div", [
					["class", "shareFeed"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 8, "div", [], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [
					["class", "shareFeedText"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Enter comma seperated emails to share this post"])), (e()(), n.pb(4, 0, null, null, 5, "textarea", [
					["class", "sharetextarea"],
					["cols", "30"],
					["pInputText", ""],
					["rows", "6"],
					["type", "text"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "input" === l && (i = !1 !== n.zb(e, 5)._handleInput(t.target.value) && i), "blur" === l && (i = !1 !== n.zb(e, 5).onTouched() && i), "compositionstart" === l && (i = !1 !== n.zb(e, 5)._compositionStart() && i), "compositionend" === l && (i = !1 !== n.zb(e, 5)._compositionEnd(t.target.value) && i), "ngModelChange" === l && (i = !1 !== (o.sharedEmails = t) && i), i
				}), null, null)), n.ob(5, 16384, null, 0, o.d, [n.C, n.k, [2, o.a]], null, null), n.Eb(1024, null, o.o, (function(e) {
					return [e]
				}), [o.d]), n.ob(7, 671744, null, 0, o.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, o.o]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), n.Eb(2048, null, o.p, null, [o.s]), n.ob(9, 16384, null, 0, o.q, [
					[4, o.p]
				], null, null), (e()(), n.pb(10, 0, null, null, 4, "div", [
					["class", "shareBtnArea"]
				], null, null, null, null, null)), (e()(), n.pb(11, 0, null, null, 1, "div", [
					["class", "shareDialogButton icon-close-1"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.close() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Cancel"])), (e()(), n.pb(13, 0, null, null, 1, "div", [
					["class", "shareDialogButton marLeft2per icon-done"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.emitEmails() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Share"]))], (function(e, l) {
					e(l, 7, 0, l.component.sharedEmails)
				}), (function(e, l) {
					e(l, 4, 0, n.zb(l, 9).ngClassUntouched, n.zb(l, 9).ngClassTouched, n.zb(l, 9).ngClassPristine, n.zb(l, 9).ngClassDirty, n.zb(l, 9).ngClassValid, n.zb(l, 9).ngClassInvalid, n.zb(l, 9).ngClassPending)
				}))
			}

			function v(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "video", [
					["class", "minwidth vbodyvideo"],
					["controls", "controls"],
					["controlsList", "nodownload"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "source", [
					["type", "video/mp4"]
				], [
					[8, "src", 4]
				], null, null, null, null)), (e()(), n.Hb(-1, null, [" Your browser does not support HTML5 video. "]))], null, (function(e, l) {
					e(l, 1, 0, n.rb(1, "", l.component.src, ""))
				}))
			}

			function _(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "button", [
					["aria-label", "Close"],
					["class", "dialog__close-btn"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.close() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, [" X "]))], null, null)
			}

			function y(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "icon-clock-outline flexbs100 vcountMarg"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " ", " Duration "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.videoCourse.hoursContent, t.videoCourse.hoursContent > 1 ? "Hours" : "Hour")
				}))
			}

			function C(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "icon-assesment flexbs50 vcountMarg"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " ", " "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.videoCourse.assessmentCount, t.videoCourse.assessmentCount > 1 ? "Assessments" : "Assessment")
				}))
			}

			function x(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "icon-applied-drives flexbs50 vcountMarg"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " Practice ", " "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.videoCourse.practiceCount, t.videoCourse.practiceCount > 1 ? "exercises" : "exercise")
				}))
			}

			function w(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 20, "div", [
					["class", "vcoursebody"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 3, "div", [
					["class", "vcoursepad fw500 vtitle"]
				], null, null, null, null, null)), (e()(), n.Hb(2, null, [" ", " "])), (e()(), n.gb(16777216, null, null, 1, null, _)), n.ob(4, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(5, 0, null, null, 6, "div", [
					["class", "container flxwrap vcount vcoursepad"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, y)), n.ob(7, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, C)), n.ob(9, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, x)), n.ob(11, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(12, 0, null, null, 2, "div", [
					["class", "vcoursepad vdesc font13"]
				], null, null, null, null, null)), (e()(), n.Hb(13, null, [" ", " "])), (e()(), n.pb(14, 0, null, null, 0, "div", [
					["class", "overDesc"]
				], null, null, null, null, null)), (e()(), n.pb(15, 0, null, null, 2, "div", [
					["class", "vcoursepad vbtnmarg"]
				], null, null, null, null, null)), (e()(), n.pb(16, 0, null, null, 1, "app-button", [
					["icons", "true"]
				], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.addTocart(t, "cart") && n), n
				}), a.b, a.a)), n.ob(17, 573440, null, 0, s.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					icons: [1, "icons"],
					fontSize: [2, "fontSize"],
					background: [3, "background"],
					id: [4, "id"]
				}, {
					but: "but"
				}), (e()(), n.pb(18, 0, null, null, 2, "div", [
					["class", "debtn vcoursepad vbtnmarg"]
				], null, null, null, null, null)), (e()(), n.pb(19, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.addTocart(t, "details") && n), n
				}), a.b, a.a)), n.ob(20, 573440, null, 0, s.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					background: [2, "background"],
					id: [3, "id"]
				}, {
					but: "but"
				})], (function(e, l) {
					var t = l.component;
					e(l, 4, 0, t.closable), e(l, 7, 0, t.videoCourse.hoursContent), e(l, 9, 0, t.videoCourse.assessmentCount), e(l, 11, 0, t.videoCourse.practiceCount), e(l, 17, 0, t.addbtn, "true", "14px", "var(--nine)", t.addbtn.type + t.addbtn.btnName), e(l, 20, 0, t.detailsbtn, "14px", "var(--three)", t.detailsbtn.type + t.detailsbtn.btnName)
				}), (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.videoCourse.title), e(l, 13, 0, t.videoCourse.description ? t.videoCourse.description : "")
				}))
			}

			function k(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 10, "div", [
					["class", "minwidth"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 9, "div", [
					["class", "container mfldir"]
				], null, null, null, null, null)), n.ob(2, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(3, {
					mobVideoDiv: 0
				}), (e()(), n.pb(4, 0, null, null, 4, "div", [
					["class", "width60"]
				], null, null, null, null, null)), n.ob(5, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(6, {
					width100: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, v)), n.ob(8, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, w)), n.ob(10, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 3, 0, t.clientWidth <= 480);
					e(l, 2, 0, "container mfldir", n);
					var i = e(l, 6, 0, t.clientWidth <= 480);
					e(l, 5, 0, "width60", i), e(l, 8, 0, t.src), e(l, 10, 0, t.videoCourse)
				}), null)
			}

			function S(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 18, "div", [], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 4, "div", [
					["class", "container dfbtnout"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.applyDialog(t, !1) && n), n
				}), a.b, a.a)), n.ob(3, 573440, null, 0, s.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					background: [2, "background"],
					fontColor: [3, "fontColor"],
					id: [4, "id"]
				}, {
					but: "but"
				}), (e()(), n.pb(4, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.applyDialog(t, !0) && n), n
				}), a.b, a.a)), n.ob(5, 573440, null, 0, s.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					background: [2, "background"],
					id: [3, "id"]
				}, {
					but: "but"
				}), (e()(), n.pb(6, 0, null, null, 12, "div", [
					["class", "container dfout"]
				], null, null, null, null, null)), (e()(), n.pb(7, 0, null, null, 2, "div", [
					["class", "dwidth"]
				], null, null, null, null, null)), (e()(), n.pb(8, 0, null, null, 1, "app-select-dropdown", [
					["placeHolder", "Sort"]
				], null, [
					[null, "dropDownEmit"]
				], (function(e, l, t) {
					var n = !0;
					return "dropDownEmit" === l && (n = !1 !== e.component.getFilter(t, "sort") && n), n
				}), r.b, r.a)), n.ob(9, 638976, null, 0, u.a, [c.a, n.C], {
					optionArray: [0, "optionArray"],
					defaultSelected: [1, "defaultSelected"],
					placeHolder: [2, "placeHolder"]
				}, {
					dropDownEmit: "dropDownEmit"
				}), (e()(), n.pb(10, 0, null, null, 2, "div", [
					["class", "dwidth"]
				], null, null, null, null, null)), (e()(), n.pb(11, 0, null, null, 1, "app-select-dropdown", [
					["placeHolder", "Categories"]
				], null, [
					[null, "dropDownEmit"]
				], (function(e, l, t) {
					var n = !0;
					return "dropDownEmit" === l && (n = !1 !== e.component.getFilter(t, "category") && n), n
				}), r.b, r.a)), n.ob(12, 638976, null, 0, u.a, [c.a, n.C], {
					optionArray: [0, "optionArray"],
					defaultSelected: [1, "defaultSelected"],
					placeHolder: [2, "placeHolder"]
				}, {
					dropDownEmit: "dropDownEmit"
				}), (e()(), n.pb(13, 0, null, null, 2, "div", [
					["class", "dwidth"]
				], null, null, null, null, null)), (e()(), n.pb(14, 0, null, null, 1, "app-select-dropdown", [
					["placeHolder", "Progress"]
				], null, [
					[null, "dropDownEmit"]
				], (function(e, l, t) {
					var n = !0;
					return "dropDownEmit" === l && (n = !1 !== e.component.getFilter(t, "progress") && n), n
				}), r.b, r.a)), n.ob(15, 638976, null, 0, u.a, [c.a, n.C], {
					optionArray: [0, "optionArray"],
					defaultSelected: [1, "defaultSelected"],
					placeHolder: [2, "placeHolder"]
				}, {
					dropDownEmit: "dropDownEmit"
				}), (e()(), n.pb(16, 0, null, null, 2, "div", [
					["class", "dwidth"]
				], null, null, null, null, null)), (e()(), n.pb(17, 0, null, null, 1, "app-select-dropdown", [
					["placeHolder", "Instructor"]
				], null, [
					[null, "dropDownEmit"]
				], (function(e, l, t) {
					var n = !0;
					return "dropDownEmit" === l && (n = !1 !== e.component.getFilter(t, "instructor") && n), n
				}), r.b, r.a)), n.ob(18, 638976, null, 0, u.a, [c.a, n.C], {
					optionArray: [0, "optionArray"],
					defaultSelected: [1, "defaultSelected"],
					search: [2, "search"],
					placeHolder: [3, "placeHolder"]
				}, {
					dropDownEmit: "dropDownEmit"
				})], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.cancelNow, "14px", "var(--three)", "var(--nine)", t.cancelNow.type + t.cancelNow.btnName), e(l, 5, 0, t.applyNow, "14px", "var(--nine)", t.applyNow.type + t.applyNow.btnName), e(l, 9, 0, t.sArray, t.sortdefaultArray, "Sort"), e(l, 12, 0, t.cArray, t.catdefaultArray, "Categories"), e(l, 15, 0, t.pArray, t.progdefaultArray, "Progress"), e(l, 18, 0, t.iArray, t.insdefaultArray, !0, "Instructor")
				}), null)
			}

			function O(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(2, {
					"overflow-y": 0
				}), (e()(), n.pb(3, 0, null, null, 1, "app-chips", [
					["backgroundcolor", "var(--thirtythree)"],
					["color", "var(--fifteen)"]
				], null, [
					[null, "removeOption"],
					["window", "resize"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "window:resize" === l && (i = !1 !== n.zb(e, 4).getScreenSize(t) && i), "removeOption" === l && (i = !1 !== o.removeOpt(t) && i), i
				}), d.b, d.a)), n.ob(4, 114688, null, 0, p.a, [], {
					closable: [0, "closable"],
					options: [1, "options"],
					class: [2, "class"],
					backgroundcolor: [3, "backgroundcolor"],
					color: [4, "color"],
					properties: [5, "properties"],
					padding: [6, "padding"]
				}, {
					removeOption: "removeOption"
				})], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "scroll");
					e(l, 1, 0, n), e(l, 4, 0, !0, t.value, t.mobile ? t.nowrap : t.wrap, "var(--thirtythree)", "var(--fifteen)", t.chipsprop, !0)
				}), null)
			}

			function P(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(2, {
					"overflow-y": 0
				}), (e()(), n.pb(3, 0, null, null, 1, "span", [
					["class", "logOffText margin_top"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["You have already logged in another device !! Please logoff (or) exit from other device and retry after 5 minutes."]))], (function(e, l) {
					var t = e(l, 2, 0, "scroll");
					e(l, 1, 0, t)
				}), null)
			}

			function M(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "div", [
					["class", "logOffText margin_top curs"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 1, "div", [
					["class", "text-ok"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.confiormLogedOff() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Ok"]))], null, null)
			}

			function I(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "textcenter container curs"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 1, "div", [
					["class", "text-cancel"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.close() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Cancel"])), (e()(), n.pb(3, 0, null, null, 1, "div", [
					["class", "text-app"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.applyChips() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Apply"]))], null, null)
			}

			function D(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 19, "div", [
					["class", "overlay backblur"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 18, "div", [
					["class", "dialog"]
				], null, null, null, null, null)), n.ob(2, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, m)), n.ob(4, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, f)), n.ob(6, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, k)), n.ob(8, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, S)), n.ob(10, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, O)), n.ob(12, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, P)), n.ob(14, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, M)), n.ob(16, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, I)), n.ob(18, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), n.yb(null, 0)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.ngStyleClass), e(l, 4, 0, t.headRequired), e(l, 6, 0, "sharefeed" === t.contentData), e(l, 8, 0, "video" === t.contentData), e(l, 10, 0, "filter" === t.contentData), e(l, 12, 0, "chips" === t.contentData), e(l, 14, 0, "logoffConfiorm" === t.contentData), e(l, 16, 0, t.confiormLogOff), e(l, 18, 0, t.checkselect)
				}), null)
			}

			function N(e) {
				return n.Jb(0, [(e()(), n.gb(16777216, null, null, 1, null, D)), n.ob(1, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					e(l, 1, 0, l.component.visible)
				}), null)
			}
		},
		lbgN: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		rHJl: function(e, l, t) {
			"use strict";
			var n = t("8Y7J");
			t("134i"), t.d(l, "a", (function() {
				return i
			})), t.d(l, "b", (function() {
				return o
			}));
			var i = n.nb({
				encapsulation: 0,
				styles: [
					[".position[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;position:absolute;right:6px}.growl-card[_ngcontent-%COMP%]{visibility:hidden;display:flex;max-width:354px;width:100%;background-color:var(--thirtynine);color:var(--three);border-radius:2px;padding:16px;position:fixed;z-index:2000;top:30px}.logo-1[_ngcontent-%COMP%]{position:relative;top:1px;font-size:30px;width:13%}.content[_ngcontent-%COMP%]{position:relative;top:1px;left:16px;width:83%;display:flex;flex-direction:column}.logo-2[_ngcontent-%COMP%]{position:relative;left:3px;font-size:22px}.summary[_ngcontent-%COMP%]{font-size:15px}.detail[_ngcontent-%COMP%]{padding-top:10px;font-size:15px}.show[_ngcontent-%COMP%]{visibility:visible!important}.pointer[_ngcontent-%COMP%]{cursor:pointer}@-webkit-keyframes fadein{from{top:0;opacity:0}to{top:30px;opacity:1}}@keyframes fadein{from{top:0;opacity:0}to{top:30px;opacity:1}}@-webkit-keyframes fadeout{from{top:30px;opacity:1}to{top:0;opacity:0}}@keyframes fadeout{from{top:30px;opacity:1}to{top:0;opacity:0}}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}@media screen and (min-device-width:0px) and (max-device-width:480px){.position[_ngcontent-%COMP%]{right:0}}@media screen and (max-device-width:360px){.growl-card[_ngcontent-%COMP%]{max-width:280px}}"]
				],
				data: {}
			});

			function o(e) {
				return n.Jb(0, [n.Fb(402653184, 1, {
					growlCardElement: 0
				}), (e()(), n.pb(1, 0, null, null, 10, "div", [
					["class", "position"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, [
					[1, 0],
					["growlcard", 1]
				], null, 9, "div", [
					["class", "growl-card"]
				], [
					[8, "id", 0]
				], null, null, null, null)), (e()(), n.pb(3, 0, null, null, 1, "div", [
					["class", "logo-1"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 0, "i", [], [
					[8, "className", 0]
				], null, null, null, null)), (e()(), n.pb(5, 0, null, null, 4, "div", [
					["class", "content"]
				], null, null, null, null, null)), (e()(), n.pb(6, 0, null, null, 1, "div", [
					["class", "summary"]
				], null, null, null, null, null)), (e()(), n.Hb(7, null, [" ", " "])), (e()(), n.pb(8, 0, null, null, 1, "div", [
					["class", "detail"]
				], null, null, null, null, null)), (e()(), n.Hb(9, null, [" ", " "])), (e()(), n.pb(10, 0, null, null, 1, "div", [
					["class", "logo-2"]
				], null, null, null, null, null)), (e()(), n.pb(11, 0, null, null, 0, "i", [
					["class", "icon-close-1 pointer"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.close() && n), n
				}), null, null))], null, (function(e, l) {
					var t = l.component;
					e(l, 2, 0, n.rb(1, "", t.id, "")), e(l, 4, 0, n.rb(1, "", t.data ? t.data.icon : "", "")), e(l, 7, 0, t.data ? t.data.summary : ""), e(l, 9, 0, t.data ? t.data.detail : "")
				}))
			}
		},
		rp83: function(e, l, t) {
			"use strict";
			var n = t("8Y7J"),
				i = t("SVse");
			t("Mx2V"), t.d(l, "a", (function() {
				return o
			})), t.d(l, "b", (function() {
				return x
			}));
			var o = n.nb({
				encapsulation: 0,
				styles: [
					[".course-name[_ngcontent-%COMP%]{color:#fff;overflow:hidden;font-size:14px}.chips[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;white-space:nowrap;padding:0 12px;border-radius:22px;margin-right:10px;height:24px;margin-top:10px}.changedisp[_ngcontent-%COMP%]{display:none}.overf[_ngcontent-%COMP%]{max-height:300px}.cross[_ngcontent-%COMP%]{cursor:pointer;margin-left:12px;position:relative;top:1px;color:#fff;font-size:10px}.pos[_ngcontent-%COMP%]{position:relative;height:100%}.chanewidth[_ngcontent-%COMP%]{width:auto}.top1[_ngcontent-%COMP%]{height:100%;flex-wrap:wrap;padding-bottom:20px}.pos1[_ngcontent-%COMP%]{position:absolute;align-items:center;justify-content:flex-start;right:-20px;top:18px;width:56px;height:43px;border-radius:50px;background:rgba(74,74,74,.49);color:var(--fifteen);-webkit-filter:blur(2px);filter:blur(2px)}.padd-side[_ngcontent-%COMP%]{padding-left:8px}.disp[_ngcontent-%COMP%]{display:none}.overchange[_ngcontent-%COMP%]{width:103px;height:24px;border-radius:4px;border:solid 1px var(--thirtythree);position:relative;top:10px;left:10px}.viewone[_ngcontent-%COMP%]{text-align:center;position:relative;top:3px;color:var(--thirtythree)}.back[_ngcontent-%COMP%]{background:red!important}.font10[_ngcontent-%COMP%]{font-size:10px}.cp[_ngcontent-%COMP%], .viewone[_ngcontent-%COMP%]{cursor:pointer}@media screen and (min-width:993px) and (max-width:1200px){.padd-side[_ngcontent-%COMP%]{padding:0 15px}}@media screen and (min-width:769px) and (max-width:992px){.padd-side[_ngcontent-%COMP%]{padding:0 15px}}@media screen and (min-width:481px) and (max-width:768px){.padd-side[_ngcontent-%COMP%]{padding:0 20px}.chips[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;white-space:nowrap;padding:0 12px;border-radius:22px;margin-right:10px;height:24px;margin-top:10px}}@media screen and (max-width:480px){.padd-side[_ngcontent-%COMP%]{padding:0 10px}.chips[_ngcontent-%COMP%]{height:25px}.top1[_ngcontent-%COMP%]{flex-wrap:wrap;padding-bottom:20px;overflow:auto}.padd-side[_ngcontent-%COMP%]{overflow:hidden}.overchange[_ngcontent-%COMP%]{top:10px}}"]
				],
				data: {}
			});

			function a(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "cross icon icon-close-1 container"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.remove(e.parent.context.$implicit.value) && n), n
				}), null, null))], null, null)
			}

			function s(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 12, "div", [
					["class", "chips container"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					changedisp: 0,
					chanewidth: 1
				}), n.ob(3, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(4, {
					background: 0,
					color: 1,
					width: 2
				}), (e()(), n.pb(5, 0, null, null, 5, "div", [
					["class", "course-name"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.returnSelectedChips(e.context.$implicit) && n), n
				}), null, null)), n.ob(6, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(7, {
					font10: 0,
					cp: 1
				}), n.ob(8, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(9, {
					color: 0
				}), (e()(), n.Hb(10, null, [" ", " "])), (e()(), n.gb(16777216, null, null, 1, null, a)), n.ob(12, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, l.context.index >= t.viewAllLength && t.properties && t.properties.buttonview && t.properties.buttonview.required, !1 === t.properties.buttonview.required);
					e(l, 1, 0, "chips container", n);
					var i = e(l, 4, 0, l.context.$implicit && l.context.$implicit.check ? t.backgroundcolor : t.normalBg, t.color, t.chipswidth ? t.chipswidth : "");
					e(l, 3, 0, i);
					var o = e(l, 7, 0, "10" === t.fontSize, t.returnChips);
					e(l, 6, 0, "course-name", o);
					var a = e(l, 9, 0, !t.normalBg || l.context.$implicit && l.context.$implicit.check ? "" : t.color);
					e(l, 8, 0, a), e(l, 12, 0, t.closable)
				}), (function(e, l) {
					e(l, 10, 0, l.context.$implicit.label)
				}))
			}

			function r(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(2, {
					overchange: 0
				}), (e()(), n.pb(3, 0, null, null, 1, "div", [
					["class", "viewone"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.btnEmit(t, "ViewAll") && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["View All"]))], (function(e, l) {
					var t = e(l, 2, 0, l.component.options);
					e(l, 1, 0, t)
				}), null)
			}

			function u(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "pos1 container"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "i", [
					["class", "icon icon-arrow-back"]
				], null, null, null, null, null))], null, null)
			}

			function c(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 11, "div", [
					["class", "pos"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					"padd-side": 0
				}), (e()(), n.pb(3, 0, [
					[1, 0],
					["topOne", 1]
				], null, 6, "div", [
					["class", "top1 container"]
				], null, null, null, null, null)), n.ob(4, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(5, {
					overf: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, s)), n.ob(7, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, r)), n.ob(9, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, u)), n.ob(11, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.padding);
					e(l, 1, 0, "pos", n);
					var i = e(l, 5, 0, t.properties && t.properties.buttonview && !1 === t.properties.buttonview.required);
					e(l, 4, 0, "top1 container", i), e(l, 7, 0, t.options), e(l, 9, 0, t.options.length >= t.viewAllLength && t.properties && t.properties.buttonview && t.properties.buttonview.required), e(l, 11, 0, t.rightArrow)
				}), null)
			}

			function d(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "cross icon icon-close-1"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.remove(e.parent.context.$implicit.value) && n), n
				}), null, null))], null, null)
			}

			function p(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 12, "div", [
					["class", "chips container"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					changedisp: 0,
					chanewidth: 1
				}), n.ob(3, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(4, {
					background: 0,
					color: 1,
					width: 2
				}), (e()(), n.pb(5, 0, null, null, 5, "div", [
					["class", "course-name"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.returnSelectedChips(e.context.$implicit) && n), n
				}), null, null)), n.ob(6, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(7, {
					font10: 0,
					cp: 1
				}), n.ob(8, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(9, {
					color: 0
				}), (e()(), n.Hb(10, null, [" ", " "])), (e()(), n.gb(16777216, null, null, 1, null, d)), n.ob(12, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, l.context.index >= 4 && t.properties && t.properties.buttonview && t.properties.buttonview.required, !1 === t.properties.buttonview.required);
					e(l, 1, 0, "chips container", n);
					var i = e(l, 4, 0, l.context.$implicit && l.context.$implicit.check ? t.backgroundcolor : t.normalBg, t.color, t.chipswidth ? t.chipswidth : "");
					e(l, 3, 0, i);
					var o = e(l, 7, 0, "10" === t.fontSize, t.returnChips);
					e(l, 6, 0, "course-name", o);
					var a = e(l, 9, 0, !t.normalBg || l.context.$implicit && l.context.$implicit.check ? "" : t.color);
					e(l, 8, 0, a), e(l, 12, 0, t.closable)
				}), (function(e, l) {
					e(l, 10, 0, l.context.$implicit.label)
				}))
			}

			function h(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "viewone"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.btnEmit(t, "ViewAll") && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["View All"]))], null, null)
			}

			function g(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(2, {
					overchange: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, h)), n.ob(4, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.options);
					e(l, 1, 0, n), e(l, 4, 0, t.closable)
				}), null)
			}

			function b(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "pos1 container"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "i", [
					["class", "icon icon-arrow-back"]
				], null, null, null, null, null))], null, null)
			}

			function m(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 11, "div", [
					["class", "pos"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					"padd-side": 0
				}), (e()(), n.pb(3, 0, [
					[1, 0],
					["topOne", 1]
				], null, 6, "div", [
					["class", "top1 container"]
				], null, null, null, null, null)), n.ob(4, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(5, {
					overf: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, p)), n.ob(7, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, g)), n.ob(9, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, b)), n.ob(11, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.padding);
					e(l, 1, 0, "pos", n);
					var i = e(l, 5, 0, !1 === t.properties.buttonview.required);
					e(l, 4, 0, "top1 container", i), e(l, 7, 0, t.options), e(l, 9, 0, t.options.length >= 3 && t.closable && t.properties && t.properties.buttonview && t.properties.buttonview.required), e(l, 11, 0, t.rightArrow)
				}), null)
			}

			function f(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "cross icon icon-close-1"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.remove(e.parent.context.$implicit.value) && n), n
				}), null, null))], null, null)
			}

			function v(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 12, "div", [
					["class", "chips container"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					changedisp: 0,
					chanewidth: 1
				}), n.ob(3, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(4, {
					background: 0,
					color: 1,
					width: 2
				}), (e()(), n.pb(5, 0, null, null, 5, "div", [
					["class", "course-name"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.returnSelectedChips(e.context.$implicit) && n), n
				}), null, null)), n.ob(6, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(7, {
					font10: 0,
					cp: 1
				}), n.ob(8, 278528, null, 0, i.p, [n.s, n.k, n.C], {
					ngStyle: [0, "ngStyle"]
				}, null), n.Cb(9, {
					color: 0
				}), (e()(), n.Hb(10, null, [" ", " "])), (e()(), n.gb(16777216, null, null, 1, null, f)), n.ob(12, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, l.context.index >= 31 && t.properties && t.properties.buttonview && t.properties.buttonview.required, !1 === t.properties.buttonview.required);
					e(l, 1, 0, "chips container", n);
					var i = e(l, 4, 0, l.context.$implicit && l.context.$implicit.check ? t.backgroundcolor : t.normalBg, t.color, t.chipswidth ? t.chipswidth : "");
					e(l, 3, 0, i);
					var o = e(l, 7, 0, "10" === t.fontSize, t.returnChips);
					e(l, 6, 0, "course-name", o);
					var a = e(l, 9, 0, !t.normalBg || l.context.$implicit && l.context.$implicit.check ? "" : t.color);
					e(l, 8, 0, a), e(l, 12, 0, t.closable)
				}), (function(e, l) {
					e(l, 10, 0, l.context.$implicit.label)
				}))
			}

			function _(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					ngClass: [0, "ngClass"]
				}, null), n.Cb(2, {
					overchange: 0
				}), (e()(), n.pb(3, 0, null, null, 1, "div", [
					["class", "viewone"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.btnEmit(t, "ViewAll") && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["View All"]))], (function(e, l) {
					var t = e(l, 2, 0, l.component.options);
					e(l, 1, 0, t)
				}), null)
			}

			function y(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "pos1 container"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "i", [
					["class", "icon icon-arrow-back"]
				], null, null, null, null, null))], null, null)
			}

			function C(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 11, "div", [
					["class", "pos"]
				], null, null, null, null, null)), n.ob(1, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					"padd-side": 0
				}), (e()(), n.pb(3, 0, [
					[1, 0],
					["topOne", 1]
				], null, 6, "div", [
					["class", "top1 container"]
				], null, null, null, null, null)), n.ob(4, 278528, null, 0, i.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(5, {
					overf: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, v)), n.ob(7, 278528, null, 0, i.l, [n.N, n.K, n.r], {
					ngForOf: [0, "ngForOf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, _)), n.ob(9, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, y)), n.ob(11, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.padding);
					e(l, 1, 0, "pos", n);
					var i = e(l, 5, 0, !1 === t.properties.buttonview.required);
					e(l, 4, 0, "top1 container", i), e(l, 7, 0, t.options), e(l, 9, 0, t.options.length >= 31 && t.properties && t.properties.buttonview && t.properties.buttonview.required), e(l, 11, 0, t.rightArrow)
				}), null)
			}

			function x(e) {
				return n.Jb(0, [n.Fb(671088640, 1, {
					topOne: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, c)), n.ob(2, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, m)), n.ob(4, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, C)), n.ob(6, 16384, null, 0, i.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, !t.mobile && !t.bigscreen), e(l, 4, 0, t.mobile && !t.bigscreen), e(l, 6, 0, t.bigscreen && !t.mobile)
				}), null)
			}
		},
		sjK5: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return h
			}));
			var n = t("mrSG"),
				i = t("AytR"),
				o = t("2Vo4"),
				a = t("EFyh"),
				s = t("4WDQ"),
				r = t("EPgW"),
				u = t("JIr8"),
				c = t("8Y7J"),
				d = t("IheW"),
				p = t("iInd");
			class h {
				constructor(e, l, t, n, a) {
					this.http = e, this.router = l, this.globalService = t, this.loginService = n, this.testService = a, this.chatLeftPanelEvents = new o.a({}), this.newMessage = new o.a({}), this.updateMessage = new o.a({}), this.isOffline = new o.a(!1), this.api_url = i.a.HOST.link, this.subscriptionList = [];
					const s = JSON.parse(localStorage.getItem("school_details"));
					s && s.schools_metadata && (this.sclMD = s.schools_metadata), this.userData = JSON.parse(localStorage.getItem("token")), this.logoutListener()
				}
				setUserData() {
					this.userData = JSON.parse(localStorage.getItem("token"))
				}
				getPubNub() {
					return new Promise((e, l) => n.__awaiter(this, void 0, void 0, (function*() {
						if (this.loginService.loginStatus() && this.checkIfEngagementAllowed())
							if (this.pubNub) e(this.pubNub);
							else {
								const l = {
									element: "script",
									url: "https://cdn.pubnub.com/sdk/javascript/pubnub.4.29.9.js",
									type: "text/javascript",
									rel: "",
									id: "pubnub"
								};
								yield this.globalService.loadScript(l.element, l.url, l.type, l.rel, l.id, l.child), this.getToken().subscribe(l => n.__awaiter(this, void 0, void 0, (function*() {
									const t = yield this.testService.getCryptoJS();
									if (l && l.success) {
										const n = JSON.parse(t.AES.decrypt(l.token, this.userData.school_id + "_" + this.userData.user_id).toString(t.enc.Utf8));
										n ? (this.pubNub = new PubNub({
											publishKey: n.publishKey,
											subscribeKey: n.subscribeKey,
											uuid: this.userData.user_id + "_" + this.userData.school_id,
											authKey: this.userData.user_id + "_" + this.userData.school_id,
											keepAlive: !0,
											autoNetworkDetection: !0
										}), yield this.addListeners(), e(this.pubNub)) : e(!1)
									} else window.location.pathname.includes("chat") && this.globalService.commonGrowl.next({
										time: 3e3,
										severity: "error",
										summary: "Chat Initialization Failed!",
										detail: "Try after some time"
									}), e(!1)
								})))
							}
						else e(!1)
					})))
				}
				addListeners() {
					return new Promise((e, l) => {
						this.pubNub.addListener({
							message: e => {
								if (this.currentChannel && this.currentChannel.channel_id === e.channel ? this.newMessage.next({
										action: "message",
										event: e
									}) : this.chatLeftPanelEvents.next({
										action: "message",
										event: e
									}), this.userData.user_id !== e.message.user_id) {
									let l = document.createElement("div");
									l.innerHTML = e.message.message, this.showNotification(e.message.channel_name, e.message.sender + ": " + l.innerText, e.message.profile_pic, "chat")
								}
							},
							presence: e => {},
							signal: e => {},
							objects: e => {
								e && e.message && "channel" === e.message.type && this.chatLeftPanelEvents.next({
									action: "channel",
									event: e
								})
							},
							messageAction: e => {
								this.currentChannel && this.currentChannel.channel_id === e.channel && this.updateMessage.next({
									action: "updated",
									event: e
								})
							},
							file: e => {
								this.currentChannel && this.currentChannel.channel_id === e.channel ? this.newMessage.next({
									action: "file",
									event: e
								}) : this.chatLeftPanelEvents.next({
									action: "message",
									event: e
								})
							},
							status: e => {},
							membership: e => {
								if (e && e.message && e.message.data && e.message.data.uuid && e.message.data.uuid.id === this.userData.user_id + "_" + this.userData.school_id) {
									if ("membership" === e.message.type && ("delete" === e.message.event || "set" === e.message.event) && (this.chatLeftPanelEvents.next({
											action: "member",
											type: e.message.event,
											event: e
										}), "delete" === e.message.event && this.subscriptionList && this.subscriptionList.includes(e.message.data.channel.id))) {
										const l = this.subscriptionList.findIndex(l => l === e.message.data.channel.id);
										this.subscriptionList.splice(l, 1), this.updateSubscription()
									}!1 === this.subscriptionList.includes(e.message.data.channel.id) && "delete" !== e.message.event && (this.subscriptionList.push(e.message.data.channel.id), this.updateSubscription())
								}
							}
						}), e(!0)
					})
				}
				showNotification(e, l, t, n) {
					const i = new Notification(e, {
						body: l,
						icon: t,
						tag: n
					});
					i.onshow = () => {
						setTimeout(() => {
							i.close()
						}, 1e4)
					}, i.onclick = e => {
						"/chat" !== window.location.pathname && "chat" === i.tag && this.router.navigateByUrl("chat")
					}
				}
				getToken() {
					return this.http.post(this.api_url + "/chat/token", {
						user_id: this.userData.user_id
					}, this.loginService.options(null)).pipe(Object(u.a)(this.loginService.handleError.bind(this)))
				}
				removeListeners() {
					this.pubNub.removeListener(this.pubNubListener)
				}
				getChannelGroups() {
					return this.http.post(this.api_url + "/getchannelgroups", {
						user_id: this.userData.user_id
					}, this.loginService.options(null)).pipe(Object(u.a)(this.loginService.handleError.bind(this)))
				}
				getMembersList(e) {
					return this.http.post(this.api_url + "/channel/getmembers", e, this.loginService.options(null)).pipe(Object(u.a)(this.loginService.handleError.bind(this)))
				}
				addPubnubSub(e) {
					this.pubNub && e && this.pubNub.subscribe({
						channels: [e]
					})
				}
				removePubnubSub(e) {
					this.pubNub && e && this.pubNub.unsubscribe({
						channels: [e]
					})
				}
				logoutListener() {
					this.globalService.logoutTrigger.subscribe(() => {
						this.flushPubNub()
					})
				}
				flushPubNub() {
					this.pubNub && (this.pubNub.unsubscribeAll(), this.pubNub = null)
				}
				getSubscriptionList(e) {
					if (this.pubNub) {
						const l = {
							uuid: this.userData.user_id + "_" + this.userData.school_id,
							include: {
								channelFields: !0,
								customFields: !0,
								customChannelFields: !0
							}
						};
						e && (l.page = {
							next: e
						}), this.pubNub.objects.getMemberships(l).then(e => {
							e && 200 === e.status && e.data && (e.data.forEach(e => {
								e.channel && e.channel.custom && e.channel.custom.channel_grp_id && !e.channel.custom.deletedAt && (this.subscriptionList.includes(e.channel.id) || this.subscriptionList.push(e.channel.id))
							}), e.next && e.data.length >= 100 && e.next !== e.prev && this.getSubscriptionList(e.next)), this.updateSubscription()
						})
					}
				}
				updateSubscription() {
					const e = {};
					this.subscriptionList.includes(this.userData.user_id + "_" + this.userData.school_id) || this.subscriptionList.push(this.userData.user_id + "_" + this.userData.school_id), this.subscriptionList && this.subscriptionList.length && (this.subscriptionList.length >= 100 ? (e.channelGroups = [this.userData.user_id + "_" + this.userData.school_id + "_group"], this.pubNub.channelGroups.addChannels({
						channels: this.subscriptionList,
						channelGroup: this.userData.user_id + "_" + this.userData.school_id + "_group"
					})) : e.channels = this.subscriptionList, this.pubNub.subscribe(e))
				}
				onlineHandle() {
					this.isOffline.next(!1)
				}
				offlineHandle() {
					this.isOffline.next(!0)
				}
				detectOffline() {
					window.ononline = this.onlineHandle.bind(this), window.onoffline = this.offlineHandle.bind(this)
				}
				removeDetectOffline() {
					this.isOffline.next(!1), window.ononline = null, window.onoffline = null
				}
				checkIfEngagementAllowed() {
					return !!(this.sclMD && this.userData && (this.sclMD.allow_engagement || this.userData.enable_features.allow_manual_proctoring) && this.userData.enable_features && (this.userData.enable_features.allow_engagement || this.userData.enable_features.allow_manual_proctoring))
				}
				getMemberShips(e) {
					return new Promise((l, t) => n.__awaiter(this, void 0, void 0, (function*() {
						if (this.pubNub) {
							const n = {
								uuid: this.userData.user_id + "_" + this.userData.school_id,
								include: {
									channelFields: !0,
									customFields: !0,
									customChannelFields: !0
								}
							};
							e && (n.filter = e);
							let i, o = {
									data: []
								},
								a = !1,
								s = !1;
							const r = () => new Promise((e, l) => {
								i && (n.page = {
									next: i
								}), this.pubNub.objects.getMemberships(n).then(l => {
									l && l.data && 200 === l.status && (o.data = o.data.concat(l.data)), e(l)
								}).catch(e => {
									l(e)
								})
							});
							for (; !a;) {
								const e = yield r().catch(e => {
									t(e), s = !0
								});
								if (e.next && e.data && e.data.length >= 100 && e.next !== e.prev ? i = e.next : a = !0, s) break
							}
							s || l(o)
						} else l(!1)
					})))
				}
				getUnreadMessageCount(e) {
					return new Promise((l, t) => {
						this.pubNub && this.pubNub.messageCounts(e).then(e => {
							l(e)
						}).catch(e => {
							t(e)
						})
					})
				}
			}
			h.ngInjectableDef = c.R({
				factory: function() {
					return new h(c.V(d.c), c.V(p.m), c.V(s.a), c.V(a.a), c.V(r.a))
				},
				token: h,
				providedIn: "root"
			})
		},
		tLnd: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return u
			}));
			var n = t("AytR"),
				i = t("EFyh"),
				o = t("JIr8"),
				a = t("4WDQ"),
				s = t("8Y7J"),
				r = t("IheW");
			class u {
				constructor(e, l, t) {
					this.http = e, this.loginservice = l, this.globalService = t, this.api = n.a.HOST.MS_drives, this.backend_api_url = n.a.HOST.link, this.drivesNameFormat = {
						drivesNamelist: [{
							label: "Drives",
							value: "drives",
							singler: "Drive"
						}, {
							label: "Jobs",
							value: "job",
							singler: "Job"
						}],
						drivesOptinlist: [{
							label: "Opt-In",
							value: "optin",
							doneState: "Opted-In"
						}, {
							label: "Apply",
							value: "apply",
							doneState: "Applied"
						}],
						drivesOptOutlist: [{
							label: "Opt-Out",
							value: "optout",
							doneState: "Opted-Out"
						}, {
							label: "Decline",
							value: "decline",
							doneState: "Declined"
						}],
						drivesCategorylist: [{
							label: "Drive Category ",
							value: "drivecategory"
						}, {
							label: "Company Category",
							value: "companycategaory"
						}],
						drivesOtherDetailslist: [{
							label: "Drive other details",
							value: "driveotherdetails"
						}, {
							label: "Change to Company / Job details",
							value: "changetoCompanyjobdetails"
						}],
						drivesSalarylist: [{
							label: "Salary",
							value: "salary"
						}, {
							label: "CTC",
							value: "ctc"
						}]
					}, this.notprovidedtext = "Not Provided";
					const i = JSON.parse(localStorage.getItem("school_details"));
					this.drivesNameFormatView = {
						drivesNamelist: this.drivesNameFormat.drivesNamelist.find(e => i.schools_metadata.defaultdrivenameformat ? e.value === i.schools_metadata.defaultdrivenameformat : e.value === this.drivesNameFormat.drivesNamelist[0].value),
						drivesOptinlist: this.drivesNameFormat.drivesOptinlist.find(e => i.schools_metadata.defaultdriveoptinformat ? e.value === i.schools_metadata.defaultdriveoptinformat : e.value === this.drivesNameFormat.drivesOptinlist[0].value),
						drivesOptOutlist: this.drivesNameFormat.drivesOptOutlist.find(e => i.schools_metadata.defaultdriveoptoutformat ? e.value === i.schools_metadata.defaultdriveoptoutformat : e.value === this.drivesNameFormat.drivesOptOutlist[0].value),
						drivesCategorylist: this.drivesNameFormat.drivesCategorylist.find(e => i.schools_metadata.defaultdrivecategoryformat ? e.value === i.schools_metadata.defaultdrivecategoryformat : e.value === this.drivesNameFormat.drivesCategorylist[0].value),
						drivesOtherDetailslist: this.drivesNameFormat.drivesOtherDetailslist.find(e => i.schools_metadata.defaultdriveotherdetailsformat ? e.value === i.schools_metadata.defaultdriveotherdetailsformat : e.value === this.drivesNameFormat.drivesOtherDetailslist[0].value),
						drivesSalarylist: this.drivesNameFormat.drivesSalarylist.find(e => i.schools_metadata.defaultdrivesalaryformat ? e.value === i.schools_metadata.defaultdrivesalaryformat : e.value === this.drivesNameFormat.drivesSalarylist[0].value)
					}
				}
				getDriveList(e, l) {
					return this.http.post(this.api + "/v2/student/" + l + "/drives/filter", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getDriveDetails(e) {
					return this.http.post(this.api + "/drive/student/drivedetails", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getDriveStudentDetails(e) {
					return this.http.post(this.api + "/drive/student/details", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getDriveEligibility(e) {
					return this.http.post(this.api + "/drive/historyppa", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getAdditionalEligibility(e) {
					return this.http.get(this.api + "/drive/eligibile/" + e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getFilters(e, l) {
					return this.http.get(this.api + "/drive/" + e + "/" + l, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				collegeApplyStudents(e) {
					return this.http.post(this.api + "/drive/apply/student", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				setNotInterested(e) {
					return this.http.post(this.api + "/drive/set/notInterested", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				uploadoffer(e) {
					return this.http.post(this.api + "/add/offerletter", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getSignedUrl(e) {
					return this.http.post(this.backend_api_url + "/getsignedurl", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				uploadUsingSignedUrl(e, l) {
					return this.http.put(e, l)
				}
				attendancesystem(e) {
					return this.http.post(this.api + "/drive/attendancesystem", e, this.loginservice.options(null))
				}
				GetDrivestudentList(e) {
					return this.http.post(this.api + "/drive/GetDrivestudentList", e, this.loginservice.options(null))
				}
				GetStudentdrivedetails(e) {
					return this.http.post(this.api + "/drive/getstudentdrivedetails", e, this.loginservice.options(null))
				}
				updateStudentdrive(e) {
					return this.http.post(this.api + "/drive/updatestudentdrivedetails", e, this.loginservice.options(null))
				}
				additionalDetailsStudents(e) {
					return this.http.post(this.api + "/drives/driveStudentAdditionalDetails", e, this.loginservice.options(null))
				}
				driveWarning(e) {
					return this.http.post(this.api + "/drive/driveWarning", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				getDriveStudentBranch(e) {
					return this.http.post(this.api + "/drive/student_branch", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				addDriveStudentResume(e) {
					return this.http.post(this.api + "/drive/addDriveStudentResume", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
				studentResumePublicURL(e) {
					return this.http.post(this.api + "/drive/studentResumePublicURL", e, this.loginservice.options(null)).pipe(Object(o.a)(this.loginservice.handleError.bind(this)))
				}
			}
			u.ngInjectableDef = s.R({
				factory: function() {
					return new u(s.V(r.c), s.V(i.a), s.V(a.a))
				},
				token: u,
				providedIn: "root"
			})
		},
		u1jE: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			}));
			class n {}
		},
		vCwT: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return n
			})), t("Gl8U");
			class n {
				constructor(e) {
					this.serv = e, this.field = {}, this.val = "icon-person"
				}
				get isValid() {
					return this.form.controls[this.field.name].valid
				}
				get isDirty() {
					return this.form.controls[this.field.name].dirty
				}
				ngOnInit() {
					const e = this.serv.countryList.findIndex((e, l) => e.value === this.serv.fValue.country_code);
					this.pc = e > -1 ? e : 0
				}
				ngAfterViewInit() {
					this.setVal(this.field.value)
				}
				ngOnChanges(e) {
					e && setTimeout(() => {
						this.setVal(this.field.value)
					}, 500)
				}
				setVal(e) {
					"resume" === this.field.type && this.field.mandatory && !0 === this.field.value && (this.field.value = null), this.form.controls[this.field.name].setValue(e)
				}
				changeValue() {
					this.field.customError && (this.field.customError.error = !1, this.field.customError.message = "")
				}
				changeuppercase(e, l, t) {
					"shortanswer" !== l.type && "longanswer" !== l.type && "text" !== l.type || !l.fieldcase_type || ("capitalcase" === l.fieldcase_type && this.form.get(t).setValue(this.form.get(t).value.toUpperCase()), "smallcase" === l.fieldcase_type && this.form.get(t).setValue(this.form.get(t).value.toLowerCase()), "titlecase" === l.fieldcase_type && this.form.get(t).setValue(this.form.get(t).value.toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1)).join(" ")))
				}
				checkError() {
					return !!(this.form.get(this.field.name) && this.form.get(this.field.name).touched && this.form.get(this.field.name).hasError("required")) || !!(this.form.get(this.field.name) && this.form.get(this.field.name).touched && this.form.get(this.field.name).hasError(this.field.error)) || !(!this.field.customError || !this.field.customError.error)
				}
				setOption(e) {
					let l = e.target.value.substring(e.target.value.lastIndexOf("(") + 1, e.target.value.lastIndexOf(")"));
					this.serv.fValue.country_code = l
				}
				uploadResume(e, l) {
					e.target.files && e.target.files[0] && e.target.files[0].type && e.target.files[0].type.includes("pdf") ? this.field.files_size && e.target.files[0].size < this.field.files_size || !this.field.files_size ? this.serv.uploadFile(e.target.files[0], "pdf", "resumes/", "-resume", !0).then(e => {
						e ? (this.field.customError.error = !1, this.form.controls[this.field.name].setValue(e), this.field.value = e) : (this.field.customError.error = !0, this.field.customError.message = "upload valid .pdf file")
					}) : (this.field.customError.error = !0, this.field.customError.message = "Upload a file less than " + this.field.files_size / Math.pow(10, 6) + "MB") : (this.field.customError.error = !0, this.field.customError.message = "upload valid .pdf file")
				}
				iconAction() {
					this.field.icon && "contest" === this.field.icon.origin ? (this.field.icon.icon = "password" === this.field.type ? "icon-view-password" : "icon-eye-o", this.field.type = "password" === this.field.type ? "text" : "password") : this.field.icon && "showpassword" === this.field.icon.action && (this.field.icon.icon = "password" === this.field.type ? "icon-unlock" : "icon-ios-locked", this.field.type = "password" === this.field.type ? "text" : "password")
				}
			}
		},
		wK2T: function(e, l, t) {
			"use strict";
			t.d(l, "a", (function() {
				return u
			}));
			var n = t("AytR"),
				i = t("2Vo4"),
				o = t("JIr8"),
				a = t("EFyh"),
				s = t("8Y7J"),
				r = t("IheW");
			class u {
				constructor(e, l) {
					this.http = e, this.loginService = l, this.api = n.a.HOST.link, this.setFeed = new i.a({}), this.recentHashtag = new i.a([]), this.defaultqbimage = n.a.s3Objectstudentassets + "assets/common-images/market/Content.jpg", this.defaulttestimage = n.a.s3Objectstudentassets + "assets/common-images/market/QuestionBank.jpg", this.defaultcbimage = n.a.s3Objectstudentassets + "assets/common-images/market/Test.jpg", this.defaultcourseimage = n.a.s3Objectstudentassets + "assets/common-images/market/Course.png"
				}
				createTextLinks(e) {
					return (e || "").replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, (e, l, t) => {
						let n = t;
						return n.match("^https?://") || (n = "http://" + n), l + '<a href="' + n + '" target="_blank">' + t + "</a>"
					})
				}
				formatpost(e) {
					return (e || "").replace(/\n/g, "<br>")
				}
				getFeeds(e) {
					return this.http.post(this.api + "/activity/getPublicfeeds", e)
				}
				getFeatureCourse(e) {
					return this.http.post(this.api + "/student/listproducts", e)
				}
				getBoughtList(e) {
					return this.http.post(this.api + "/products/boughtlist", e, this.loginService.options(null)).pipe(Object(o.a)(this.loginService.handleError.bind(this)))
				}
				getFeatureData(e) {
					return this.http.post(this.api + "/student/listproductscount", e)
				}
				getFeatureDataWithJWT(e) {
					return this.http.post(this.api + "/student/v2/listproductscount", e, this.loginService.options(null))
				}
				getRecentHashtags(e) {
					return this.http.post(this.api + "/student/getrecenthashtags", e)
				}
				addactivity(e) {
					return this.http.post(this.api + "/activity/addactivity", e, this.loginService.options(null))
				}
				addReaction(e) {
					return this.http.post(this.api + "/activity/addReaction", e, this.loginService.options(null))
				}
				shareactivity(e) {
					return this.http.post(this.api + "/activity/shareactivity", e, this.loginService.options(null))
				}
				removereaction(e) {
					return this.http.post(this.api + "/activity/removereaction", e, this.loginService.options(null))
				}
				removeactivity(e) {
					return this.http.post(this.api + "/activity/removeactivity", e, this.loginService.options(null))
				}
			}
			u.ngInjectableDef = s.R({
				factory: function() {
					return new u(s.V(r.c), s.V(a.a))
				},
				token: u,
				providedIn: "root"
			})
		},
		zUnb: function(e, l, t) {
			"use strict";
			t.r(l);
			var n = t("8Y7J"),
				i = t("AytR"),
				o = t("cUpR"),
				a = t("IheW"),
				s = t("omvX"),
				r = t("3pDu"),
				u = t("EFyh");
			class c {
				constructor(e, l) {
					this.loginservice = e, this.router = l
				}
				canActivate(e, l) {
					return this.loginservice.networkStatus().subscribe(e => !0, e => (this.router.navigateByUrl("/no-network"), !1)), !0
				}
			}
			var d = t("EPgW"),
				p = t("4WDQ");
			class h {
				constructor(e, l, t, n) {
					this.globalService = e, this.testService = l, this.loginservice = t, this.router = n
				}
				canActivate(e, l) {
					let t = this.loginservice.loginStatus();
					if (t) {
						if (localStorage.getItem("noRedirect")) return !1;
						const e = JSON.parse(localStorage.getItem("school_details")),
							n = localStorage.getItem("redirect");
						if (n && !e.schools_metadata.enableTwoFactorAuthentication && !l.url.includes("dashboard") || n && e.schools_metadata.enableTwoFactorAuthentication && this.globalService.verifiedOtp && !l.url.includes("dashboard")) return this.router.navigateByUrl("/dashboard"), !1;
						if (this.loginservice.schoolId || this.loginservice.branchId || this.loginservice.instituteType || (t = JSON.parse(t), t && t.school_branch_department_users && t.school_branch_department_users.length && (this.loginservice.schoolId = t.school_branch_department_users[0].school_id, this.loginservice.branchId = t.school_branch_department_users.map(e => e.branch_id), this.loginservice.instituteType = t.institute_type)), !this.schoolMetaData) {
							const e = JSON.parse(localStorage.getItem("school_details"));
							this.schoolMetaData = e && e.schools_metadata ? e.schools_metadata : void 0
						}
						return !this.schoolMetaData || !(l.url.includes("type=mycourses") && !this.schoolMetaData.allow_courses || l.url.includes("type=myprojects") && !this.schoolMetaData.allow_course_projects || l.url.includes("type=myquizzes") && !this.schoolMetaData.allow_quizzes || l.url.includes("type=myexams") && !this.schoolMetaData.allow_exams || l.url.includes("type=mypractices") && !this.schoolMetaData.allow_practices || l.url.includes("type=mylearningpaths") && !this.schoolMetaData.allow_learning_paths || l.url.includes("type=myhackathons") && !this.schoolMetaData.allow_hackathons || l.url.includes("type=myassessments") && !this.schoolMetaData.allow_assessments || l.url.includes("type=mylabs") && !this.schoolMetaData.allow_lab_courses || l.url.includes("type=mychallenges") && !this.schoolMetaData.allow_challenges || l.url.includes("type=mytests") && !this.schoolMetaData.allow_company_specific_tests || l.url.includes("type=mytests2") && !this.schoolMetaData.allow_company_specific_tests || l.url.includes("drive") && !this.schoolMetaData.allow_drives || l.url.includes("contest") && !this.schoolMetaData.allow_contest || l.url.includes("feeds") && !this.schoolMetaData.allow_feeds || l.url.includes("dashboard") && !this.schoolMetaData.allow_dashboard || l.url.includes("leaderboard") && !this.schoolMetaData.allow_leaderboard || l.url.includes("attendancesettings") && !this.schoolMetaData.allow_attendance || l.url.includes("chat") && !this.schoolMetaData.allow_engagement || l.url.includes("certificates") && !this.schoolMetaData.allow_certificates || l.url.includes("profile") && this.schoolMetaData.disableProfile) || (this.router.navigateByUrl(this.globalService.defaultRedirection()), !1)
					}
					return this.testService.removeCopyPasteHandler(), this.router.navigateByUrl("/login"), !1
				}
			}
			class g {
				constructor(e, l) {
					this.globalService = e, this.router = l
				}
				canActivate(e, l) {
					if (!this.schoolMetaData) {
						const e = JSON.parse(localStorage.getItem("school_details"));
						this.schoolMetaData = e && e.schools_metadata ? e.schools_metadata : void 0
					}
					if (!this.enableFeatures) {
						const e = JSON.parse(localStorage.getItem("school_details"));
						this.enableFeatures = e && e.enable_features ? e.enable_features : void 0
					}
					return this.schoolMetaData && this.enableFeatures ? !(l.url.includes("course") && !this.schoolMetaData.allow_public_buying || l.url.includes("home") && !this.schoolMetaData.allow_public_feeds) || (this.router.navigate([this.globalService.publicNavigation(this.schoolMetaData, this.enableFeatures)]), !1) : (localStorage.setItem("path", l.url), !1)
				}
			}
			var b = t("Gl8U");
			class m {
				constructor(e, l, t, n) {
					this.loginservice = e, this.router = l, this.serv = t, this.globalService = n
				}
				canActivate(e, l) {
					if (!this.schoolMetaData) {
						const e = JSON.parse(localStorage.getItem("school_details"));
						this.schoolMetaData = e && e.schools_metadata ? e.schools_metadata : void 0
					}
					if (this.schoolMetaData && this.schoolMetaData.disableProfile) return new Promise(e => {
						localStorage.removeItem("noRedirect"), this.serv.noRedirect.next({
							status: !1
						});
						const l = this.globalService.defaultRedirection();
						this.router.navigateByUrl(l), e(!1)
					});
					if (this.serv.isRedirected) return this.serv.isRedirected = !1, new Promise(e => {
						e(!0)
					}); {
						let e = JSON.parse(localStorage.getItem("token"));
						return new Promise(l => {
							this.loginservice.userPermissionList(e).subscribe(t => {
								localStorage.setItem("branches", JSON.stringify(t.branches)), this.serv.getGenericMandatoryFields(e).subscribe(t => {
									let n = t;
									localStorage.setItem("formData", JSON.stringify(n));
									const i = JSON.stringify(n.student_ppa_profiles[0]);
									localStorage.setItem("ppaData", i), this.serv.getAllCustomFields(e, e.school_branch_department_users, JSON.parse(localStorage.getItem("school_details")).school_id).subscribe(i => {
										let o = [];
										for (let e = 0; e < i.length; e++) i[e].studentCustomFields.student_custom_fields.fields && i[e].studentCustomFields.student_custom_fields.fields.length > 0 && o.push(i[e].studentCustomFields.student_custom_fields.fields);
										this.serv.checkRedirect(t, o, e.school_branch_department_users, n, e).subscribe(e => {
											"personal" === e ? (this.serv.routeType = "personal-info", i = !0, l(!0)) : "acad" === e ? (this.serv.routeType = "academic-info", i = !0, l(!0)) : "custom" === e ? (this.serv.routeType = "additional-info", i = !0, l(!0)) : (this.router.navigateByUrl("/cart"), i = !0, l(!1))
										})
									})
								})
							})
						})
					}
				}
			}
			var f = t("GDbA"),
				v = t("bOdf");
			class _ {
				constructor(e, l, t) {
					this.active = e, this.teamsService = l, this.router = t
				}
				ngOnInit() {
					this.active.queryParamMap.pipe(Object(v.a)(e => this.teamsService.getGitAcessToken(e.get("code")))).subscribe(e => {
						window.close()
					})
				}
			}
			class y {
				constructor(e) {
					this.activedRouter = e
				}
				ngOnInit() {
					this.activedRouter.queryParams.subscribe(e => {
						let l = e.id.split("_");
						window.location.href = `${l[0]}/mycourses/details?id=${l[1]}&code=${e.code}`
					})
				}
			}
			class C {}
			class x {}
			var w = t("/GGi");
			const k = [o.a, C, a.d, x, s.b, w.a];
			navigator.userAgent.includes("SEB") || k.push(r.a.register("ngsw-worker.js", {
				enabled: !0
			}));
			class S {}
			var O = t("mrSG"),
				P = t("iInd");
			class M {
				constructor(e, l, t) {
					let n;
					this.globalService = e, this.router = l, this.loginService = t;
					const o = localStorage.getItem("school_details");
					n = i.a.production ? "https://images.examly.io/icons2/examly.css" : "https://images.examly.net/icons2/examly.css", this.globalService.loadScript("link", n, "text/css", "", "customIcons"), o && "randstadindia288" === JSON.parse(o).school_code && (n = "https://images.examly.io/randstadindia288/randstadStudentCustom.css", this.globalService.loadScript("link", n, "text/css", "", "customCss"))
				}
				ngOnInit() {
					return O.__awaiter(this, void 0, void 0, (function*() {
						if ("/loginredirect" === window.location.pathname && localStorage.setItem("ssologin", "true"), "/loginredirect" === window.location.pathname && window.location.href.includes("jobId") && window.location.href.includes("stageId")) {
							let e = window.location.href.split("jobId=")[1];
							localStorage.setItem("jobId", e.slice(0, 10)), localStorage.setItem("stageId", window.location.href.split("stageId=")[1])
						}
						if ("/loginredirect" === window.location.pathname && window.location.href.includes("userId") && window.location.href.includes("eventId") && window.location.href.includes("stageId")) {
							let e = window.location.href.split("eventId=")[1];
							localStorage.setItem("eventId", e.slice(0, 10)), localStorage.setItem("stageId", window.location.href.split("stageId=")[1]), localStorage.setItem("hireIDE", "true")
						}
						const e = "undefined" != typeof InstallTrigger,
							l = -1 === navigator.userAgent.indexOf("Edg"),
							t = !window.opr,
							n = window.chrome || navigator.userAgent.indexOf("CriOS") > 0,
							i = navigator.userAgent.indexOf("Safari") > 0;
						let o = !0;
						if (window.parent.postMessage(JSON.stringify({
								subject: "lti.frameResize",
								height: 650
							}), "*"), !n && i && (o = !1), o && t && (e || n || !l)) {
							this.isBrowserSupported = !0, localStorage.removeItem("path"), this.router.events.subscribe(e => {
								e instanceof P.e && this.globalService.inIframe() && localStorage.getItem("einit") && !["/project", "/test", "/result", "/login", "/loginredirect"].includes(location.pathname) && this.globalService.clearLocalStorage()
							});
							const e = localStorage.getItem("einit"),
								l = localStorage.getItem("formData");
							if (l) {
								const e = JSON.parse(l).users_domain_id;
								this.loginService.checkIfStudentExist({
									uid: e
								}).subscribe(e => {
									null !== e.deletedAt && localStorage.clear()
								})
							}!e || this.globalService.inIframe() || ["/test"].includes(location.pathname) || (this.globalService.commonGrowl.next({
								time: 3e4,
								severity: "warning",
								summary: "Direct login access has been disabled."
							}), this.globalService.sleep(1e3).then(() => {
								this.globalService.clearLocalStorage()
							}), this.globalService.sleep(1e3).then(() => {
								this.router.navigateByUrl("login")
							})), yield this.redirection(), this.globalService.showTop.subscribe(e => {
								this.showTop !== e && (this.showTop = e)
							}), this.globalService.commonGrowl.subscribe(e => {
								const l = Object.keys(e).length;
								e && l && (this.growlData = e)
							}), this.globalService.addGoogleAnalytics()
						}
					}))
				}
				redirection() {
					return new Promise((e, l) => {
						this.loginService.getSchoolLoginDetails().subscribe(l => O.__awaiter(this, void 0, void 0, (function*() {
							if (l && l.data)
								if (localStorage.removeItem("redirect"), yield this.loginService.setLocalstorage(l), this.setLocalStorage = !0, l.data.school_logo && this.globalService.schoolLogo.next(l.data.school_logo), l.data.school_name && this.globalService.schoolName.next(l.data.school_name), l.data.schools_metadata) {
									const e = l.data.schools_metadata,
										t = l.data.enable_features;
									if (e && e.allowsignup && this.globalService.isSignup.next(!0), this.globalService.updateLoginURLS(e, t), this.globalService.publicNavigation(e, t), this.globalService.resetToken(), this.loginService.loginStatus()) localStorage.getItem("noRedirect") && "/ide" != window.location.pathname ? this.router.navigateByUrl("create-profile") : "/" === location.pathname && this.router.navigateByUrl(this.globalService.defaultRedirection());
									else if (localStorage.getItem("path")) this.router.navigateByUrl(localStorage.getItem("path"));
									else if ("/" === location.pathname) {
										const l = this.globalService.publicNavigation(e, t);
										this.router.navigateByUrl(l)
									}
								} else this.router.navigateByUrl("/login");
							e(!0)
						})), () => {
							e(!1)
						})
					})
				}
				closeDropDown(e) {
					const l = [];
					e && e.path && e.path.length && e.path.forEach((e, t) => {
						l.push(e.localName)
					}), l.includes("app-select-dropdown") || this.globalService.toggleVisibility()
				}
			}
			var I = t("pMnS"),
				D = n.nb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function N(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Redirecting..."]))], null, null)
			}

			function z(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "app-github-redirect", [], null, null, null, N, D)), n.ob(1, 114688, null, 0, _, [P.a, f.a, P.m], null, null)], (function(e, l) {
					e(l, 1, 0)
				}), null)
			}
			var E = n.lb("app-github-redirect", _, z, {}, {}, []),
				T = n.nb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function A(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Redirecting..."]))], null, null)
			}

			function L(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "app-github-redirect-handler", [], null, null, null, A, T)), n.ob(1, 114688, null, 0, y, [P.a], null, null)], (function(e, l) {
					e(l, 1, 0)
				}), null)
			}
			var J = n.lb("app-github-redirect-handler", y, L, {}, {}, []),
				F = t("SVse"),
				j = t("7lOW"),
				R = t("HMdK"),
				H = t("1YvG"),
				B = t("GQrn"),
				V = t("jyHg"),
				q = t("3m+6"),
				K = t("c14U"),
				U = t("Pj5t"),
				G = t("/uwM"),
				W = t("5U9e"),
				$ = t("2tQG");
			class Q {
				constructor(e, l, t, i) {
					this.socketService = e, this.globalService = l, this.publishtypesService = t, this.router = i, this.data = "", this.dataChange = new n.m, this.userConnected = !1, this.viewDialog = !1, this.display_msg = "", this.redirectURL = [], this.origin = "", this.liveSessionID = "", this.moduleID = "", this.callState = 0, this.dialogStyle = {
						width: "30%",
						top: "5%",
						"border-radius": "10px"
					}, this.headerStyle = {
						display: "none"
					}
				}
				socketHandler() {
					this.socketService.messageRecieved.subscribe(e => {
						if (e && e.action) switch (e.action) {
							case "live-calssroom-reminder":
								this.showDailog(e.data)
						}
					})
				}
				showDailog(e) {
					if (e && !e.isEnded) {
						let l = window.location.href,
							t = `${l.split("/")[0]}//${l.split("/")[2]}`,
							n = this.publishtypesService.getPublishTypeDetailsByType(e.course_type || "Course").params;
						this.display_msg = e.display_msg, this.redirectURL = {
							origin: t,
							c_id: e.c_id,
							Type: n
						}, this.liveSessionID = e.ls_id, this.moduleID = e.moduleID, this.viewDialog = !0, this.callState = e.state
					}
				}
				connectToSocket() {
					this.userConnected || (this.userData = JSON.parse(localStorage.getItem("token")), this.userData.school_id && this.userData.user_id && (this.socketService.connect(this.userData.school_id, this.userData.user_id), this.socketHandler(), this.userConnected = !0, setTimeout(() => {
						this.globalService.checkMyMeetingReminder().subscribe(e => {})
					}, 3e3)))
				}
				ngOnChanges(e) {
					for (let l in e) "data" !== l || this.userConnected || this.connectToSocket()
				}
				closeDailog() {
					this.viewDialog = !1, this.display_msg = "", this.redirectURL = ""
				}
				navigateDailog() {
					this.viewDialog = !1, window.location.href = `${this.redirectURL.origin}/mycourses/details?id=${this.redirectURL.c_id}&type=${this.redirectURL.Type}\n                    &Ls_id=${this.liveSessionID}&popUp=true`
				}
			}
			var Y = n.nb({
				encapsulation: 0,
				styles: [
					[".close-button[_ngcontent-%COMP%]{padding:10px;width:35%;color:#fff;font-size:12px;font-weight:700;background:var(--sixty);border:var(--sixty);margin-right:9%;cursor:pointer;margin-left:3%}.navigate-btn[_ngcontent-%COMP%]{padding:7px;width:35%;color:#fff;font-size:12px;font-weight:700;background:var(--one);border:var(--one);cursor:pointer;margin-left:105%;margin-bottom:5%}.display-txt[_ngcontent-%COMP%]{margin:0 3%}.button-div[_ngcontent-%COMP%]{margin:3% auto auto;width:50%}.popupdiv[_ngcontent-%COMP%]{z-index:1000;position:fixed;right:0;top:3%;margin:0 1% 0 auto;width:34%;background-color:var(--three);box-shadow:0 7px 8px -4px rgb(0 0 0 / 20%),0 13px 19px 2px rgb(0 0 0 / 14%),0 5px 24px 4px rgb(0 0 0 / 12%);height:auto;border-radius:12px}.crossMark[_ngcontent-%COMP%]:after{content:'\\292C';font-size:24px;margin-left:93%;margin-top:0;color:#0c0c0c}"]
				],
				data: {}
			});

			function Z(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "button-div"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 2, "span", [], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "button", [
					["class", "navigate-btn"],
					["title", "navigate"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navigateDailog() && n), n
				}), null, null)), (e()(), n.Hb(-1, null, ["Join"]))], null, null)
			}

			function X(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "popupdiv"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 0, "div", [
					["class", "crossMark"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.closeDailog() && n), n
				}), null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [
					["class", "display-txt"],
					["style", "margin-bottom: 3%;"]
				], null, null, null, null, null)), (e()(), n.Hb(3, null, ["", ""])), (e()(), n.gb(16777216, null, null, 1, null, Z)), n.ob(5, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					e(l, 5, 0, 2 == l.component.callState)
				}), (function(e, l) {
					e(l, 3, 0, l.component.display_msg)
				}))
			}

			function ee(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, X)), n.ob(2, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					e(l, 2, 0, l.component.viewDialog)
				}), null)
			}
			var le = t("s7LF"),
				te = t("sjK5"),
				ne = t("tLnd");
			class ie {
				constructor(e, l, t, n, i, o, a, s, r, u, c) {
					this.router = e, this.globalService = l, this.testService = t, this.loginservice = n, this.cartservice = i, this.renderer = o, this.serv = a, this.chatService = s, this.publishtypesService = r, this.route = u, this.driveService = c, this.userData = JSON.parse(localStorage.getItem("token")), this.btnlogin = {
						multipleBtn: !1,
						btnName: "Login",
						type: "header",
						background: "var(--thirtyfour)",
						border: "1px solid var(--white)"
					}, this.btnsign = {
						multipleBtn: !1,
						btnName: "Sign  Up",
						id: "header"
					}, this.activetab = "home", this.cartTotalItems = 0, this.searchData = "", this.showSearch = !1, this.showNav = !1, this.ulogout = !1, this.currentNav = "", this.publicCourse = !1, this.publicFeeds = !1, this.feedsMain = !1, this.pcourse = !1, this.dialogVisible = !1, this.pushDialog = {}, this.sclMD = {}, this.dyn = {}, this.isLog = this.isLogged(), this.isLog && "serviceWorker" in navigator && navigator.serviceWorker.register("/firebase-messaging-sw.js"), this.userData = JSON.parse(localStorage.getItem("token")), this.allowNotification(), document.addEventListener("click", this.onClick.bind(this)), this.renderer.listen("window", "click", e => {
						this.logoutToggle && this.logoutToggle.nativeElement.contains(e.target) || this.logoutChild && this.logoutChild.nativeElement.contains(e.target) || (this.ulogout = !1)
					}), this.schoolLogo = "./assets/favicons/192.png", this.setCurrNav(window.location.pathname), this.router.events.subscribe(e => {
						e instanceof P.d && (this.globalService.previousUrl = e.urlAfterRedirects, this.globalService.pathConfigGA(), this.setCurrNav(window.location.pathname))
					}), this.serv.noRedirect.subscribe(e => {
						this.noRedirect = !!(localStorage.getItem("noRedirect") || localStorage.getItem("redirect") || e && e.status)
					}), localStorage.getItem("token") && (localStorage.removeItem("cart"), this.cartTotalItems = 0, this.cartservice.getUserCartList(this.userData), this.materialDailogData = "Refersh"), this.publishTypes = this.publishtypesService.getAllPublishTypeDetails()
				}
				get queryParameter() {
					let e;
					return this.route.queryParams.subscribe(l => e = l.type), e
				}
				onClick(e) {
					const l = document.querySelector(".tophamStartArea");
					l && !l.contains(e.target) && document.getElementsByTagName("html")[0].offsetWidth > 480 && (this.showNav = !1)
				}
				getScreenSize(e) {
					this.screenWidth = window.innerWidth, this.screenWidth > 480 ? (this.mobile = !1, this.ngStyleClass = {
						width: "50%"
					}) : (this.mobile = !0, this.ngStyleClass = {
						width: "90%"
					}), this.desktop = this.screenWidth > 768
				}
				ngOnInit() {
					return O.__awaiter(this, void 0, void 0, (function*() {
						this.screenWidth = window.innerWidth, this.screenWidth > 480 ? (this.mobile = !1, this.ngStyleClass = {
							width: "50%"
						}) : (this.mobile = !0, this.ngStyleClass = {
							width: "90%"
						}), this.desktop = this.screenWidth > 768, this.localSchoolData = JSON.parse(localStorage.getItem("school_details")), this.localSchoolData && this.localSchoolData.schools_metadata && (this.sclMD = this.localSchoolData.schools_metadata), this.globalService.getSpecificSchoolId().includes(this.localSchoolData.school_id) && (this.specificSchoolId = !0), this.globalService.isSignup.subscribe(e => {
							this.isSignUp = e
						}), this.globalService.activetab.subscribe(e => {
							e && (this.activetab = e)
						}), this.globalService.cartTotalItems.subscribe(e => {
							this.cartTotalItems = e
						}), this.globalService.logoutTrigger.subscribe(e => {
							this.cartTotalItems = 0
						}), this.globalService.search.subscribe(e => {
							e.path && e.path === window.location.pathname ? this.searchData = e && e.value ? e.value : "" : (this.searchData = null, this.path = e.path)
						}), (this.path && this.path !== window.location.pathname || !this.path) && (this.searchData = null), this.globalService.ispublicCourse.subscribe(e => {
							this.pcourse = e
						});
						const e = JSON.parse(localStorage.getItem("cart"));
						e && (this.cartTotalItems = e.length), "/" === window.location.pathname ? this.activetab = "home" : "/course" === window.location.pathname && (this.activetab = "course"), this.isLog && (window.location.pathname.includes("mycourses") ? this.currentNav = this.queryParameter || "mycourses" : window.location.pathname.includes("course") ? this.currentNav = "buy" : window.location.pathname.includes("feeds") ? this.currentNav = "feeds" : window.location.pathname.includes("accountsettings") && (this.currentNav = "accountSettings"), this.sclMD && this.sclMD.allow_engagement && this.userData.enable_features && this.userData.enable_features.allow_engagement && (this.chatService.setUserData(), yield this.chatService.getPubNub().then(e => {
							!window.location.pathname.includes("chat") && e && this.chatService.getSubscriptionList()
						}))), this.attachDisplayCapture()
					}))
				}
				attachDisplayCapture() {
					let e = document.getElementById("myiframe");
					null != e && (e.allow.includes("display-capture") || (e.allow = e.allow + "; display-capture", e.src = e.src.replace(/\/$/, "")))
				}
				checckSearch() {
					return "/course" === window.location.pathname
				}
				isLogged() {
					const e = JSON.parse(this.loginservice.loginStatus()),
						l = JSON.parse(localStorage.getItem("basicFiels"));
					let t = !1;
					return l && l.length && l.forEach(e => {
						e && "Profile Picture" === e.label && (t = !!e.hide)
					}), !!e && (this.uname = e.name ? e.name.split("$")[0] : "", this.uname || (this.uname = e.email), e.profile_pic && t && (this.uImage = this.globalService.changeS3bucket(e.profile_pic, this.globalService.assets_bucket)), this.uImage || (this.uImage = i.a.s3Objectstudentassets + "assets/common-images/profile-default.jpg"), !0)
				}
				navTab(e) {
					this.activetab = e, "course" === e ? this.router.navigateByUrl("/course") : "home" === e && this.router.navigateByUrl("/home")
				}
				setCurrNav(e) {
					e.includes("mycourses") ? this.currentNav = this.queryParameter : e.includes("dashboard") ? this.currentNav = "dashboard" : e.includes("feeds") ? this.currentNav = "feeds" : e.includes("course") && !this.publishType ? this.currentNav = "buy" : e.includes("home") ? this.currentNav = "home" : e.includes("contest") ? this.currentNav = "contest" : e.includes("drives") ? this.currentNav = "drives" : e.includes("/profile") ? this.currentNav = "profile" : e.includes("attendancesettings") ? this.currentNav = "attendanceSettings" : e.includes("neoPAT") && (this.currentNav = "neoPAT")
				}
				checkPath() {
					this.routerpath = window.location.pathname
				}
				navHam(e, l = "mycourses") {
					if (!this.noRedirect)
						if (this.showNav = !1, this.publishType = null, this.globalService.search.next({
								path: "/" + e,
								value: ""
							}), "mycourse" === e) this.currentNav = l, this.router.navigateByUrl("/mycourses?type=" + l);
						else if ("dashboard" === e) this.currentNav = "dashboard", this.router.navigateByUrl("/dashboard");
					else if ("feeds" === e) this.currentNav = "feeds", this.router.navigateByUrl("/feeds");
					else if ("buy" === e) this.currentNav = "buy", this.router.navigateByUrl("/course");
					else if ("login" === e) this.router.navigateByUrl("/login");
					else if ("signup" === e) this.router.navigateByUrl("/signup");
					else if ("home" === e) this.currentNav = "home", this.router.navigateByUrl("/home");
					else if ("course" === e) this.currentNav = "course", this.router.navigateByUrl("/course");
					else if ("contest" === e) this.currentNav = "contest", this.router.navigateByUrl("/mycontest");
					else if ("drives" === e) this.currentNav = "drives", this.router.navigateByUrl("/drives");
					else if ("profile" === e) this.currentNav = "profile", this.router.navigateByUrl("/profile");
					else if ("accountSettings" === e) "accountSettings" !== this.currentNav && (this.dialogHeader = "Enter Current Password", this.dialogContentData = "accountSettings", this.dialogVisible = !0, this.dialogheaderStyle = {
						background: "var(--seven)",
						color: "var(--three)"
					}, this.setDialog());
					else if ("attendanceSettings" === e) this.currentNav = "attendanceSettings", this.router.navigateByUrl("/attendancesettings");
					else if ("leaderboard" === e) this.userData.enable_features && this.userData.enable_features.allow_leaderboard && (this.currentNav = "leaderboard", this.router.navigateByUrl("/leaderboard"));
					else if ("chat" === e) this.currentNav = "chat", this.router.navigateByUrl("/chat");
					else if ("examsandresults" === e) this.currentNav = "examsandresults", this.router.navigateByUrl("/examsandresults");
					else if ("certificates" === e) this.currentNav = "certificates", this.router.navigateByUrl("/certificates");
					else if ("openide" === e) {
						let e = "";
						try {
							e = "https://" + window.location.hostname.split("/")[0]
						} catch (t) {
							e = ""
						}
						e && window.open(e + "/ide", "_blank")
					} else "neoPAT" === e && (this.currentNav = "neoPAT", this.neoPATRedirection())
				}
				setDialog() {
					"accountSettings" === this.dialogContentData && (this.dyn.formSubmit = this.submitDialog.bind(this), this.dyn.form = [], this.dyn.form = [{
						type: "password",
						name: "password",
						label: "Password",
						value: "",
						required: !0,
						minLength: null,
						regex: null,
						icon: {
							required: !0,
							icon: "icon-ios-locked",
							action: "showpassword"
						},
						customError: {
							error: !1,
							message: ""
						}
					}], this.dyn.button = [{
						multipleBtn: !1,
						btnName: "Confirm",
						type: "clgn",
						fontSize: "18px",
						background: "var(--one)",
						loading: !1
					}], this.dyn.btnStyle = {
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
						width: "100%"
					}, this.dyn.btnContStyle = {
						margin: "0px 10px 12px 10px"
					})
				}
				submitDialog(e) {
					if ("accountSettings" === this.dialogContentData)
						if (e.value && e.value.value && e.value.value.password) {
							const l = JSON.parse(localStorage.getItem("token")),
								t = JSON.parse(localStorage.getItem("school_details")),
								n = {
									email: l.email,
									password: e.value.value.password,
									school_code: t.school_code,
									googleToken: ""
								};
							this.dyn.button[0].loading = !0, this.globalService.getCaptchaToken("accountSettings").then(e => {
								n.googleToken = e, n.OS = this.loginservice.findOS(), this.loginservice.usersLogin(n).subscribe(e => {
									this.dyn.button[0].loading = !1, e && e.token ? (this.dialogHeader = void 0, this.dialogContentData = void 0, this.dialogVisible = !1, this.dialogheaderStyle = void 0, this.loginservice.Passvariable.next(n.password), this.currentNav = "accountSettings", this.router.navigateByUrl("/accountsettings")) : this.globalService.commonGrowl.next("Incorrect password" === e.message ? {
										severity: "error",
										summary: "Incorrect Password",
										detail: "Please enter valid password"
									} : {
										severity: "error",
										summary: "something went wrong",
										detail: "Please try after sometime"
									})
								})
							})
						} else this.globalService.commonGrowl.next({
							severity: "error",
							summary: "Enter Current password",
							detail: "Validation Failed"
						});
					else "push" === this.dialogContentData && this.openNotificationPermission()
				}
				dialogClose(e) {
					this.dialogVisible = !1, this.dialogHeader = void 0, this.dialogContentData = void 0
				}
				gotocart() {
					this.router.navigateByUrl("/cart")
				}
				setSearch(e) {
					this.searchData = e.target.value, "" === e.target.value && this.globalService.search.next({
						path: window.location.pathname,
						value: e.target.value
					})
				}
				searchInvalid() {
					this.globalService.search.subscribe(e => {
						e.path !== window.location.pathname && (this.searchData = null)
					})
				}
				sendData() {
					setTimeout(() => {
						this.globalService.search.next({
							path: window.location.pathname,
							value: this.searchData
						})
					}, 100)
				}
				logout() {
					this.loginservice.userDetails = null, this.globalService.verifiedOtp = !1;
					let e = {};
					this.userData && this.userData.user_id && (e.user_id = this.userData.user_id, e.school_id = this.userData.school_id, e.user_role = "student", e.email = this.userData.email), this.loginservice.logout(e).subscribe(e => {
						if (this.globalService.clearLocalStorage(), this.serv.noRedirect.next({
								status: !1
							}), this.testService.removeCopyPasteHandler(), this.sclMD && this.sclMD.redirection_url) {
							this.redirection_url = this.sclMD.redirection_url.includes("http://") || this.sclMD.redirection_url.includes("https://") ? this.sclMD.redirection_url : "http://" + this.sclMD.redirection_url;
							const e = document.createElement("a");
							document.body.appendChild(e), e.href = this.redirection_url, e.click(), document.body.removeChild(e)
						} else {
							const e = this.globalService.publicNavigation(this.sclMD, this.userData.enable_features);
							this.router.navigateByUrl(e)
						}
					})
				}
				ngOnDestroy() {
					document.removeEventListener("keydown", this.onClick)
				}
				onPushClick() {
					this.dialogVisible = !0, this.dialogContentData = "push", this.dialogHeader = "Confirmation", this.pushDialog.pushText = window.location.hostname.split("/")[0] + " wants to start sending you push notifications. Click Allow to subscribe", this.pushDialog.btn1 = {
						btnName: "I'll do this later",
						background: "var(--three)",
						fontColor: "var(--seven)",
						border: "1px solid var(--seven)"
					}, this.pushDialog.btn2 = {
						btnName: "Allow",
						background: "var(--one)",
						padding: "10px 20px"
					}, this.dialogheaderStyle = {
						"border-bottom": "2px solid var(--ten)"
					}
				}
				openNotificationPermission() {
					return O.__awaiter(this, void 0, void 0, (function*() {
						let e = JSON.parse(localStorage.getItem("token"));
						const l = yield this.testService.getFirebase(), t = l.messaging.isSupported() ? l.messaging() : null;
						this.dialogClose(null), this.localSchoolData.push_enabled && ("denied" === Notification.permission ? (this.dialogVisible = !0, this.dialogContentData = "pushBlocked", this.dialogHeader = "Instruction") : t.requestPermission().then(() => {
							t.getToken().then(l => {
								l ? this.globalService.sendPushToken({
									school_id: e.school_id,
									user_id: e.user_id,
									token: l
								}).subscribe(l => {
									l.success && (e.push_token = l.tokens, localStorage.setItem("token", JSON.stringify(e)))
								}) : console.log("No Instance ID token available. Request permission to generate one.")
							}).catch((function(e) {
								console.log("An error occurred while retrieving token. ", e)
							}))
						}).catch((function(e) {
							console.log("Unable to get permission to notify.", e)
						})))
					}))
				}
				neoPATRedirection() {
					this.loader = !0;
					const e = {
						user_id: this.userData.user_id,
						school_id: this.userData.school_id,
						school_code: this.localSchoolData.school_code,
						email: this.userData.email
					};
					this.globalService.getCaptchaToken("qrcodefileupload").then(l => O.__awaiter(this, void 0, void 0, (function*() {
						const t = yield this.testService.getCryptoJS(), n = {
							a: l,
							b: t.AES.encrypt(JSON.stringify(e), "up4dywqpkBd7ykuw?kr*Ru>*+B5!s@&kKUZVTu").toString()
						};
						this.globalService.neoPATRedirection(n).subscribe(e => {
							if (e && e.success) try {
								const l = t.AES.decrypt(e.data, "VAN@?Ydm<E*FrBv^9t~B*2r>+zY9eTGZ8uN$xSw2"),
									n = JSON.parse(l.toString(t.enc.Utf8));
								if (n && n.tokenid) {
									this.loader = !1, this.setCurrNav(window.location.pathname);
									const e = document.createElement("a");
									document.body.appendChild(e), e.href = `https://neopat.examly.io/loginredirect?email=${this.userData.email}&tokenid=${n.tokenid}`, e.target = "_blank", e.click(), document.body.removeChild(e), this.setCurrNav(window.location.pathname)
								} else this.normalNeoPATRedirect()
							} catch (l) {
								this.normalNeoPATRedirect()
							} else this.normalNeoPATRedirect()
						}, e => {
							this.normalNeoPATRedirect()
						})
					})))
				}
				normalNeoPATRedirect() {
					this.loader = !1, this.setCurrNav(window.location.pathname), this.globalService.commonGrowl.next({
						severity: "error",
						summary: "Attention!",
						detail: "You are not enrolled.."
					})
				}
				allowNotification() {
					return O.__awaiter(this, void 0, void 0, (function*() {
						const e = yield this.testService.getFirebase(), l = e.messaging.isSupported() ? e.messaging() : null;
						this.userData && (null === this.userData.push_token || !this.userData.push_token.length) && null !== l && this.localSchoolData && this.localSchoolData.push_enabled && (this.onPushClick(), this.userData.push_token = "Do it later.", localStorage.setItem("token", JSON.stringify(this.userData)))
					}))
				}
			}
			var oe = n.nb({
				encapsulation: 0,
				styles: [
					[".topnavbar[_ngcontent-%COMP%]{height:60px;background-color:var(--thirtyfour);justify-content:space-between;position:relative}.loglay[_ngcontent-%COMP%]{display:flex;justify-content:center}.disHam[_ngcontent-%COMP%]{display:none}.sclName[_ngcontent-%COMP%]{display:flex;align-self:center;padding-left:20px;font-weight:500;font-size:20px;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hamburgerArea[_ngcontent-%COMP%], .umarg[_ngcontent-%COMP%]{margin:0 5px}.mar10px[_ngcontent-%COMP%]{margin-right:10px}.fldir[_ngcontent-%COMP%]{flex-direction:column}.hambur[_ngcontent-%COMP%]{font-size:25px;color:var(--three);display:flex;margin-top:5px;padding-left:5px}.cp[_ngcontent-%COMP%], .hambur[_ngcontent-%COMP%]{cursor:pointer}.bold[_ngcontent-%COMP%]{font-weight:700}.navArea[_ngcontent-%COMP%]{position:absolute;left:0;top:100%;z-index:5;background:var(--three);box-shadow:0 3px 6px 0 rgba(0,0,0,.16);color:var(--fourtyone);font-size:18px;width:250px;max-height:500px;overflow-y:auto}.padleft10[_ngcontent-%COMP%]{padding-left:10px}.martop[_ngcontent-%COMP%]{margin:0}.navmarg[_ngcontent-%COMP%]{padding:10px 15px;margin:2px 0}.navmarg[_ngcontent-%COMP%]:hover, .ulogPad[_ngcontent-%COMP%]:hover{cursor:pointer;background:var(--nine);color:var(--three)}.selectedNav[_ngcontent-%COMP%]{color:var(--three)!important;background:var(--nine)!important}.sclLogo[_ngcontent-%COMP%]{background:var(--three);height:60px;width:60px;justify-content:center;margin-left:10px}.slogo[_ngcontent-%COMP%]{height:100%;width:100%;align-self:center}.slogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.hometab[_ngcontent-%COMP%]{margin-left:15px}.coursetab[_ngcontent-%COMP%], .hometab[_ngcontent-%COMP%]{color:var(--three);padding:0 10px;margin-right:17px;cursor:pointer}.mrgLeft[_ngcontent-%COMP%]{margin-left:10px}.alcenter[_ngcontent-%COMP%]{align-self:center}.activeTab[_ngcontent-%COMP%]{font-weight:500;border-bottom:5px solid var(--three);line-height:51px}.activeTab[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-top:5px}.toplog[_ngcontent-%COMP%], .topsign[_ngcontent-%COMP%]{width:90px;height:36px;margin-right:5px}.crtArea[_ngcontent-%COMP%]{align-self:center;position:relative}.dropicon[_ngcontent-%COMP%]{font-size:9px;position:relative;bottom:4px}.crtArea[_ngcontent-%COMP%]   .icon-add-to-cart[_ngcontent-%COMP%]{color:var(--three);font-size:18px;margin-top:4px;cursor:pointer;width:50px;display:flex;position:relative;left:20%;z-index:1}.alignCart[_ngcontent-%COMP%]{left:0!important}.icon-bell-o[_ngcontent-%COMP%]:before{font-weight:700}.icons[_ngcontent-%COMP%]{margin-top:1px}.serArea[_ngcontent-%COMP%]{align-self:center;position:relative}.crtround[_ngcontent-%COMP%]{position:relative;top:-7px;left:-12px;background:var(--orange);color:var(--three);font-weight:700;font-size:9px;height:10px;min-width:10px;padding:1.5px;border-radius:50%;display:flex;justify-content:center;align-items:center}.topSearch[_ngcontent-%COMP%]{position:relative;left:20px;top:2px;font-size:14px;color:var(--twentyone)}.topInput[_ngcontent-%COMP%]{height:25px;padding-left:20px}.topsearcharea[_ngcontent-%COMP%]{margin:0 15px}.uarea[_ngcontent-%COMP%]{font-size:16px;color:var(--three)}.uimage[_ngcontent-%COMP%]{height:30px;width:30px;background:var(--three);border-radius:50%;display:flex;justify-content:center;align-items:center}.uimage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:25px;width:25px;border-radius:50%}.flexcenter[_ngcontent-%COMP%]{justify-content:center}.logicon[_ngcontent-%COMP%]{margin-right:3px;padding-top:2px}.ulogArea[_ngcontent-%COMP%]{position:absolute;margin-top:40px;background:var(--three);box-shadow:0 3px 6px 0 rgba(0,0,0,.16);color:var(--fourtyone);font-size:14px;right:2px;min-width:120px}.ulogPad[_ngcontent-%COMP%]{padding:9px 10px}.unamdis[_ngcontent-%COMP%]{display:none}.button[_ngcontent-%COMP%]{display:block;margin:0 auto;font-size:14px;padding-left:32px;padding-right:32px;height:50px;line-height:50px;text-align:center;color:var(--three);text-decoration:none;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.button[_ngcontent-%COMP%]:hover{transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s;color:var(--three)}.search-container[_ngcontent-%COMP%]{position:relative;display:block;margin:0 auto;height:50px;width:50px}.mglass[_ngcontent-%COMP%]{display:block;pointer-events:none;border:none;position:relative;top:2px;font-size:18px}.searchbutton[_ngcontent-%COMP%]{position:absolute;font-size:22px;width:100%;margin:0;padding:0}.search[_ngcontent-%COMP%]:focus + .searchbutton[_ngcontent-%COMP%]{transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s;border:none;transform:rotate(360deg)}.search[_ngcontent-%COMP%]{position:absolute;right:49px;outline:0;border:none;padding:0;width:0;height:100%;transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s;color:var(--three)}.search[_ngcontent-%COMP%]:focus{display:block;margin:0 auto;width:300px;padding:0 16px 0 0;background:#505762;box-shadow:0 1px 0 0 var(--three),0 1px 0 0 var(--three);text-indent:5px;color:#fff;border:none;box-shadow:0 1px 0 0 var(--three),0 1px 0 0 var(--three)}.expandright[_ngcontent-%COMP%]{right:auto;left:49px}.expandright[_ngcontent-%COMP%]:focus{padding:0 0 0 16px}.bell-icon-align[_ngcontent-%COMP%]{height:50px;line-height:38px}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--white)}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:var(--white)}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:var(--white)}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--white)}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--white)}@media screen and (min-device-width:481px) and (max-device-width:768px){.sclName[_ngcontent-%COMP%]{width:120px}}@media screen and (min-device-width:0px) and (max-device-width:480px){.mglass[_ngcontent-%COMP%]{top:1px}.noSearch[_ngcontent-%COMP%], .toplog[_ngcontent-%COMP%], .topsign[_ngcontent-%COMP%], .toptab[_ngcontent-%COMP%], .unamemob[_ngcontent-%COMP%]{display:none}.disHam[_ngcontent-%COMP%]{display:flex}.sclLogo[_ngcontent-%COMP%]{width:50px}.topsearcharea[_ngcontent-%COMP%]{margin:0 8px}.unamdis[_ngcontent-%COMP%]{display:flex}.button[_ngcontent-%COMP%]{display:block;margin:0 auto;font-size:14px;padding-left:32px;padding-right:32px;height:50px;line-height:50px;text-align:center;color:var(--three);text-decoration:none;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.button[_ngcontent-%COMP%]:hover{transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s}.search-container[_ngcontent-%COMP%]{position:relative;display:block;margin:0 auto;height:50px;width:50px}.searchbutton[_ngcontent-%COMP%]{position:absolute;font-size:22px;width:100%;margin:0;padding:0}.search[_ngcontent-%COMP%]:focus + .searchbutton[_ngcontent-%COMP%]{transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s;transform:rotate(360deg);border:none;background-color:var(--thirtyfour)}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--fiftyone);opacity:1}[_ngcontent-%COMP%]::-moz-placeholder{color:var(--fiftyone);opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:var(--fiftyone);opacity:1}[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--fiftyone);opacity:1}[_ngcontent-%COMP%]::placeholder{color:var(--fiftyone);opacity:1}.search[_ngcontent-%COMP%]{position:absolute;right:49px;outline:0;border:none;padding:0;width:0;color:var(--three);height:100%;transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s;background:0 0;border-bottom:10px #fff}.search[_ngcontent-%COMP%]:focus{display:block;background-color:var(--thirtyfour);margin:-9px auto 0;height:60px;width:162px;padding:0 16px 0 0;border:none;box-shadow:0 1px 0 0 var(--three),0 1px 0 0 var(--three);z-index:2}.expandright[_ngcontent-%COMP%]{left:49px;right:49px;box-shadow:-8px 10px 0 -7px #4ea6ea,8px 10px 0 -7px #4ea6ea}.expandright[_ngcontent-%COMP%]:focus{padding:0 0 0 16px;box-shadow:-8px 10px 0 -7px #4ea6ea,8px 10px 0 -7px #4ea6ea}.sclLogo[_ngcontent-%COMP%], .topnavbar[_ngcontent-%COMP%]{height:55px}.sclName[_ngcontent-%COMP%]{font-size:16px;width:80px;padding-left:6px}}.umarg[_ngcontent-%COMP%]   .icon-bell-o[_ngcontent-%COMP%]{cursor:pointer;margin-top:2px;font-size:18px}.pushButtonsDiv[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:22px}.icon-question-1[_ngcontent-%COMP%]:before{position:relative;top:2px;margin-right:4px}.marginLeft12px[_ngcontent-%COMP%]{margin-left:12px}.pushBlocked[_ngcontent-%COMP%]{display:flex;flex-direction:column}.accSet[_ngcontent-%COMP%]{padding:2% 5%}.block[_ngcontent-%COMP%]{cursor:not-allowed!important}@media screen and (min-device-width:0px) and (max-device-width:375px){.search[_ngcontent-%COMP%]:focus{width:110px}}@media screen and (min-device-width:0px) and (max-device-width:320px){.new1[_ngcontent-%COMP%]{width:30px}.new[_ngcontent-%COMP%]{width:80px}.searchbutton[_ngcontent-%COMP%]{font-size:15px}.crtArea[_ngcontent-%COMP%]   .icon-add-to-cart[_ngcontent-%COMP%]{font-size:15px;margin-right:0}.uarea[_ngcontent-%COMP%]{font-size:12px}.serArea[_ngcontent-%COMP%]{padding-right:0}.search[_ngcontent-%COMP%]:focus + .searchbutton[_ngcontent-%COMP%]{transition-duration:.4s;-moz-transition-duration:.4s;-webkit-transition-duration:.4s;-o-transition-duration:.4s;transform:rotate(360deg);border:none;background-color:var(--thirtyfour)}.sclName[_ngcontent-%COMP%]{font-size:10px;width:42px;padding-left:2px}}.navmarg[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .selectedNav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{color:var(--three)!important;-webkit-filter:invert(1) grayscale(0) contrast(1) saturate(.8);filter:invert(1) grayscale(0) contrast(1) saturate(.8)}.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .icons[_ngcontent-%COMP%]   link[_ngcontent-%COMP%]{font-family:examly-icons;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"]
				],
				data: {}
			});

			function ae(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "container hambur icon-navicon"]
				], null, [
					[null, "mouseenter"],
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "mouseenter" === l && (i.showNav = !0, n = !1 !== i.checkPath() && n), "click" === l && (i.showNav = !i.showNav, n = !1 !== i.checkPath() && n), n
				}), null, null))], null, null)
			}

			function se(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 0, "div", [
					["class", "container hambur icon-navicon"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "click" === l && (i.showNav = !i.showNav, n = !1 !== i.checkPath() && n), n
				}), null, null))], null, null)
			}

			function re(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("dashboard") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-dashboard icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Dashboards"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "dashboard" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function ue(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("profile") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-user icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Profile"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "profile" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function ce(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mycourses") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-book-7 icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Courses"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mycourses" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function de(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("drives") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-job icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(5, null, ["", ""]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "drives" === t.currentNav || "/mydrivedetails" === t.routerpath, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), (function(e, l) {
					e(l, 5, 0, l.component.driveService.drivesNameFormatView.drivesNamelist.label)
				}))
			}

			function pe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, [" Test"]))], null, null)
			}

			function he(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, [" Contest"]))], null, null)
			}

			function ge(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 7, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("contest") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-trophy icons"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, pe)), n.ob(5, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, he)), n.ob(7, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "contest" === t.currentNav || "/mycdetails" === t.routerpath, t.noRedirect);
					e(l, 1, 0, "container navmarg", n), e(l, 5, 0, t.localSchoolData && t.globalService.contestToTestSchoolId.includes(t.localSchoolData.school_id)), e(l, 7, 0, t.localSchoolData && !t.globalService.contestToTestSchoolId.includes(t.localSchoolData.school_id))
				}), null)
			}

			function be(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "myprojects") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-project icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Projects"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "myprojects" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function me(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "myquizzes") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-quiz icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Quizzes"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "myquizzes" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function fe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "myexams") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-exams icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Exams"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "myexams" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function ve(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mypractices") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-practice-new icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Practices"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mypractices" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function _e(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mylearningpaths") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-learning icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Learning Paths"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mylearningpaths" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function ye(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "myhackathons") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-hackathon icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Hackathons"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "myhackathons" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Ce(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "myassessments") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-assessment icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Assessments"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "myassessments" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function xe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mylabs") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-lab icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Labs"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mylabs" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function we(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mychallenges") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-challenge icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Challenges"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mychallenges" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function ke(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mytests") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-assesment icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Company Specific Tests"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mytests" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Se(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("mycourse", "mytests2") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-assesment icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Job Preparatory"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "mytests2" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Oe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("chat") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					block: 0,
					selectedNav: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-speech-bubble-1"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Engagement"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.noRedirect, "chat" === t.currentNav || "/chat" === t.routerpath);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Pe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("examsandresults") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					block: 0,
					selectedNav: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon icon-assesment icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Academics & Examination Details"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.noRedirect, "examsandresults" === t.currentNav || "/examsandresults" === t.routerpath);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Me(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("leaderboard") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					block: 0,
					selectedNav: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-people icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Leaderboard"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, t.noRedirect, "leaderboard" === t.currentNav || "/leaderboard" === t.routerpath);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Ie(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("certificates") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-degree-1 icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Certificates"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "certificates" === t.currentNav || "/certificates" === t.routerpath, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function De(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("openide") && n), n
				}), null, null)), (e()(), n.pb(1, 0, null, null, 0, "div", [
					["class", " icon-compiler-instruction icons"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Open IDE"]))], null, null)
			}

			function Ne(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("buy") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-add-to-cart icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Buy"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "buy" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function ze(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("attendanceSettings") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-attendance"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Attendance"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "attendanceSettings" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Ee(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("neoPAT") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(3, 0, null, null, 0, "div", [
					["class", "icon-logout icons"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Go to NERD"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "neoPAT" === t.currentNav, t.noRedirect);
					e(l, 1, 0, "container navmarg", n)
				}), null)
			}

			function Te(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 55, "div", [
					["class", "navArea islogMarg"]
				], null, [
					[null, "mouseenter"],
					[null, "mouseleave"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "mouseenter" === l && (i.showNav = !0, n = !1 !== i.checkPath() && n), "mouseleave" === l && (i.showNav = !1, n = !1 !== i.checkPath() && n), n
				}), null, null)), (e()(), n.pb(1, 0, null, null, 54, "div", [
					["class", "martop"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, re)), n.ob(3, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ue)), n.ob(5, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ce)), n.ob(7, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, de)), n.ob(9, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ge)), n.ob(11, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, be)), n.ob(13, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, me)), n.ob(15, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, fe)), n.ob(17, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ve)), n.ob(19, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, _e)), n.ob(21, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ye)), n.ob(23, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Ce)), n.ob(25, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, xe)), n.ob(27, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, we)), n.ob(29, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ke)), n.ob(31, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Se)), n.ob(33, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Oe)), n.ob(35, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Pe)), n.ob(37, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Me)), n.ob(39, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Ie)), n.ob(41, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, De)), n.ob(43, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Ne)), n.ob(45, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, ze)), n.ob(47, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(48, 0, null, null, 5, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("accountSettings") && n), n
				}), null, null)), n.ob(49, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(50, {
					selectedNav: 0,
					block: 1
				}), (e()(), n.pb(51, 0, null, null, 0, "div", [
					["class", "icon-account-setting icons"]
				], null, null, null, null, null)), (e()(), n.pb(52, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Account Settings"])), (e()(), n.gb(16777216, null, null, 1, null, Ee)), n.ob(55, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.sclMD && t.sclMD.allow_dashboard), e(l, 5, 0, !t.sclMD || !t.sclMD.disableProfile), e(l, 7, 0, t.sclMD && t.sclMD.allow_courses), e(l, 9, 0, ("college" === t.userData.institute_type || "company" === t.userData.institute_type) && t.sclMD && t.sclMD.allow_drives), e(l, 11, 0, t.sclMD && t.sclMD.allow_contest), e(l, 13, 0, t.sclMD && t.sclMD.allow_course_projects), e(l, 15, 0, t.sclMD && t.sclMD.allow_quizzes), e(l, 17, 0, t.sclMD && t.sclMD.allow_exams), e(l, 19, 0, t.sclMD && t.sclMD.allow_practices), e(l, 21, 0, t.sclMD && t.sclMD.allow_learning_paths), e(l, 23, 0, t.sclMD && t.sclMD.allow_hackathons), e(l, 25, 0, t.sclMD && t.sclMD.allow_assessments), e(l, 27, 0, t.sclMD && t.sclMD.allow_lab_courses), e(l, 29, 0, t.sclMD && t.sclMD.allow_challenges), e(l, 31, 0, t.sclMD && t.sclMD.allow_company_specific_tests), e(l, 33, 0, t.sclMD && t.sclMD.allow_company_specific_tests && t.specificSchoolId), e(l, 35, 0, t.sclMD && t.sclMD.allow_engagement && t.userData.enable_features && t.userData.enable_features.allow_engagement), e(l, 37, 0, t.userData.enable_features && t.userData.enable_features.allow_coe), e(l, 39, 0, t.sclMD && t.sclMD.allow_leaderboard && t.userData.enable_features && t.userData.enable_features.allow_leaderboard), e(l, 41, 0, t.sclMD && t.sclMD.allow_certificates && t.userData.enable_features && t.userData.enable_features.allow_pre_certificates), e(l, 43, 0, t.sclMD && t.sclMD.allow_openide), e(l, 45, 0, t.sclMD && t.sclMD.allowselling), e(l, 47, 0, t.sclMD && t.sclMD.allow_attendance);
					var n = e(l, 50, 0, "accountSettings" === t.currentNav, t.noRedirect);
					e(l, 49, 0, "container navmarg", n), e(l, 55, 0, t.sclMD && t.sclMD.allow_neoPAT)
				}), null)
			}

			function Ae(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("course") && n), n
				}), null, null)), (e()(), n.pb(1, 0, null, null, 0, "div", [
					["class", "icon-book-7"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Courses"]))], null, null)
			}

			function Le(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 3, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("signup") && n), n
				}), null, null)), (e()(), n.pb(1, 0, null, null, 0, "div", [
					["class", "icon-user"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Sign Up"]))], null, null)
			}

			function Je(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 9, "div", [
					["class", "navArea notlogMarg"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 8, "div", [
					["class", "martop"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, Ae)), n.ob(3, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(4, 0, null, null, 3, "div", [
					["class", "container navmarg"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navHam("login") && n), n
				}), null, null)), (e()(), n.pb(5, 0, null, null, 0, "div", [
					["class", "icon-login"]
				], null, null, null, null, null)), (e()(), n.pb(6, 0, null, null, 1, "div", [
					["class", "padleft10"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Login"])), (e()(), n.gb(16777216, null, null, 1, null, Le)), n.ob(9, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.publicCourse || t.pcourse), e(l, 9, 0, t.isSignUp)
				}), null)
			}

			function Fe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "sclName"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", " "]))], null, (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.localSchoolData && t.localSchoolData.pwa_short_name ? t.localSchoolData.pwa_short_name : "")
				}))
			}

			function je(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "hometab alcenter font14"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navTab("home") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					activeTab: 0
				}), (e()(), n.pb(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Home"]))], (function(e, l) {
					var t = e(l, 2, 0, "home" === l.component.activetab);
					e(l, 1, 0, "hometab alcenter font14", t)
				}), null)
			}

			function Re(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "coursetab alcenter font14"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.navTab("course") && n), n
				}), null, null)), n.ob(1, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(2, {
					activeTab: 0,
					mrgLeft: 1
				}), (e()(), n.pb(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Courses"]))], (function(e, l) {
					var t = l.component,
						n = e(l, 2, 0, "course" === t.activetab, t.pcourse);
					e(l, 1, 0, "coursetab alcenter font14", n)
				}), null)
			}

			function He(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "container toptab"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, je)), n.ob(2, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Re)), n.ob(4, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, (t.publicCourse || t.publicFeeds) && t.feedsMain), e(l, 4, 0, t.publicCourse || t.pcourse)
				}), null)
			}

			function Be(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "span", [
					["class", "crtround"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, [" ", ""]))], null, (function(e, l) {
					e(l, 1, 0, l.component.cartTotalItems)
				}))
			}

			function Ve(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "alcenter umarg mar10px"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.onPushClick() && n), n
				}), null, null)), (e()(), n.pb(1, 0, null, null, 0, "div", [
					["class", "icon-bell-o bold"]
				], null, null, null, null, null))], null, null)
			}

			function qe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, [
					[2, 0],
					["logoutChild", 1]
				], null, 7, "div", [
					["class", "ulogArea"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 2, "div", [
					["class", "container ulogPad unamdis flexcenter"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "click" === l && (n = 0 != (i.ulogout = !i.ulogout) && n), n
				}), null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(3, null, ["", ""])), (e()(), n.pb(4, 0, null, null, 3, "div", [
					["class", "container ulogPad loglay"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "click" === l && (i.logout(), n = 0 != (i.ulogout = !i.ulogout) && n), n
				}), null, null)), (e()(), n.pb(5, 0, null, null, 0, "div", [
					["class", "icon-logout logicon"]
				], null, null, null, null, null)), (e()(), n.pb(6, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Log out"]))], null, (function(e, l) {
					e(l, 3, 0, l.component.uname)
				}))
			}

			function Ke(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 12, "div", [
					["class", "container uarea"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, Ve)), n.ob(2, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(3, 0, null, null, 9, "div", [
					["class", "container alcenter umarg"]
				], null, null, null, null, null)), (e()(), n.pb(4, 0, null, null, 1, "div", [
					["class", "uimage umarg"]
				], null, null, null, null, null)), (e()(), n.pb(5, 0, null, null, 0, "img", [
					["alt", "Loading Image..."],
					["decoding", "async"],
					["loading", "lazy"]
				], [
					[8, "src", 4]
				], null, null, null, null)), (e()(), n.pb(6, 0, null, null, 6, "div", [
					["class", "container fldir alcenter tophamRightEndArea"]
				], null, null, null, null, null)), (e()(), n.pb(7, 0, [
					[1, 0],
					["logoutToggle", 1]
				], null, 3, "div", [
					["class", "alcenter umarg cp"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0,
						i = e.component;
					return "click" === l && (n = 0 != (i.ulogout = !i.ulogout) && n), n
				}), null, null)), (e()(), n.pb(8, 0, null, null, 1, "span", [
					["class", "unamemob"]
				], null, null, null, null, null)), (e()(), n.Hb(9, null, [" ", " "])), (e()(), n.pb(10, 0, null, null, 0, "span", [
					["class", "icon-caret-down dropicon"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, qe)), n.ob(12, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.localSchoolData.push_enabled), e(l, 12, 0, t.ulogout)
				}), (function(e, l) {
					var t = l.component;
					e(l, 5, 0, n.rb(1, "", t.uImage, "")), e(l, 9, 0, t.uname)
				}))
			}

			function Ue(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 2, "div", [
					["class", "topsign alcenter"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.navHam("signup") && n), n
				}), j.b, j.a)), n.ob(2, 573440, null, 0, R.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					id: [2, "id"]
				}, {
					but: "but"
				})], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.btnsign, "14px", t.btnsign.type + t.btnsign.btnName)
				}), null)
			}

			function Ge(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "div", [
					["class", "container"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 2, "div", [
					["class", "toplog alcenter"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.navHam("login") && n), n
				}), j.b, j.a)), n.ob(3, 573440, null, 0, R.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					id: [2, "id"]
				}, {
					but: "but"
				}), (e()(), n.gb(16777216, null, null, 1, null, Ue)), n.ob(5, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.btnlogin, "14px", t.btnlogin.type + t.btnlogin.btnName), e(l, 5, 0, t.isSignUp)
				}), null)
			}

			function We(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 8, "div", [
					["class", "pushBlocked"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["1. Click on the lock icon in the address bar above"])), (e()(), n.pb(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["2. Locate the Notification setting"])), (e()(), n.pb(5, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["3. Change it to 'Ask'"])), (e()(), n.pb(7, 0, null, null, 1, "div", [
					["style", "color:red"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["*Push notification feature supports only in Chrome, Firefox and Edge browsers"]))], null, null)
			}

			function $e(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "icon icon-question-1"]
				], null, null, null, null, null)), (e()(), n.Hb(1, null, ["", ""]))], null, (function(e, l) {
					e(l, 1, 0, l.component.pushDialog.pushText)
				}))
			}

			function Qe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [
					["class", "pushButtonsDiv"]
				], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 1, "app-button", [], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.dialogClose(null) && n), n
				}), j.b, j.a)), n.ob(2, 573440, null, 0, R.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					background: [2, "background"],
					id: [3, "id"]
				}, {
					but: "but"
				}), (e()(), n.pb(3, 0, null, null, 1, "app-button", [
					["class", "marginLeft12px"]
				], null, [
					[null, "but"]
				], (function(e, l, t) {
					var n = !0;
					return "but" === l && (n = !1 !== e.component.submitDialog("push", null) && n), n
				}), j.b, j.a)), n.ob(4, 573440, null, 0, R.a, [n.C], {
					btnProperties: [0, "btnProperties"],
					fontSize: [1, "fontSize"],
					background: [2, "background"],
					id: [3, "id"]
				}, {
					but: "but"
				})], (function(e, l) {
					var t = l.component;
					e(l, 2, 0, t.pushDialog.btn1, "14px", "var(--three)", t.pushDoLater), e(l, 4, 0, t.pushDialog.btn2, "14px", "var(--one)", t.pushAllow)
				}), null)
			}

			function Ye(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 7, "div", [], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 6, "div", [
					["class", "accSet"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, We)), n.ob(3, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, $e)), n.ob(5, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Qe)), n.ob(7, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, "pushBlocked" === t.dialogContentData), e(l, 5, 0, "push" === t.dialogContentData), e(l, 7, 0, "push" === t.dialogContentData)
				}), null)
			}

			function Ze(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 6, "div", [], null, null, null, null, null)), (e()(), n.pb(1, 0, null, null, 5, "div", [
					["class", "accSet"]
				], null, null, null, null, null)), (e()(), n.pb(2, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), n.Hb(-1, null, ["Enter your password to view/edit account settings *"])), (e()(), n.pb(4, 0, null, null, 2, "div", [], null, null, null, null, null)), (e()(), n.pb(5, 0, null, null, 1, "app-form-builder", [], null, [
					[null, "onSubmit"]
				], (function(e, l, t) {
					var n = !0;
					return "onSubmit" === l && (n = !1 !== e.component.dyn.formSubmit(t) && n), n
				}), H.b, H.a)), n.ob(6, 1687552, null, 0, B.a, [], {
					fields: [0, "fields"],
					btnStyle: [1, "btnStyle"],
					btnContStyle: [2, "btnContStyle"],
					buttonList: [3, "buttonList"]
				}, {
					onSubmit: "onSubmit"
				})], (function(e, l) {
					var t = l.component;
					e(l, 6, 0, t.dyn.form, t.dyn.btnStyle, t.dyn.btnContStyle, t.dyn.button)
				}), null)
			}

			function Xe(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 5, "app-dialog", [], null, [
					[null, "visibleChange"],
					[null, "submitDialog"],
					["window", "resize"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "window:resize" === l && (i = !1 !== n.zb(e, 1).getScreenSize(t) && i), "visibleChange" === l && (i = !1 !== (o.dialogVisible = t) && i), "submitDialog" === l && (i = !1 !== o.submitDialog(o.dialogContentData, t) && i), "visibleChange" === l && (i = !1 !== o.dialogClose(t) && i), i
				}), V.b, V.a)), n.ob(1, 114688, null, 0, q.a, [u.a, K.a, P.m, p.a], {
					visible: [0, "visible"],
					header: [1, "header"],
					contentData: [2, "contentData"],
					ngStyleClass: [3, "ngStyleClass"],
					headerStyle: [4, "headerStyle"]
				}, {
					visibleChange: "visibleChange",
					submitDialog: "submitDialog"
				}), (e()(), n.gb(16777216, null, 0, 1, null, Ye)), n.ob(3, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, 0, 1, null, Ze)), n.ob(5, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.dialogVisible, t.dialogHeader, t.dialogContentData, t.ngStyleClass, t.dialogheaderStyle), e(l, 3, 0, "push" === t.dialogContentData || "pushBlocked" === t.dialogContentData), e(l, 5, 0, "accountSettings" === t.dialogContentData)
				}), null)
			}

			function el(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "app-loader", [], null, null, null, U.b, U.a)), n.ob(1, 114688, null, 0, G.a, [], {
					type: [0, "type"]
				}, null)], (function(e, l) {
					e(l, 1, 0, "type2")
				}), null)
			}

			function ll(e) {
				return n.Jb(0, [n.Fb(671088640, 1, {
					logoutToggle: 0
				}), n.Fb(671088640, 2, {
					logoutChild: 0
				}), (e()(), n.pb(2, 0, null, null, 1, "app-banner", [], null, [
					[null, "dataChange"]
				], (function(e, l, t) {
					var n = !0;
					return "dataChange" === l && (n = !1 !== (e.component.materialDailogData = t) && n), n
				}), ee, Y)), n.ob(3, 573440, null, 0, Q, [W.a, p.a, $.a, P.m], {
					data: [0, "data"]
				}, {
					dataChange: "dataChange"
				}), (e()(), n.pb(4, 0, null, null, 41, "div", [
					["class", "container topnavbar"]
				], null, null, null, null, null)), (e()(), n.pb(5, 0, null, null, 19, "div", [
					["class", "container"]
				], null, null, null, null, null)), (e()(), n.pb(6, 0, null, null, 11, "div", [
					["class", "fldir alcenter tophamStartArea"]
				], null, null, null, null, null)), n.ob(7, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(8, {
					disHam: 0
				}), (e()(), n.pb(9, 0, null, null, 4, "div", [
					["class", "hamburgerArea container"]
				], null, null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, ae)), n.ob(11, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, se)), n.ob(13, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Te)), n.ob(15, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Je)), n.ob(17, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(18, 0, null, null, 2, "div", [
					["class", "sclLogo container"]
				], null, null, null, null, null)), (e()(), n.pb(19, 0, null, null, 1, "div", [
					["class", "slogo"]
				], null, null, null, null, null)), (e()(), n.pb(20, 0, null, null, 0, "img", [
					["alt", "Loading Image..."],
					["decoding", "async"],
					["loading", "lazy"]
				], [
					[8, "src", 4]
				], null, null, null, null)), (e()(), n.gb(16777216, null, null, 1, null, Fe)), n.ob(22, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, He)), n.ob(24, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(25, 0, null, null, 20, "div", [
					["class", "container"]
				], null, null, null, null, null)), (e()(), n.pb(26, 0, null, null, 9, "div", [
					["class", "serArea"]
				], null, null, null, null, null)), (e()(), n.pb(27, 0, null, null, 8, "div", [
					["class", "search-container"]
				], null, null, null, null, null)), (e()(), n.pb(28, 0, null, null, 5, "input", [
					["class", "search"],
					["id", "searchleft"],
					["name", "q"],
					["placeholder", "Search"],
					["type", "search"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "keydown.enter"],
					[null, "change"],
					[null, "ngModelChange"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(e, l, t) {
					var i = !0,
						o = e.component;
					return "input" === l && (i = !1 !== n.zb(e, 29)._handleInput(t.target.value) && i), "blur" === l && (i = !1 !== n.zb(e, 29).onTouched() && i), "compositionstart" === l && (i = !1 !== n.zb(e, 29)._compositionStart() && i), "compositionend" === l && (i = !1 !== n.zb(e, 29)._compositionEnd(t.target.value) && i), "keydown.enter" === l && (i = !1 !== o.sendData() && i), "change" === l && (i = !1 !== o.setSearch(t) && i), "ngModelChange" === l && (i = !1 !== (o.searchData = t) && i), i
				}), null, null)), n.ob(29, 16384, null, 0, le.d, [n.C, n.k, [2, le.a]], null, null), n.Eb(1024, null, le.o, (function(e) {
					return [e]
				}), [le.d]), n.ob(31, 671744, null, 0, le.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, le.o]
				], {
					name: [0, "name"],
					model: [1, "model"]
				}, {
					update: "ngModelChange"
				}), n.Eb(2048, null, le.p, null, [le.s]), n.ob(33, 16384, null, 0, le.q, [
					[4, le.p]
				], null, null), (e()(), n.pb(34, 0, null, null, 1, "label", [
					["class", "button searchbutton"],
					["for", "searchleft"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.searchInvalid() && n), n
				}), null, null)), (e()(), n.pb(35, 0, null, null, 0, "span", [
					["class", "mglass icon-search"]
				], null, null, null, null, null)), (e()(), n.pb(36, 0, null, null, 5, "div", [
					["class", "crtArea"]
				], null, null, null, null, null)), (e()(), n.pb(37, 0, null, null, 4, "div", [
					["class", "icon-add-to-cart alignCart"]
				], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.gotocart() && n), n
				}), null, null)), n.ob(38, 278528, null, 0, F.k, [n.r, n.s, n.k, n.C], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), n.Cb(39, {
					alignCart: 0
				}), (e()(), n.gb(16777216, null, null, 1, null, Be)), n.ob(41, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Ke)), n.ob(43, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Ge)), n.ob(45, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, Xe)), n.ob(47, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, el)), n.ob(49, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(e, l) {
					var t = l.component;
					e(l, 3, 0, t.materialDailogData);
					var n = e(l, 8, 0, !t.isLogged());
					e(l, 7, 0, "fldir alcenter tophamStartArea", n), e(l, 11, 0, t.desktop), e(l, 13, 0, !t.desktop), e(l, 15, 0, t.showNav && t.isLogged()), e(l, 17, 0, t.showNav && !t.isLogged()), e(l, 22, 0, t.screenWidth > 768), e(l, 24, 0, !t.isLogged()), e(l, 31, 0, "q", t.searchData);
					var i = e(l, 39, 0, !t.isLogged());
					e(l, 38, 0, "icon-add-to-cart alignCart", i), e(l, 41, 0, t.cartTotalItems > 0), e(l, 43, 0, t.isLogged()), e(l, 45, 0, !t.isLogged()), e(l, 47, 0, t.dialogVisible), e(l, 49, 0, t.loader)
				}), (function(e, l) {
					e(l, 20, 0, n.rb(1, "", l.component.schoolLogo, "")), e(l, 28, 0, n.zb(l, 33).ngClassUntouched, n.zb(l, 33).ngClassTouched, n.zb(l, 33).ngClassPristine, n.zb(l, 33).ngClassDirty, n.zb(l, 33).ngClassValid, n.zb(l, 33).ngClassInvalid, n.zb(l, 33).ngClassPending)
				}))
			}
			var tl = t("rHJl"),
				nl = t("134i"),
				il = n.nb({
					encapsulation: 0,
					styles: [
						[".browser_message[_ngcontent-%COMP%]{font-size:30px;margin-top:calc(100vh - 70vh);text-align:center}"]
					],
					data: {}
				});

			function ol(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "app-top-header", [], null, [
					["window", "resize"]
				], (function(e, l, t) {
					var i = !0;
					return "window:resize" === l && (i = !1 !== n.zb(e, 1).getScreenSize(t) && i), i
				}), ll, oe)), n.ob(1, 245760, null, 0, ie, [P.m, p.a, d.a, u.a, K.a, n.C, b.a, te.a, $.a, P.a, ne.a], null, null)], (function(e, l) {
					e(l, 1, 0)
				}), null)
			}

			function al(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 4, "div", [], null, [
					[null, "click"]
				], (function(e, l, t) {
					var n = !0;
					return "click" === l && (n = !1 !== e.component.closeDropDown(t) && n), n
				}), null, null)), (e()(), n.gb(16777216, null, null, 1, null, ol)), n.ob(2, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), n.ob(4, 212992, null, 0, P.p, [P.b, n.N, n.j, [8, null], n.h], null, null)], (function(e, l) {
					e(l, 2, 0, l.component.showTop), e(l, 4, 0)
				}), null)
			}

			function sl(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "div", [
					["class", "browser_message"]
				], null, null, null, null, null)), (e()(), n.Hb(-1, null, [" Please use latest version of Google Chrome or Mozilla Firefox for better compatibility. This Browser will be supported soon.\n"]))], null, null)
			}

			function rl(e) {
				return n.Jb(0, [(e()(), n.gb(16777216, null, null, 1, null, al)), n.ob(1, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.gb(16777216, null, null, 1, null, sl)), n.ob(3, 16384, null, 0, F.m, [n.N, n.K], {
					ngIf: [0, "ngIf"]
				}, null), (e()(), n.pb(4, 0, null, null, 1, "app-growl", [], null, [
					[null, "dataChange"]
				], (function(e, l, t) {
					var n = !0;
					return "dataChange" === l && (n = !1 !== (e.component.growlData = t) && n), n
				}), tl.b, tl.a)), n.ob(5, 573440, null, 0, nl.a, [n.C], {
					data: [0, "data"]
				}, {
					dataChange: "dataChange"
				})], (function(e, l) {
					var t = l.component;
					e(l, 1, 0, t.isBrowserSupported && t.setLocalStorage), e(l, 3, 0, !t.isBrowserSupported), e(l, 5, 0, t.growlData)
				}), null)
			}

			function ul(e) {
				return n.Jb(0, [(e()(), n.pb(0, 0, null, null, 1, "app-root", [], null, null, null, rl, il)), n.ob(1, 114688, null, 0, M, [p.a, P.m, u.a], null, null)], (function(e, l) {
					e(l, 1, 0)
				}), null)
			}
			var cl = n.lb("app-root", M, ul, {}, {}, []),
				dl = t("fDlF"),
				pl = t("GS7A");
			class hl {
				constructor(e) {
					this.globalService = e
				}
				handleError(e) {
					console.error(e), /Loading chunk [\d]+ failed/.test(e.message) && window.location.reload(), this.globalService.eventEmitterGA("exception", {
						description: e,
						fatal: !0
					})
				}
			}
			var gl = t("Lqxq"),
				bl = t("Wbze"),
				ml = t("lbgN"),
				fl = t("CHyA"),
				vl = t("3F6C"),
				_l = t("u1jE"),
				yl = t("2L1b");
			class Cl {}
			var xl = n.mb(S, [M], (function(e) {
				return n.wb([n.xb(512, n.j, n.ab, [
					[8, [I.a, E, J, cl]],
					[3, n.j], n.w
				]), n.xb(5120, n.t, n.kb, [
					[3, n.t]
				]), n.xb(4608, F.o, F.n, [n.t, [2, F.A]]), n.xb(5120, n.c, n.hb, []), n.xb(5120, n.r, n.ib, []), n.xb(5120, n.s, n.jb, []), n.xb(4608, o.c, o.n, [F.c]), n.xb(6144, n.F, null, [o.c]), n.xb(4608, o.f, o.h, []), n.xb(5120, o.d, (function(e, l, t, n, i, a, s, r) {
					return [new o.l(e, l, t), new o.q(n), new o.p(i, a, s, r)]
				}), [F.c, n.y, n.A, F.c, F.c, o.f, n.bb, [2, o.g]]), n.xb(4608, o.e, o.e, [o.d, n.y]), n.xb(135680, o.o, o.o, [F.c]), n.xb(4608, o.m, o.m, [o.e, o.o, n.c]), n.xb(5120, dl.a, s.e, []), n.xb(5120, dl.c, s.f, []), n.xb(4608, dl.b, s.d, [F.c, dl.a, dl.c]), n.xb(5120, n.D, s.g, [o.m, dl.b, n.y]), n.xb(6144, o.r, null, [o.o]), n.xb(4608, n.L, n.L, [n.y]), n.xb(5120, P.a, P.A, [P.m]), n.xb(4608, P.f, P.f, []), n.xb(6144, P.h, null, [P.f]), n.xb(135680, P.q, P.q, [P.m, n.v, n.i, n.q, P.h]), n.xb(4608, P.g, P.g, []), n.xb(5120, P.E, P.w, [P.m, F.w, P.i]), n.xb(5120, P.j, P.D, [P.B]), n.xb(5120, n.b, (function(e) {
					return [e]
				}), [P.j]), n.xb(4608, a.k, a.q, [F.c, n.A, a.o]), n.xb(4608, a.r, a.r, [a.k, a.p]), n.xb(5120, a.a, (function(e) {
					return [e]
				}), [a.r]), n.xb(4608, a.n, a.n, []), n.xb(6144, a.l, null, [a.n]), n.xb(4608, a.j, a.j, [a.l]), n.xb(6144, a.b, null, [a.j]), n.xb(4608, a.g, a.m, [a.b, n.q]), n.xb(4608, a.c, a.c, [a.g]), n.xb(4608, le.C, le.C, []), n.xb(4608, le.f, le.f, []), n.xb(4608, pl.b, s.c, [n.D, o.b]), n.xb(4608, h, h, [p.a, d.a, u.a, P.m]), n.xb(4608, g, g, [p.a, P.m]), n.xb(4608, c, c, [u.a, P.m]), n.xb(4608, m, m, [u.a, P.m, b.a, p.a]), n.xb(1073742336, F.b, F.b, []), n.xb(512, n.l, hl, [p.a]), n.xb(1024, n.x, (function() {
					return [P.v()]
				}), []), n.xb(512, P.B, P.B, [n.q]), n.xb(1024, n.d, (function(e, l) {
					return [o.s(e), P.C(l)]
				}), [
					[2, n.x], P.B
				]), n.xb(512, n.e, n.e, [
					[2, n.d]
				]), n.xb(131584, n.g, n.g, [n.y, n.bb, n.q, n.l, n.j, n.e]), n.xb(1073742336, n.f, n.f, [n.g]), n.xb(1073742336, o.a, o.a, [
					[3, o.a]
				]), n.xb(1024, P.u, P.y, [
					[3, P.m]
				]), n.xb(512, P.s, P.c, []), n.xb(512, P.b, P.b, []), n.xb(256, P.i, {}, []), n.xb(1024, F.i, P.x, [F.u, [2, F.a], P.i]), n.xb(512, F.h, F.h, [F.i]), n.xb(512, n.i, n.i, []), n.xb(512, n.v, n.I, [n.i, [2, n.J]]), n.xb(1024, P.k, (function() {
					return [
						[{
							path: "login",
							loadChildren: "./containers/login/login.module#LoginModule",
							canActivate: [c]
						}, {
							path: "pwd",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "otp",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "resendotp",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "signup",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "forgot",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "resetpassword",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "setpassword",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "activation",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "contest",
							loadChildren: "./containers/contest-registration/contest-registration.module#ContestRegistrationModule"
						}, {
							path: "create-profile",
							loadChildren: "./containers/init-form/init-form.module#InitFormModule",
							canActivate: [m]
						}, {
							path: "feeds",
							loadChildren: "./containers/feeds-layout/feeds.module#FeedsModule",
							canActivate: [c, h]
						}, {
							path: "course/product",
							loadChildren: "./containers/course-details-layout/courselayout.module#CourselayoutModule",
							canActivate: [c]
						}, {
							path: "course",
							loadChildren: "./containers/course-list-layout/courselist.module#CourselistModule",
							canActivate: [c]
						}, {
							path: "mycourses",
							loadChildren: "./containers/my-course-layout/mycourse.module#MycourseModule",
							canActivate: [c, h]
						}, {
							path: "cart",
							loadChildren: "./containers/cart/cart.module#CartModule",
							canActivate: [c]
						}, {
							path: "home",
							loadChildren: "./containers/feeds-layout/feeds.module#FeedsModule",
							canActivate: [c, g]
						}, {
							path: "dashboard",
							loadChildren: "./containers/dashboard/dashboard/dashboard.module#DashboardModule",
							canActivate: [h]
						}, {
							path: "profile",
							loadChildren: "./containers/profile/profile.module#ProfileModule",
							canActivate: [c, h]
						}, {
							path: "accountsettings",
							loadChildren: "./containers/account-settings/account-settings.module#AccountSettingsModule"
						}, {
							path: "attendancesettings",
							loadChildren: "./containers/attendance-settings/attendance-settings.module#AttendanceSettingsModule",
							canActivate: [h]
						}, {
							path: "no-network",
							loadChildren: "src/app/components/no-network/no-network.module#NoNetworkModule"
						}, {
							path: "test",
							loadChildren: "./containers/test-taking/test-taking.module#TestTakingModule",
							canActivate: [c, h]
						}, {
							path: "compiler-instruction",
							loadChildren: "./containers/compiler-instruction/compiler-instruction.module#CompilerInstructionModule",
							canActivate: [c]
						}, {
							path: "result",
							loadChildren: "./containers/result-analysis/result-analysis.module#ResultAnalysisModule",
							canActivate: [c]
						}, {
							path: "project",
							loadChildren: "./containers/project/project.module#ProjectModule",
							canActivate: [c, h]
						}, {
							path: "mycontest",
							loadChildren: "./containers/my-course-layout/mycourse.module#MycourseModule",
							canActivate: [c, h]
						}, {
							path: "mycdetails",
							loadChildren: "./components/contest-details/contest-details.module#ContestDetailsModule",
							canActivate: [c, h]
						}, {
							path: "drives",
							loadChildren: "./containers/my-course-layout/mycourse.module#MycourseModule",
							canActivate: [c, h]
						}, {
							path: "mydrivedetails",
							loadChildren: "./components/drive-details/drive-details.module#DriveDetailsModule",
							canActivate: [c, h]
						}, {
							path: "loginredirect",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "loginredirect/QR-code-scanner",
							loadChildren: "./containers/login/login.module#LoginModule"
						}, {
							path: "leaderboard",
							loadChildren: "./containers/leaderboard-layout/leaderboard-layout.module#LeaderboardLayoutModule",
							canActivate: [c, h]
						}, {
							path: "chat",
							loadChildren: "./containers/chat-layout/chat-layout.module#ChatLayoutModule",
							canActivate: [c, h]
						}, {
							path: "examsandresults",
							loadChildren: "./containers/exams-results-layout/exams-results-layout.module#ExamsResultsLayoutModule",
							canActivate: [c, h]
						}, {
							path: "chat/:channel_id",
							loadChildren: "./containers/chat-layout/chat-layout.module#ChatLayoutModule",
							canActivate: [c, h]
						}, {
							path: "certificates",
							loadChildren: "./containers/certificate-layout/certificate-layout.module#CertificateLayoutModule",
							canActivate: [c, h]
						}, {
							path: "QR-code-scanner",
							loadChildren: "./components/qr-code-scanner/qr-code-scanner.module#QRCodeScannerModule",
							canActivate: [c, h]
						}, {
							path: "ide",
							loadChildren: "./components/ide-playground/ide-playground.module#IDEPlaygroundModule",
							canActivate: [c]
						}, {
							path: "githubredirect",
							component: _,
							canActivate: [c]
						}, {
							path: "githubredirect-handler",
							component: y,
							canActivate: [c]
						}, {
							path: "public-profile",
							loadChildren: "./components/public-profile/public-profile.module#publicProfileModule",
							canActivate: [c]
						}, {
							path: "network-check",
							loadChildren: "./containers/network-check/network-check.module#NetworkCheckModule",
							canActivate: [c]
						}]
					]
				}), []), n.xb(1024, P.m, P.z, [n.g, P.s, P.b, F.h, n.q, n.v, n.i, P.k, P.i, [2, P.r],
					[2, P.l]
				]), n.xb(1073742336, P.o, P.o, [
					[2, P.u],
					[2, P.m]
				]), n.xb(1073742336, C, C, []), n.xb(1073742336, a.e, a.e, []), n.xb(1073742336, a.d, a.d, []), n.xb(1073742336, gl.a, gl.a, []), n.xb(1073742336, bl.a, bl.a, []), n.xb(1073742336, le.z, le.z, []), n.xb(1073742336, le.l, le.l, []), n.xb(1073742336, ml.a, ml.a, []), n.xb(1073742336, fl.a, fl.a, []), n.xb(1073742336, le.w, le.w, []), n.xb(1073742336, vl.a, vl.a, []), n.xb(1073742336, _l.a, _l.a, []), n.xb(1073742336, yl.a, yl.a, []), n.xb(1073742336, Cl, Cl, []), n.xb(1073742336, x, x, []), n.xb(1073742336, s.b, s.b, []), n.xb(1073742336, w.a, w.a, []), n.xb(1073742336, S, S, []), n.xb(256, n.Z, !0, []), n.xb(256, a.o, "XSRF-TOKEN", []), n.xb(256, a.p, "X-XSRF-TOKEN", []), n.xb(256, s.a, "BrowserAnimations", [])])
			}));
			i.a.production && Object(n.S)(), o.k().bootstrapModuleFactory(xl).then(() => {
				"serviceWorker" in navigator && !navigator.userAgent.includes("SEB") && navigator.serviceWorker.register("/ngsw-worker.js")
			}).catch(e => console.log(e))
		}
	},
	[
		[0, 7, 21]
	]
]);
})();
