import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TextareaLightWarningStyleProps = Pick<TextareaStyleProps, Picked>;
