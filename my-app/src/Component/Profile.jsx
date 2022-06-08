import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
	const user = useSelector(state => state.user.value);

	// useSelector를 이용하면 우리가 만든 리듀서에 접근할 수 있다.
	// 리듀서에 뭐 많이 정의해놓을 수 있다고 했잖아 ?

	// 리듀서에 있는 state에 접근할건데, 어느 state냐 하면 ?
	// 아까 user라고 이름 지어준 리듀서에 있는 state에 접근할거란 소리
	// 그리고 user 리듀서에 우리가 초기값을 어떻게 설정했는지 보면 value라고 해놨다.
	// 그래서 user에 있는 value 가져올거란 뜻.

	return (
		<div>
			<h1>Profile Page</h1>
			<p> Name : {user.name}</p>
			<p> Age : {user.age} </p>
			<p> Email : {user.email}</p>
		</div>
	);
}

export default Profile;

// 프로필 페이지에서 사용자 정보 보여줄거임.
// 결론적으로는 스토어에서 저장해놓은 State(데이터)들을 가져와서 여기다 뿌려야겠지
