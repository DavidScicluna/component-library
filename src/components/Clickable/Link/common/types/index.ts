import { ColorMode, LinkProps as CUILinkProps } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

type Omitted = 'colorScheme' | 'isExternal' | 'size' | 'variant';

export type LinkProps = {
	color?: Color;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	isFullWidth?: boolean;
	hasUnderline?: boolean;
} & Omit<CUILinkProps, Omitted>;
