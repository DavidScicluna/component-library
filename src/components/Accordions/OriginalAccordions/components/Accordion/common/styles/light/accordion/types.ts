import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isOpen' | 'isLight';

export type AccordionLightStylingProps = Pick<AccordionStyleProps<unknown>, Picked>;
