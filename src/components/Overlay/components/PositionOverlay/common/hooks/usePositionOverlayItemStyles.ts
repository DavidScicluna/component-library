import { useMemo } from 'react';

import { compact } from 'lodash-es';

import type { Style } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT } from '../constants';
import type { PositionOverlayItem, PositionOverlayItemPlacement } from '../types';

type UsePositionOverlayItemStylesProps = Pick<PositionOverlayItem, 'placement'>;
type UsePositionOverlayItemStylesReturn = Style;

const usePositionOverlayItemStyles = (props: UsePositionOverlayItemStylesProps): UsePositionOverlayItemStylesReturn => {
	const { placement = DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT } = props;

	const position = useMemo<Style>(() => {
		const styles: Style = { position: 'absolute' };

		const p = getResponsiveValue<PositionOverlayItemPlacement>(placement);
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

	return { ...position };
};

export default usePositionOverlayItemStyles;
