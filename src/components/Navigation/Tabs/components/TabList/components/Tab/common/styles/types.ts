import { Style } from '../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../theme/types';
import { TabsProps } from '../../../../../../types';
import { TabProps } from '../../types';

export type TabStyleProps = Pick<TabsProps, 'color' | 'colorMode' | 'size'> & {
	theme: Theme;
	isFullWidth: boolean;
} & Pick<TabProps, 'isSelected'>;

export type TabStyleReturn = {
	tab: Style;
	active: Style;
	disabled: Style;
};
