import { memoize, merge } from 'lodash';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth
} from '../../../../../common/data/defaultPropValues';
import { isLight as defaultIsLight, isOpen as defaultIsOpen } from '../data/defaultPropValues';

import accordion from './accordion';
import active from './active';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { AccordionStyleProps, AccordionStyleReturn } from './types';

export default memoize(<D>(props: AccordionStyleProps<D>): AccordionStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isLight = defaultIsLight,
		isFullWidth = defaultIsFullWidth,
		isOpen = defaultIsOpen
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		accordion: merge(accordion({ theme, isFullWidth }), scheme.accordion({ theme, color, isLight, isOpen })),
		active: merge(active({ theme }), scheme.active({ theme, color, isLight, isOpen })),
		disabled: {
			accordion: merge(disabled.accordion({ theme }), scheme.disabled({ theme, isLight })),
			header: disabled.header()
		}
	};
});
