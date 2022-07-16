import colors from '../../../theme/foundations/colors';
import { getColorMode } from '../utils';

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
