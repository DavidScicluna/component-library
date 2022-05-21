import { TextareaDarkDisabledStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

export default ({ theme }: TextareaDarkDisabledStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		color: `${theme.colors.gray[textShade]} !important`,
		borderColor: `${theme.colors.gray[borderShade]} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
