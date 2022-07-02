import { DummyIconButtonStyleProps as AllDummyIconButtonStyleProps } from '../types';

type Picked = 'theme' | 'isRound' | 'size';

export type DummyIconButtonStyleProps = Pick<AllDummyIconButtonStyleProps, Picked>;
