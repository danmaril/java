/**
 * 생성자 함수
 */

const student1 = {
    name : 'pan',
    age : 5,
    getInfo : function(){
        return `${this.name}는 ${this.age}세 입니다.`
    }
}

const student2 = {
    name : 'koa',
    age : 6,
    getInfo: function(){
        return `${this.name}는 ${this.age}세 입니다.`
    }
}

/////////////////////////////////////////////////////////////
// 생성자 함수는 일반 함수와 구분하기 위해 첫 글자를 대문자로 작성하는 것이 관례이다.
// this는 적용할 예정의 객체를 묶어주는 역할이다.

function Student(name, age){
    // this는 앞으로 '생성될 객체(인스턴스)'를 가리키는 키워드이다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}는 ${this.age}세 입니다`;
    }
}

// 'new' 키워드를 사용하여 설계도로부터 실제 객체(인스턴스)를 생성한다.
const student3 = new Student('hon', 2);
const student4 = new Student('gill', 4);


console.log(student2);
console.log(student4.getInfo());

