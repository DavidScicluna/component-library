import { QuickTogglesProps } from '../../types';

type Picked = 'color' | 'isDisabled' | 'size';

export type ToggleProps = Pick<QuickTogglesProps, Picked>;
