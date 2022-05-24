import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type InputGroupLightStyleProps = Pick<InputStyleProps, Picked>;
