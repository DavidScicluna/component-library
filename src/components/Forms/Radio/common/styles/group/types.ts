import { RadioStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'size' | 'variant';

export type RadioGroupStyleProps = Pick<RadioStyleProps, Picked>;
