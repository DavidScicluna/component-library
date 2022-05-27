import { RadioStyleProps } from '../../types';

type Picked = 'theme' | 'isChecked';

export type RadioDarkReadOnlyStyleProps = Pick<RadioStyleProps, Picked>;
