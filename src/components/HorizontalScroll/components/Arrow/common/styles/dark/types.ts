import { ArrowStyleProps } from '../types';

type Picked = 'theme' | 'direction';

export type ArrowDarkStyleProps = Pick<ArrowStyleProps, Picked>;
