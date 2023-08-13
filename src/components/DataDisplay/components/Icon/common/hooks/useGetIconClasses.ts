import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__ } from '@common/constants';
import { __DEFAULT_COLOR__ } from '@common/constants/props';
import { useAppTheme } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { LineHeight } from '@common/types/theme';
import { getClass } from '@common/utils/classes';
import { getColorHue } from '@common/utils/color';

import { __DEFAULT_ICON_RADIUS__, __DEFAULT_ICON_SIZE__, __DEFAULT_ICON_VARIANT__ } from '../constants';
import type { IconElement, IconProps, IconRadius, IconSize } from '../types';

type UseGetIconClassesProps<Element extends IconElement> = Pick<
	IconProps<Element>,
	'color' | 'colorMode' | 'radius' | 'size' | 'variant'
>;
type UseGetIconClassesReturn = ClassName;

const useGetIconClasses = <Element extends IconElement>(
	props: UseGetIconClassesProps<Element>
): UseGetIconClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		radius = __DEFAULT_ICON_RADIUS__,
		size = __DEFAULT_ICON_SIZE__,
		variant = __DEFAULT_ICON_VARIANT__
	} = props;

	const rootClasses = useMemo<string>(() => {
		const fontSizeClassName = getClass<IconSize>(size, ['typography', 'fontSize']);
		const lineHeightClassName = getClass<LineHeight>('none', ['typography', 'lineHeight']);
		const radiusClassName = getClass<IconRadius>(radius, ['borders', 'borderRadius']);

		return classNames(
			'cursor-default',
			'select-none',
			'will-change-auto',
			'pointer-events-none',
			fontSizeClassName,
			lineHeightClassName,
			radiusClassName,
			{
				[classes.borders.borderWidth[__DEFAULT_BORDER_WIDTH__]]: variant !== 'unstyled',
				[classes.borders.borderStyle[__DEFAULT_BORDER_STYLE__]]: variant !== 'unstyled'
			}
		);
	}, [size, radius, variant]);

	const containedClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.color.gray[colorHue],
			classes.borders.borderColor[color][backgroundHue],
			classes.backgrounds.color[color][backgroundHue]
		);
	}, [color, colorMode]);

	const lightClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'dark' });
		const backgroundHue = getColorHue({ colorMode, type: 'light' });

		return classNames(
			classes.typography.color[color][colorHue],
			classes.borders.borderColor[color][backgroundHue],
			classes.backgrounds.color[color][backgroundHue]
		);
	}, [color, colorMode]);

	const monochromeClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(
			classes.typography.color.gray[colorHue],
			classes.borders.borderColor.gray[borderHue],
			classes.backgrounds.color.transparent
		);
	}, [color, colorMode]);

	const outlinedClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.color[color][colorHue],
			classes.borders.borderColor[color][colorHue],
			classes.backgrounds.color.transparent
		);
	}, [color, colorMode]);

	const transparentClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.color[color][colorHue],
			classes.borders.borderColor.transparent,
			classes.backgrounds.color.transparent
		);
	}, [color, colorMode]);

	return classNames(rootClasses, {
		[containedClasses]: variant === 'contained',
		[lightClasses]: variant === 'light',
		[outlinedClasses]: variant === 'outlined',
		[monochromeClasses]: variant === 'monochrome',
		[transparentClasses]: variant === 'transparent'
	});
};

export default useGetIconClasses;
