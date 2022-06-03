import CatInfo from '../Component/CatInfo';
import React, { useState, useEffect, useMemo } from 'react';
import expensiveCalculation from './expensiveCalculation';

const useCalculateWithMemo = props => {
	let sumVal = Number(props.numA + props.numB);

	return useMemo(() => {
		console.log('useCalculateWithMemo Rerender !! ');
		return sumVal;
	}, [sumVal]);
};

export default useCalculateWithMemo;
