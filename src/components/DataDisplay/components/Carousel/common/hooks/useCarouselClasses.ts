import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetResponsiveValue } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import { __DEFAULT_CAROUSEL_VARIANT__ } from '../constants';
import type { CarouselProps, CarouselVariant } from '../types';

type UseCarouselClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	CarouselProps<Element>,
	'variant' | 'orientation' | 'spacing'
>;
type UseCarouselClassesReturn = Record<'items' | 'item', ClassName> & {
	overflow: Record<'hidden' | 'auto', ClassName>;
};

const useCarouselClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseCarouselClassesProps<Element>
): UseCarouselClassesReturn => {
	const { variant: v = __DEFAULT_CAROUSEL_VARIANT__ } = props;

	const variant = useGetResponsiveValue<CarouselVariant>(v);

	return {
		overflow: {
			hidden: classNames(classes.sizing.max_height.full, classes.layout.overflow.hidden),
			auto: classNames(classes.sizing.max_height.full, classes.layout.overflow.auto)
		},
		items: classNames(
			classes.scrollbar.hide,
			classes.layout.overflow.auto,
			classes.interactivity.scroll_behavior.smooth,
			classes.interactivity.scroll_snap_type.both
		),
		item: classNames(
			classes.interactivity.scroll_snap_align[variant === 'left' ? 'end' : 'start'],
			classes.interactivity.scroll_snap_stop.always
		)
	};
};

export default useCarouselClasses;
