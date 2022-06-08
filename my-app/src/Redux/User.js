import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name: '이름 초기값', age: 0, email: '이메일 초기값' };
// 재사용 하니까 이렇게 만들어놓고 또 쓴다.

const userSlice = createSlice({
	name: 'user',
	initialState: { value: initialStateValue },
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},
		logout: state => {
			state.value = initialStateValue;
		},
	},
});

export const { login, logout } = userSlice.actions;
// 아까 만들어둔 login이라는 함수를 action 기능이 작동하도록 다른데서 쓸거라는 뜻이다.
// "액션을 디스패치 하기 위함"

// 공식 문서 예제
/*
export const { increment, decrement, incrementByAmount } = counterSlice.actions
*/

export default userSlice.reducer;

/* 이제 리듀서라는 것을 만들어보자. 스토어가 식당이라고 하면 리듀서는 접시 같은 놈이다.
식당에서 음식을 주는데 접시가 있어야지. */

/* 액션 객체를 받으면 전달받은 액션의 타입에 따라 어떻게 상태를 업데이트 해야 할지 정의를 해줘야하지
업데이트 로직을 정의하는 함수를 리듀서라고 부른다. 이 함수는 나중에 우리가 직접 구현하게 된다.
예를 들어 type 이 INCREMENT 라는 액션이 들어오면 숫자를 더해주고, 
DECREMENT 라는 액션이 들어오면 숫자를 감소시키는 그런 작업을 여기서 하면 된다.

    리듀서 함수는 두가지의 파라미터를 받습니다.

    state: 현재 상태
    action: 액션 객체

    그리고, 이 두가지 파라미터를 참조하여, << 새로운 상태 객체를 만들어서 >> 이를 반환한다. */

// createSlice 라는 친구가 굉장한 친구다.
// 기존에 createReducer와 createAction 이 하던 일을 같이 해준다.
// 쉽게 말해 actions를 위한 js파일을 따로 만들 필요가 없음!

// 사용할 리듀서의 이름을 정하고, 그걸 createSlice로 지정해준다.
// name은 리듀서 이름 뭘로 할지 정하는거고
// initialState는 들어갈 데이터의 초기값 잡아주는 용도. => 로그아웃할 때도(초기화) 똑같이 쓰이니 변수로 만들어놓고 재활용
// reducers 는 상태가 변하면 어떻게 실행하면 될 지 정하는 부분이다.

// 우리는 로그인 버튼을 눌렀을때 이름, 나이, 이메일이 변하게 하고 싶으니
// 로그인 함수를 만들어준다. + 로그아웃 .

// state는 우리가 잡아놓은 초기값의 value를 가져오는 역할을 하고
// actions안에 payload랑 type 이라는 친구가 있는데 우리가 바꾸고 싶은 데이터를 원하는 곳에다가 넘겨주는 역할을 한다.

// 이제 리듀서(접시) 만들었으니 식당에다가 등록해줘
