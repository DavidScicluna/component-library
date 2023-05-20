import { CommonTabsProps } from '../../../common/types';

export type TabsRef = HTMLDivElement | null;

export type TabsOnChangeProps = { index: number };

export type TabsProps = CommonTabsProps & {
	isDisabled?: boolean;
	onChange?: (props: TabsOnChangeProps) => void;
};

type Picked = 'activeTab' | 'color' | 'colorMode' | 'isDisabled' | 'isFitted' | 'onChange' | 'size';

export type TabsContext = Pick<TabsProps, Picked>;
