import { ElementType } from 'react';

import { StackProps, StackRef } from '../../../Stack/common/types';

export type VStackProps<Element extends ElementType> = Omit<StackProps<Element>, 'direction'>;

export type VStackRef<Element extends ElementType> = StackRef<Element>;