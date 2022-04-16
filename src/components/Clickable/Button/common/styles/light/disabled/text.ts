import { Style } from '../../../../../../../common/types';
import { Theme, Color } from '../../../../../../../theme/types';
import { handleHue } from '../../../utils';
import { ButtonStyleProps } from '../../types';

export default (theme: Theme, colorProp: Color, isLoading: ButtonStyleProps['isLoading'] = false): Style => {
	const shade = handleHue('light', isLoading ? colorProp : 'gray');

	const color = isLoading ? (colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp) : 'gray';

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			borderColor: `${theme.colors.transparent} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
