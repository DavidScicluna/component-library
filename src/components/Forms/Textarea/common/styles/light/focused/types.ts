import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isWarning' | 'isSuccess';

export type TextareaLightFocusedStyleProps = Pick<TextareaStyleProps, Picked>;