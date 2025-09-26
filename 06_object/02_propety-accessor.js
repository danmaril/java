/**
 * 
 */

var dog = {
    name : '몽실이',
    eat : function(food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹어요.`);  // 위에서 출력문이 정리되어 아래서 출력이 가능하다./
    }
}

// 마침표 표기법
console.log(dog.name);
dog.eat('개껌');        // 출력 방식 질문

// 대괄호 표기법 - 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용한다.
console.log(dog['name']);
dog['eat']('간식')

// key가 변수에 담겨 있을 때
var propName = 'name';

// dog.propName 이라고 끄면 'propName' 이라는 키를 찾으려고 한다. (undefined)
// 변수에 담긴 키 값을 이용해 동적으로 프로퍼티에 접근할 때 유용하게 쓰인다.
console.log(dog[propName])  //dog['name'] 과 같음

// in 연산자
// 프로퍼티 '존재' 여부 확인하기

console.log("name" in dog);
console.log('age' in dog);

// for in 반복문
// 객체의 모든 프로퍼티 키 순회
for (var key in dog) {              
    console.log(`key : ${key}`);                // 프로퍼티 키
    console.log(`dog[${key}] : ${dog[key]}`);   // 키에 해당하는 값
    // dog.key 라고 쓰면 'key' 라는 이름의 프로퍼티 키를 찾으려 해서 안된다.
}