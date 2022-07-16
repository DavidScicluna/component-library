import { ColorMode } from '@chakra-ui/react';

export const getColorMode = (): ColorMode => {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	} else {
		return 'light';
	}
};
