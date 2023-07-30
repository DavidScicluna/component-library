import type { ElementType } from 'react';

import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type BackdropOverlayOtherProps = CommonAppThemeProps & {
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	amount?: number;
};

export type BackdropOverlayProps<Element extends ElementType> = BoxProps<Element, BackdropOverlayOtherProps>;

export type BackdropOverlayRef<Element extends ElementType> = BoxRef<Element>;
