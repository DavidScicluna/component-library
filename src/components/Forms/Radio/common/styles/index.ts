import { memoize, merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isChecked as defaultIsChecked,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import group from './group';
import light from './light';
import readOnly from './readOnly';
import { RadioStyleProps, RadioStyleReturn } from './types';


export default memoize((props: RadioStyleProps): RadioStyleReturn => {
	const {
		theme,
		color,
		colorMode = defaultColorMode,
		isChecked = defaultIsChecked,
		isError = defaultIsError,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme, isFullWidth, size }),
			scheme.group[variant]({ theme, isError, isSuccess, isWarning })
		),
		checked: scheme.checked[variant]({
			theme,
			color,
			isError,
			isSuccess,
			isWarning
		}),
		disabled: merge(disabled(), scheme.disabled[variant]({ theme })),
		readOnly: merge(readOnly(), scheme.readOnly[variant]({ theme, isChecked }))
	};
});
