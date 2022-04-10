import { Style } from '../../../../../../../common/types';
import { Color, Theme } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleSize, handleHue } from '../../../utils';

export default (theme: Theme, colorProp: Color, sizeProp: Size): Style => {
	const shade = handleHue('light', colorProp);

	const size = handleSize(sizeProp);
	const border = size.border;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]} !important`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		}
	};
};
