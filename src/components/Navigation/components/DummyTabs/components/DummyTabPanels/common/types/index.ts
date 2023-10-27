import type { ElementType } from 'react';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { DummyTabsProps } from '@components/Navigation';

export type DummyTabPanelsProps<Element extends ElementType> = Omit<BoxProps<Element>, keyof BoxOtherProps>;

export type DummyTabPanelProps<Element extends ElementType> = BoxProps<Element> &
	Pick<DummyTabsProps<Element>, 'index'>;

export type DummyTabPanelsRef<Element extends ElementType> = BoxRef<Element>;
