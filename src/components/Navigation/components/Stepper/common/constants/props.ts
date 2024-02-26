import { v4 as uuid } from 'uuid';

import type { StepperAlign, StepperDefaultElement, StepperOrientation, StepperSize, StepperVariant } from '../types';

export const DEFAULT_STEPPER_AS: StepperDefaultElement = 'div';

export const DEFAULT_STEPPER_ALIGN: StepperAlign = 'start';

export const DEFAULT_STEPPER_ID = uuid();

export const DEFAULT_STEPPER_INDEX = 0;
export const DEFAULT_STEPPER_TOTAL = 0;

export const DEFAULT_STEPPER_IS_CONSECUTIVELY = false;
export const DEFAULT_STEPPER_IS_DISABLED = false;
export const DEFAULT_STEPPER_IS_FITTED = false;

export const DEFAULT_STEPPER_ORIENTATION: StepperOrientation = 'bottom';

export const DEFAULT_STEPPER_SIZE: StepperSize = 'md';

export const DEFAULT_STEPPER_VARIANT: StepperVariant = 'dot';
