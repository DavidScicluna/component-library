import { ArrowStyleProps } from '../types';

type Picked = 'theme' | 'direction';

export type ArrowLightStyleProps = Pick<ArrowStyleProps, Picked>;
