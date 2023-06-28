import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { DatePickerContext } from '../..';
import {
	date as defaultDate,
	format as defaultFormat,
	spacing as defaultSpacing
	// variant as defaultVariant
} from '../default/props';
import { DatePickerContext as DatePickerContextType } from '../types';

type UseDatePickerContextReturn = NoUndefinedField<Omit<DatePickerContextType, 'dayzed'>> &
	Pick<DatePickerContextType, 'date' | 'dayzed'>;

const useDatePickerContext = (): UseDatePickerContextReturn => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		date = defaultDate,
		format = defaultFormat,
		spacing = defaultSpacing,
		...rest
	} = useContext<DatePickerContextType>(DatePickerContext);

	return {
		...rest,
		color,
		colorMode,
		date,
		format,
		spacing
	};
};

export default useDatePickerContext;
