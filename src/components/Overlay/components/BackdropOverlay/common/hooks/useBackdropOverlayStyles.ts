import type { ElementType } from 'react';

import { transparentize } from 'color2k';

import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__ } from '../constants';
import type { BackdropOverlayProps } from '../types';

type UseBackdropOverlayStylesProps<Element extends ElementType> = Pick<
	BackdropOverlayProps<Element>,
	'color' | 'colorMode' | 'amount'
>;
type UseBackdropOverlayStylesReturn = Style;

const useBackdropOverlayStyles = <Element extends ElementType>(
	props: UseBackdropOverlayStylesProps<Element>
): UseBackdropOverlayStylesReturn => {
	const { colorMode: __DEFAULT_BACKDROP_OVERLAY_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_BACKDROP_OVERLAY_COLORMODE__,
		amount: a = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__
	} = props;

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});
	const amount = useGetResponsiveValue<number>(a);

	return { background: transparentize(background, amount) };
};

export default useBackdropOverlayStyles;
