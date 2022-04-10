import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-slab';

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
