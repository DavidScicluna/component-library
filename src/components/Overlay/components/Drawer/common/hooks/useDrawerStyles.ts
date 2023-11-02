import { useMemo } from 'react';

import type { Style } from '@common/types';

import { __DEFAULT_DRAWER_POSITION__, __DEFAULT_DRAWER_SIZE__ } from '../constants';
import type { DrawerDefaultElement, DrawerElement, DrawerProps } from '../types';

import { useDrawerResponsiveValues } from '.';

type UseDrawerStylesProps<Element extends DrawerElement = DrawerDefaultElement> = Pick<
	DrawerProps<Element>,
	'color' | 'colorMode' | 'position' | 'size'
>;
type UseDrawerStylesReturn = Style;

const useDrawerStyles = <Element extends DrawerElement = DrawerDefaultElement>(
	props: UseDrawerStylesProps<Element>
): UseDrawerStylesReturn => {
	const { position: positionProp = __DEFAULT_DRAWER_POSITION__, size: sizeProp = __DEFAULT_DRAWER_SIZE__ } = props;

	const { position, size } = useDrawerResponsiveValues<Element>({ position: positionProp, size: sizeProp });

	const sizing = useMemo<string>(() => {
		switch (size) {
			case 'xs':
				return '20rem';
			case 'sm':
				return '24rem';
			case 'md':
				return '28rem';
			case 'lg':
				return '32rem';
			case 'xl':
				return '36rem';
			case '2xl':
				return '42rem';
			case '3xl':
				return '48rem';
			case '4xl':
				return '56rem';
			case '5xl':
				return '64rem';
			case '6xl':
				return '72rem';
			case '7xl':
				return '80rem';
			default:
				return '100%';
		}
	}, [size]);

	return {
		width: '100%',
		maxWidth: position === 'left' || position === 'right' ? sizing : '100%',
		height: position === 'top' || position === 'bottom' ? sizing : '100%',
		maxHeight: '100%'
	};
};

export default useDrawerStyles;
