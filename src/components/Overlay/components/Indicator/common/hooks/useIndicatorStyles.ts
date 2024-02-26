import { useMemo } from 'react';

import type { PolymorphicElementType, Style } from '@common/types';

import { DEFAULT_INDICATOR_OFFSET, DEFAULT_INDICATOR_PLACEMENT } from '../constants';
import type { IndicatorProps } from '../types';

import useIndicatorResponsiveValues from './useIndicatorResponsiveValues';

type UseIndicatorStylesProps<Element extends PolymorphicElementType> = Pick<
	IndicatorProps<Element>,
	'offset' | 'placement'
>;
type UseIndicatorStylesReturn = Record<'overlay' | 'position', Style>;

const useIndicatorStyles = <Element extends PolymorphicElementType>(
	props: UseIndicatorStylesProps<Element>
): UseIndicatorStylesReturn => {
	const { offset: offsetProp = DEFAULT_INDICATOR_OFFSET, placement: placementProp = DEFAULT_INDICATOR_PLACEMENT } =
		props;

	const { offset, placement } = useIndicatorResponsiveValues<Element>({
		offset: offsetProp,
		placement: placementProp
	});

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
