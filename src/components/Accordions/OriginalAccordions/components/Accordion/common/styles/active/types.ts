import { AccordionStyleProps } from '../types';

type Picked = 'theme';

export type AccordionActiveStyleProps = Pick<AccordionStyleProps<unknown>, Picked>;
