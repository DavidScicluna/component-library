import { DummyCollapsibleCardProps } from '../../../../../../DataDisplay/CollapsibleCards/DummyCollapsibleCard/common/types';
import { DummyAccordion } from '../../../../common/types';

export type DummyAccordionProps = Omit<DummyCollapsibleCardProps, 'id' | 'color' | 'colorMode'> & DummyAccordion;
