import { memoize, merge } from 'lodash';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { variant as defaultVariant } from '../data/defaultPropValues';

import active from './active';
import dark from './dark';
import day from './day';
import disabled from './disabled';
import light from './light';
import { CalendarDayStyleProps, CalendarDayStyleReturn } from './types';

export default memoize((props: CalendarDayStyleProps): CalendarDayStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode, variant = defaultVariant } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		day: merge(day({ theme }), scheme.day[variant === 'today' ? 'today' : 'normal']({ theme, color })),
		active: merge(active(), scheme.active({ theme, color })),
		disabled: merge(disabled(), scheme.disabled({ theme }))
	};
});
