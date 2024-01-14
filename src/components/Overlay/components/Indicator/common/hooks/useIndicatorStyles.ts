import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_INDICATOR_OFFSET__, __DEFAULT_INDICATOR_PLACEMENT__ } from '../constants';
import type { IndicatorPlacement, IndicatorProps } from '../types';

type UseIndicatorStylesProps = Pick<IndicatorProps, 'offset' | 'placement'>;
type UseIndicatorStylesReturn = Record<'overlay' | 'position', Style>;

const useIndicatorStyles = (props: UseIndicatorStylesProps): UseIndicatorStylesReturn => {
	const { offset: o = __DEFAULT_INDICATOR_OFFSET__, placement: p = __DEFAULT_INDICATOR_PLACEMENT__ } = props;

	const offset = useGetResponsiveValue<number>(o);
	const placement = useGetResponsiveValue<IndicatorPlacement>(p);

	const position = useMemo<Style>(() => {
		const styles: Style = { position: 'absolute' };

		switch (placement) {
			case 'bottom-center':
				return {
					...styles,
					left: '50%',
					bottom: `${offset}px`,
					transform: 'translate(-50%, 50%)'
				};
			case 'bottom-end':
				return {
					...styles,
					right: `${offset}px`,
					bottom: `${offset}px`,
					transform: 'translate(50%, 50%)'
				};
			case 'bottom-start':
				return {
					...styles,
					left: `${offset}px`,
					bottom: `${offset}px`,
					transform: 'translate(-50%, 50%)'
				};
			case 'middle-center':
				return {
					...styles,
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)'
				};
			case 'middle-end':
				return {
					...styles,
					right: `${offset}px`,
					top: '50%',
					transform: 'translate(50%, -50%)'
				};
			case 'middle-start':
				return {
					...styles,
					left: `${offset}px`,
					top: '50%',
					transform: 'translate(-50%, -50%)'
				};
			case 'top-center':
				return {
					...styles,
					left: '50%',
					top: `${offset}px`,
					transform: 'translate(-50%, -50%)'
				};
			case 'top-start':
				return {
					...styles,
					left: `${offset}px`,
					top: `${offset}px`,
					transform: 'translate(-50%, -50%)'
				};
			default:
				return {
					...styles,
					right: `${offset}px`,
					top: `${offset}px`,
					transform: 'translate(50%, -50%)'
				};
		}
	}, [offset, placement]);

	return { overlay: { position: 'relative' }, position };
};

export default useIndicatorStyles;
