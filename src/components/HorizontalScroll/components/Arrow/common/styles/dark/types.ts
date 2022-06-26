import { ArrowStyleProps } from '../types';

type Picked = 'theme' | 'direction' | 'isDisabled';

export type ArrowDarkStyleProps = Pick<ArrowStyleProps, Picked>;
