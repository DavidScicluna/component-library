import { Accordion } from '../../../../types';
import { QuickTogglesProps } from '../../types';

type Picked = 'color' | 'isDisabled' | 'size';

export type AccordionProps<D> = Omit<Accordion<D>, 'data'> & Pick<QuickTogglesProps<D>, Picked>;
