import { Accordion } from '../../../../types';
import { QuickTogglesProps } from '../../types';

type Picked = 'color' | 'isDisabled' | 'size';

export type AccordionProps = Accordion & Pick<QuickTogglesProps, Picked>;
