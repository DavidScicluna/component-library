import { useCallback, useMemo, useState } from 'react';

import { round } from 'lodash-es';
import memoize from 'micro-memoize';
import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '@common/hooks';
import type { Undefinable } from '@common/types';

import { __DEFAULT_CAROUSEL_ITEMS__ } from '../constants';
import type { CarouselItem, CarouselItems } from '../types';

import useCarouselContext from './useCarouselContext';

const getVisibleItems = memoize((items: CarouselItems = __DEFAULT_CAROUSEL_ITEMS__) => {
	return items.filter(({ isVisible }) => isVisible);
});

const getPrevItemIndex = memoize((index: number = 0): number => {
	if (index < 0) {
		let positive = index;

		while (positive < 0) {
			positive = positive + 1;
		}

		return positive;
	}
	return index;
});
const getNextItemIndex = memoize((items: CarouselItems = __DEFAULT_CAROUSEL_ITEMS__, index: number = 0): number => {
	if (index > items.length - 1) {
		return items.length - 1;
	}
	return index;
});

const useCarouselManager = () => {
	const { items, scrollAmount } = useCarouselContext();

	const [visibleItems, setVisibleItems] = useState<CarouselItems>(getVisibleItems(items));
	const visibleItemsDebounced = useDebounce<CarouselItems>(visibleItems, 'ultra-fast');

	const getItemByKey = useCallback(
		(key: string): Undefinable<CarouselItem> => {
			return items.find((item) => item.key === key);
		},
		[items]
	);
	const getItemIndexByKey = useCallback(
		(key: string): Undefinable<number> => {
			return items.findIndex((item) => item.key === key);
		},
		[items]
	);
	const getItemByIndex = useCallback(
		(index: number): Undefinable<CarouselItem> => {
			return items.find((_item, i) => i === index);
		},
		[items]
	);

	const isFirstItem = useCallback(
		(key: string): boolean => {
			return items.some((item, index) => item.key === key && index === 0);
		},
		[items]
	);
	const isFirstItemVisible = useMemo<boolean>(() => {
		return items && items[0] ? items[0].isVisible : false;
	}, [items]);

	const isItemVisible = useCallback(
		(key: string): boolean => {
			return visibleItemsDebounced.some((item) => item.key === key);
		},
		[visibleItemsDebounced]
	);

	const isLastItem = useCallback(
		(key: string): boolean => {
			return items.some((item, index) => item.key === key && index === items.length - 1);
		},
		[items]
	);
	const isLastItemVisible = useMemo(() => {
		return items && items[items.length - 1] ? items[items.length - 1].isVisible : false;
	}, [items]);

	const getItemPos = useCallback(
		(key: string): Record<'prev' | 'next', Undefinable<CarouselItem>> => {
			const index = getItemIndexByKey(key);

			return {
				prev: index && index > 0 && items[index - 1] ? items[index - 1] : undefined,
				next: index && index < items.length - 1 && items[index + 1] ? items[index + 1] : undefined
			};
		},
		[items]
	);

	const getPrevItem = useCallback((): Undefinable<CarouselItem> => {
		const firstVisibleItem =
			visibleItemsDebounced && visibleItemsDebounced[0] ? visibleItemsDebounced[0] : undefined;
		if (firstVisibleItem) {
			const prevItem = getItemPos(firstVisibleItem.key).prev;
			return prevItem;
		}
		return undefined;
	}, [visibleItemsDebounced]);

	const getNextItem = useCallback((): Undefinable<CarouselItem> => {
		const lastVisibleItem =
			visibleItemsDebounced && visibleItemsDebounced[visibleItemsDebounced.length - 1]
				? visibleItemsDebounced[visibleItemsDebounced.length - 1]
				: undefined;
		if (lastVisibleItem) {
			const nextItem = getItemPos(lastVisibleItem.key).next;
			return nextItem;
		}
		return undefined;
	}, [visibleItemsDebounced]);

	const scrollToItem = useCallback(
		(
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
		},
		[document]
	);

	const scrollPrev = useCallback(
		(inline: ScrollLogicalPosition = 'nearest', block: ScrollLogicalPosition = 'nearest'): void => {
			const firstItem = visibleItemsDebounced && visibleItemsDebounced[0] ? visibleItemsDebounced[0] : undefined;
			if (firstItem) {
				const prevIndex = getPrevItemIndex(round(firstItem.index - scrollAmount));
				const prevItem = getItemByIndex(prevIndex);
				scrollToItem(prevItem, inline, block);
			}
		},
		[scrollAmount, visibleItemsDebounced]
	);

	const scrollNext = useCallback(
		(inline: ScrollLogicalPosition = 'nearest', block: ScrollLogicalPosition = 'nearest'): void => {
			const lastItem =
				visibleItemsDebounced && visibleItemsDebounced[visibleItemsDebounced.length - 1]
					? visibleItemsDebounced[visibleItemsDebounced.length - 1]
					: undefined;
			if (lastItem) {
				const nextIndex = getNextItemIndex(items, round(lastItem.index + scrollAmount));
				const nextItem = getItemByIndex(nextIndex);
				scrollToItem(nextItem, inline, block);
			}
		},
		[items, scrollAmount, visibleItemsDebounced]
	);

	useUpdateEffect(() => setVisibleItems(getVisibleItems(items)), [items]);

	return {
		getItemByKey,
		getItemIndexByKey,
		getItemByIndex,
		getItemPos,
		getNextItem,
		getPrevItem,
		isFirstItem,
		isFirstItemVisible,
		isItemVisible,
		isLastItem,
		isLastItemVisible,
		scrollToItem,
		scrollNext,
		scrollPrev,
		items,
		visibleItems: visibleItemsDebounced
	};
};

export default useCarouselManager;
