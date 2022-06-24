import React from 'react';

function BtnAndText (props) {
    return(
        <>
            <div>
                {props.btnFunc}
            </div>
            <div>
                {props.textFunc}
            </div>
        </>
    );
}
export default BtnAndText;