import { Style } from '../../../../../../../../common/types';
import { handleHue } from '../../../../../../../../common/utils';
import { Theme } from '../../../../../../../../theme/types';

export default (theme: Theme): Style => {
	const shade = handleHue('dark', 'gray');

	return {
		'& svg, .ds-cl-icon, ': {
			color: `${theme.colors.gray[shade]} !important`
		}
	};
};
