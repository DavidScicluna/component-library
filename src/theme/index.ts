import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import foundations from './foundations';
import styles from './styles';

const config: ThemeConfig = {
	cssVarPrefix: 'ds-cl',
	initialColorMode: 'light',
	useSystemColorMode: true
};

const theme = {
	styles,
	config,
	...foundations
};

export default extendTheme({ ...theme });
