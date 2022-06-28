import { useLocation } from 'react-router-dom';
import '../Style/ComponentStyle/Test.css';

export default function Test2() {
	// 1. useLocation 훅 취득
	const location = useLocation();

	// 2. location.state 에서 파라미터 취득
	const login = location.state.login;
	const id = location.state.id;
	const nickname = location.state.nickname;
	const name = location.state.name;
	const gender = location.state.gender;
	const age = location.state.age;
	const job = location.state.job;

	return (
		<div className="Test2Box">
			<div className="Test2UpBox">
				<h1>useLocation() 으로 넘겨준 파라미터 받기</h1>
				<h3> 1. useLocation() 훅으로 location을 받는다. </h3>
				<h3> 2. locaiton.state 로 전달 받은 파라미터를 쓸 수(접근) 있다. </h3>
			</div>
			<div className="Test2DownBox">
				<p>Login: {login}</p>
				<p>ID: {id}</p>
				<p>Nickname: {nickname}</p>
				<p>Name: {name}</p>
				<p>Gender: {gender}</p>
				<p>age: {age}</p>
				<p>job: {job}</p>
			</div>
		</div>
	);
}
