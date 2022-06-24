import React from 'react';
import PropTypes from 'prop-types';

function ChildProperty (props) {

    
    return (
        <div>
            <h1>ChildProperty</h1>
            <div>
                <p>밑에 뭐가 나오나? </p>
                <p>{props.children}</p>
            </div> 
        </div>
    );
}

ChildProperty.propTypes = {
    children : PropTypes.node,
}

// ChildProperty 컴포넌트 밑에 div 태그가 있다.
// ChildProperty 컴포넌트에서 {props.children} 과 같은 방법으로
// <div><span>자식 노드</span></div> 를 쉽게 받을 수 있다!!


// 별도의 프로퍼티를 통해 자식 노드를 전달해도 된다.
// <ChildProperty children = {<div><span>자식 노드</span></div>} />
export default ChildProperty;