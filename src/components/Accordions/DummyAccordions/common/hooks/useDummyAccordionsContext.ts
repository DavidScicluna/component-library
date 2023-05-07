import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { spacing as defaultSpacing } from '../../../common/default/props';
import { DummyAccordionsContext } from '../..';
import { accordions as defaultAccordions } from '../../common/default/props';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../types';

const useDummyAccordionsContext = (): NoUndefinedField<DummyAccordionsContextType> => {
	const {
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		spacing = defaultSpacing
	} = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	return { accordions, color, colorMode, spacing };
};

export default useDummyAccordionsContext;
