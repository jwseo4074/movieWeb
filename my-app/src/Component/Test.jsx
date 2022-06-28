import { useNavigate } from 'react-router-dom';
import '../Style/ComponentStyle/Test.css';

function Test() {
	const navigate = useNavigate();

	// 버튼 클릭시 호출
	const move = () => {
		// 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
		navigate('/webSite-React-JS/routerpractice/test2', {
			state: {
				login: '로그인 성공',
				id: 'zwon2056',
				nickname: 'sexyPig',
				name: '서지원',
				gender: '남자',
				age: '25',
				job: '개발자',
			},
		});
	};
	return (
		<div className="TestBox">
			<div className="TestUpBox">
				<h1>useNavigate() 로 페이지를 이동하면서 파라미터 전달하기 </h1>
				<h3>1. useNavigate() 훅(Hook)으로 navigate 함수를 가지고 온다.</h3>
				<h3>
					2. navigate() 함수의 첫번째 인자에 이동할 경로, 두번째 인자의 state 속성에
					파라미터를 넣어준다.
				</h3>
			</div>
			<div className="TestDownBox">
				<button onClick={move}>Test2 로 이동 </button>
			</div>
		</div>
	);
}

export default Test;
