import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Redux/User';

function Login() {
	const dispatch = useDispatch();
	// action 을 보내는 역할, 디스패치를 날리는 역할

	return (
		<div>
			<button
				onClick={() => {
					dispatch(login({ name: '서지원', age: 25, email: 'zwon2056@gmail.com' }));
				}}
				// 클릭할 때마다 디스패치를 날린다.
				// => login을 날린다
				// => login은 User에서 "다른 곳에서도 action 으로 작동 할 수 있도록" 만들어놨다.
			>
				Login
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</div>
	);
}

export default Login;
