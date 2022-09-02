import { AccordionStyleProps } from '../../types';

type Picked = 'theme' | 'isLight';

export type AccordionLightDisabledStylingProps = Pick<AccordionStyleProps<unknown>, Picked>;
