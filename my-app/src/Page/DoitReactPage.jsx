// import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

// import {  Link, Route, Routes, Router} from 'react-router-dom';
// 이건 안돼

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//  이건 돼
import { useMatch } from 'react-router-dom';

import HeaderinDoit from '../Pages/Header';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Example3Page from '../Pages/Example3Page';
import Example4Page from '../Pages/Example4Page';
import Example5Page from '../Pages/Example5Page';
import MaterialUI01 from '../Main/Material_UI/materialUI01';
import AxiosExamplePage from '../Pages/AxiosExamplePage';
import { useNavigate } from 'react-router-dom';

function DoitReactPage() {
	let navigate = useNavigate();

	function handleClick() {
		navigate('/webSite-React-JS/doitreactpage/03page');
	}

	return (
		<div>
			<h1>.</h1>
			<button type="button" onClick={handleClick}>
				Go home
			</button>
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

			{/* <HeaderinDoit />
			<Route path="/webSite-React-JS/doitreactpage/Home" element={<Home />}></Route> */}
			{/* <Route path="/webSite-React-JS/doitreactpage/03page" element={<Example3Page />} /> */}
			{/* <Route path="/webSite-React-JS/doitreactpage/03page" element={<Example3Page />} />
				<Route path="/04page" element={<Example4Page />} />
				<Route path="/05page" element={<Example5Page />} />
				<Route path="/axiosexamplepage" element={<AxiosExamplePage />} />
				<Route path="/material" element={<MaterialUI01 />} /> */}
		</div>

		// {/* <Route exact path="/" component={Home}/> */}
		// {/* <Switch>
		//     <Route path="/about/:name" component={About}/>
		//     <Route path="/about" component={About}/>
		// </Switch> */}
		// {/* <Route path="/about/:name" component={About}/>
		// <Route path="/about" component={About}/> */}
	);
}

export default DoitReactPage;
