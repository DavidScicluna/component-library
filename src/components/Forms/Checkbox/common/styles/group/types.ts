import { CheckboxStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'size' | 'variant';

export type CheckboxGroupStyleProps = Pick<CheckboxStyleProps, Picked>;
