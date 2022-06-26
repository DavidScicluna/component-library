import { DummyButtonStyleProps as AllDummyButtonStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'size';

export type DummyButtonStyleProps = Pick<AllDummyButtonStyleProps, Picked>;
