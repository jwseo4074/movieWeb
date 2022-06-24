import React from 'react';

function ColorComponent (props) {
    // const [message, setMessage] = useState();

    // setMessage( props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기')
    const message = props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
    
    return (
        <div>
            <div style={{ color: props.color }}>
                <p>안녕하세요 {props.name} 입니다. </p>
            <p>{message}</p>
            </div>
        </div>
        // << props는 읽기 전용이다. >>

        // 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안 됩니다. 다음 sum 함수를 살펴봅시다.

        // function sum(a, b) {
        //   return a + b;
        // }
        // 이런 함수들은 순수 함수라고 호칭합니다. 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하기 때문입니다.

        // 반면에 다음 함수는 자신의 입력값을 변경하기 때문에 순수 함수가 아닙니다.

        // function withdraw(account, amount) {
        //   account.total -= amount;
        // }
        // React는 매우 유연하지만 한 가지 엄격한 규칙이 있습니다.

        // 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.

        // 물론 애플리케이션 UI는 동적이며 시간에 따라 변합니다. 다음 장에서는 “state”라는 새로운 개념을 소개합니다. 
        // React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고 사용자 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 
        // 시간에 따라 자신의 출력값을 변경할 수 있습니다.

    );
}

export default ColorComponent;