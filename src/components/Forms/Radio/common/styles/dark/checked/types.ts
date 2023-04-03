import { RadioStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isWarning' | 'isSuccess';

export type RadioDarkCheckedStyleProps = Pick<RadioStyleProps, Picked>;
