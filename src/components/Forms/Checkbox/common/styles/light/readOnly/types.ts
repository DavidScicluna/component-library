import { CheckboxStyleProps } from '../../types';

type Picked = 'theme' | 'isChecked';

export type CheckboxLightReadOnlyStyleProps = Pick<CheckboxStyleProps, Picked>;
