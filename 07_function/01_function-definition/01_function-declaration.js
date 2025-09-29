/** 1. 함수 선언문 */

// 함수 선언문에서는 함수의 이름을 생략할 수 없다.
function hello(name) {
    return `${name}님 안녕하세요 !`
}



// 함수 호출
console.log(hello('이정웅'));

/** 2. 함수 표현식 */

// 함수 표현식에서는 함수명을 생략할 수 있다.
var hi = function(name){
    return `${name} 안녕~`
}
console.log(hi('luz'));

var dog = {
    name : '몽실이',
    eat : function(food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹어요.`);  // 위에서 출력문이 정리되어 아래서 출력이 가능하다./
    }
}

// 함수 표현식에서 함수명을 생략하지 않아도 문제는 없다.
var calc = function add(a, b) {
    return a + b ;
}
// 단, 함수 호출은 식별자로 이루어진다.
console.log(calc(10, 20));

//console.log(add(10, 20)); //ReferenceError: add is not defined/
