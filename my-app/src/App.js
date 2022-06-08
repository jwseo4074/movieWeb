import React from 'react';

import HomePage from './Page/HomePage';
import PracticePage from './Page/PracticePage';
import ToDosPage from './Page/ToDosPage';
import Header from './Component/Header';
import CoinPage from './Page/CoinPage';
import MoviePage from './Page/MoviePage';
import UseMemoPracticePage from './Page/UseMemoPracticePage';
import ReduxPracticePage from './Page/ReduxPracticePage';

import Detail from './Component/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/webSite-React-JS/" element={<HomePage />} />
					<Route path="/practicepage" element={<PracticePage />} />
					<Route path="/usememopractice" element={<UseMemoPracticePage />} />
					<Route path="/todospage" element={<ToDosPage />} />
					<Route path="/coinpage" element={<CoinPage />} />
					<Route path="/moviepage" element={<MoviePage />} />
					<Route path="/moviepage/:id" element={<Detail />} />
					{/* /:id 이 아니고 /id 라고 해주면 그냥 Text 형태로 나오게 됨
					변수로 계속 쓸 거니까 :id  해야한다 */}
					<Route path="/reduxpracticepage" element={<ReduxPracticePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
