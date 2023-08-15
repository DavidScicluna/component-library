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

type UseGetTooltipClassesProps<Element extends ElementType> = Pick<TooltipProps<Element>, 'color' | 'colorMode'>;
type UseGetTooltipClassesReturn = Record<'tooltip' | 'content' | 'arrow', ClassName>;

const useGetTooltipClasses = <Element extends ElementType>(
	props: UseGetTooltipClassesProps<Element>
): UseGetTooltipClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const { color = __DEFAULT_COLOR__, colorMode = __DEFAULT_ICON_COLORMODE__ } = props;

	const tooltipRootClasses = useConst<ClassName>(
		classNames('cursor-default', 'select-none', 'will-change-auto', 'pointer-events-none')
	);

	const contentRootClasses = useConst<ClassName>(
		classNames(
			classes.layout.width.auto,
			classes.layout.maxWidth.xs,
			classes.layout.height.auto,
			classes.typography.fontSize.xs,
			classes.typography.fontWeight.medium,
			classes.borders.borderWidth[__DEFAULT_BORDER_WIDTH__],
			classes.borders.borderStyle[__DEFAULT_BORDER_STYLE__],
			classes.borders.borderRadius.xs,
			classes.effects.shadow.base,
			classes.spacing.px[1],
			classes.spacing.py[0.5]
		)
	);

	const contentColorClasses = useMemo<ClassName>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });

		return classNames(
			classes.typography.color.gray[colorHue],
			classes.borders.borderColor[color][backgroundHue],
			classes.backgrounds.color[color][backgroundHue],
			classes.effects.color[color][colorHue]
		);
	}, [color, colorMode]);

	const arrowRootClasses = useConst<ClassName>(classNames('w-[10px]', 'h-[10px]'));

	const arrowColorClasses = useMemo<ClassName>(() => {
		const fillHue = getColorHue({ colorMode, type: colorMode === 'light' ? 'dark' : 'light' });

		return classNames(classes.svg.fill[color][fillHue]);
	}, [color, colorMode]);

	return {
		tooltip: tooltipRootClasses,
		content: classNames(contentRootClasses, contentColorClasses),
		arrow: classNames(arrowRootClasses, arrowColorClasses)
	};
};

export default useGetTooltipClasses;
