import { type ElementType, useMemo } from 'react';

import { transparentize } from 'color2k';
import { compact } from 'lodash-es';

import { useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_PLACEMENT__
} from '../constants';
import type { PositionOverlayPlacement, PositionOverlayProps } from '../types';

type UsePositionOverlayStylesProps<Element extends ElementType> = Pick<
	PositionOverlayProps<Element>,
	'color' | 'colorMode' | 'backdropAmount' | 'placement' | 'hasBackground'
>;
type UsePositionOverlayStylesReturn = Record<'overlay' | 'position', Style>;

const usePositionOverlayStyles = <Element extends ElementType>(
	props: UsePositionOverlayStylesProps<Element>
): UsePositionOverlayStylesReturn => {
	const {
		color,
		colorMode,
		backdropAmount: ba = __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
		placement = __DEFAULT_POSITION_OVERLAY_PLACEMENT__,
		hasBackground = __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__
	} = props;

	const background = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: colorMode === 'light' ? 'dark' : 'dark'
	});
	const amount = useGetResponsiveValue<number>(ba);

	const position = useMemo<Style>(() => {
		const styles: Style = { position: 'absolute' };

		const p = getResponsiveValue<PositionOverlayPlacement>(placement);
		const [y, x] = p.split('-');

		const offset = 0;

		let translateX = '';
		let translateY = '';

		if (y === 'top') {
			styles.top = offset;
		}

		if (y === 'middle') {
			styles.top = '50%';
			translateY = '-50%';
		}

		if (y === 'bottom') {
			styles.bottom = offset;
		}

		if (x === 'start') {
			styles.left = offset;
		}

		if (x === 'center') {
			styles.left = '50%';
			translateX = '-50%';
		}

		if (x === 'end') {
			styles.right = offset;
		}

		styles.transform = compact([
			translateX ? `translateX(${translateX})` : null,
			translateY ? `translateY(${translateY})` : null
		]).join(' ');

		return styles;
	}, [placement]);

	return {
		overlay: { position: 'relative', background: hasBackground ? transparentize(background, amount) : undefined },
		position
	};
};

export default usePositionOverlayStyles;
