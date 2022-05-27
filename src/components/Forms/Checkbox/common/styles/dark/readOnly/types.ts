import { CheckboxStyleProps } from '../../types';

type Picked = 'theme' | 'isChecked';

export type CheckboxDarkReadOnlyStyleProps = Pick<CheckboxStyleProps, Picked>;
