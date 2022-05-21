import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type InputDarkWarningStyleProps = Pick<InputStyleProps, Picked>;
