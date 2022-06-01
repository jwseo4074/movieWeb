import React from 'react';
import { useState } from 'react';
import '../Style/PageStyle/ToDosPage.css';

const ToDosPage = () => {
	const [toDo, setToDo] = useState('');
	const [toDos, setToDos] = useState([]);

	const onChangeInput = event => {
		// console.log(event.target.value);
		setToDo(toDo => event.target.value);
	};

	const onSubmitForm = event => {
		event.preventDefault();
		if (toDo === '') {
			return;
		}

		setToDos(currentArray => [toDo, ...currentArray], []);
		setToDo('');
	};
	// useEffect(console.log(toDo), [toDo]);

	return (
		<div id="ToDosPageDiv">
			<h2 id="ToDosAtag">
				{' '}
				Vanila JS로 구현한 Todo List :{' '}
				<a href="https://jwseo4074.github.io/todoList-Vanila-JS/"> zwon's Todo List</a>
			</h2>

			<form onSubmit={onSubmitForm}>
				<input onChange={onChangeInput} type="text" value={toDo} placeholder="Here !!" />
				<button>Add list</button>
			</form>

			<div>
				<h1> Todos List</h1>

				<ul>
					{toDos.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ToDosPage;
