import React from 'react';

import HomePage from './Page/HomePage';
import PracticePage from './Page/PracticePage';
import ToDosPage from './Page/ToDosPage';
import Header from './Header';
import CoinPage from './Page/CoinPage';
import MoviePage from './Page/MoviePage';
import Detail from './Component/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<h1> This is website that useing React JS for study purposes </h1>
				<h2> Choose one of the categories 🤓 </h2>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/practicepage" element={<PracticePage />} />
					<Route path="/todospage" element={<ToDosPage />} />
					<Route path="/coinpage" element={<CoinPage />} />
					<Route path="/moviepage" element={<MoviePage />} />
					<Route path="/moviepage/:id" element={<Detail />} />
					{/* /:id 이 아니고 /id 라고 해주면 그냥 Text 형태로 나오게 됨
					변수로 계속 쓸 거니까 :id  해야한다 */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
