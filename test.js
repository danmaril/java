test : for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (j === 10) {
            continue;
        }
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

function dog(name){
    return `강아지의 이름은 ${name} 입니다.`
}

console.log(dog('몽실이'));


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

var int = {
    age : '30',
    name : 'luz',
    hobby : function(hob) {
        console.log(`저의 이름은 ${this.name}이며, 나이는 ${this.age}입니다. 취미는 ${hob}입니다. `)
    }
    // tool : function(eat) {
    //     console.log(`이 ${this.act}의 이름은 ${eat}입니다.`)
    // }
}

int.hobby('음악듣기');