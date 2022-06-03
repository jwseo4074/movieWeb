import CatInfo from '../Component/CatInfo';
import React, { useState, useEffect, useMemo } from 'react';
import UseCalculate from '../Component/UseCalculate';
import UseCalculateWithMemo from '../Component/UseCalculateWithMemo';

function UseMemoPracticePage() {
	const [count, setCount] = useState(0);
	// 카운트는 메모 안해줬음 => 그냥 렌더링 확인용
	const [age, setAge] = useState(1);
	// age는 메모 해줬음 => useMemo를 사용해줬을 때 렌더링 확인용

	function plusCOunt() {
		setCount(count => count + 1);
	}

	function plusAge() {
		setAge(age => age + 1);
	}

	const [num, setNum] = useState(0);
	const [isFront, setIsFront] = useState(true);

	// const developer = isFront ? '프론트엔드' : '백엔드';
	const developer = {
		field: isFront ? '프론트엔드' : '백엔드',
	};

	useEffect(() => {
		console.log('render3');
	}, [isFront]);

	// const developer = useMemo(() => {
	// 	return {
	// 		field: isFront ? '프론트엔드' : '백엔드',
	// 	};
	// }, [isFront]);

	const [numA, setNumA] = useState(0);
	const [numB, setNumB] = useState(0);

	return (
		<>
			<div style={{ padding: '40px' }}>
				<CatInfo name="서지원 닮은 고양이" age={age} />
				{console.log('render1')}
				<button onClick={plusCOunt} style={{ marginTop: '20px' }}>
					카운트: {count}
				</button>
				<br />
				<button onClick={plusAge} style={{ marginTop: '20px' }}>
					나이: {age}
				</button>
			</div>
			<hr />
			<div style={{ padding: '40px' }}>
				<h2> 얼마나 공부했는데 ? </h2>
				<input
					type="number"
					value={num}
					onChange={e => {
						setNum(e.target.value);
					}}
				/>

				<h2> 뭘 공부하는데 ? </h2>
				{/* <p> {developer}</p> */}
				<p> {developer.field} </p>

				<button onClick={() => setIsFront(!isFront)}> 질린다.. 바꿔 !!!! </button>
			</div>

			<div style={{ padding: '40px' }}>
				<input
					type="number"
					value={numA}
					onChange={e => {
						setNumA(e.target.value);
					}}
				/>
				<input
					type="number"
					value={numB}
					onChange={e => {
						setNumB(e.target.value);
					}}
				/>
				<hr />
				<p>useEffect 사용 </p>
				<UseCalculate numA={numA} numB={numB} />
				<hr />
				<p>useMemo 사용</p>
				<UseCalculateWithMemo numA={numA} numB={numB} />
			</div>
		</>
	);
}
export default UseMemoPracticePage;
