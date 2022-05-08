import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { TabProps } from '../../types';

type Picked = 'color' | 'colorMode';

export type TabStyleProps = {
	theme: Theme;
} & Pick<TabProps, Picked>;

export type TabStyleReturn = {
	tab: Style;
	disabled: Style;
	active: Style;
};
