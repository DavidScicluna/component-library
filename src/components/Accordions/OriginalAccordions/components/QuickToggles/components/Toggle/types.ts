import { QuickTogglesProps } from '../../types';

export type ToggleProps<D> = Pick<QuickTogglesProps<D>, 'color' | 'isDisabled' | 'size'>;
