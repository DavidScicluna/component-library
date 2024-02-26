import { DEFAULT_CLASS_PREFIX } from '@common/constants';

export const getCarouselID = (id: string): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-carousel`;
};

export const getCarouselItemID = (id: string, index: number): string => {
	return `${DEFAULT_CLASS_PREFIX}-${id}-carousel-${index}-item`;
};
