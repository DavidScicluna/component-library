import { merge } from 'lodash';
import memoize from 'memoizee';

import {
	colorMode as defaultColorMode,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../../../../common/data/defaultPropValues';
import { isHovering as defaultIsHovering } from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import rating from './rating';
import readOnly from './readOnly';
import { RatingIconStyleProps, RatingIconStyleReturn } from './types';

export default memoize((props: RatingIconStyleProps): RatingIconStyleReturn => {
	const {
		theme,
		color,
		colorMode = defaultColorMode,
		isError = defaultIsError,
		isHovering = defaultIsHovering,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		rating: merge(
			rating({ theme, size }),
			scheme.rating({ theme, color, isError, isHovering, isSuccess, isWarning })
		),
		active: scheme.active({ theme, color }),
		disabled: merge(disabled(), scheme.disabled({ theme })),
		readOnly: merge(readOnly(), scheme.readOnly({ theme }))
	};
});
