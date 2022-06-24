import React from 'react';
import ColorComponent from './ColorComponent';
function MyComponent (props) {
    const name = props.name;

    return (
        <div>
            <h1>ColorComponent</h1>
                <div>
                    <b>지루할 때 :</b>
                    <ColorComponent name="seojiwon" color="red" bored />
                </div>

                <div>
                    <b>즐거울 때 :</b>
                    <ColorComponent name="seowjion"/>
                </div>
        </div>
    )
}

export default MyComponent;