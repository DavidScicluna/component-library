import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TextareaLightInvalidStyleProps = Pick<TextareaStyleProps, Picked>;
