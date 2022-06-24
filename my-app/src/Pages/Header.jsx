import React from 'react';
import { Link } from 'react-router-dom';

function HeaderinDoit() {
	return (
		<>
			<Link to="/webSite-React-JS/doitreactpage/Home">
				<button>Home</button>
			</Link>

			<Link to="/webSite-React-JS/doitreactpage/03page">
				<button>03 page</button>
			</Link>
			<Link to="/04page">
				<button>04 page</button>
			</Link>
			<Link to="/05page">
				<button>05 page</button>
			</Link>

			<Link to="/material">
				<button> Material page</button>
			</Link>

			<Link to="/axiosexamplepage">
				<button> AxiosExamplePage</button>
			</Link>
			<hr></hr>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/03page">03 Page</Link>
				</li>
			</ul>
			<hr />
		</>
	);
}

export default HeaderinDoit;
