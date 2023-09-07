import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
} from '../constants';
import type { DummyPushableOverlayProps, DummyPushableOverlayVariant } from '../types';

type UseDummyPushableOverlayClassesProps<Element extends ElementType> = Pick<
	DummyPushableOverlayProps<Element>,
	'isAnimated' | 'radius' | 'variant'
>;
type UseDummyPushableOverlayClassesReturn = ClassName;

const useDummyPushableOverlayClasses = <Element extends ElementType>(
	props: UseDummyPushableOverlayClassesProps<Element>
): UseDummyPushableOverlayClassesReturn => {
	const {
		isAnimated = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
		radius: r = __DEFAULT_RADIUS__,
		variant: v = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const radius = useGetResponsiveValue<ThemeRadius>(r);

	const variant = useGetResponsiveValue<DummyPushableOverlayVariant>(v);

	const rootClasses = useMemo<ClassName>(() => {
		const r = getResponsiveValue<ThemeRadius>(radius);

		return classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.pointer_events.none,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.borders.border_width[__DEFAULT_BORDER_WIDTH__],
			classes.borders.border_style[__DEFAULT_BORDER_STYLE__],
			classes.borders.border_color.transparent,
			classes.borders.border_radius[r],
			{ ['animate-pulse']: isAnimated }
		);
	}, [radius, variant]);

	return classNames(rootClasses);
};

export default useDummyPushableOverlayClasses;
