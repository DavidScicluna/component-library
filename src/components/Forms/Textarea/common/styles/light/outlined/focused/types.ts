import { TextareaStyleProps } from '../../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isWarning' | 'isSuccess';

export type TextareaLightOutlinedFocusedStyleProps = Pick<TextareaStyleProps, Picked>;
