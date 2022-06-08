import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User';

// 삭당에다가 접시 등록하기
export default configureStore({
	reducer: {
		user: userSlice,
	},
});

// 리덕스는 스토어에 모든 state 상태값(데이터)을 저장한다.
// src에 redux폴더 만들고 store.js 만든다.
// 공식문서에서는 app폴더에 만들던데 어디다 만들던 사실 상관없다.
// index.js에 만드는 사람도 있음 => 이건 좀..;

// configureStore라는 키워드가 reducer를 감싸고 있다.

// 저기서 모든 state를 관리할거라는 뜻

// 이제 스토어를 연결시켜줘야 하는데 보통의 경우에는 index.js 에다가 연결해줌

/*
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
*/

// 그리고 Provider 키워드로 전체를 감싸줘야 한다.
// Provider 는 ?
// store가 리액트 앱 전체를 감싸도록 해주는 역할

/*
Provider 는 react-redux 라이브러리에 내장되어있는, 
리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트입니다.

이 컴포넌트를 불러온다음에, 연동 할 컴포넌트를 감싸준다음에 
Provider 컴포넌트의 props로 store 값을 설정해주면 됩니다.
*/
