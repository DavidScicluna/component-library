import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isOpen' | 'isLight';

export type AccordionDarkStylingProps = Pick<AccordionStyleProps<unknown>, Picked>;
