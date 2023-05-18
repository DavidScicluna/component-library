import { Nullable } from '../../../../../../common/types';
import { CommonTabBarProps } from '../../../common/types';

export type DummyTabBarProps = CommonTabBarProps;

export type DummyTabBarRef = Nullable<HTMLDivElement>;

type Picked = 'activeTab' | 'color' | 'colorMode' | 'size';

export type DummyTabBarContext = Pick<DummyTabBarProps, Picked>;
