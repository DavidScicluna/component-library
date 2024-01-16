import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TabsProps } from '@components/Navigation';

export type TabPanelsProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type TabPanelProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	Pick<TabsProps<Element>, 'index'>
>;

export type TabPanelsRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
