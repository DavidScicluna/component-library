import { ButtonProps } from '../../../../../../../../Clickable/Buttons/OriginalButton/common/types';
import { QuickTogglesProps } from '../../../../common/types';

export type ToggleAllButtonProps<D> = Pick<QuickTogglesProps<D>, 'color' | 'isDisabled' | 'size'> &
	Pick<ButtonProps, 'isFullWidth'>;
