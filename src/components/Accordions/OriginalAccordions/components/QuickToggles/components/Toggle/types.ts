import { QuickTogglesProps } from '../../types';

type Picked = 'color' | 'isDisabled' | 'size';

export type ToggleProps<D> = Pick<QuickTogglesProps<D>, Picked>;
