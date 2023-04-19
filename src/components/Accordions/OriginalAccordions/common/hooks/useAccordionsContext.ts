import { useContext } from 'react';

import { method as defaultOnSetOpened } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../../../common/data/defaultPropValues';
import { AccordionsContext } from '../..';
import { AccordionsContext as AccordionsContextType } from '../../types';
import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened
} from '../data/defaultPropValues';

type UseAccordionsContextReturn<D> = NoUndefinedField<Omit<AccordionsContextType<D>, 'accordions'>> &
	Pick<AccordionsContextType<D>, 'accordions'>;

const useAccordionsContext = <D>(): UseAccordionsContextReturn<D> => {
	const {
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		opened = defaultOpened,
		onSetOpened = defaultOnSetOpened,
		spacing = defaultSpacing
	} = useContext<AccordionsContextType<D>>(AccordionsContext);

	return { accordions, color, colorMode, isDisabled, isFullWidth, opened, onSetOpened, spacing };
};

export default useAccordionsContext;
