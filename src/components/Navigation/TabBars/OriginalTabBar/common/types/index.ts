import { Nullable } from '../../../../../../common/types';
import { CommonTabBarProps } from '../../../common/types';

export type OnChangeProps = { index: number };

export type TabBarProps = CommonTabBarProps & {
	isDisabled?: boolean;
	onChange?: (props: OnChangeProps) => void;
};

export type TabBarRef = Nullable<HTMLDivElement>;

export type TabBarContext = Pick<TabBarProps, 'activeTab' | 'color' | 'colorMode' | 'isDisabled' | 'onChange' | 'size'>;
