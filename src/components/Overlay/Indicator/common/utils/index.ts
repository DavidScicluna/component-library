import { CenterProps } from '@chakra-ui/react';

import memoize from 'micro-memoize';

import { NoUndefinedField } from '../../../../../common/types';
import { IndicatorProps } from '../types';

type GetIndicatorPositionProps = NoUndefinedField<Pick<IndicatorProps, 'position' | 'offset'>>;

export const getIndicatorPosition = memoize(({ position, offset }: GetIndicatorPositionProps): CenterProps => {
	switch (position) {
		case 'bottom-center':
			return {
				left: '50%',
				bottom: `${offset}px`,
				transform: 'translate(-50%, 50%)'
			};
		case 'bottom-end':
			return {
				right: `${offset}px`,
				bottom: `${offset}px`,
				transform: 'translate(50%, 50%)'
			};
		case 'bottom-start':
			return {
				left: `${offset}px`,
				bottom: `${offset}px`,
				transform: 'translate(-50%, 50%)'
			};
		case 'middle-center':
			return {
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)'
			};
		case 'middle-end':
			return {
				right: `${offset}px`,
				top: '50%',
				transform: 'translate(50%, -50%)'
			};
		case 'middle-start':
			return {
				left: `${offset}px`,
				top: '50%',
				transform: 'translate(-50%, -50%)'
			};
		case 'top-center':
			return {
				left: '50%',
				top: `${offset}px`,
				transform: 'translate(-50%, -50%)'
			};
		case 'top-start':
			return {
				left: `${offset}px`,
				top: `${offset}px`,
				transform: 'translate(-50%, -50%)'
			};
		default:
			return {
				right: `${offset}px`,
				top: `${offset}px`,
				transform: 'translate(50%, -50%)'
			};
	}
});
