import { transparentize } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { getAmount } from '../../../../utils';

import { TextareaDarkTransparentReadOnlyStyleProps } from './types';

export default ({ theme }: TextareaDarkTransparentReadOnlyStyleProps): Style => {
	const amount = getAmount();

	const textPrimaryShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'dark'
	});

	return {
		'color': `${theme.colors.gray[textPrimaryShade]} !important`,
		'borderColor': `${theme.colors.gray[backgroundShade]} !important`,
		'backgroundColor': `${theme.colors.gray[backgroundShade]} !important`,
		'background': `${theme.colors.gray[backgroundShade]} !important`,

		'& textarea::placeholder': {
			color: `${transparentize(theme.colors.gray[textSecondaryShade], amount.placeholder)} !important`
		}
	};
};
