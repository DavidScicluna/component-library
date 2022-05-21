import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type InputLightSuccessStyleProps = Pick<InputStyleProps, Picked>;
