import { FormLabelStyleProps as AllFormLabelStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type FormLabelStyleProps = Pick<AllFormLabelStyleProps, Picked>;
