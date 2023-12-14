import { useMemo } from 'react';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useTheme } from '@common/hooks';
import type { Style } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__ } from '../constants';
import type { DummyPushableOverlayProps } from '../types';

import useDummyPushableOverlayResponsiveValues from './useDummyPushableOverlayResponsiveValues';

type UseDummyPushableOverlayStylesProps = Pick<DummyPushableOverlayProps, 'color' | 'colorMode' | 'variant'>;
type UseDummyPushableOverlayStylesReturn = Style;

const useDummyPushableOverlayStyles = (
	props: UseDummyPushableOverlayStylesProps
): UseDummyPushableOverlayStylesReturn => {
	const theme = useTheme();

	const { colorMode: __DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_COLORMODE__,
		variant: variantProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const { variant } = useDummyPushableOverlayResponsiveValues({ variant: variantProp });

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
