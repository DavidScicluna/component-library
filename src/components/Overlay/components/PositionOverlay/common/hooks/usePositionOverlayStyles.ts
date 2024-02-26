import { transparentize } from 'color2k';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import { DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT, DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND } from '../constants';
import type { PositionOverlayProps } from '../types';

import usePositionOverlayResponsiveValues from './usePositionOverlayResponsiveValues';

type PickedPositionOverlayProps = 'color' | 'colorMode' | 'backdropAmount' | 'hasBackground';
type UsePositionOverlayStylesProps<Element extends PolymorphicElementType> = Pick<
	PositionOverlayProps<Element>,
	PickedPositionOverlayProps
>;
type UsePositionOverlayStylesReturn = Record<'overlay', Style>;

const usePositionOverlayStyles = <Element extends PolymorphicElementType>(
	props: UsePositionOverlayStylesProps<Element>
): UsePositionOverlayStylesReturn => {
	const { colorMode: DEFAULT_POSITION_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_POSITION_OVERLAY_COLORMODE,
		backdropAmount: backdropAmountProp = DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT,
		hasBackground: hasBackgroundProp = DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND
	} = props;

	const { backdropAmount: amount, hasBackground } = usePositionOverlayResponsiveValues<Element>({
		backdropAmount: backdropAmountProp,
		hasBackground: hasBackgroundProp
	});

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});

	return {
		overlay: { position: 'relative', background: hasBackground ? transparentize(background, amount) : undefined }
	};
};

export default usePositionOverlayStyles;
