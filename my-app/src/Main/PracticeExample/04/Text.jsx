import React from 'react';
import PropTypes from 'prop-types';

function Text (props) {
    const {
        children
    } = props;

    return(
        <>
            <span>
                children : {children}
            </span>
        </>
    );
}

Text.propTypes = {
    children : PropTypes.string,
}

export default Text;