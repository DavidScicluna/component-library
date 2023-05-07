import { Accordion } from '../../../../../../common/types';
import { QuickTogglesProps } from '../../../../common/types';

export type AccordionButtonProps<D> = Omit<Accordion<D>, 'data'> &
	Pick<QuickTogglesProps<D>, 'color' | 'isDisabled' | 'size' | 'spacing'>;
