import React, { useMemo } from 'react';

const CatInfo = ({ name, age }) => {
	function checkRerender() {
		console.log('render2');
	}

	const memo = useMemo(checkRerender, [name, age]);
	// 뒤에 인자인 name이나 age가 변경되지 않는 이상 checkRerender 함수가 실행되지 않는다.
	// 둘 중에 하나라도 변경이 있으면 함수가 실행이 된다.

	return (
		<div>
			<div>이름: {name}</div>
			<div>나이: {age}</div>
		</div>
	);
};

export default CatInfo;
