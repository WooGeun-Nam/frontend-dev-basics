/* 
 * Date 객체 함수(Date.prototype.*) 
 * 
*/

// 현재 시간
var now = new Date();
console.log(now);

// 2023년 2월 23일
var d1 = new Date(2023, 1/* 2 - 1 */, 23);
console.log(d1);

// 2023년 2월 23일 22:22:22
var d1 = new Date(2023, 1, 23, 22, 22, 22);
console.log(d1);