import { TabStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type TabLightStylingProps = Pick<TabStyleProps, Picked>;
