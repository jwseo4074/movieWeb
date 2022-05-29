import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div id="headerDiv">
			<Link to="/">
				<button> Home </button>
			</Link>

			<Link to="/practicepage">
				<button> Practice Page </button>
			</Link>

			<Link to="/todospage">
				<button> ToDos Page </button>
			</Link>

			<Link to="/coinpage">
				<button> Coin Page </button>
			</Link>
			<br />
			<br />
			<hr />
		</div>
	);
}

export default Header;
