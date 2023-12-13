import type { ElementType } from 'react';

import type { DeepRequired } from 'utility-types';

import type { PolymorphicDefaultElement } from '@common/types';

import type { ButtonGroupProps, ButtonGroupRef } from '@components/Buttons';
import type { CarouselProps } from '@components/DataDisplay';

type CarouselArrowButtonGroupOtherProps = DeepRequired<Pick<CarouselProps, 'renderLeftAction' | 'renderRightAction'>>;

export type CarouselArrowButtonGroupProps<Element extends ElementType = PolymorphicDefaultElement> =
	ButtonGroupProps<Element> & CarouselArrowButtonGroupOtherProps;

export type CarouselArrowButtonGroupRef<Element extends ElementType = PolymorphicDefaultElement> =
	ButtonGroupRef<Element>;
