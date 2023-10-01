import { sort } from 'fast-sort';
import { uniqBy } from 'lodash-es';

import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

import type { CarouselItem, CarouselItems } from '../types';

export const getCarouselID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-carousel`;
};

export const getCarouselItemID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-carousel-${index}-item`;
};

type ItemsReducerAction =
	| { type: 'SET_ITEM'; payload: CarouselItem }
	| { type: 'UPDATE_ITEM'; payload: CarouselItem }
	| { type: 'REMOVE_ITEM'; payload: CarouselItem };

export const itemsReducer = (state: CarouselItems, action: ItemsReducerAction): CarouselItems => {
	switch (action.type) {
		case 'SET_ITEM':
			return sort(uniqBy([...state, { ...action.payload }], 'key')).asc(({ index }) => index);
		case 'UPDATE_ITEM':
			return state.map((item) => (item.key === action.payload.key ? { ...item, ...action.payload } : item));
		case 'REMOVE_ITEM':
			return state.filter((item) => item.key === action.payload.key);
	}
};
