import { TextareaStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'size';

export type TextareaGroupStyleProps = Pick<TextareaStyleProps, Picked>;
