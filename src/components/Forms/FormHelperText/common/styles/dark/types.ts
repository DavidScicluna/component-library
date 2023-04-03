import { FormHelperTextStyleProps } from '../types';

type Picked = 'theme' | 'isError' | 'isWarning' | 'isSuccess';

export type FormHelperTextDarkStyleProps = Pick<FormHelperTextStyleProps, Picked>;
