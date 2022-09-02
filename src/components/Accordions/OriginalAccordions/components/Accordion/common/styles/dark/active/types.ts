import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isLight' | 'isOpen';

export type AccordionDarkActiveStylingProps = Pick<AccordionStyleProps<unknown>, Picked>;
