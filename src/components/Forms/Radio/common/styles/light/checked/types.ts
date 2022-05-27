import { RadioStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isWarning' | 'isSuccess';

export type RadioLightCheckedStyleProps = Pick<RadioStyleProps, Picked>;
