"use strict";
const timeElm = document.getElementById("Time");
const startBtnElm = document.getElementById("startBtn");
startBtnElm === null || startBtnElm === void 0 ? void 0 : startBtnElm.addEventListener("click", () => {
    let interval = setInterval(showTime, 1000);
    function showTime() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const time = `${hour}:${minute}:${second}`;
        if (timeElm) {
            timeElm.innerHTML = time;
        }
    }
});
