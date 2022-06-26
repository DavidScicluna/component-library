import { DummyButtonStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type DummyButtonDarkStylingProps = Pick<DummyButtonStyleProps, Picked>;
