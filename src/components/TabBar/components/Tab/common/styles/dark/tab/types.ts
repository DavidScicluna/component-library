import { TabStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isActive';

export type TabDarkStylingProps = Pick<TabStyleProps, Picked>;
