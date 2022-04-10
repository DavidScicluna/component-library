import { Style } from '../../../../../../../common/types';
import { Color, ColorHues, Theme } from '../../../../../../../theme/types';
import { handleHue } from '../../../utils';

export default (theme: Theme, colorProp: Color): Style => {
	const shade = handleHue('dark', colorProp);

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;
	const textShade: ColorHues = colorProp === 'black' ? 500 : 900;

	return {
		'color': theme.colors.gray[textShade],

		'&::before': {
			boxShadow: 'none !important',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		}
	};
};
