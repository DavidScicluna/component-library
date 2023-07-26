import type { PolymorphicDefaultElement } from '@common/types/polymorphic';
import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

type BackdropOverlayElement = PolymorphicDefaultElement;

type BackdropOverlayOtherProps = CommonAppThemeProps & {
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	amount?: number;
};

export type BackdropOverlayProps = BoxProps<BackdropOverlayElement, BackdropOverlayOtherProps>;

export type BackdropOverlayRef = BoxRef<BackdropOverlayElement>;
