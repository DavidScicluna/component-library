import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type TextareaLightFocusedStyleProps = Pick<TextareaStyleProps, Picked>;
