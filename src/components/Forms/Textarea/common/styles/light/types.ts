import { TextareaStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type TextareaLightStyleProps = Pick<TextareaStyleProps, Picked>;
