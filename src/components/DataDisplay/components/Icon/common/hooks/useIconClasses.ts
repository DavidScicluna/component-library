import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__ } from '@common/constants';
import { __DEFAULT_COLOR__ } from '@common/constants/props';
import { useAppTheme } from '@common/hooks';
import type { ClassName, ThemeFontSize, ThemeLineHeight, ThemeRadius } from '@common/types';
import { getClass, getColorHue } from '@common/utils';

import { __DEFAULT_ICON_RADIUS__, __DEFAULT_ICON_SIZE__, __DEFAULT_ICON_VARIANT__ } from '../constants';
import type { IconElement, IconProps } from '../types';

type UseIconClassesProps<Element extends IconElement> = Pick<
	IconProps<Element>,
	'color' | 'colorMode' | 'radius' | 'size' | 'variant'
>;
type UseIconClassesReturn = ClassName;

const useIconClasses = <Element extends IconElement>(props: UseIconClassesProps<Element>): UseIconClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		radius = __DEFAULT_ICON_RADIUS__,
		size = __DEFAULT_ICON_SIZE__,
		variant = __DEFAULT_ICON_VARIANT__
	} = props;

	const rootClasses = useMemo<string>(() => {
		const fontSizeClassName = getClass<ThemeFontSize>(size, ['typography', 'font_size']);
		const lineHeightClassName = getClass<ThemeLineHeight>('none', ['typography', 'line_height']);
		const radiusClassName = getClass<ThemeRadius>(radius, ['borders', 'border_radius']);

		return classNames(
			classes.interactivity.cursor.default,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.pointer_events.none,
			fontSizeClassName,
			lineHeightClassName,
			radiusClassName,
			{
				[classes.borders.border_width[__DEFAULT_BORDER_WIDTH__]]: variant !== 'unstyled',
				[classes.borders.border_style[__DEFAULT_BORDER_STYLE__]]: variant !== 'unstyled'
			}
		);
	}, [size, radius, variant]);

	const containedClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.color.gray[colorHue],
			classes.borders.border_color[color][backgroundHue],
			classes.backgrounds.color[color][backgroundHue]
		);
	}, [color, colorMode]);

	const lightClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'dark' });
		const backgroundHue = getColorHue({ colorMode, type: 'light' });

		return classNames(
			classes.typography.color[color][colorHue],
			classes.borders.border_color[color][backgroundHue],
			classes.backgrounds.color[color][backgroundHue]
		);
	}, [color, colorMode]);

	const monochromeClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(
			classes.typography.color.gray[colorHue],
			classes.borders.border_color.gray[borderHue],
			classes.backgrounds.color.transparent
		);
	}, [color, colorMode]);

	const outlinedClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.color[color][colorHue],
			classes.borders.border_color[color][colorHue],
			classes.backgrounds.color.transparent
		);
	}, [color, colorMode]);

	const transparentClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.color[color][colorHue],
			classes.borders.border_color.transparent,
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

export default useIconClasses;
