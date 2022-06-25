import React from 'react';
import { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Home, Send, Person, CheckCircle, CheckCircleOutline } from '@material-ui/icons';

const TopHeader = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div style={{ padding: '40px' }}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
					{/* <Tabs value={value} onChange={handleChange}> */}
					<Tab label="아니" icon={<Home />} />
					<Tab label="이렇게 쉽게" icon={<Send />} />
					<Tab label="된다고? " icon={<Person />} />
					<Tab label="진작에 알았으면" icon={<CheckCircle />} />
					<Tab label="바로 써먹었는데" icon={<CheckCircleOutline />} />
				</Tabs>
			</AppBar>
		</div>
	);
};

export default TopHeader;
