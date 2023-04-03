import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isFixed' | 'isLight' | 'isOpen';

export type AccordionLightStylingProps = Pick<AccordionStyleProps, Picked>;
