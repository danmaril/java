const foods = ['jajamen', 'sandwhich', 'udon', 'ramen']
console.log(foods);

// push(): 맨 뒤에 값 추가하기
foods.push('tansu');
foods.push('gomtan');
console.log(`push 후: ${foods}`);

// pop(): 맨 뒤 값 떼어내기
foods.pop();
console.log(`pop 한번: ${foods}`);  // 제거한 값을 반환한다. //'tansu'
foods.pop();
console.log(`pop 두번: ${foods}`);

/**
 * unshift(): 맨 앞에 값을 추가한다.
 * shift(): 맨 앞 값을 제거한다.
 */
foods.unshift('hurai');
foods.unshift('gosu');
console.log(`unshift 후: ${foods}`);

foods.shift();
console.log(`shift 후 ${foods}`);

/**
 * indexOf(값): 특정 값이 있는 '첫 번째 인덱스'를 알려준다. 없으면 -1을 반환한다.
 * includes(값): 특정 값이 있는지 여부만 true/false로 알려준다.
 */

foods.push('jajamen')
console.log(foods);

console.log(foods.indexOf('jajamen'))
console.log(foods.indexOf('doncatu'))

console.log(foods.includes('sandwhich'))
console.log(foods.includes('sam'))

// MDN(Mozilla Developer Network)에서 'Array' 검색하면 모든 메서드 설명을 볼 수 있다.