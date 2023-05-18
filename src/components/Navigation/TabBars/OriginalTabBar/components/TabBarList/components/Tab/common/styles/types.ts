import { Style } from '../../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../../theme/types';
import { TabBarProps } from '../../../../../../common/types';
import { TabProps } from '../types';

export type TabStyleProps = Pick<TabBarProps, 'color' | 'colorMode' | 'size'> & {
	theme: Theme;
} & Pick<TabProps, 'isSelected'>;

export type TabStyleReturn = {
	tab: Style;
	active: Style;
	disabled: Style;
};
