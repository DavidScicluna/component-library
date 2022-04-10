import { Style } from '../../../../../../../common/types';
import { Color, Theme } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleHue, handleSize } from '../../../utils';

export default (theme: Theme, colorProp: Color, isLoading = false, sizeProp: Size): Style => {
	const shade = handleHue('dark', isLoading ? colorProp : 'gray');
	const size = handleSize(sizeProp);
	const border = size.border;

	const color = isLoading ? (colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp) : 'gray';

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]} !important`,
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
