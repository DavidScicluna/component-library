import { Nullable } from '../../../../../../common/types';
import { CommonTabsProps } from '../../../common/types';

export type TabsOnChangeProps = { index: number };

export type TabsProps = CommonTabsProps & {
	isDisabled?: boolean;
	onChange?: (props: TabsOnChangeProps) => void;
};

export type TabsRef = Nullable<HTMLDivElement>;

type Picked = 'activeTab' | 'color' | 'colorMode' | 'isDisabled' | 'isFitted' | 'onChange' | 'size';

export type TabsContext = Pick<TabsProps, Picked>;
