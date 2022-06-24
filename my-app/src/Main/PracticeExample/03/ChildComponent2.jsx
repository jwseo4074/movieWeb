import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent2 (props) {
    const {
        objValue, 
        requiredStringValue,
    } = props;

    return (
        <div>
            <h1>ChildComponent2</h1>
            <div>
                <p> 객체값 모음 : {String (Object.entries(objValue))}</p>
                {/* 내장 함수 String 과 Object.entries 를 사용하여 객체를 문자열로 변환하여 출력 */}
                <p> 이름 :  {objValue.name} </p>
                <p> 나이 : {objValue.age} </p>
            </div>
            <div>
                필수값 : {requiredStringValue}
            </div>
        </div>
    )
}

ChildComponent2.propTypes = {
    //객체 프로퍼티
    objValue : PropTypes.shape({
        // PropTypes.shape 를 사용하여 객체 프로퍼티를 정의하면 객체 목록을 한눈에 확인할 수 있어 편리하다.
        name: PropTypes.string,
        age: PropTypes.number,
    }),
    requiredStringValue: PropTypes.string.isRequired,
    // PropTypes에 정의된 변수(string, object, bool, ~~ )안의 특수 변수
    // isRequired를 이용하여 requiredStringValue를 필수 프로퍼티로 지정한다.
}

export default ChildComponent2

// 특정 컴포넌트에 꼭 전달되어야 하는 프로퍼티가 있다면 핻아 프로퍼티를 필수 프로퍼티로 저장한다.
