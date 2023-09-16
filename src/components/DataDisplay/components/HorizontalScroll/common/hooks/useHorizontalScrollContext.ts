import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { HorizontalScrollContext } from '../../HorizontalScroll';
import { __DEFAULT_HORIZONTAL_SCROLL_ARROW_SIZE__ } from '../constants';
import type { HorizontalScrollContext as HorizontalScrollContextType } from '../types';

const useHorizontalScrollContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		arrowSize = __DEFAULT_HORIZONTAL_SCROLL_ARROW_SIZE__,
		spacing = __DEFAULT_SPACING__
	} = useContext<HorizontalScrollContextType<Element>>(HorizontalScrollContext);

	return { color, colorMode, arrowSize, spacing };
};

export default useHorizontalScrollContext;
