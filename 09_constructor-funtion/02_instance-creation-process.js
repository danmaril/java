/**
 * 'new' 버튼을 눌렀을 때 내부에서 벌어지는 일(인스턴스 생성 과정)
 */
function Student(name, age){        // 
    // 1단계: '빈 객체'가 암묵적으로 만들어지고, this에 할당된다.
    console.log(this);  

    // 2단계: this에 할당된 빈 객체에 속성들을 추가하며 초기화 합니다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name} is ${this.age} years old.`
    }
    // 3단계: 완성된 객체(this)가 암묵적으로 반환된다.
    // 마지 ruturn this; 코드가 맨 마지막에 있는 것처럼 동작한다.
}

const student0 = new Student('hon', 20);
console.log(student0);

/**
 * 설계도를 잘못 사용했을 떄의 위험성(new 없이 호출)
 */

// new 없이 호출하면 생성자 함수가 아닌 '일발 함수'로 동작한다.

const student1 = Student('dan', 3);
console.log(student1);
// 이때 함수 안에 this는 '전역 객체(window)'를 가리키게 된다. (전역 오염)

// console.log(window.name); //'dan'

/**
 * new.target을 이용한 안전장치 설치
 */
function Dog(name, age) {

    // 이 함수가 new와 함께 '생성자'로 호출되었는지 확인한다.
    // new와 함께 호출되면 new.target은 자기 자신(Dog함수)를 가르킨다
    // new 없이 '일반 함수'로 호출되면 new.target은 undefined가 된다.
    if(!new.target) {
        console.log('new 없이 호출했네요~ new를 붙여서 다시 실행합니다.')
        return new Dog(name, age);
    }

    this.name = name;
    this.age = age;
}
// new 없이 호출해도..
const dog1 = Dog('dub', 1);
console.log(dog1);