import { useContext } from 'react';

import { DummyButtonContext } from '../../DummyButton';
import { DEFAULT_DUMMY_BUTTON_SIZE, DEFAULT_DUMMY_BUTTON_VARIANT } from '../constants';
import type { DummyButtonContext as DummyButtonContextType, DummyButtonElement } from '../types';

import useDummyButtonResponsiveValues from './useDummyButtonResponsiveValues';

const useDummyButtonContext = <Element extends DummyButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_DUMMY_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BUTTON_VARIANT
	} = useContext<DummyButtonContextType<Element>>(DummyButtonContext);

	const { size, variant } = useDummyButtonResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyButtonContext;
