import type { DeepRequired } from 'utility-types';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { ButtonGroupProps, ButtonGroupRef } from '@components/Buttons';
import type { CarouselProps } from '@components/DataDisplay';

type CarouselArrowButtonGroupOtherProps = DeepRequired<Pick<CarouselProps, 'renderLeftAction' | 'renderRightAction'>>;

export type CarouselArrowButtonGroupProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	ButtonGroupProps<Element> & CarouselArrowButtonGroupOtherProps;

export type CarouselArrowButtonGroupRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	ButtonGroupRef<Element>;
