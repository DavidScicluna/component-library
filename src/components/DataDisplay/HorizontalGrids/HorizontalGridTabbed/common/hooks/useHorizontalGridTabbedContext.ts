import { useContext } from 'react';

import { HorizontalGridTabbedContext } from '../..';
import { HorizontalGridTabbedContext as HorizontalGridTabbedContextType } from '../types';

const useHorizontalGridTabbedContext = (): HorizontalGridTabbedContextType => {
	const context = useContext<HorizontalGridTabbedContextType>(HorizontalGridTabbedContext);

	return { ...context };
};

export default useHorizontalGridTabbedContext;
