import type { PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type FormDefaultElement = 'form';
export type FormElement = Extract<PolymorphicElementType, 'form'>;

export type FormProps<Element extends FormElement> = BoxProps<Element>;

export type FormRef<Element extends FormElement> = BoxRef<Element>;
