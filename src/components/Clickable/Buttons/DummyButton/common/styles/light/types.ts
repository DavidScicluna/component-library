import { DummyButtonStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type DummyButtonLightStylingProps = Pick<DummyButtonStyleProps, Picked>;
