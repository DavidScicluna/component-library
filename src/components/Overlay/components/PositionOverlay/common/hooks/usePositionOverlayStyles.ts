import { transparentize } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__
} from '../constants';
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
	const { colorMode: __DEFAULT_POSITION_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_POSITION_OVERLAY_COLORMODE__,
		backdropAmount: backdropAmountProp = __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
		hasBackground: hasBackgroundProp = __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__
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
