// import './App.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
// import {  Link, Route, Routes, Router} from 'react-router-dom';
// 이건 안돼
import '../Style/PageStyle/DoitReactPage.css';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//  이건 돼
// import { useMatch } from 'react-router-dom';

import Home from '../Pages/Home';
import Example3Page from '../Pages/Example3Page';
import Example4Page from '../Pages/Example4Page';
import Example5Page from '../Pages/Example5Page';
import MaterialUI01 from '../Main/Material_UI/materialUI01';
import AxiosExamplePage from '../Pages/AxiosExamplePage';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function DoitReactPage() {
	const [nowpage, setNowpage] = useState();
	const [homepage, setHomepage] = useState(true);
	const [page3, setPage3] = useState(false);
	const [page4, setPage4] = useState(false);
	const [page5, setPage5] = useState(false);
	const [matirialpage, setMatirialpage] = useState(false);
	const [axiosexamplepage, setAxiosexamplepage] = useState(false);

	function onClick_homepage() {
		setHomepage(true);
		setPage3(false);
		setPage4(false);
		setPage5(false);
		setMatirialpage(false);
		setAxiosexamplepage(false);
	}
	function onClick_03page() {
		setHomepage(false);
		setPage3(true);
		setPage4(false);
		setPage5(false);
		setMatirialpage(false);
		setAxiosexamplepage(false);
	}
	function onClick_04page() {
		setHomepage(false);
		setPage3(false);
		setPage4(true);
		setPage5(false);
		setMatirialpage(false);
		setAxiosexamplepage(false);
	}
	function onClick_05page() {
		setHomepage(false);
		setPage3(false);
		setPage4(false);
		setPage5(true);
		setMatirialpage(false);
		setAxiosexamplepage(false);
	}
	function onClick_matirialpage() {
		setHomepage(false);
		setPage3(false);
		setPage4(false);
		setPage5(false);
		setMatirialpage(true);
		setAxiosexamplepage(false);
	}
	function onClick_axiosexamplepage() {
		setHomepage(false);
		setPage3(false);
		setPage4(false);
		setPage5(false);
		setMatirialpage(false);
		setAxiosexamplepage(true);
	}

	useEffect(() => {
		if (homepage === true) {
			setNowpage(<Home />);
		}
		if (page3 === true) {
			setNowpage(<Example3Page />);
		}
		if (page4 === true) {
			setNowpage(<Example4Page />);
		}
		if (page5 === true) {
			setNowpage(<Example5Page />);
		}
		if (matirialpage === true) {
			setNowpage(<MaterialUI01 />);
		}
		if (axiosexamplepage === true) {
			setNowpage(<AxiosExamplePage />);
		}
	}, [homepage, page3, page4, page5, matirialpage, axiosexamplepage]);

	return (
		<div style={{ padding: '40px' }}>
			<div id="headerDivinDoit">
				<button className="headerDivBtninDoit" onClick={onClick_homepage}>
					{' '}
					Home{' '}
				</button>
				<button className="headerDivBtninDoit" onClick={onClick_03page}>
					{' '}
					03 Page{' '}
				</button>
				<button className="headerDivBtninDoit" onClick={onClick_04page}>
					04 page
				</button>
				<button className="headerDivBtninDoit" onClick={onClick_05page}>
					05 page
				</button>
				<button className="headerDivBtninDoit" onClick={onClick_matirialpage}>
					{' '}
					Material
				</button>
				<button className="headerDivBtninDoit" onClick={onClick_axiosexamplepage}>
					{' '}
					Axios
				</button>
			</div>
			<div>{nowpage}</div>
			{/* <Link to="/webSite-React-JS/doitreactpage/03page">
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
			</Link> */}

			{/* <HeaderinDoit />
			<Route path="/webSite-React-JS/doitreactpage/Home" element={<Home />}></Route> */}
			{/* <Route path="/webSite-React-JS/doitreactpage/03page" element={<Example3Page />} /> */}
			{/* <Route path="/webSite-React-JS/doitreactpage/03page" element={<Example3Page />} />
				<Route path="/04page" element={<Example4Page />} />
				<Route path="/05page" element={<Example5Page />} />
				<Route path="/axiosexamplepage" element={<AxiosExamplePage />} />
				<Route path="/material" element={<MaterialUI01 />} /> */}
		</div>
	);
}

export default DoitReactPage;
