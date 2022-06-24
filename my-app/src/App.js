import React from 'react';

import HomePage from './Page/HomePage';
import PracticePage from './Page/PracticePage';
import ContextPage from './Page/ContextPage';
import DoitReactPage from './Page/DoitReactPage';
import ToDosPage from './Page/ToDosPage';
import Header from './Component/Header';
import CoinPage from './Page/CoinPage';
import MoviePage from './Page/MoviePage';
import UseMemoPracticePage from './Page/UseMemoPracticePage';
import ReduxPracticePage from './Page/ReduxPracticePage';

import HeaderinDoit from './Pages/Header';
import Home from './Pages/Home';
import Example3Page from './Pages/Example3Page';

import Detail from './Component/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/webSite-React-JS/" element={<HomePage />} />
					<Route path="/webSite-React-JS/practicepage" element={<PracticePage />} />
					<Route path="/webSite-React-JS/contextpage" element={<ContextPage />} />

					<Route path="/webSite-React-JS/doitreactpage/" element={<DoitReactPage />} />
					<Route
						path="/webSite-React-JS/doitreactpage/03page"
						element={<Example3Page />}
					/>
					{/* <Route path="/webSite-React-JS/doitreactpage/Home" element={<Home />} /> */}

					{/* <Route path="/03page" element={<Example3Page />} />
					<Route path="/04page" element={<Example4Page />} />
					<Route path="/05page" element={<Example5Page />} />
					<Route path="/axiosexamplepage" element={<AxiosExamplePage />} />
					<Route path="/material" element={<MaterialUI01 />} /> */}
					<Route
						path="/webSite-React-JS/usememopractice"
						element={<UseMemoPracticePage />}
					/>
					<Route path="/webSite-React-JS/todospage" element={<ToDosPage />} />
					<Route path="/webSite-React-JS/coinpage" element={<CoinPage />} />
					<Route path="/webSite-React-JS/moviepage" element={<MoviePage />} />
					<Route path="/webSite-React-JS/moviepage/:id" element={<Detail />} />
					{/* /:id 이 아니고 /id 라고 해주면 그냥 Text 형태로 나오게 됨
					변수로 계속 쓸 거니까 :id  해야한다 */}
					<Route
						path="/webSite-React-JS/reduxpracticepage"
						element={<ReduxPracticePage />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
