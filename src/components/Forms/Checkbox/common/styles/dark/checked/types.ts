import { CheckboxStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isError' | 'isWarning' | 'isSuccess';

export type CheckboxDarkCheckedStyleProps = Pick<CheckboxStyleProps, Picked>;
