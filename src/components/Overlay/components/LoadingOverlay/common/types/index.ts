import type { ElementType, ReactNode } from 'react';

import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { GlassProps } from '@components/Overlay/components/Glass/common/types';

interface LoadingOverlayOtherProps<Element extends ElementType>
	extends CommonAppThemeProps,
		Pick<GlassProps<Element>, 'blur'> {
	renderSpinner: () => ReactNode;
	isLoading: boolean;
	hasGlass?: boolean;
	hasBackdrop?: boolean;
}

export type LoadingOverlayProps<Element extends ElementType> = BoxProps<Element, LoadingOverlayOtherProps<Element>>;

export type LoadingOverlayRef<Element extends ElementType> = BoxRef<Element>;
