import { Accordion } from '../../../../types';
import { QuickTogglesProps } from '../../types';

type Picked = 'isDisabled' | 'onToggle';

export type AccordionProps = Accordion & Pick<QuickTogglesProps, Picked>;
