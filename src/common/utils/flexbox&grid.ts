import memoize from 'micro-memoize';

import { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '../types/flexbox&grid';

/**
 * This method will return the appropriate Tailwind CSS class depending on the alignItems param passed
 *
 * @param alignItems - flex-start | flex-end | center | baseline | stretch
 * @returns - Tailwind CSS class
 */
export const getAlignItemsClassName = memoize((alignItems: AlignItems): string => {
	switch (alignItems) {
		case 'flex-start':
			return 'items-start';
		case 'flex-end':
			return 'items-end';
		case 'center':
			return 'items-center';
		case 'baseline':
			return 'items-baseline';
		case 'stretch':
			return 'items-stretch';
	}
});

/**
 * This method will return the appropriate Tailwind CSS class depending on the justifyContent param passed
 *
 * @param justifyContent - normal | flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
 * @returns - Tailwind CSS class
 */
export const getJustifyContentClassName = memoize((justifyContent: JustifyContent): string => {
	switch (justifyContent) {
		case 'normal':
			return 'justify-normal';
		case 'flex-start':
			return 'justify-start';
		case 'flex-end':
			return 'justify-end';
		case 'center':
			return 'justify-center';
		case 'space-between':
			return 'justify-between';
		case 'space-around':
			return 'justify-around';
		case 'space-evenly':
			return 'justify-evenly';
		case 'stretch':
			return 'justify-stretch';
	}
});

/**
 * This method will return the appropriate Tailwind CSS class depending on the flexDirection param passed
 *
 * @param flexDirection - row | row-reverse | column | column-reverse
 * @returns - Tailwind CSS class
 */
export const getFlexDirectionClassName = memoize((flexDirection: FlexDirection): string => {
	switch (flexDirection) {
		case 'row':
			return 'flex-row';
		case 'row-reverse':
			return 'flex-row-reverse';
		case 'column':
			return 'flex-col';
		case 'column-reverse':
			return 'flex-col-reverse';
	}
});

/**
 * This method will return the appropriate Tailwind CSS class depending on the flexWrap param passed
 *
 * @param flexWrap - wrap | wrap-reverse | nowrap
 * @returns - Tailwind CSS class
 */
export const getFlexWrapClassName = memoize((flexWrap: FlexWrap): string => {
	switch (flexWrap) {
		case 'wrap':
			return 'flex-wrap';
		case 'wrap-reverse':
			return 'flex-wrap-reverse';
		case 'nowrap':
			return 'flex-nowrap';
	}
});
