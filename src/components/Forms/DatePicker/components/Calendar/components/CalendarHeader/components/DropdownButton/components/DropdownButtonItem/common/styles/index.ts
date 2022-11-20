import { memoize, merge } from 'lodash';

import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../../../../../../common/data/defaultPropValues';
import { isToday as defaultIsToday } from '../data/defaultPropValues';

import active from './active';
import dark from './dark';
import disabled from './disabled';
import item from './item';
import light from './light';
import { DropdownButtonItemStyleProps, DropdownButtonItemStyleReturn } from './types';

export default memoize((props: DropdownButtonItemStyleProps): DropdownButtonItemStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode, isToday = defaultIsToday } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		item: merge(item({ theme }), isToday ? scheme.today({ theme, color }) : scheme.item({ theme })),
		active: merge(active(), scheme.active({ theme, color })),
		disabled: merge(disabled(), scheme.disabled({ theme }))
	};
});
