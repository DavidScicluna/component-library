import { DummyButtonProps } from '../../../../../../../../Clickable/Buttons/DummyButton/common/types';
import { DummyQuickTogglesProps } from '../../../../common/types';

export type DummyToggleAllButtonProps = Pick<DummyQuickTogglesProps, 'color' | 'size'> &
	Pick<DummyButtonProps, 'isFullWidth'>;
