import { TextareaStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type TextareaDarkStyleProps = Pick<TextareaStyleProps, Picked>;
