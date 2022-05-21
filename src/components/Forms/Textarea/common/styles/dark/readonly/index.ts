import { TextareaDarkReadOnlyStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

export default ({ theme }: TextareaDarkReadOnlyStyleProps): Style => {
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
		backgroundColor: `${theme.colors.gray[100]} !important`,
		background: `${theme.colors.gray[100]}  important`
	};
};
