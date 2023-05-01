import { Nullable } from '../../../../../../common/types';
import { CommonTabsProps } from '../../../common/types';

export type DummyTabsProps = CommonTabsProps;

export type DummyTabsRef = Nullable<HTMLDivElement>;

export type DummyTabsContext = Pick<DummyTabsProps, 'activeTab' | 'color' | 'colorMode' | 'isFitted' | 'size'>;
