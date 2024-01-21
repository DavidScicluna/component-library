import { transparentize } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import { __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__, __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__ } from '../constants';
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
	const { colorMode: __DEFAULT_GLASS_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_GLASS_OVERLAY_COLORMODE__,
		backdropAmount: backdropAmountProp = __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
		hasBackground: hasBackgroundProp = __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__
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
