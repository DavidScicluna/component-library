import { MouseEvent } from 'react';

import { ColorMode, LinkProps as CUILinkProps } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type LinkMouseEvent = MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>;

export type LinkProps = {
	color?: Color;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	isFullWidth?: boolean;
} & Omit<CUILinkProps, 'colorScheme' | 'isExternal' | 'size' | 'variant'>;
