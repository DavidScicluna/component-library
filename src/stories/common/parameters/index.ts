import { ColorMode } from '@chakra-ui/react';

import colors from '../../../theme/foundations/colors';

const getColorMode = (): ColorMode => {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	} else {
		return 'light';
	}
};

const backgroundsDefaultValue = getColorMode();
const backgroundsOptions = [
	{ name: 'light', value: colors.gray[50] },
	{ name: 'dark', value: colors.gray[900] }
];

const backgrounds = {
	default: backgroundsDefaultValue,
	values: backgroundsOptions
};

export default { backgrounds };
