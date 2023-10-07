import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';
import type { PolymorphicFormEvent } from '@common/types/polymorphic';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type FormDefaultElement = 'form';
export type FormElement = PickFrom<ElementType, 'form'>;

export type FormEvent<Element extends FormElement = FormDefaultElement> = PolymorphicFormEvent<Element>;

export type FormProps<Element extends FormElement = FormDefaultElement> = BoxProps<Element>;

export type FormRef<Element extends FormElement = FormDefaultElement> = BoxRef<Element>;
