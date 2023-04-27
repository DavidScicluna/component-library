import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { active } from '../../../default/amount';
import { transform } from '../../../default/sizes';

import { PushableOverlayLightActiveStylingProps } from './types';

export default ({ theme }: PushableOverlayLightActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	return {
		'color': theme.colors.gray[colorShade],

		'&::before': {
			content: '""',

			color: theme.colors.gray[colorShade],
			borderColor: darken(theme.colors.gray[borderShade], active),
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors.gray[borderShade], active)}`
		}
	};
};
