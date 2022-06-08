import Profile from '../Component/Profile';
import Login from '../Component/Login';
import { Provider } from 'react-redux';
import Store from '../Redux/Store';

function ReduxPracticePage() {
	return (
		<Provider store={Store}>
			<div style={{ padding: '40px' }} className="App">
				<Profile />
				<Login />
			</div>
		</Provider>
	);
}

export default ReduxPracticePage;
