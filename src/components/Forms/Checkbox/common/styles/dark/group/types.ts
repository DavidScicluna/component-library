import { CheckboxStyleProps } from '../../types';

type Picked = 'theme' | 'isError' | 'isSuccess' | 'isWarning';

export type CheckboxDarkGroupStyleProps = Pick<CheckboxStyleProps, Picked>;
