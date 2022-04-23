import { ColorMode, LinkProps as CUILinkProps } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type LinkColor = Exclude<Color, 'transparent'>;

type Omitted = 'colorScheme' | 'isExternal' | 'size' | 'variant';

export type LinkProps = {
	color?: LinkColor;
	colorMode?: ColorMode;
	isFullWidth?: boolean;
	isDisabled?: boolean;
} & Omit<CUILinkProps, Omitted>;
