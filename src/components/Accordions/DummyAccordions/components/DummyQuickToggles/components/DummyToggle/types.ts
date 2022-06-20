import { DummyQuickTogglesProps } from '../../types';

type Picked = 'color' | 'size';

export type DummyToggleProps = Pick<DummyQuickTogglesProps, Picked>;
