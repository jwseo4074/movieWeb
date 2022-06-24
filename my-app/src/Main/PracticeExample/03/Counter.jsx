// 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었다.
// 리액트 16.8 에서 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.
// 이번에는 useState 라는 함수를 사용해보게 되는데, 이게 바로 리액트의 Hooks 중 하나이다.


import { useState } from 'react';
import React from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const increase = () =>  {
        console.log("number = ", number);
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber + 1);
        // 지금은 Setter 함수를 사용 할 때, 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주고 있는데,
        // 그 대신에 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.
        console.log("number = ", number);
    }

    const decrease = () => {
        console.log("number = ", number);
        setNumber(number - 1);
        console.log("number = ", number);
    }

    const [count, setCount] = useState(0);

    const onClick1 = () => {
        setCount(count+ 1);
        setCount(count+ 1);
        console.dir(count);
    }

    const onClick2 = () => {
        setCount(count=> count+ 1);
        setCount(count=> count+ 1);
        // 아래의 setCount 함수에 넘겨진 인자의 왼쪽 count가 이전의 count 값임을 보장할 수 있다.
        console.dir(count);
    }

    // 이렇게 함수형으로 파라미터를 넘겨주면 상태값 변경을 "배치"로 처리한다고 하네요.

    // count+ 1 (값을 넣는 경우) 랑 count=> count+ 1 (함수를 넣는 경우) 랑 뭐가 다르나? 

    // 둘이 별 차이가 없을 것 같지만 (useState에서 받는 state 값도 이전의 값일 것이기 때문에) 
    // 전혀 그렇지 않다. 
    // state가 여럿일 경우에 다른 state의 변화로 리렌더링이 거의 동시에 이루어지거나 하게 되면
    // useState 왼쪽의 state가 이전의 값임을 보장할 수 없을 때가 있다.
    // 이는 state의 변화가 비동기적(async)으로 일어나기 때문이다.
    // setState가 호출되면 바로 state가 바뀌는 게 아니라
    // 리액트에게 변경해야할 state를 알려주는 것이고
    // 리액트는 다른 state의 변경 요청까지를 다 받은 다음
    // 한 번에 묶어서 state를 변경하여 리렌더링시킨다.
    // (promise나 setTimeout 등을 제외하고 그 안에 실행된 모든 state들을 하나로 묶는다.)
    // 때문에 1을 더하는 것과 같이 state의 업데이트가 이전의 값에 의존하는 경우
    // 반드시 setState 함수의 인자에 함수를 넣어야 한다.
    // 그래야만 함수에서 받는 인자(count)가 이전의 값임을 장담할 수 있다.
    // 이전의 값에 의존할 필요가 없는 경우에는 쓸데없이 코드가 길어지니 불필요하다.

    // setState()는 비동기식이며 동일한 주기 동안 여러 호출을 일괄 처리할 수 있습니다. (배치)
    // 예를 들어 동일한 주기에서 항목 수량을 두 번 이상 늘리려고 하면 setState() 호출을 여러 번 하게 되는데
    // 후속 호출은 동일한 주기의 이전 호출 값을 무시하므로 수량은 한 번만 증가합니다.
    // 다음 상태가 현재 상태에 따라 달라지는 경우 대신 업데이트 함수 형식을 사용하는 것이 좋습니다.

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <h1>{count}</h1>
            <button onClick={onClick1}> count + 1 버튼 </button>
            <button onClick={onClick2}> count = count + 1 버튼 </button>
        </div>
    );
}

export default Counter;