import { TabStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isActive';

export type TabLightStylingProps = Pick<TabStyleProps, Picked>;
