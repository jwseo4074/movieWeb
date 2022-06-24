import React from 'react';
import PropTypes from 'prop-types';

function Button (props) {
    const {
        children, 
        onPress,
    } = props;

    return (
        <>
            <button onClick = {onPress} > 
                {children} 
            </button>
        </>
    );
}

Button.propTypes = {
    children: PropTypes.string,
    onPress: PropTypes.func,
};

Button.defaultProps = {
    onPress: () => {alert("Seojiwon")},
};

export default Button;