import { CheckboxStyleProps as AllCheckboxStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type CheckboxStyleProps = Pick<AllCheckboxStyleProps, Picked>;
