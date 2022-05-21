import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TextareaLightSuccessStyleProps = Pick<TextareaStyleProps, Picked>;
