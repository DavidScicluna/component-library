import { MouseEvent } from 'react';

import { LinkProps as CUILinkProps } from '@chakra-ui/react';

export type LinkMouseEvent = MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>;

export type LinkProps = Omit<CUILinkProps, 'colorScheme' | 'isExternal' | 'size' | 'variant'> & {
	isDisabled?: boolean;
};
