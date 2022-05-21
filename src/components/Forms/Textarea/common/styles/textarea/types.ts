import { TextareaStyleProps as AllTextareaStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type TextareaStyleProps = Pick<AllTextareaStyleProps, Picked>;
