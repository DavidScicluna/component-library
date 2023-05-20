import { Nullable } from '../../../../../../common/types';
import { CommonTabBarProps } from '../../../common/types';

export type TabBarOnChangeProps = { index: number };

export type TabBarProps = CommonTabBarProps & {
	isDisabled?: boolean;
	onChange?: (props: TabBarOnChangeProps) => void;
};

export type TabBarRef = Nullable<HTMLDivElement>;

export type TabBarContext = Pick<TabBarProps, 'activeTab' | 'color' | 'colorMode' | 'isDisabled' | 'onChange' | 'size'>;
