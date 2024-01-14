import { useMemo } from 'react';

import classes from '@common/classes';
import {
	__DEFAULT_BORDER_STYLE__,
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_COLOR__,
	__DEFAULT_RADIUS__
} from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import type { PopperProps } from '../types';

import usePopperResponsiveValues from './usePopperResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UsePopperClassesProps = Pick<PopperProps, 'color' | 'colorMode' | 'radius'>;
type UsePopperClassesReturn = Record<'popper' | 'arrow', ClassName>;

const usePopperClasses = (props: UsePopperClassesProps): UsePopperClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const { radius } = usePopperResponsiveValues({ radius: radiusProp });

	const popperRootClasses = useMemo<ClassName>(
		() =>
			classNames(
				classes.sizing.width.fit,
				classes.interactivity.cursor.default,
				classes.interactivity.user_select.none,
				classes.interactivity.will_change.auto,
				classes.interactivity.pointer_events.none,
				classes.borders.border_width[__DEFAULT_BORDER_WIDTH__],
				classes.borders.border_style[__DEFAULT_BORDER_STYLE__],
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
