import { useContext } from 'react';

import { DummyAccordionsContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../../../common/data/defaultPropValues';
import { accordions as defaultAccordions } from '../../common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../types';

const useDummyAccordionsContext = (): NoUndefinedField<DummyAccordionsContextType> => {
	const {
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		spacing = defaultSpacing
	} = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	return { accordions, color, colorMode, isFullWidth, spacing };
};

export default useDummyAccordionsContext;
