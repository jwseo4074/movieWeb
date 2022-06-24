// 배열 병합

let array1 = ['one', 'two'];
let array2 = ['three', 'four'];

const combined = [...array1, ...array2];
// 결과 : combined = ['one', 'two', 'three', 'four']

const [ first, second, three = "empty", ...others ] = array1;
// first = 'one' , second ='two', three = 'empty', others = []

// 객체 병합

let objectOne = { one : 1, two : 2, other : 0};
let objectTwo = { three : 3, four : 4, other : -1};

let combined2 = { 
    ...objectOne,
    ...objectTwo,
};
//combined2 = {one : 1, two : 2, other : 0, three : 3, four : 4, other : -1};

let combined3 = { 
    ...objectTwo,
    ...objectOne,
};
//combined2 = {one : 1, two : 2, three : 3, four : 4, other : 0};
// => 두 객체를 병합할 때 중복된 키 값들은 마지막에 사용한 객체의 값으로 덮어쓴다.

let { other, ...others2} = combined3;
// others = {one : 1, two : 2, three : 3, four : 4}
// => 객체에서 특정 값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others2)에 할당 가능