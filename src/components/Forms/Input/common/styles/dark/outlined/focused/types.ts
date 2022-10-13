import { InputStyleProps } from '../../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isWarning' | 'isSuccess';

export type InputDarkOutlinedFocusedStyleProps = Pick<InputStyleProps, Picked>;
