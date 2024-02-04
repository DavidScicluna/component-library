import type { DeepRequired } from 'utility-types';

import type {
	IconButtonGroupDefaultElement,
	IconButtonGroupElement,
	IconButtonGroupProps,
	IconButtonGroupRef
} from '@components/Buttons';
import type { CarouselDefaultElement, CarouselProps } from '@components/DataDisplay';

export type CarouselArrowIconButtonGroupDefaultElement = IconButtonGroupDefaultElement;
export type CarouselArrowIconButtonGroupElement = IconButtonGroupElement;

type CarouselArrowIconButtonGroupOtherProps = DeepRequired<
	Pick<CarouselProps<CarouselDefaultElement>, 'renderLeftAction' | 'renderRightAction'>
>;

export type CarouselArrowIconButtonGroupProps<Element extends CarouselArrowIconButtonGroupElement> =
	IconButtonGroupProps<Element> & CarouselArrowIconButtonGroupOtherProps;

export type CarouselArrowIconButtonGroupRef<Element extends CarouselArrowIconButtonGroupElement> =
	IconButtonGroupRef<Element>;
