import { DummyCardStyleProps as AllDummyCardStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth';

export type DummyCardStyleProps = Pick<AllDummyCardStyleProps, Picked>;
