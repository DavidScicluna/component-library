import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import { colorMode as defaultColorMode } from '../../../../common/default/props';
import { color as defaultColor, variant as defaultVariant } from '../default/props';

import dark from './dark';
import icon from './icon';
import light from './light';
import { ConfirmModalIconStyleProps, ConfirmModalIconStyleReturn } from './types';

export default memoize((props: ConfirmModalIconStyleProps): ConfirmModalIconStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode, variant = defaultVariant } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return { icon: merge(icon({ theme }), scheme[variant]({ theme, color })) };
});
