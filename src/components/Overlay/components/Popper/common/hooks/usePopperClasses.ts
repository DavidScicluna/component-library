import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_STYLE, DEFAULT_BORDER_WIDTH, DEFAULT_COLOR, DEFAULT_RADIUS } from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';
import { getColorHue } from '@common/utils';

import type { PopperProps } from '../types';

import usePopperResponsiveValues from './usePopperResponsiveValues';

type UsePopperClassesProps<Element extends PolymorphicElementType> = Pick<
	PopperProps<Element>,
	'color' | 'colorMode' | 'radius'
>;
type UsePopperClassesReturn = Record<'popper' | 'arrow', ClassName>;

const usePopperClasses = <Element extends PolymorphicElementType>(
	props: UsePopperClassesProps<Element>
): UsePopperClassesReturn => {
	const { colorMode: DEFAULT_ICON_COLORMODE } = useAppTheme();

	const { color = DEFAULT_COLOR, colorMode = DEFAULT_ICON_COLORMODE, radius: radiusProp = DEFAULT_RADIUS } = props;

	const { radius } = usePopperResponsiveValues<Element>({ radius: radiusProp });

	const popperRootClasses = useMemo<ClassName>(
		() =>
			classNames(
				classes.sizing.width.fit,
				classes.interactivity.cursor.default,
				classes.interactivity.user_select.none,
				classes.interactivity.will_change.auto,
				classes.interactivity.pointer_events.none,
				classes.borders.border_width[DEFAULT_BORDER_WIDTH],
				classes.borders.border_style[DEFAULT_BORDER_STYLE],
				classes.borders.border_radius[radius],
				classes.effects.shadow.sm,
				classes.layout.z_index.popover
			),
		[radius]
	);

	const popperColorClasses = useMemo<ClassName>(() => {
		const borderHue = getColorHue({ colorMode, type: 'divider' });
		const backgroundHue = getColorHue({ colorMode, type: 'background' });
		const shadowHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'midLight' : 'midDark' });

		return classNames(
			classes.borders.border_color[color][borderHue],
			classes.backgrounds.background_color[color][backgroundHue],
			classes.effects.shadow_color[color][color !== 'gray' ? backgroundHue : shadowHue]
		);
	}, [color, colorMode]);

	const arrowRootClasses = useConst<ClassName>(
		classNames(
			classes.sizing.width.important['1.5'],
			classes.sizing.height.important['1.5'],
			classes.svg.stroke_width.important[0]
		)
	);

	const arrowColorClasses = useMemo<ClassName>(() => {
		const fillHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });

		return classNames(classes.svg.fill[color][fillHue]);
	}, [color, colorMode]);

	return {
		popper: classNames(popperRootClasses, popperColorClasses),
		arrow: classNames(arrowRootClasses, arrowColorClasses)
	};
};

export default usePopperClasses;
