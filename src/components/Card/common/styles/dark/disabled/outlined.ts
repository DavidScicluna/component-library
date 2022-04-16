import { Style } from '../../../../../../common/types';
import { Theme, Color } from '../../../../../../theme/types';
import { handleHue, handleSize } from '../../../utils';
import { CardStyleProps } from '../../types';

export default (
	theme: Theme,
	colorProp: Color,
	isLight: CardStyleProps['isLight'] = true,
	isClickable: CardStyleProps['isClickable'] = false
): Style => {
	const shade = handleHue('dark', colorProp, isLight);

	const size = handleSize();
	const border = size.border;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'&::before': {
			boxShadow: isClickable ? `0 ${border}px 0 0 ${theme.colors[color][shade]} !important` : 'none !important',
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
