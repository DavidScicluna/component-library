import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { active } from '../../../default/amount';
import { transform } from '../../../default/sizes';

import { PushableOverlayDarkActiveStylingProps } from './types';

export default ({ theme }: PushableOverlayDarkActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	return {
		'color': theme.colors.gray[colorShade],

		'&::before': {
			content: '""',

			color: theme.colors.gray[colorShade],
			borderColor: lighten(theme.colors.gray[borderShade], active),
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: `0 ${transform.active}px 0 0 ${lighten(theme.colors.gray[borderShade], active)}`
		}
	};
};
