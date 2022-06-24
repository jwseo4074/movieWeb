import React from 'react';
import { useState } from 'react';

import MyComponent from '../Main/PracticeExample/03/MyComponent';
import ChildComponent2 from '../Main/PracticeExample/03/ChildComponent2';
import DefaultPropsComponennt from '../Main/PracticeExample/03/DefaultPropsComponent';
import ChildProperty from '../Main/PracticeExample/03/ChildProperty';
import Counter from '../Main/PracticeExample/03/Counter';
import ListExample from '../Main/PracticeExample/03/ListExample';
import TodoList from '../Main/PracticeExample/03/TodoList';
import CounterApp from '../Main/PracticeExample/03/CounterApp';

function Example3Page() {
	const [count, setCount] = useState(1);

	function increaseCount() {
		setCount(count => count + 1);
	}
	function decreaseCount() {
		setCount(count => count - 1);
	}
	function resetCount() {
		setCount(1);
	}

	return (
		<React.Fragment>
			<MyComponent />
			<ChildComponent2
				objValue={{ age: 20, name: '지원' }}
				//  age 문자열로 값 주면 경고문 나옴
				requiredStringValue="문자"
				// 필수 프로퍼티 값 안주면 경고문 나옴
			/>
			<DefaultPropsComponennt />
			<ChildProperty>
				<div>
					<span>자식 노드</span>
				</div>
			</ChildProperty>
			<Counter />
			<ListExample />
			<TodoList />

			<CounterApp
				count={count}
				onAdd={increaseCount}
				onMinus={decreaseCount}
				onReset={resetCount}
			/>
		</React.Fragment>
		// <h1>
		//     Hello This is 03 page
		// </h1>
	);
}

export default Example3Page;
