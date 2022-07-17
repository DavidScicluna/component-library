import { ReactNode } from 'react';

export type RenderProps = {
	width?: string;
	height?: string;
};

export type Tab = {
	renderIcon: (props: RenderProps) => ReactNode;
	label: string;
	isDisabled?: boolean;
	onClick?: () => void;
};

export type TabProps = Tab & {
	isActive?: boolean;
	onClick: () => void;
};
