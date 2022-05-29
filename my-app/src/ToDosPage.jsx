import React from 'react';
import { useState, useEffect } from 'react';

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
		<>
			<form onSubmit={onSubmitForm}>
				<input onChange={onChangeInput} type="text" value={toDo} placeholder="Here !!" />
				<button>Add list</button>
			</form>

			<h1>Todos List</h1>
			<hr />
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default ToDosPage;
