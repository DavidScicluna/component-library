import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { __DEFAULT_CAROUSEL_VARIANT__ } from '../constants';
import type { CarouselProps } from '../types';

import useCarouselResponsiveValues from './useCarouselResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseCarouselClassesProps = Pick<CarouselProps, 'variant' | 'orientation' | 'spacing'>;
type UseCarouselClassesReturn = Record<'items' | 'item', ClassName> & {
	overflow: Record<'hidden' | 'auto', ClassName>;
};

const useCarouselClasses = (props: UseCarouselClassesProps): UseCarouselClassesReturn => {
	const { variant: variantProp = __DEFAULT_CAROUSEL_VARIANT__ } = props;

	const { variant } = useCarouselResponsiveValues({ variant: variantProp });

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
