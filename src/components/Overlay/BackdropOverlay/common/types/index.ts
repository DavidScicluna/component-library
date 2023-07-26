import { __DEFAULT_POLYMORPHIC_ELEMENT__ } from '@common/constants';
import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type BackdropOverlayElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__;

type BackdropOverlayOtherProps = CommonAppThemeProps & {
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	amount?: number;
};

export type BackdropOverlayProps = BoxProps<BackdropOverlayElementType, BackdropOverlayOtherProps>;

export type BackdropOverlayRef = BoxRef<BackdropOverlayElementType>;
