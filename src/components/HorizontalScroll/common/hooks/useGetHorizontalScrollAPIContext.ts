import { useContext } from 'react';
import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';

import { HorizontalScrollAPIContext } from '../types';

const useGetHorizontalScrollAPIContext = (): HorizontalScrollAPIContext => {
	const scroll = useContext<HorizontalScrollAPIContext>(ScrollContext);

	return scroll;
};

export default useGetHorizontalScrollAPIContext;
