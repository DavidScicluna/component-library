import { CheckboxStyleProps } from '../../types';

type Picked = 'theme' | 'isError' | 'isSuccess' | 'isWarning';

export type CheckboxLightGroupStyleProps = Pick<CheckboxStyleProps, Picked>;
