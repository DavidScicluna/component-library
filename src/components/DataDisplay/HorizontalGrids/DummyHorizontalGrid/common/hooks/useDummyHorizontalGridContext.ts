import { useContext } from 'react';

import { DummyHorizontalGridContext } from '../..';
import { DummyHorizontalGridContext as DummyHorizontalGridContextType } from '../../types';

const useDummyHorizontalGridContext = (): DummyHorizontalGridContextType => {
	const context = useContext<DummyHorizontalGridContextType>(DummyHorizontalGridContext);

	return { ...context };
};

export default useDummyHorizontalGridContext;
