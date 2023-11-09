import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsProps } from '@components/Navigation';

export type DummyTabPanelsProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	keyof BoxOtherProps
>;

export type DummyTabPanelProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element> &
	Pick<DummyTabsProps<Element>, 'index'>;

export type DummyTabPanelsRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
