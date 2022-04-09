import { merge } from 'lodash';

import button from './button';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { ButtonStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

type ButtonStyle = {
	button: Style;
	disabled: Style;
};

export default (theme: Theme, props: ButtonStyleProps): ButtonStyle => {
	const { color, colorMode, isFullWidth, isLoading, size, variant } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		button: merge(button(theme, isFullWidth, size, variant), scheme.button[variant](theme, color, size)),
		disabled: merge(disabled(isLoading, size, variant), scheme.disabled[variant](theme, color, isLoading))
	};
};
