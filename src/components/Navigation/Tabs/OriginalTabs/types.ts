import { CommonTabsProps } from '../common/types';

export type TabsRef = HTMLDivElement | null;

export type OnChangeProps = { index: number };

export type TabsProps = CommonTabsProps & {
	isDisabled?: boolean;
	onChange?: (props: OnChangeProps) => void;
};

type Picked = 'activeTab' | 'color' | 'colorMode' | 'isDisabled' | 'isFitted' | 'onChange' | 'size';

export type TabsContext = Pick<TabsProps, Picked>;
