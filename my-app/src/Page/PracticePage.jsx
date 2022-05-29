import React from 'react';
import { useState, useEffect } from 'react';

const PracticePage = () => {
	const [keyword, setKeyword] = useState('');
	const [counter, setCounter] = useState(0);
	const [showing, setShowing] = useState(false);

	const btnClickFunc = () => {
		setCounter(counter => counter + 1);
	};

	const inputChangeFunc = event => {
		setKeyword(event.target.value);
	};

	const checkShowingState = () => {
		setShowing(prev => !prev);
	};

	const Hello = () => {
		useEffect(() => {
			console.log('created component ');
			return () => console.log('destroyed component');
		}, []);
		// 이건 웹이 처음 렌더링 될 때는 안나오겠지, 왜냐면? 처음 값 셋팅이 false 니까
		// 토글이 되면서 다시 Hello가 불릴 때 마다 한번만 실행 되겠지
		// 이게 바로 컴포넌트의 생성(create), 소멸(destroy)
		return <h1> toggle On </h1>;
	};

	console.log('hello');
	// counter 클릭해도 이거 나오고 keyword 바껴도 이거 나와
	// 왜 ? state가 바뀌면서 이게 통째로 다시 렌더링 되거든 그걸 막아주려고 useEffect 하는거야

	// 결론적으로 hello는 뭐가 바뀔 때 마다 그게 뭐든간에 무조건 실행

	useEffect(() => {
		console.log('hello i am useEffect from counter ');
	}, [counter]);

	useEffect(() => {
		if (keyword.length >= 5) {
			// 5자리 이상이여야 됨
			console.log('hello i am useEffect from keyword ');
		}
	}, [keyword]);
	// 키워드에 아무것도 없는데도 실행되잖아? => 조건 걸어주자

	useEffect(() => {
		console.log('hello i am useEffect from counter, keyword ');
	}, [counter, keyword]);

	return (
		<div id="practicePageDiv">
			<p>
				* console.log("hello"); <br />= {'>'} counter 클릭해도 이거 나오고 keyword 바껴도
				이거 나와 <br />= {'>'} 왜 ? state가 바뀌면서 이게 통째로 다시 렌더링 되거든 그걸
				막아주려고 useEffect 하는거야 <br />= {'>'} 결론적으로 hello는 뭐가 바뀔 때 마다
				그게 뭐든간에 무조건 실행 <br />
			</p>{' '}
			<hr />
			<p>
				{' '}
				* Another thing that React Strict Mode does is run certain callbacks/methods twice
				(in DEV mode ONLY).
			</p>{' '}
			<hr />
			<p>
				* useEffect : [] 으로 인자 주면 웹 처음 렌더링 될 때 딱 한번만 실행되고 그 뒤론 절대
				실행 안된다, <br />={'>'} 리액트가 지켜보고 있을게 아무것도 없으니까 한번만 실행되고
				실행 x <br />={'>'} 그 괄호 [], 리액트가 쳐다보고 있는 그거를, React.DependencyList
				라고 한다.
			</p>{' '}
			<hr />
			<div>
				Counter : {counter}
				<br />
				<br />
				<button onClick={btnClickFunc}>Click !! </button>
			</div>{' '}
			<hr />
			<div>
				keyword : {keyword} <br />
				<br />
				<input
					value={keyword}
					type="text"
					onChange={inputChangeFunc}
					placeholder="Here! "
				/>
			</div>
			<hr />
			{showing ? <Hello /> : ''}
			<br />
			<button onClick={checkShowingState}> Toggle </button>
			<br />
			<p>
				useEffect ( () ={'>'} {'{'} <br />
				{'console.log'}("Helllo from useEffect !! ") <br />
				{'}'}, []); <br />
				이건 웹이 처음 렌더링 될 때는 안나오겠지, 왜냐면? 처음 값 셋팅이 false 니까 <br />
				토글이 되면서 다시 Hello가 불릴 때 마다 한번만 실행 되겠지 <br />
				이게 바로 컴포넌트의 생성(create), 소멸(destroy) <br />
				숨기는 게 아니라 아예 없애는거야 <br />
				<br />
				만약에 소멸(destroy) 될 때도 뭔가를 출력해주고 싶다!! 그럼 어떻게 해줘야 할까?{' '}
				<br />={'>'} CleanUp Function 이라고 한다. useEffect 가 끝날 때 함수를 리턴해주기
			</p>
		</div>
	);
};

export default PracticePage;
