// map: 배열의 모든 요소에 대해 콜백 함수를 호출하고, 그결과를 모아 '새로운 배열'을 만든다.
const numbers = [1, 2, 3, 4, 5];

// 각 숫자를 제곱한 새로운 배열 만들기
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);
console.log(numbers);   // 원본 배열에는 영향을 주지 않는다.

// 객체 배열에서 이름만 뽑아 새로운 배열 만들기
const students = [
    { name: 'hon', score: 90},
    { name: 'ryu', score: 70}
]

const studentNames = students.map(student => student.name)
console.log(studentNames);