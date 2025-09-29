/**
 * ED5까지 사용된 var 키워드는 세 가지 주요 문제점을 가지고 있다.
 */

// 1. 변수 중복 선언 허용 -> 코드의 신뢰성 하락
var msg = '안녕하세요';
console.log(msg);

// 같은 이름으로 변수를 또 선언해도 에러가 발생하지 않음
var msg = '안녕히가세요';
console.log(msg);

// 2. 함수 레벨 스코프 -> 의도치 않은 변수 오염
var i = 100; // 중요한 전역 변수

for (var i = 0; i < 5; i++){
    console.log('for 문 내부의 i:', i);
}

console.log('for 문 바깥의 i:', i);


// 3. 변수 호이스팅 현상 -> 코드의 가독성 및 예측 가능성 저하
console.log(test);  // 원래는 not find 에러가 떠야된다. 하지만 출력: undefined


test = '반갑'
var test;    // 선언이 가장 위로 끌어올려진 것처럼 동작함

console.log(test);  // undefined <