import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { TabBarColor } from '../../types';

type RenderProps = {
	width?: string;
	height?: string;
};

export type Tab = {
	renderIcon: (props: RenderProps) => ReactNode;
	label: string;
	isDisabled?: boolean;
	onClick?: () => void;
};

export type TabProps = {
	color: TabBarColor;
	colorMode?: ColorMode;
	isActive?: boolean;
	onClick: () => void;
} & Tab;
