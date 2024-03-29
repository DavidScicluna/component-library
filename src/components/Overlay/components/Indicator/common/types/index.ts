import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type IndicatorPlacement =
	| 'bottom-center'
	| 'bottom-end'
	| 'bottom-start'
	| 'top-end'
	| 'top-start'
	| 'top-center'
	| 'middle-center'
	| 'middle-end'
	| 'middle-start';

type IndicatorOtherProps = {
	/**
	 * Callback invoked to render the indicator
	 */
	renderIndicator: () => ReactNode;
	/**
	 * If `true` it will render the indicator, else if `false` it will render out
	 *
	 * @default false
	 */
	isVisible?: ResponsiveValue<boolean>;
	/**
	 * Indicator offset relative to the target element, usually used for elements with border-radius, equals to size by default
	 *
	 * @default 0
	 */
	offset?: ResponsiveValue<number>;
	/**
	 * The position of the indicator relative to child element
	 *
	 * @default 'top-end'
	 */
	placement?: ResponsiveValue<IndicatorPlacement>;
};

export type IndicatorProps<Element extends PolymorphicElementType> = BoxProps<Element, IndicatorOtherProps>;

export type IndicatorRef<Element extends PolymorphicElementType> = BoxRef<Element>;
