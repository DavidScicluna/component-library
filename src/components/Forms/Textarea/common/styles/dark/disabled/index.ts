import { transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';

import { TextareaDarkDisabledStyleProps } from './types';

export default ({ theme }: TextareaDarkDisabledStyleProps): Style => {
	const amount = getAmount();
	const textPrimaryShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		'color': `${theme.colors.gray[textPrimaryShade]} !important`,
		'borderColor': `${theme.colors.gray[borderShade]} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& textarea::placeholder': {
			color: `${transparentize(theme.colors.gray[textSecondaryShade], amount.placeholder)} !important`
		}
	};
};
