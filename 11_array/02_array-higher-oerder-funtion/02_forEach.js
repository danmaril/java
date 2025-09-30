/**
 * forEach: 배열의 각 요소에 대해 콜백함수를 실행합니다.
 * 반환 값을 없습니다.
 */

const names = ['horan', 'gila', 'wolf']

// for 반복문
for(let i = 0; i< names.length; i++) {
    console.log(names[i])
};

// forEach 버전
names.forEach(name => console.log(name));
// names.forEach(function(names){
//     console.log(names);
// });

// 콜백 함수는 요소의 값, 인덱스, 배열 자체를 인자로 받을 수 있다.
names.forEach((name, index, array) => {
    console.log(`[${array}] 중에 ${index + 1}번째 이름: ${name}`);
})