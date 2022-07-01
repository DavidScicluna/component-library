import { DummyCardStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'isLight';

export type DummyCardDarkStylingProps = Pick<DummyCardStyleProps, Picked>;
