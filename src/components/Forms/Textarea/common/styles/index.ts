import { memoize, merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import group from './group';
import light from './light';
import readonly from './readonly';
import textarea from './textarea';
import { TextareaStyleProps, TextareaStyleReturn } from './types';

import {
	colorMode as defaultColorMode,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isFocused as defaultIsFocused,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize
} from '../data/defaultPropValues';

export default memoize((props: TextareaStyleProps): TextareaStyleReturn => {
	const {
		theme,
		color,
		colorMode = defaultColorMode,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isFocused = defaultIsFocused,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme, isFullWidth, size }),
			scheme[isSuccess ? 'success' : isWarning ? 'warning' : isFocused ? 'focused' : 'group']({
				theme,
				color,
				size
			})
		),
		disabled: merge(disabled(), scheme.disabled({ theme })),
		readonly: merge(readonly(), scheme.readonly({ theme })),
		invalid: scheme.invalid({ theme, size }),
		textarea: textarea({ theme, size })
	};
});
