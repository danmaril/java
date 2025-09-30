function hello(name) {  // 매개변수

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 포로퍼티로 보괁된다.
    // console.log(arguments); // 가변인자 함수 구현 시 유용하게 사용 된다.

    return `${name}님 안녕하세요 !`;
}

result = hello('hia', 'luz', 'lee');
console.log(result);


//////////////////
var sayHello = function() {
    console.log('안녕!!')
}

const pra = function() {
    console.log(1)
}

function manager(task, count) {
    console.log(`오늘의 업무입니다.`);
    for(let i = 0; i < count; i++){
        task();
    }
    return function(){
        console.log(`오늘의 업무가 종료되었습니다.`)
    }
}

var report = manager(pra, 3);

// manager 함수가 반환한 새로운 함수를 실행
report();

const res = (function(){
    let a = 10;
    let b = 20;
    return a + b;
})()

console.log(res)


function calculator(calculateCallback, a, b){
    console.log(`계산을 시작합니다`);
    const result = calculateCallback(a, b);
    return(result);
}

function add(a, b){
    return a + b;
}

const addResult = calculator(add, 10, 4);
console.log(`덧셈 결과:`, addResult);

