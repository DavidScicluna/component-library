import { transparentize } from 'color2k';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import { DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT, DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND } from '../constants';
import type { GlassOverlayProps } from '../types';

import useGlassOverlayResponsiveValues from './useGlassOverlayResponsiveValues';

type UseGlassOverlayStylesProps<Element extends PolymorphicElementType> = Pick<
	GlassOverlayProps<Element>,
	'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'
>;
type UseGlassOverlayStylesReturn = Style;

const useGlassOverlayStyles = <Element extends PolymorphicElementType>(
	props: UseGlassOverlayStylesProps<Element>
): UseGlassOverlayStylesReturn => {
	const { colorMode: DEFAULT_GLASS_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_GLASS_OVERLAY_COLORMODE,
		backdropAmount: backdropAmountProp = DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
		hasBackground: hasBackgroundProp = DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND
	} = props;

	const { backdropAmount: amount, hasBackground } = useGlassOverlayResponsiveValues<Element>({
		backdropAmount: backdropAmountProp,
		hasBackground: hasBackgroundProp
	});

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});

	return { background: hasBackground ? transparentize(background, amount) : undefined };
};

export default useGlassOverlayStyles;
