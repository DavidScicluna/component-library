import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth
} from '../../../../../common/data/defaultPropValues';
import { isLight as defaultIsLight } from '../data/defaultPropValues';

import accordion from './accordion';
import dark from './dark';
import light from './light';
import { DummyAccordionStyleProps, DummyAccordionStyleReturn } from './types';

export default memoize((props: DummyAccordionStyleProps): DummyAccordionStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		isLight = defaultIsLight
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		accordion: merge(accordion({ theme, isFullWidth }), scheme({ theme, color, isLight }))
	};
});
