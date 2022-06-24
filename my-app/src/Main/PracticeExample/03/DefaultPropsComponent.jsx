import React from 'react';
import PropTypes from 'prop-types';
// prop-types : 컴포넌트에 전달되는 props의 타입 검사

function DefaultPropsComponennt (props) {

    let message1 = '';
    if (props.boolValue === false) {
        message1 = 'boolValue 기본값이 false 입니다.';
    }    

    let message2 = '';
    if (props.boolValueWithoutDefault === false) {
        message2 = 'boolValueWithoutDefault 기본값이 false 입니다.';
    } 
    // undefined로 전달되니까 === false 에서 걸려 조건 만족 x
    // 출력 안되겠지
    return (
        <div>
            <h1>DefaultPropsComponent</h1>
            
            <p>{message1}</p>
            {/* 프로퍼티를 생략하면 undefined가 전달된다. */}
            {/* boolValue 만 false 로 기본값이 설정되어 있으니 message1만 나오겠네? */}
            <p>{message2}</p>
        </div>
    );
}

DefaultPropsComponennt.propTypes = {
    boolValue : PropTypes.bool,
    boolValueWithoutDefault : PropTypes.bool,
};

// 기본값 선언하기
DefaultPropsComponennt.defaultProps = {
    boolValue : false,
};
// DefaultPropsComponennt 의 defaultProps 라는 특수 변수를 사용하여
// 프로퍼티의 기본값을 정의한다.

export default DefaultPropsComponennt;