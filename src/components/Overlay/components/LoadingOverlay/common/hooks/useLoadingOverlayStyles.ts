import type { ElementType } from 'react';

import { transparentize } from 'color2k';

import { useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__, __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__ } from '../constants';
import type { LoadingOverlayProps } from '../types';

type UseLoadingOverlayStylesProps<Element extends ElementType> = Pick<
	LoadingOverlayProps<Element>,
	'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'
>;
type UseLoadingOverlayStylesReturn = Style;

const useLoadingOverlayStyles = <Element extends ElementType>(
	props: UseLoadingOverlayStylesProps<Element>
): UseLoadingOverlayStylesReturn => {
	const {
		color,
		colorMode,
		backdropAmount: ba = __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
		hasBackground = __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__
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

export default useLoadingOverlayStyles;