import React from 'react';

function TodoList() {
    const todoList = [
        { taskName : '집에 바로 간다', finished : false },
        { taskName : '노래방 갔다가 집에 간다', finished : true }, 
    ];

    return(
        <div>
            <h1>TodoList</h1>
            <p> using array component and 'key' </p>
            {todoList.map( (todo) => (<div key={todo.taskName}> {todo.taskName} </div>) )}
        </div>

        // 배열 컴포넌트의 활용

        // React 에서 배열 컴포넌트 사용시 key에 배열의 index는 가급적 사용하지 말자. 
        
        // ex> todoList.map((todo, i) => <div key = {`tl_${i}`})
        // map 함수에서 인자로 3개를 넣을 수 있다. -> 요소값, 인덱스, this(호출한 객체)
        // 여기서 인덱스 값, 이거를 키 값으로 넣는다면!!

        ///=> 배열 항목에서 특정 값에 따라 항목을 제외하는 경우 (filter 함수) 인덱스 번호를 키로 사용한다면
        // 키값이 함께 변경되는 문제가 발생하기 때문이다. 
        // => 단순한 리스트 렌더링 역할만 수행한다면 문제가 생기지 않지만
        // 정렬, 추가, 삭제 등의 작업이 있는 경우 예상치 못한 문제가 발생한다. 

        // 키 값이 tl_1 이 tl_0으로 바뀌게 된다. 그럼 리액트가 해당 항목의 컴포넌트를 재활용하지 못하게 되고
        // 새로 그리게 되어 효율이 좋지 않다.

        // key 는 React 가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도와주어 
        // 배열 렌더링을 진행할 때 기존의 요소들은 변경되지 않았다는 걸 React 에서 자동으로 파악 후
        // 새로 생기는 요소에 대해서만 리렌더링을 진행하게 함으로써 최적화된 렌더링을 진행하게 하는 것인데,
        // 그 자체로 모순이 생기는 것이다.
    );
}

export default TodoList;