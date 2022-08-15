import { StepStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'status';

export type StepDarkStylingProps = Pick<StepStyleProps, Picked>;
