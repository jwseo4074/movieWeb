import React from 'react';
import { Link } from 'react-router-dom';

import '../Style/ComponentStyle/Header.css';

function Header() {
	return (
		<div id="headerDiv">
			<Link to="/webSite-React-JS/">
				<button className="headerDivBtn"> Home </button>
			</Link>

			<Link to="/webSite-React-JS/practicepage">
				<button className="headerDivBtn"> 이론 내용 기록 </button>
			</Link>

			<Link to="/webSite-React-JS/doitreactpage">
				<button className="headerDivBtn"> do-it React 실습 코드 </button>
			</Link>

			<Link to="/webSite-React-JS/contextpage">
				<button className="headerDivBtn"> context 실습 </button>
			</Link>

			<Link to="/webSite-React-JS/reduxpracticepage">
				<button className="headerDivBtn"> redux 실습 </button>
			</Link>

			<Link to="/webSite-React-JS/todospage">
				<button className="headerDivBtn"> todo 실습 </button>
			</Link>

			<Link to="/webSite-React-JS/coinpage">
				<button className="headerDivBtn"> coin Page </button>
			</Link>

			<Link to="/webSite-React-JS/moviepage">
				<button className="headerDivBtn"> movie Page </button>
			</Link>

			<Link to="/webSite-React-JS/usememopractice">
				<button className="headerDivBtn"> useMemo 실습</button>
			</Link>
		</div>
	);
}

export default Header;
