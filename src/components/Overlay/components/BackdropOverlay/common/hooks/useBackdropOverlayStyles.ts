import { transparentize } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__ } from '../constants';
import type { BackdropOverlayProps } from '../types';

import useBackdropOverlayResponsiveValues from './useBackdropOverlayResponsiveValues';

type UseBackdropOverlayStylesProps<Element extends PolymorphicElementType> = Pick<
	BackdropOverlayProps<Element>,
	'color' | 'colorMode' | 'amount'
>;
type UseBackdropOverlayStylesReturn = Style;

const useBackdropOverlayStyles = <Element extends PolymorphicElementType>(
	props: UseBackdropOverlayStylesProps<Element>
): UseBackdropOverlayStylesReturn => {
	const { colorMode: __DEFAULT_BACKDROP_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_BACKDROP_OVERLAY_COLORMODE__,
		amount: amountProp = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__
	} = props;

	const { amount } = useBackdropOverlayResponsiveValues<Element>({ amount: amountProp });

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});

	return { background: transparentize(background, amount) };
};

export default useBackdropOverlayStyles;
