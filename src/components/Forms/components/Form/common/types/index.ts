import type { ElementType } from 'react';

import type { PolymorphicFormEvent } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type FormDefaultElement = 'form';
export type FormElement = Extract<ElementType, 'form'>;

export type FormEvent<Element extends FormElement = FormDefaultElement> = PolymorphicFormEvent<Element>;

export type FormProps<Element extends FormElement = FormDefaultElement> = BoxProps<Element>;

export type FormRef<Element extends FormElement = FormDefaultElement> = BoxRef<Element>;
