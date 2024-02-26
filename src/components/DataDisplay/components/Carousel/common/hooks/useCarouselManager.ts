import { sort } from 'fast-sort';
import { round } from 'lodash-es';

import type { Undefinable } from '@common/types';

import { DEFAULT_CAROUSEL_ITEMS } from '../constants';
import type { CarouselItem, CarouselItems } from '../types';

import useCarouselContext from './useCarouselContext';

const getPrevItemIndex = (index: number = 0): number => {
	if (index < 0) {
		let positive = index;

		while (positive < 0) {
			positive = positive + 1;
		}

		return positive;
	}
	return index;
};
const getNextItemIndex = (items: CarouselItems = DEFAULT_CAROUSEL_ITEMS, index: number = 0): number => {
	if (index > items.length - 1) {
		return items.length - 1;
	}
	return index;
};

const useCarouselManager = () => {
	const { items, visibleItems, scrollAmount } = useCarouselContext();

	const getItemByKey = (key: string): Undefinable<CarouselItem> => {
		return items.find((item) => item.key === key);
	};
	const getItemIndexByKey = (key: string): Undefinable<number> => {
		return items.findIndex((item) => item.key === key);
	};
	const getItemByIndex = (index: number): Undefinable<CarouselItem> => {
		return items.find((_item, i) => i === index);
	};

	const isItemVisible = (key: string): boolean => {
		return visibleItems.some((item) => item[key]);
	};

	const isFirstItem = (key: string): boolean => {
		return items.some((item, index) => item.key === key && index === 0);
	};
	const isFirstItemVisible = (): boolean => {
		const firstItem = getItemByIndex(0);
		return firstItem ? isItemVisible(firstItem.key) : false;
	};

	const getFirstVisibleItem = (): Undefinable<CarouselItem> => {
		return sort(items)
			.asc(({ index }) => index)
			.find((item) => visibleItems.find((visibleItem) => visibleItem[item.key]));
	};

	const isLastItem = (key: string): boolean => {
		return items.some((item, index) => item.key === key && index === items.length - 1);
	};
	const isLastItemVisible = (): boolean => {
		const lastItem = getItemByIndex(items.length - 1);
		return lastItem ? isItemVisible(lastItem.key) : false;
	};

	const getLastVisibleItem = (): Undefinable<CarouselItem> => {
		return sort(items)
			.desc(({ index }) => index)
			.find((item) => visibleItems.find((visibleItem) => visibleItem[item.key]));
	};

	const getItemPos = (key: string): Record<'prev' | 'next', Undefinable<CarouselItem>> => {
		const index = getItemIndexByKey(key);

		return {
			prev: index && index > 0 && items[index - 1] ? items[index - 1] : undefined,
			next: index && index < items.length - 1 && items[index + 1] ? items[index + 1] : undefined
		};
	};

	const getPrevItem = (): Undefinable<CarouselItem> => {
		const firstVisibleItem = getFirstVisibleItem();
		if (firstVisibleItem) {
			const prevItem = getItemPos(firstVisibleItem.key).prev;
			return prevItem;
		}
		return undefined;
	};

	const getNextItem = (): Undefinable<CarouselItem> => {
		const lastVisibleItem = getLastVisibleItem();
		if (lastVisibleItem) {
			const nextItem = getItemPos(lastVisibleItem.key).next;
			return nextItem;
		}
		return undefined;
	};

	const scrollToItem = (
		item?: CarouselItem,
		inline: ScrollLogicalPosition = 'nearest',
		block: ScrollLogicalPosition = 'nearest'
	): void => {
		if (item) {
			const element = document.getElementById(item.key);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', inline, block });
			}
		}
	};

	const scrollPrev = (inline: ScrollLogicalPosition = 'nearest', block: ScrollLogicalPosition = 'nearest'): void => {
		const firstVisibleItem = getFirstVisibleItem();
		if (firstVisibleItem) {
			const prevIndex = getPrevItemIndex(round(firstVisibleItem.index - scrollAmount));
			const prevItem = getItemByIndex(prevIndex);
			scrollToItem(prevItem, inline, block);
		}
	};

	const scrollNext = (inline: ScrollLogicalPosition = 'nearest', block: ScrollLogicalPosition = 'nearest'): void => {
		const lastVisibleItem = getLastVisibleItem();
		if (lastVisibleItem) {
			const nextIndex = getNextItemIndex(items, round(lastVisibleItem.index + scrollAmount));
			const nextItem = getItemByIndex(nextIndex);
			scrollToItem(nextItem, inline, block);
		}
	};

	return {
		getItemByKey,
		getItemIndexByKey,
		getItemByIndex,
		getItemPos,
		getNextItem,
		getPrevItem,
		isFirstItem,
		isFirstItemVisible,
		getFirstVisibleItem,
		isItemVisible,
		isLastItem,
		isLastItemVisible,
		getLastVisibleItem,
		scrollToItem,
		scrollNext,
		scrollPrev
	};
};

export default useCarouselManager;
