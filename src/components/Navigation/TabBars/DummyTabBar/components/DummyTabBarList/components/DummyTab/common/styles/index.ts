import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../../../../../../common/default/props';
import { size as defaultSize } from '../../../../../../../common/default/props';
import { isSelected as defaultIsSelected } from '../default/props';

import dark from './dark';
import light from './light';
import tab from './tab';
import { DummyTabStyleProps, DummyTabStyleReturn } from './types';

export default memoize((props: DummyTabStyleProps): DummyTabStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isSelected = defaultIsSelected,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab({ theme, size }), scheme({ theme, color, isSelected, size }))
	};
});
