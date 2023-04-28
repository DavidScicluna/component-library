import { NoUndefinedField } from '../../../../../../common/types';
import { ButtonProps } from '../../types';

export type ButtonSpinnerProps = NoUndefinedField<Pick<ButtonProps, 'color' | 'colorMode' | 'size' | 'variant'>>;
