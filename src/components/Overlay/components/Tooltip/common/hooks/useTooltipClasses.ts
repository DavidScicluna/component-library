import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_STYLE, DEFAULT_BORDER_WIDTH, DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useConst } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';
import { getColorHue } from '@common/utils';

import type { TooltipProps } from '../types';

type UseTooltipClassesProps<Element extends PolymorphicElementType> = Pick<
	TooltipProps<Element>,
	'color' | 'colorMode'
>;
type UseTooltipClassesReturn = Record<'tooltip' | 'arrow' | 'content', ClassName>;

const useTooltipClasses = <Element extends PolymorphicElementType>(
	props: UseTooltipClassesProps<Element>
): UseTooltipClassesReturn => {
	const { colorMode: DEFAULT_ICON_COLORMODE } = useAppTheme();

	const { color = DEFAULT_COLOR, colorMode = DEFAULT_ICON_COLORMODE } = props;

	const tooltipRootClasses = useConst<ClassName>(
		classNames(
			classes.sizing.width.fit,
			classes.interactivity.cursor.default,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.pointer_events.none,
			classes.borders.border_width[DEFAULT_BORDER_WIDTH],
			classes.borders.border_style[DEFAULT_BORDER_STYLE],
			classes.borders.border_radius.xs,
			classes.effects.shadow.sm,
			classes.layout.z_index.tooltip,
			classes.spacing.px[1],
			classes.spacing.py[0.5]
		)
	);

	const tooltipColorClasses = useMemo<ClassName>(() => {
		const backgroundHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });
		const shadowHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'midLight' : 'midDark' });

		return classNames(
			classes.borders.border_color[color][backgroundHue],
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

		return classNames(classes.typography.text_color.gray[colorHue]);
	}, [color, colorMode]);

	return {
		tooltip: classNames(tooltipRootClasses, tooltipColorClasses),
		arrow: classNames(arrowRootClasses, arrowColorClasses),
		content: classNames(contentRootClasses, contentColorClasses)
	};
};

export default useTooltipClasses;
