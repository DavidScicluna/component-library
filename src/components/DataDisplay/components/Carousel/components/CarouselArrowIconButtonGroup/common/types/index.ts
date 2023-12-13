import type { ElementType } from 'react';

import type { DeepRequired } from 'utility-types';

import type { PolymorphicDefaultElement } from '@common/types';

import type { IconButtonGroupProps, IconButtonGroupRef } from '@components/Buttons';
import type { CarouselProps } from '@components/DataDisplay';

type CarouselArrowIconButtonGroupOtherProps = DeepRequired<
	Pick<CarouselProps, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowIconButtonGroupProps<Element extends ElementType = PolymorphicDefaultElement> =
	IconButtonGroupProps<Element> & CarouselArrowIconButtonGroupOtherProps;

export type CarouselArrowIconButtonGroupRef<Element extends ElementType = PolymorphicDefaultElement> =
	IconButtonGroupRef<Element>;
