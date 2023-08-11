import { transparentize } from 'color2k';

import { useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__ } from '../constants';
import type { BackdropOverlayElement, BackdropOverlayProps } from '../types';

type UseGetBackdropOverlayStylesProps<Element extends BackdropOverlayElement> = Pick<
	BackdropOverlayProps<Element>,
	'color' | 'colorMode' | 'amount'
>;
type UseGetBackdropOverlayStylesReturn = Style;

const useGetBackdropOverlayStyles = <Element extends BackdropOverlayElement>(
	props: UseGetBackdropOverlayStylesProps<Element>
): UseGetBackdropOverlayStylesReturn => {
	const { color, colorMode, amount: a = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__ } = props;

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});
	const amount = useGetResponsiveValue<number>(a);

	return { background: transparentize(background, amount) };
};

export default useGetBackdropOverlayStyles;
