import { merge } from 'lodash';
import memoize from 'micro-memoize';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { variant as defaultVariant } from '../default/props';

import dark from './dark';
import icon from './icon';
import light from './light';
import { StateLabelIconStyleProps, StateLabelIconStyleReturn } from './types';

export default memoize((props: StateLabelIconStyleProps): StateLabelIconStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode, variant = defaultVariant } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return { icon: merge(icon({ theme }), scheme[variant]({ theme, color })) };
});