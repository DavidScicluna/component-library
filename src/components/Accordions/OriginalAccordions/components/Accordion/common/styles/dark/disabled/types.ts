import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'isLight';

export type AccordionDarkDisabledStylingProps = Pick<AccordionStyleProps<unknown>, Picked>;
