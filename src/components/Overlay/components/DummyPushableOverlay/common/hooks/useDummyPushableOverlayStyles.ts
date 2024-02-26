import { useMemo } from 'react';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useTheme } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';
import { getColorHue } from '@common/utils';

import { DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT } from '../constants';
import type { DummyPushableOverlayProps } from '../types';

import useDummyPushableOverlayResponsiveValues from './useDummyPushableOverlayResponsiveValues';

type UseDummyPushableOverlayStylesProps<Element extends PolymorphicElementType> = Pick<
	DummyPushableOverlayProps<Element>,
	'color' | 'colorMode' | 'variant'
>;
type UseDummyPushableOverlayStylesReturn = Style;

const useDummyPushableOverlayStyles = <Element extends PolymorphicElementType>(
	props: UseDummyPushableOverlayStylesProps<Element>
): UseDummyPushableOverlayStylesReturn => {
	const theme = useTheme();

	const { colorMode: DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE,
		variant: variantProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
	} = props;

	const { variant } = useDummyPushableOverlayResponsiveValues<Element>({ variant: variantProp });

	const containedDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'background' });
		const backgroundHue = getColorHue({ colorMode, type: 'color' });

		return {
			color: theme.colors.gray[colorHue],
			borderColor: theme.colors[color][backgroundHue],
			background: theme.colors[color][backgroundHue]
		};
	}, [color, colorMode]);

	const lightDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'dark' });
		const backgroundHue = getColorHue({ colorMode, type: 'light' });

		return {
			color: theme.colors[color][colorHue],
			borderColor: theme.colors[color][backgroundHue],
			background: theme.colors[color][backgroundHue]
		};
	}, [color, colorMode]);

	const darkDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'light' });
		const backgroundHue = getColorHue({ colorMode, type: 'dark' });

		return {
			color: theme.colors[color][colorHue],
			borderColor: theme.colors[color][backgroundHue],
			background: theme.colors[color][backgroundHue]
		};
	}, [color, colorMode]);

	const outlinedDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			color: theme.colors[color][colorHue],
			borderColor: theme.colors[color][colorHue],
			background: theme.colors.transparent
		};
	}, [color, colorMode]);

	const monochromeDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'text.primary' });
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return {
			color: theme.colors.gray[colorHue],
			borderColor: theme.colors.gray[borderHue],
			background: theme.colors.transparent
		};
	}, [colorMode]);

	const transparentDefaultStyles = useMemo<Style>(() => {
		const colorHue = getColorHue({ colorMode, type: 'color' });

		return {
			color: theme.colors[color][colorHue],
			borderColor: theme.colors.transparent,
			background: theme.colors.transparent
		};
	}, [color, colorMode]);

	switch (variant) {
		case 'light':
			return lightDefaultStyles;
		case 'dark':
			return darkDefaultStyles;
		case 'outlined':
			return outlinedDefaultStyles;
		case 'monochrome':
			return monochromeDefaultStyles;
		case 'transparent':
			return transparentDefaultStyles;
		case 'unstyled':
			return {};
		default:
			return containedDefaultStyles;
	}
};

export default useDummyPushableOverlayStyles;
