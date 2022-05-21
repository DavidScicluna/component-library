import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TextareaGroupDarkStyleProps = Pick<TextareaStyleProps, Picked>;
