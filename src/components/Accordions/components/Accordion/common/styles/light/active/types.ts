import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isOpen';

export type AccordionLightActiveStylingProps = Pick<AccordionStyleProps, Picked>;
