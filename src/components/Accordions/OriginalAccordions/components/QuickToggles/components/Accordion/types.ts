import { Accordion } from '../../../../types';
import { QuickTogglesProps } from '../../types';

export type AccordionProps<D> = Omit<Accordion<D>, 'data'> &
	Pick<QuickTogglesProps<D>, 'color' | 'isDisabled' | 'size'>;
