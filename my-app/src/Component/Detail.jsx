import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// URI 안에 값을 파라미터로 쓰고 싶을 때 => useParams

const Detail = () => {
	const idOfUrl = useParams();
	// console.log('id = ', idOfUrl.id);

	const [detailInfo, setDetailInfo] = useState();

	const getMovieDetail = async () => {
		// console.log(1);
		try {
			// console.log(2);
			const Response = await axios.get(
				`https://www.omdbapi.com/?apikey=390bda69&i=${idOfUrl.id}`
			);
			// console.log(3);
			console.log('Response = ', Response);
			setDetailInfo(Response);
			// console.log(5);
		} catch (e) {
			// console.log(4);
			// console.log(e);
		}
	};

	useEffect(() => {
		// console.log('!!!!');
		getMovieDetail();
		// console.log('~~~~');
	}, []);

	return (
		<div id="Detail">
			<h1> Detail Information </h1>
			{detailInfo ? (
				<div>
					<p> Title : {detailInfo.data.Title}</p>
					<p> Year : {detailInfo.data.Year}</p>
					<p> Actors : {detailInfo.data.Actors}</p>
					<p> Director : {detailInfo.data.Director}</p>
					<p> Rated : {detailInfo.data.Rated}</p>
					<p> Released : {detailInfo.data.Released}</p>
					<p> Runtime : {detailInfo.data.Runtime}</p>
				</div>
			) : (
				<h1> Loading </h1>
			)}
		</div>
	);
};
export default Detail;
