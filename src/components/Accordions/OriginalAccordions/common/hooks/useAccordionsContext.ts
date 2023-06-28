import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnSetOpened
} from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { spacing as defaultSpacing } from '../../../common/default/props';
import { AccordionsContext } from '../..';
import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened
} from '../default/props';
import { AccordionsContext as AccordionsContextType } from '../types';

type UseAccordionsContextReturn<D> = NoUndefinedField<Omit<AccordionsContextType<D>, 'accordions'>> &
	Pick<AccordionsContextType<D>, 'accordions'>;

const useAccordionsContext = <D>(): UseAccordionsContextReturn<D> => {
	const {
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		opened = defaultOpened,
		onSetOpened = defaultOnSetOpened,
		spacing = defaultSpacing
	} = useContext<AccordionsContextType<D>>(AccordionsContext);

	return {
		accordions,
		color,
		colorMode,
		isDisabled,
		opened,
		onSetOpened,
		spacing
	};
};

export default useAccordionsContext;
