import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight' | 'isOpen';

export type AccordionLightActiveStylingProps = Pick<AccordionStyleProps<unknown>, Picked>;
