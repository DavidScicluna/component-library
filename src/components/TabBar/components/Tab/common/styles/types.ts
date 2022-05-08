import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { TabProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isActive';

export type TabStyleProps = {
	theme: Theme;
} & Pick<TabProps, Picked>;

export type TabStyleReturn = {
	tab: Style;
	disabled: Style;
};
