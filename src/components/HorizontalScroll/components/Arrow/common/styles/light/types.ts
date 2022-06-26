import { ArrowStyleProps } from '../types';

type Picked = 'theme' | 'direction' | 'isDisabled';

export type ArrowLightStyleProps = Pick<ArrowStyleProps, Picked>;
