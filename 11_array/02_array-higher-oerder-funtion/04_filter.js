// filter: 배열의 모든 요소에 대해 콜백 함수를 호출하고, 
// 그 결과가 true인 요소만으로 '새로운 배열'을 만든다.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 걸러내기
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const students = [
    { name: 'hon', score: 95},
    { name: 'ryu', score: 70}
]

const highScores = students.filter(student => student.score >= 90);
console.log(highScores)