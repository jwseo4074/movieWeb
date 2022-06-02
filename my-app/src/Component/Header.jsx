import React from 'react';
import { Link } from 'react-router-dom';

import '../Style/ComponentStyle/Header.css';

function Header() {
	return (
		<div id="headerDiv">
			<Link to="/">
				<button className="headerDivBtn"> Home </button>
			</Link>

			<Link to="/practicepage">
				<button className="headerDivBtn"> Practice Page </button>
			</Link>

			<Link to="/todospage">
				<button className="headerDivBtn"> ToDos Page </button>
			</Link>

			<Link to="/coinpage">
				<button className="headerDivBtn"> Coin Page </button>
			</Link>

			<Link to="/moviepage">
				<button className="headerDivBtn"> Movie Page </button>
			</Link>

			<Link to="/usememopractice">
				<button className="headerDivBtn"> useMemo </button>
			</Link>
		</div>
	);
}

export default Header;
