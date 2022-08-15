import { StepStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'status';

export type StepLightStylingProps = Pick<StepStyleProps, Picked>;
