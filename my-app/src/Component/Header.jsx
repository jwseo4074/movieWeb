import React from 'react';
import { Link } from 'react-router-dom';

import '../Style/ComponentStyle/Header.css';

function Header() {
	return (
		<div>
			<div id="headerDiv">
				<Link to="/webSite-React-JS/">
					<button className="headerDivBtn"> Home </button>
				</Link>

				<Link to="/webSite-React-JS/practicepage">
					<button className="headerDivBtn"> 이론 내용 기록 </button>
				</Link>

				<Link to="/webSite-React-JS/usememopractice">
					<button className="headerDivBtn"> useMemo 실습</button>
				</Link>

				<Link to="/webSite-React-JS/routerpractice">
					<button className="headerDivBtn"> Router 실습</button>
				</Link>

				<Link to="/webSite-React-JS/contextpage">
					<button className="headerDivBtn"> Context 실습 </button>
				</Link>
			</div>
			<div id="headerDiv">
				<Link to="/webSite-React-JS/reduxpracticepage">
					<button className="headerDivBtn"> Redux 실습 </button>
				</Link>

				<Link to="/webSite-React-JS/doitreactpage">
					<button className="headerDivBtn"> Do-it React 실습 </button>
				</Link>

				<Link to="/webSite-React-JS/todospage">
					<button className="headerDivBtn"> Todo Page </button>
				</Link>

				<Link to="/webSite-React-JS/coinpage">
					<button className="headerDivBtn"> Coin Page </button>
				</Link>

				<Link to="/webSite-React-JS/moviepage">
					<button className="headerDivBtn"> Movie Page </button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
