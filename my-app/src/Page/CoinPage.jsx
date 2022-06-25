import React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import axios from 'axios';

import '../Style/PageStyle/CoinPage.css';

const CoinPage = () => {
	const [loading, setLoading] = useState(false);
	const [coinData, setCoinDate] = useState([]);
	// 빈 배열로 해두지 않으면 undefined가 처음에 할당 되니까 개수를 세어줄 수가 없다 => 에러가 나옴

	const roadCoinData = () => {
		setLoading(true);
		axios
			.get('https://api.coinpaprika.com/v1/tickers')
			.then(Response => {
				// console.log(Response.data);
				setCoinDate(Response.data);
				setLoading(false);
			})
			.catch(Error => {
				console.log(Error);
			});
	};
	// useEffect(() => {}, [loading]);

	if (loading) {
		return <h1 id="h1_loading">loading ... </h1>;
	}

	return (
		<div id="coinPageDiv">
			<h1 id="h1_coinpage">The Coins ! </h1>

			{coinData.length > 10 ? (
				<select id="loadCoinSelect">
					{coinData.map((coin, index) => (
						<option key={index}>
							{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
						</option>
					))}
				</select>
			) : (
				<button id="loadCoinBtn" onClick={roadCoinData}>
					{' '}
					코인 불러오기 !{' '}
				</button>
			)}
		</div>
	);
};

export default CoinPage;
