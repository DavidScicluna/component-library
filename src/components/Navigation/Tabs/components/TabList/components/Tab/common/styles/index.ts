import { merge } from 'lodash';
import memoize from 'memoizee';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../../../../common/data/defaultPropValues';
import { isSelected as defaultIsSelected } from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import tab from './tab';
import { TabStyleProps, TabStyleReturn } from './types';

export default memoize((props: TabStyleProps): TabStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFitted,
		isSelected = defaultIsSelected,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab({ theme, isFullWidth, size }), scheme.tab({ theme, color, isSelected, size })),
		active: scheme.active({ theme, color, isSelected }),
		disabled: merge(disabled(), scheme.disabled({ theme }))
	};
});
