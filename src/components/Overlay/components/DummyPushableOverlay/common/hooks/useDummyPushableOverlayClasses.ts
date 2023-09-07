import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ClassName, ThemeRadius } from '@common/types';

import { __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__ } from '../constants';
import type { DummyPushableOverlayProps } from '../types';

type UseDummyPushableOverlayClassesProps<Element extends ElementType> = Pick<
	DummyPushableOverlayProps<Element>,
	'isAnimated' | 'radius' | 'variant'
>;
type UseDummyPushableOverlayClassesReturn = ClassName;

const useDummyPushableOverlayClasses = <Element extends ElementType>(
	props: UseDummyPushableOverlayClassesProps<Element>
): UseDummyPushableOverlayClassesReturn => {
	const { isAnimated = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__, radius: r = __DEFAULT_RADIUS__ } = props;

	const radius = useGetResponsiveValue<ThemeRadius>(r);

	return classNames(
		classes.interactivity.cursor.default,
		classes.interactivity.pointer_events.none,
		classes.interactivity.user_select.none,
		classes.interactivity.will_change.auto,
		classes.borders.border_width[__DEFAULT_BORDER_WIDTH__],
		classes.borders.border_style[__DEFAULT_BORDER_STYLE__],
		classes.borders.border_color.transparent,
		classes.borders.border_radius[radius],
		{ ['animate-pulse']: isAnimated }
	);
};

export default useDummyPushableOverlayClasses;
