import { ColorMode } from '@chakra-ui/react';

import { Icon } from '../../../../common/types/icons';
import { TabBarColor } from '../../types';

export type Tab = {
	icon: Icon;
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
