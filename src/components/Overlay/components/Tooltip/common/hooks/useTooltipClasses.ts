import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__ } from '@common/constants';
import { __DEFAULT_COLOR__ } from '@common/constants/props';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils/color';

import type { TooltipProps } from '../types';

type UseTooltipClassesProps<Element extends ElementType> = Pick<TooltipProps<Element>, 'color' | 'colorMode'>;
type UseTooltipClassesReturn = Record<'tooltip' | 'arrow' | 'content', ClassName>;

const useTooltipClasses = <Element extends ElementType>(
	props: UseTooltipClassesProps<Element>
): UseTooltipClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const { color = __DEFAULT_COLOR__, colorMode = __DEFAULT_ICON_COLORMODE__ } = props;

	// TODO: Move all classes into classes object & replace all local classes with classes or useGetClass
	const tooltipRootClasses = useConst<ClassName>(
		classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.pointer_events.none,
			classes.borders.border_width[__DEFAULT_BORDER_WIDTH__],
			classes.borders.border_style[__DEFAULT_BORDER_STYLE__],
			classes.borders.border_radius.xs,
			classes.effects.shadow.sm,
			classes.spacing.px[1],
			classes.spacing.py[0.5]
		)
	);

	const tooltipColorClasses = useMemo<ClassName>(() => {
		const backgroundHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });
		const shadowHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'midlight' : 'midDark' });

		return classNames(
			classes.borders.border_color[color][backgroundHue],
			classes.backgrounds.color[color][backgroundHue],
			classes.effects.color[color][color !== 'gray' ? backgroundHue : shadowHue]
		);
	}, [color, colorMode]);

	const arrowRootClasses = useConst<ClassName>(classNames('!w-[12px]', '!h-[12px]', '!stroke-0'));

	const arrowColorClasses = useMemo<ClassName>(() => {
		const fillHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });

		return classNames(classes.svg.fill[color][fillHue]);
	}, [color, colorMode]);

	const contentRootClasses = useConst<ClassName>(
		classNames(
			classes.typography.font_size.xs,
			classes.typography.font_weight.medium,
			classes.typography.word_break.all,
			classes.typography.line_clamp[5]
		)
	);

	const contentColorClasses = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });

		return classNames(classes.typography.color.gray[colorHue]);
	}, [color, colorMode]);

	return {
		tooltip: classNames(tooltipRootClasses, tooltipColorClasses),
		arrow: classNames(arrowRootClasses, arrowColorClasses),
		content: classNames(contentRootClasses, contentColorClasses)
	};
};

export default useTooltipClasses;
