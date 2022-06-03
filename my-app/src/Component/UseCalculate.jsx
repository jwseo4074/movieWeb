import CatInfo from '../Component/CatInfo';
import React, { useState, useEffect, useMemo } from 'react';
import expensiveCalculation from './expensiveCalculation';

const useCalculate = props => {
	const [result, setResult] = useState(0);

	useEffect(() => {
		console.log('useCalculate Rerender !! ');
		setResult(Number(props.numA + props.numB));
	}, [props.numA, props.numB]);

	return result;
};

export default useCalculate;
