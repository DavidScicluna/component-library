import { useContext } from 'react';

import { DummyIconButtonContext } from '../../DummyIconButton';
import { DEFAULT_DUMMY_ICON_BUTTON_SIZE, DEFAULT_DUMMY_ICON_BUTTON_VARIANT } from '../constants';
import type { DummyIconButtonContext as DummyIconButtonContextType, DummyIconButtonElement } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

const useDummyIconButtonContext = <Element extends DummyIconButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = DEFAULT_DUMMY_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_ICON_BUTTON_VARIANT
	} = useContext<DummyIconButtonContextType<Element>>(DummyIconButtonContext);

	const { size, variant } = useDummyIconButtonResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyIconButtonContext;
