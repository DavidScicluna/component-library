import { useContext } from 'react';

import { DummyHorizontalGridTabbedContext } from '../..';
import { DummyHorizontalGridTabbedContext as DummyHorizontalGridTabbedContextType } from '../types';

const useDummyHorizontalGridTabbedContext = (): DummyHorizontalGridTabbedContextType => {
	const context = useContext<DummyHorizontalGridTabbedContextType>(DummyHorizontalGridTabbedContext);

	return { ...context };
};

export default useDummyHorizontalGridTabbedContext;
