import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type TextareaDarkFocusedStyleProps = Pick<TextareaStyleProps, Picked>;
