import { ColorMode } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';
import { LinkProps } from '../types';

export type LinkStyleProps = {
	color: Color;
	colorMode: ColorMode;
	isFullWidth: LinkProps['isFullWidth'];
	isString: boolean;
};
