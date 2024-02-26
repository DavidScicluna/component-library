import { transparentize } from 'color2k';

import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { PolymorphicElementType, Style } from '@common/types';

import { DEFAULT_BACKDROP_OVERLAY_AMOUNT } from '../constants';
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
	const { colorMode: DEFAULT_BACKDROP_OVERLAY_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_BACKDROP_OVERLAY_COLORMODE,
		amount: amountProp = DEFAULT_BACKDROP_OVERLAY_AMOUNT
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
