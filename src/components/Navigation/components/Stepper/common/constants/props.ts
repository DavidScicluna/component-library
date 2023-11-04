import { v4 as uuid } from 'uuid';

import type { StepperAlign, StepperOrientation, StepperSize, StepperVariant } from '../types';

export const __DEFAULT_STEPPER_ALIGN__: StepperAlign = 'start';

export const __DEFAULT_STEPPER_ID__ = uuid();

export const __DEFAULT_STEPPER_INDEX__ = 0;
export const __DEFAULT_STEPPER_TOTAL__ = 0;

export const __DEFAULT_STEPPER_IS_CONSECUTIVELY__ = false;
export const __DEFAULT_STEPPER_IS_DISABLED__ = false;
export const __DEFAULT_STEPPER_IS_FITTED__ = false;

export const __DEFAULT_STEPPER_ORIENTATION__: StepperOrientation = 'bottom';

export const __DEFAULT_STEPPER_SIZE__: StepperSize = 'md';

export const __DEFAULT_STEPPER_VARIANT__: StepperVariant = 'dot';
