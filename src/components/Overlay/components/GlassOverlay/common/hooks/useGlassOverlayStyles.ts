import type { ElementType } from 'react';

import { transparentize } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__, __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__ } from '../constants';
import type { GlassOverlayProps } from '../types';

type UseGlassOverlayStylesProps<Element extends ElementType> = Pick<
	GlassOverlayProps<Element>,
	'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'
>;
type UseGlassOverlayStylesReturn = Style;

const useGlassOverlayStyles = <Element extends ElementType>(
	props: UseGlassOverlayStylesProps<Element>
): UseGlassOverlayStylesReturn => {
	const { colorMode: __DEFAULT_GLASS_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_GLASS_OVERLAY_COLORMODE__,
		backdropAmount: ba = __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
		hasBackground = __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__
	} = props;

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});
	const amount = useGetResponsiveValue<number>(ba);

	return { background: hasBackground ? transparentize(background, amount) : undefined };
};

export default useGlassOverlayStyles;
