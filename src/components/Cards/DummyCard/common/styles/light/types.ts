import { DummyCardStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'isLight';

export type DummyCardLightStylingProps = Pick<DummyCardStyleProps, Picked>;
