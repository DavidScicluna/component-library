import { ReactNode } from 'react';

import { CollapsibleCardProps } from '../../../../../../DataDisplay/CollapsibleCards/OriginalCollapsibleCard/common/types';
import { Accordion } from '../../../../common/types';

type Omitted = 'color' | 'colorMode' | 'isClickable';

export type AccordionProps<D> = Omit<CollapsibleCardProps, Omitted> & {
	actions?: ReactNode;
	footer?: ReactNode;
} & Omit<Accordion<D>, 'data'>;
