import { useContext } from 'react';

import { DummyButtonContext } from '../../DummyButton';
import { __DEFAULT_DUMMY_BUTTON_SIZE__, __DEFAULT_DUMMY_BUTTON_VARIANT__ } from '../constants';
import type { DummyButtonContext as DummyButtonContextType, DummyButtonElement } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';

const useDummyButtonContext = <Element extends DummyButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = useContext<DummyButtonContextType<Element>>(DummyButtonContext);

	const { size, variant } = useDummyButtonResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyButtonContext;
