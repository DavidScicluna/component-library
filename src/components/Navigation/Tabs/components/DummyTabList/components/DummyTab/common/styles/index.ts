import { memoize, merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../../../../common/data/defaultPropValues';

import dark from './dark';
import light from './light';
import tab from './tab';
import { DummyTabStyleProps, DummyTabStyleReturn } from './types';

export default memoize((props: DummyTabStyleProps): DummyTabStyleReturn => {
	const { theme, colorMode = defaultColorMode, isFullWidth = defaultIsFitted, size = defaultSize } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab({ theme, isFullWidth, size }), scheme({ theme }))
	};
});
