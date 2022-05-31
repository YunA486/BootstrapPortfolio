'use strict';
var countDown = new Date("JUNE 23, 2022 23:59:59").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("count").innerHTML = "<font color=#ffffff size=6><b>" +
        days + "</font>일&nbsp;<font color=#ffffff size=6>" +
        hours + "</font>시간&nbsp;<font color=#ffffff size=6>" +
        minutes + "</font>분&nbsp;<font color=#ffffff size=6>" +
        seconds + "</font>초</b>";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "카운트 다운 종료"
    }
}, 1000);