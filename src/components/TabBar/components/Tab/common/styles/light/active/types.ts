import { TabStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type TabLightActiveStylingProps = Pick<TabStyleProps, Picked>;
