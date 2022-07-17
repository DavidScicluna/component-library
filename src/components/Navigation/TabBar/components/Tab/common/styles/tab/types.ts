import { TabStyleProps as AllTabStyleProps } from '../types';

type Picked = 'theme' | 'isActive';

export type TabStyleProps = Pick<AllTabStyleProps, Picked>;
