import { TextareaStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type TextareaDarkWarningStyleProps = Pick<TextareaStyleProps, Picked>;
