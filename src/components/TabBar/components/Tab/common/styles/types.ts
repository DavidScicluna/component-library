import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { TabBarProps } from '../../../../types';
import { TabProps } from '../../types';

export type TabStyleProps = Pick<TabProps, 'isActive'> & {
	theme: Theme;
} & Pick<TabBarProps, 'color' | 'colorMode'>;

export type TabStyleReturn = {
	tab: Style;
	disabled: Style;
};
