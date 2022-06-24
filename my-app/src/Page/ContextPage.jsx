import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonWithContext from './ButtonWithContext';

function RowBComponent(props) {
	return (
		<button
			onClick={() => {
				console.log('123');
				props.toggleLoading();
			}}
		>
			상태 변경 - 컨텍스트 안쓰고
		</button>
	);
}

function RowCComponent() {
	return <ButtonWithContext>버튼 - 컨텍스트 쓰고</ButtonWithContext>;
}

function TableComponent(props) {
	return (
		<>
			<RowBComponent loading={props.loading} toggleLoading={props.toggleLoading} />
			<RowCComponent />
		</>
	);
}

class ContextPage extends PureComponent {
	constructor(props) {
		super(props);

		this.state = { loading: false };
		this.setLoading = this.setLoading.bind(this);
		this.toggleLoading = this.toggleLoading.bind(this);
	}

	getChildContext() {
		return {
			loading: this.state.loading,
			setLoading: this.setLoading,
		};
	}

	setLoading(loading) {
		this.setState({ loading });
	}

	toggleLoading() {
		console.log('123');
		this.setState(({ loading }) => ({ loading: !loading }));
	}

	render() {
		return (
			<div style={{ padding: '40px' }}>
				<TableComponent loading={this.state.loading} toggleLoading={this.toggleLoading} />
				<p>{this.state.loading ? 'O' : 'X'}</p>
			</div>
		);
	}
}

ContextPage.childContextTypes = {
	loading: PropTypes.bool,
	setLoading: PropTypes.func,
};

export default ContextPage;
