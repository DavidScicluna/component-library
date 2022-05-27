import { RadioStyleProps } from '../../types';

type Picked = 'theme' | 'isChecked';

export type RadioLightReadOnlyStyleProps = Pick<RadioStyleProps, Picked>;
