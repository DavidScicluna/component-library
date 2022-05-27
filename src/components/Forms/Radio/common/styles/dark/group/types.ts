import { RadioStyleProps } from '../../types';

type Picked = 'theme' | 'isError' | 'isSuccess' | 'isWarning';

export type RadioDarkGroupStyleProps = Pick<RadioStyleProps, Picked>;
