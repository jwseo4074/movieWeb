import React from 'react';
import HomePage from './HomePage';
import PracticePage from './PracticePage';
import ToDosPage from './ToDosPage';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<>
			<Link to="/">
				<button>Home</button>
			</Link>

			<Link to="/practicepage">
				<button>PracticePage</button>
			</Link>

			<Link to="/todospage">
				<button>ToDosPage</button>
			</Link>
			<br />
			<br />
			<hr />
		</>
	);
}

export default Header;
