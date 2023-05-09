import { useState } from 'react';

import { useDebounce } from '../../../../common/hooks';
import { HorizontalScrollAPIContext } from '../types';

type UseSetHorizontalScrollAPIContextReturn = [
	HorizontalScrollAPIContext,
	(scroll: HorizontalScrollAPIContext) => void
];

const useSetHorizontalScrollAPIContext = (): UseSetHorizontalScrollAPIContextReturn => {
	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>({} as HorizontalScrollAPIContext);
	const scrollDebounced = useDebounce<HorizontalScrollAPIContext>(scroll);

	return [scrollDebounced, setScroll];
};

export default useSetHorizontalScrollAPIContext;
