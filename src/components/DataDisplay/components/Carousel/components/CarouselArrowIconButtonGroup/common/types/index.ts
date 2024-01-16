import type { DeepRequired } from 'utility-types';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { IconButtonGroupProps, IconButtonGroupRef } from '@components/Buttons';
import type { CarouselProps } from '@components/DataDisplay';

type CarouselArrowIconButtonGroupOtherProps = DeepRequired<
	Pick<CarouselProps, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowIconButtonGroupProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	IconButtonGroupProps<Element> & CarouselArrowIconButtonGroupOtherProps;

export type CarouselArrowIconButtonGroupRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	IconButtonGroupRef<Element>;
