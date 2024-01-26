import { useContext } from 'react';

import { DummyIconButtonContext } from '../../DummyIconButton';
import { __DEFAULT_DUMMY_ICON_BUTTON_SIZE__, __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__ } from '../constants';
import type { DummyIconButtonContext as DummyIconButtonContextType, DummyIconButtonElement } from '../types';

import useDummyIconButtonResponsiveValues from './useDummyIconButtonResponsiveValues';

const useDummyIconButtonContext = <Element extends DummyIconButtonElement>() => {
	const {
		color,
		colorMode,
		size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
	} = useContext<DummyIconButtonContextType<Element>>(DummyIconButtonContext);

	const { size, variant } = useDummyIconButtonResponsiveValues<Element>({ size: sizeProp, variant: variantProp });

	return { color, colorMode, size, variant };
};

export default useDummyIconButtonContext;
