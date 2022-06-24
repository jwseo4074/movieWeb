import React from 'react';
import PropTypes from 'prop-types';

function ButtonWithContext({ children }, context) {
	const { loading, setLoading } = context;
	console.log('context = ', context);
	return (
		<>
			<p>{loading ? 'O' : 'X'}</p>
			<button onClick={() => setLoading(!loading)}>
				{loading ? '로딩 중 ? 현재 - O' : children}
			</button>
		</>
	);
	// return <button onClick={() => setLoading(!loading)}>{loading ? 'O' : 'X'}</button>;
}

ButtonWithContext.contextTypes = {
	loading: PropTypes.bool,
	setLoading: PropTypes.func,
};

export default ButtonWithContext;
