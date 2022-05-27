import { FormHelperTextStyleProps } from '../types';

type Picked = 'theme' | 'isError' | 'isWarning' | 'isSuccess';

export type FormHelperTextLightStyleProps = Pick<FormHelperTextStyleProps, Picked>;
