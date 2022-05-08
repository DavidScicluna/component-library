import { TabStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type TabDarkStylingProps = Pick<TabStyleProps, Picked>;
