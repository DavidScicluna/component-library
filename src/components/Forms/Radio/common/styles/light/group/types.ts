import { RadioStyleProps } from '../../types';

type Picked = 'theme' | 'isError' | 'isSuccess' | 'isWarning';

export type RadioLightGroupStyleProps = Pick<RadioStyleProps, Picked>;
