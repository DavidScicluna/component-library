import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';

export const getCarouselID = (id: string): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-carousel`;
};

export const getCarouselItemID = (id: string, index: number): string => {
	return `${__DEFAULT_CLASS_PREFIX__}-${id}-carousel-${index}-item`;
};
