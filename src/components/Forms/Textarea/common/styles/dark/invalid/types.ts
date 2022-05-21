import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TextareaDarkInvalidStyleProps = Pick<TextareaStyleProps, Picked>;
