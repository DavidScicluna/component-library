import { QuickTogglesProps } from '../../types';

type Picked = 'color' | 'isDisabled' | 'onToggle' | 'size';

export type ToggleProps = { hasOpened?: boolean } & Pick<QuickTogglesProps, Picked>;
