import { CommonTabsProps } from '../common/types';

export type DummyTabsRef = HTMLDivElement | null;

export type DummyTabsProps = CommonTabsProps;

export type DummyTabsContext = Pick<DummyTabsProps, 'activeTab' | 'color' | 'colorMode' | 'isFitted' | 'size'>;
