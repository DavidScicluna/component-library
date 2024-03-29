import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { DEFAULT_CAROUSEL_VARIANT } from '../constants';
import type { CarouselElement, CarouselProps } from '../types';

import useCarouselResponsiveValues from './useCarouselResponsiveValues';

type UseCarouselClassesProps<Element extends CarouselElement> = Pick<
	CarouselProps<Element>,
	'variant' | 'orientation' | 'spacing'
>;
type UseCarouselClassesReturn = Record<'items' | 'item', ClassName> & {
	overflow: Record<'hidden' | 'auto', ClassName>;
};

const useCarouselClasses = <Element extends CarouselElement>(
	props: UseCarouselClassesProps<Element>
): UseCarouselClassesReturn => {
	const { variant: variantProp = DEFAULT_CAROUSEL_VARIANT } = props;

	const { variant } = useCarouselResponsiveValues<Element>({ variant: variantProp });

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
