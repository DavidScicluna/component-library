import { Style } from '../../../../../../../common/types';
import { Theme, Color } from '../../../../../../../theme/types';
import { handleHue } from '../../../utils';

export default (theme: Theme, colorProp: Color): Style => {
	const shade = handleHue('dark', colorProp);

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		}
	};
};
