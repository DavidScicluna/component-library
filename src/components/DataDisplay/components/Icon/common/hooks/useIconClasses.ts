import { useMemo } from 'react';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { ClassName, ThemeFontSize, ThemeRadius } from '@common/types';
import { checkFontSizeType, getClass, getColorHue } from '@common/utils';

import { __DEFAULT_ICON_RADIUS__, __DEFAULT_ICON_SIZE__, __DEFAULT_ICON_VARIANT__ } from '../constants';
import type { IconElement, IconProps } from '../types';

import useIconResponsiveValues from './useIconResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

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
		radius: radiusProp = __DEFAULT_ICON_RADIUS__,
		size: sizeProp = __DEFAULT_ICON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_VARIANT__
	} = props;

	const { radius, size, variant } = useIconResponsiveValues<Element>({
		radius: radiusProp,
		size: sizeProp,
		variant: variantProp
	});

	const rootClasses = useMemo<string>(() => {
		const fontSizeClassName = getClass<ThemeFontSize>(size as ThemeFontSize, ['typography', 'font_size']);
		const radiusClassName = getClass<ThemeRadius>(radius, ['borders', 'border_radius']);

		return classNames(
			classes.layout.display['inline-block'],
			classes.interactivity.cursor.default,
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.pointer_events.none,
			classes.typography.font_weight.normal,
			classes.typography.font_style['not-italic'],
			classes.typography.line_height.none,
			classes.typography.transform.normal,
			classes.typography.letter_spacing.normal,
			classes.typography.word_break.normal,
			classes.typography.whitespace.normal,
			radiusClassName,
			{
				[size]: checkFontSizeType(size) === 'class',
				[fontSizeClassName]: checkFontSizeType(size) === 'theme',
				[classes.borders.border_width[__DEFAULT_BORDER_WIDTH__]]: variant !== 'unstyled',
				[classes.borders.border_style[__DEFAULT_BORDER_STYLE__]]: variant !== 'unstyled'
			}
		);
	}, [size, radius, variant]);

	const containedClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.text_color.gray[colorHue],
			classes.borders.border_color[color][backgroundHue],
			classes.backgrounds.background_color[color][backgroundHue]
		);
	}, [color, colorMode]);

	const lightClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'dark' });
		const backgroundHue = getColorHue({ colorMode, type: 'light' });

		return classNames(
			classes.typography.text_color[color][colorHue],
			classes.borders.border_color[color][backgroundHue],
			classes.backgrounds.background_color[color][backgroundHue]
		);
	}, [color, colorMode]);

	const monochromeClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(
			classes.typography.text_color.gray[colorHue],
			classes.borders.border_color.gray[borderHue],
			classes.backgrounds.background_color.transparent
		);
	}, [color, colorMode]);

	const outlinedClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.text_color[color][colorHue],
			classes.borders.border_color[color][colorHue],
			classes.backgrounds.background_color.transparent
		);
	}, [color, colorMode]);

	const transparentClasses = useMemo<string>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return classNames(
			classes.typography.text_color[color][colorHue],
			classes.borders.border_color.transparent,
			classes.backgrounds.background_color.transparent
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
