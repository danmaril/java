/**
 * 매개변수(parameter)와 인수(argument)
 */

// 함수 선선문
function hello(name) {  // 매개변수

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 포로퍼티로 보괁된다.
    console.log(arguments); // 가변인자 함수 구현 시 유용하게 사용 된다.

    return `${name}님 안녕하세요 !`;
}

// console.log(name); ReferenceError : name is not defined

var result = hello('luz'); // 전달하는 값을 '인수(arugument)'라고 한다.
console.log(result);

// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined이다.
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
result = hello('hia', 'luz', 'lee');
console.log(result);

function hi(name = '호랑이') {
    // 인수를 전달하지 않았을 경우, ES6에서 도입된 매개변수 기본값을 사용할 수 있다.
    return `${name} 안녕~`
}

result = hi();
console.log(result);