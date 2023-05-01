import { useContext } from 'react';

import { HorizontalGridContext } from '../..';
import { HorizontalGridContext as HorizontalGridContextType } from '../types';

const useHorizontalGridContext = (): HorizontalGridContextType => {
	const context = useContext<HorizontalGridContextType>(HorizontalGridContext);

	return { ...context };
};

export default useHorizontalGridContext;
