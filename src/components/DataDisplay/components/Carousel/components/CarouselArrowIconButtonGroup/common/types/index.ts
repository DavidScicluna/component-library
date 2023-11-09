import type { ElementType } from 'react';

import type { DeepRequired } from 'utility-types';

import type { PolymorphicDefaultElement } from '@common/types';

import type { IconButtonGroupProps, IconButtonGroupRef } from '@components/Buttons';
import type { CarouselProps } from '@components/DataDisplay';

type CarouselArrowIconButtonGroupOtherProps<Element extends ElementType = PolymorphicDefaultElement> = DeepRequired<
	Pick<CarouselProps<Element>, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowIconButtonGroupProps<Element extends ElementType = PolymorphicDefaultElement> =
	IconButtonGroupProps<Element> & CarouselArrowIconButtonGroupOtherProps<Element>;

export type CarouselArrowIconButtonGroupRef<Element extends ElementType = PolymorphicDefaultElement> =
	IconButtonGroupRef<Element>;
