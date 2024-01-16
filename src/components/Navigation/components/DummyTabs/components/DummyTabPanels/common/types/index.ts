import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsProps } from '@components/Navigation';

export type DummyTabPanelsProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type DummyTabPanelProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	Pick<DummyTabsProps<Element>, 'index'>
>;

export type DummyTabPanelsRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
