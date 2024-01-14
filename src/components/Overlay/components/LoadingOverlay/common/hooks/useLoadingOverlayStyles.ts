import { transparentize } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__, __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__ } from '../constants';
import type { LoadingOverlayProps } from '../types';

import useLoadingOverlayResponsiveValues from './useLoadingOverlayResponsiveValues';

type UseLoadingOverlayStylesProps = Pick<
	LoadingOverlayProps,
	'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'
>;
type UseLoadingOverlayStylesReturn = Style;

const useLoadingOverlayStyles = (props: UseLoadingOverlayStylesProps): UseLoadingOverlayStylesReturn => {
	const { colorMode: __DEFAULT_LOADING_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_LOADING_OVERLAY_COLORMODE__,
		backdropAmount: backdropAmountProp = __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
		hasBackground: hasBackgroundProp = __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__
	} = props;

	const { backdropAmount: amount, hasBackground } = useLoadingOverlayResponsiveValues({
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

export default useLoadingOverlayStyles;
