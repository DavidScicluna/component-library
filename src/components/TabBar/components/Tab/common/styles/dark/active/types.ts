import { TabStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type TabDarkActiveStylingProps = Pick<TabStyleProps, Picked>;
