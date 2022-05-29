import React from 'react';

import HomePage from './Page/HomePage';
import PracticePage from './Page/PracticePage';
import ToDosPage from './Page/ToDosPage';
import Header from './Header';
import CoinPage from './Page/CoinPage';
import MoviePage from './Page/MoviePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/practicepage" element={<PracticePage />} />
					<Route path="/todospage" element={<ToDosPage />} />
					<Route path="/coinpage" element={<CoinPage />} />
					<Route path="/moviepage" element={<MoviePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
