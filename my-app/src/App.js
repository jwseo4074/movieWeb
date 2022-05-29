import React from 'react';

import HomePage from './HomePage';
import PracticePage from './PracticePage';
import ToDosPage from './ToDosPage';
import Header from './Header';
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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
