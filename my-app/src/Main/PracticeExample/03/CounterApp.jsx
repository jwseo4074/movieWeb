import React from 'react';

function CounterApp(props) {
    return (
        <div>
            <h1>CounterApp</h1> 
            <div>
                현재 카운트 : {props.count}
            </div>
            
            <button onClick={props.onAdd}> count + 1 버튼 </button>
            <button onClick={props.onMinus}> count - 1 버튼 </button>
            <button onClick={props.onReset}> Reset</button>
        </div>
    );
}

export default CounterApp;
