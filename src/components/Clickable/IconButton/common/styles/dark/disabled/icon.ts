import { Style } from '../../../../../../../common/types';
import { Color, Theme } from '../../../../../../../theme/types';
import { handleHue } from '../../../utils';

export default (theme: Theme, colorProp: Color, isLoading = false): Style => {
	const shade = handleHue('dark', isLoading ? colorProp : 'gray');

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
