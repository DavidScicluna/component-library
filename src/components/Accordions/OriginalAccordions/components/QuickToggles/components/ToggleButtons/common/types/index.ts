import { HorizontalScrollProps } from '../../../../../../../../DataDisplay/HorizontalScroll/common/types';
import { QuickTogglesProps } from '../../../../common/types';

export type ToggleButtonsProps<D> = Pick<QuickTogglesProps<D>, 'size' | 'spacing'> &
	Pick<HorizontalScrollProps, 'children'>;
