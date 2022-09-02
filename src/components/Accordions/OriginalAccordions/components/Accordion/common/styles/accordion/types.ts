import { AccordionStyleProps as AllAccordionStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth';

export type AccordionStyleProps = Pick<AllAccordionStyleProps<unknown>, Picked>;
