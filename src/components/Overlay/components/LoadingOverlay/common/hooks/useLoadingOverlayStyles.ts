import { transparentize } from 'color2k';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import { DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT, DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND } from '../constants';
import type { LoadingOverlayProps } from '../types';

import useLoadingOverlayResponsiveValues from './useLoadingOverlayResponsiveValues';

type UseLoadingOverlayStylesProps<Element extends PolymorphicElementType> = Pick<
	LoadingOverlayProps<Element>,
	'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'
>;
type UseLoadingOverlayStylesReturn = Style;

const useLoadingOverlayStyles = <Element extends PolymorphicElementType>(
	props: UseLoadingOverlayStylesProps<Element>
): UseLoadingOverlayStylesReturn => {
	const { colorMode: DEFAULT_LOADING_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_LOADING_OVERLAY_COLORMODE,
		backdropAmount: backdropAmountProp = DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT,
		hasBackground: hasBackgroundProp = DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND
	} = props;

	const { backdropAmount: amount, hasBackground } = useLoadingOverlayResponsiveValues<Element>({
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
