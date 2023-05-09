import { HorizontalScrollProps } from '../../../../../../../../DataDisplay/HorizontalScroll/common/types';
import { DummyQuickTogglesProps } from '../../../../common/types';

export type DummyToggleButtonsProps = Pick<DummyQuickTogglesProps, 'size' | 'spacing'> &
	Pick<HorizontalScrollProps, 'children'>;