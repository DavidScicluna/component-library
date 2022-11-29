import { useContext } from 'react';

import { AccordionsContext } from '../..';
import { AccordionsContext as AccordionsContextType } from '../../types';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth
} from '../../../common/data/defaultPropValues';
import { method as defaultOnSetOpened } from '../../../../../common/data/defaultPropValues';
import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened
} from '../data/defaultPropValues';

const useAccordionsContext = <D>(): NoUndefinedField<AccordionsContextType<D>> => {
	const {
		opened = defaultOpened,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		onSetOpened = defaultOnSetOpened
	} = useContext<AccordionsContextType<D>>(AccordionsContext);

	return { opened, accordions, color, colorMode, isDisabled, isFullWidth, onSetOpened };
};

export default useAccordionsContext;
