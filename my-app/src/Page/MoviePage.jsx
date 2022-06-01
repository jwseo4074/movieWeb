import React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import Movie from '../Component/Movie';

import '../Style/PageStyle/MoviePage.css';

const MoviePage = () => {
	const [loading, setLoading] = useState(false);
	const [movieData, setMovieData] = useState([]);
	// 빈 배열로 해두지 않으면 undefined가 처음에 할당 되니까 개수를 세어줄 수가 없다 => 에러가 나옴

	const getMovies = async () => {
		try {
			const Response = await axios.get('https://www.omdbapi.com/?apikey=390bda69&s=frozen');
			console.log(Response.data.Search);
			setMovieData(Response.data.Search);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	};

	const roadMovieData = () => {
		setLoading(true);
		getMovies();
	};

	// useEffect(() => {}, [loading]);

	if (loading) {
		return <h1>loading ... </h1>;
	}

	return (
		<div id="moviePageDiv">
			{movieData.length >= 1 ? (
				<div className="movies">
					{movieData.map(movie => (
						<Movie
							key={movie.imdbID}
							movieID={movie.imdbID}
							movieTitle={movie.Title}
							movieYear={movie.Year}
							moviePoster={movie.Poster}
							movieType={movie.Type}
						/>
					))}
				</div>
			) : (
				<>
					<h1>The Movies ! </h1>
					<button id="loadMovieBtn" onClick={roadMovieData}>
						{' '}
						영화 불러오기 !{' '}
					</button>
				</>
			)}
		</div>
	);
};

export default MoviePage;
