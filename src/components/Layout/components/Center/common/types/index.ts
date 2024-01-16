import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type CenterOtherProps = {
	spacing?: ThemeSpacing;
};
export type CenterResponsiveValueProps = ResponsiveValueProps<CenterOtherProps, 'spacing'>;

export type CenterProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	CenterResponsiveValueProps
>;

export type CenterRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
