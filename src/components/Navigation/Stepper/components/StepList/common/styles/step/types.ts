import { StepStyleProps as AllStepStyleProps } from '../types';

type Picked = 'theme' | 'status';

export type StepStyleProps = Pick<AllStepStyleProps, Picked>;
