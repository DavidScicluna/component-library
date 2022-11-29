import { useContext } from 'react';

import { RenderProps as DayzedRenderProps } from 'dayzed';

import { DatePickerContext } from '../..';
import { DatePickerContext as DatePickerContextType } from '../../types';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	date as defaultDate,
	format as defaultFormat,
	spacing as defaultSpacing
	// variant as defaultVariant
} from '../data/defaultPropValues';

type UseDatePickerContextReturn = NoUndefinedField<Omit<DatePickerContextType, 'dayzed'>> & {
	dayzed?: DayzedRenderProps;
};

const useDatePickerContext = (): UseDatePickerContextReturn => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		date = defaultDate,
		format = defaultFormat,
		spacing = defaultSpacing
	} = useContext<DatePickerContextType>(DatePickerContext);

	return { color, colorMode, date, format, spacing };
};

export default useDatePickerContext;
