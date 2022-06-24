import React from 'react';
import Text from '../Main/PracticeExample/04/Text';
import Button from '../Main/PracticeExample/04/Button';
import BtnAndText from '../Main/PracticeExample/05/BtnAndText';

function Example5Page() {

    return (
        <>
            <h1> 05 </h1>
            <BtnAndText
                btnFunc = {<Button children = "Btn And Text - Button"/>}
                onPress = {() => {alert("Button Click !! ")}} 
                textFunc = {<Text  children = "Btn And Text - Text"/>}
            />
        </>
    )
}

export default Example5Page;