import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../../../../../../common/default/props';
import { size as defaultSize } from '../../../../../../../common/default/props';
import { isSelected as defaultIsSelected } from '../default/props';

import active from './active';
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
		isSelected = defaultIsSelected,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab({ theme, size }), scheme.tab({ theme, color, isSelected, size })),
		active: isSelected ? merge(active(), scheme.active({ theme, color, isSelected })) : {},
		disabled: merge(disabled(), scheme.disabled({ theme }))
	};
});
