import { merge } from 'lodash';

import active from './active';
import dark from './dark';
import disabled from './disabled';
import iconbutton from './iconbutton';
import light from './light';
import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

type ButtonStyle = {
	iconbutton: Style;
	active: Style;
	disabled: Style;
};

export default (theme: Theme, props: IconButtonStyleProps): ButtonStyle => {
	const { color, colorMode, isLoading, isRound, size, variant } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		iconbutton: merge(iconbutton(theme, isRound, size, variant), scheme.iconbutton[variant](theme, color, size)),
		active: merge(active(size, variant), scheme.active[variant](theme, color, size)),
		disabled: merge(disabled(isLoading, size, variant), scheme.disabled[variant](theme, color, isLoading, size))
	};
};
