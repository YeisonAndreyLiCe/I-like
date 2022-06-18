var countLike1 = 9;
var countLike2 = 12;
var countLike3 = 9;

var countL1 = document.querySelector(".like_count1");
var countL2 = document.querySelector(".like_count2");
var countL3 = document.querySelector(".like_count3");


function sum1() {
    countLike1++;
    countL1.innerText = countLike1 + "like(s)";
}
function sum2() {
    countLike2++;
    countL2.innerText = countLike2 + "like(s)";
}
function sum3() {
    countLike3++;
    countL3.innerText = countLike3 + "like(s)";
}
