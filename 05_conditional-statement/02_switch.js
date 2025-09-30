/**
 * 조건문: switch문
 * 하나의 변수에 대해 여러 경우를 처리합니다.
 */


// 하나가 아닌 여러개의 그룹중에 하나를 선택할경우는?
let fruit = 'mango'

switch(fruit) {
    case 'apple' :
        console.log('선택한 과일은 사과입니다');
        break;
    case 'banana' :
        console.log('선택한 과일은 바나나 입니다');
        break;
    case 'mango', 'apple mango' :                // A , B :  
        console.log('선택한 과일은 망고입니다');
        break;
    default:
        console.log('알 수 없는 과일입니다.') // 위 조건에 행당하지 않을 때 실행
}

