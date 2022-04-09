import { Style } from '../../../../../../../common/types';
import { Color, ColorHues, Theme } from '../../../../../../../theme/types';
import { handleHue } from '../../../utils';

export default (theme: Theme, colorProp: Color, isLoading = false): Style => {
	const color = isLoading ? (colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp) : 'gray';

	const shade = handleHue('light', color);
	const textShade: ColorHues = colorProp === 'white' ? 400 : 50;

	return {
		'color': `${theme.colors.gray[textShade]} !important`,

		'&::before': {
			boxShadow: 'none',
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors[color][shade]} !important`,
			background: `${theme.colors[color][shade]} !important`
		}
	};
};
