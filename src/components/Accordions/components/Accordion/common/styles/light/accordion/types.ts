import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isOpen';

export type AccordionLightStylingProps = Pick<AccordionStyleProps, Picked>;
