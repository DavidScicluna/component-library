import { Style } from '../../../../../../../common/types';
import { Color, ColorHues, Theme } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleHue, handleSize } from '../../../utils';

export default (theme: Theme, colorProp: Color, isLoading = false, sizeProp: Size): Style => {
	const shade = handleHue('light', colorProp);

	const size = handleSize(sizeProp);
	const border = size.border;

	const color = isLoading ? (colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp) : 'gray';
	const textShade: ColorHues = colorProp === 'white' ? 900 : 50;

	return {
		'color': `${theme.colors.gray[textShade]} !important`,

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]} !important`,
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors[color][shade]} !important`,
			background: `${theme.colors[color][shade]} !important`
		}
	};
};
