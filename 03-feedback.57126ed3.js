var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const l={email:document.querySelector('[name="email"]'),massege:document.querySelector('[name="message"]'),formEl:document.querySelector(".feedback-form")};l.formEl.addEventListener("input",(0,a.throttle)((function(){const e={email:l.email.value,massege:l.massege.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),500);const n=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");n&&(l.email.value=n.email,l.massege.value=n.massege),l.formEl.addEventListener("submit",(e=>{e.preventDefault(),console.log(n),l.formEl.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.57126ed3.js.map