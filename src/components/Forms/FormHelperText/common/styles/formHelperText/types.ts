import { FormHelperTextStyleProps as AllFormHelperTextStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type FormHelperTextStyleProps = Pick<AllFormHelperTextStyleProps, Picked>;
