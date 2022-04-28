import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { Theme } from '../../../../../../../../theme/types';

export default (theme: Theme): Style => {
	const shade = getHue({ type: 'text.secondary', colorMode: 'dark' });

	return {
		'& svg, .ds-cl-icon, ': {
			color: `${theme.colors.gray[shade]} !important`
		}
	};
};
