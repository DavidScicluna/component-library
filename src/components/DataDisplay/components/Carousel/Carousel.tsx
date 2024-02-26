import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { sort } from 'fast-sort';
import { compact, debounce, isArray } from 'lodash-es';
import { useArrayState, useDimensionsRef } from 'rooks';
import { useEffectOnce } from 'usehooks-ts';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';
import { useDebounce } from '@common/hooks';

import type { GridProps } from '@components/Layout';
import { Grid, GridItem, Stack } from '@components/Layout';

import {
	DEFAULT_CAROUSEL_AS,
	DEFAULT_CAROUSEL_DURATION_NUMBER,
	DEFAULT_CAROUSEL_DURATION_THEME,
	DEFAULT_CAROUSEL_ID,
	DEFAULT_CAROUSEL_ITEMS,
	DEFAULT_CAROUSEL_ORIENTTATION,
	DEFAULT_CAROUSEL_SCROLL_AMOUNT,
	DEFAULT_CAROUSEL_VARIANT,
	DEFAULT_CAROUSEL_VISIBLE_ITEMS
} from './common/constants';
import { useCarouselClasses, useCarouselResponsiveValues } from './common/hooks';
import { KEYS_CAROUSEL_CLASS } from './common/keys';
import type {
	CarouselContext as CarouselContextType,
	CarouselDefaultElement,
	CarouselElement,
	CarouselItem as CarouselItemType,
	CarouselItems,
	CarouselProps,
	CarouselRef,
	CarouselVisibleItem,
	CarouselVisibleItems
} from './common/types';
import { getCarouselID, getCarouselItemID } from './common/utils';
import type {
	CarouselArrowButtonGroupDefaultElement,
	CarouselArrowButtonGroupRef,
	CarouselArrowIconButtonGroupDefaultElement,
	CarouselArrowIconButtonGroupRef
} from './components';
import { CarouselArrowButtonGroup, CarouselArrowIconButtonGroup, CarouselItem } from './components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CarouselContext = createContext<CarouselContextType<CarouselDefaultElement>>({
	id: DEFAULT_CAROUSEL_ID,
	items: DEFAULT_CAROUSEL_ITEMS,
	visibleItems: DEFAULT_CAROUSEL_VISIBLE_ITEMS,
	scrollAmount: DEFAULT_CAROUSEL_SCROLL_AMOUNT,
	spacing: DEFAULT_SPACING,
	orientation: DEFAULT_CAROUSEL_ORIENTTATION,
	variant: DEFAULT_CAROUSEL_VARIANT
});

const Carousel = forwardRef(function Carousel<Element extends CarouselElement>(
	props: CarouselProps<Element>,
	ref: CarouselRef<Element>
): JSX.Element {
	const [arrowRef, arrowDimensions] = useDimensionsRef();
	const { width: arrowWidth = 0, height: arrowHeight = 0 } = arrowDimensions || {};

	const [items, setItems] = useArrayState<CarouselItemType>(DEFAULT_CAROUSEL_ITEMS);
	const itemsDebounced = useDebounce<CarouselItems>(items, DEFAULT_CAROUSEL_DURATION_THEME);

	const [visibleItems, setVisibleItems] = useArrayState<CarouselVisibleItem>(DEFAULT_CAROUSEL_VISIBLE_ITEMS);
	const visibleItemsDebounced = useDebounce<CarouselVisibleItems>(visibleItems, DEFAULT_CAROUSEL_DURATION_THEME);

	const {
		children,
		as = DEFAULT_CAROUSEL_AS,
		id = DEFAULT_CAROUSEL_ID,
		className = DEFAULT_CLASSNAME,
		renderDots,
		renderLeftAction,
		renderRightAction,
		renderLeftLinearGradient,
		renderRightLinearGradient,
		color,
		colorMode,
		divider: dividerProp,
		scrollAmount: scrollAmountProp = DEFAULT_CAROUSEL_SCROLL_AMOUNT,
		spacing: spacingProp = DEFAULT_SPACING,
		orientation: orientationProp = DEFAULT_CAROUSEL_ORIENTTATION,
		variant: variantProp = DEFAULT_CAROUSEL_VARIANT,
		...rest
	} = props;

	const { divider, scrollAmount, spacing, orientation, variant } = useCarouselResponsiveValues<Element>({
		divider: dividerProp,
		scrollAmount: scrollAmountProp,
		spacing: spacingProp,
		orientation: orientationProp,
		variant: variantProp
	});

	const classes = useCarouselClasses<Element>({ spacing, orientation, variant });

	const handleChildren = debounce(() => {
		if (isArray(children)) {
			setVisibleItems.setArray(DEFAULT_CAROUSEL_VISIBLE_ITEMS);
			setItems.clear();
			setItems.setArray(
				sort(
					compact(children).map((child, index) => ({
						child,
						key: getCarouselItemID(id, index),
						index
					}))
				).asc(({ index }) => index) as CarouselItems
			);
		}
	}, DEFAULT_CAROUSEL_DURATION_NUMBER);

	useEffectOnce(() => handleChildren());

	return (
		<CarouselContext.Provider
			value={{
				color,
				colorMode,
				id,
				items: itemsDebounced,
				visibleItems: visibleItemsDebounced,
				scrollAmount,
				spacing,
				orientation,
				variant
			}}
		>
			<Grid
				{...(rest as GridProps<Element>)}
				as={as}
				ref={ref}
				id={getCarouselID(id)}
				className={classNames(KEYS_CAROUSEL_CLASS, classes.overflow.hidden, { [className]: !!className })}
				templateColumns={
					orientation === 'vertical' ? compact(['1fr', renderDots ? 'auto' : null]).join(' ') : 1
				}
				templateRows={orientation === 'horizontal' ? compact(['1fr', renderDots ? 'auto' : null]).join(' ') : 1}
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				spacing={spacing}
			>
				<GridItem className={classes.overflow.hidden}>
					<Grid
						className={classes.overflow.hidden}
						templateColumns={
							orientation === 'horizontal'
								? compact([
										variant === 'left' ? 'auto' : null,
										'1fr',
										variant === 'right' ? 'auto' : null
									]).join(' ')
								: 1
						}
						templateRows={
							orientation === 'vertical'
								? compact([
										variant === 'left' ? 'auto' : null,
										'1fr',
										variant === 'right' ? 'auto' : null
									]).join(' ')
								: 1
						}
						alignItems='stretch'
						alignContent='stretch'
						justifyItems='stretch'
						justifyContent='stretch'
						spacing={spacing}
					>
						{variant === 'left' && renderLeftAction && renderRightAction ? (
							<GridItem>
								{orientation === 'horizontal' ? (
									<CarouselArrowIconButtonGroup
										ref={
											// eslint-disable-next-line max-len
											arrowRef as CarouselArrowIconButtonGroupRef<CarouselArrowIconButtonGroupDefaultElement>
										}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								) : (
									<CarouselArrowButtonGroup
										ref={
											// eslint-disable-next-line max-len
											arrowRef as CarouselArrowButtonGroupRef<CarouselArrowButtonGroupDefaultElement>
										}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								)}
							</GridItem>
						) : null}

						{itemsDebounced.length > 0 ? (
							<GridItem className={classes.overflow.hidden}>
								<Grid
									className={classes.overflow.hidden}
									w='100%'
									h='100%'
									templateColumns={1}
									templateRows={1}
									alignItems='stretch'
									alignContent='stretch'
									justifyItems='stretch'
									justifyContent='stretch'
									spacing={0}
								>
									{variant === 'overlay' && renderLeftAction ? (
										<GridItem
											columnStart={1}
											rowStart={1}
											alignSelf={orientation === 'horizontal' ? 'stretch' : 'start'}
											justifySelf={orientation === 'horizontal' ? 'start' : 'stretch'}
											zIndex={1}
										>
											{renderLeftAction(variant)}
										</GridItem>
									) : variant === 'left' && renderLeftLinearGradient ? (
										<GridItem
											w={orientation === 'horizontal' ? `${arrowWidth}px` : '100%'}
											h={orientation === 'vertical' ? `${arrowHeight}px` : undefined}
											columnStart={1}
											rowStart={1}
											alignSelf='stretch'
											justifySelf='start'
											zIndex={1}
										>
											{renderLeftLinearGradient()}
										</GridItem>
									) : null}

									<GridItem
										className={classes.overflow.auto}
										columnStart={1}
										rowStart={1}
										columnSpan='full'
									>
										<Stack
											className={classes.items}
											direction={orientation === 'horizontal' ? 'row' : 'column'}
											alignItems='stretch'
											justifyContent='stretch'
											divider={divider}
											spacing={spacing}
										>
											{itemsDebounced.map((item) => (
												<CarouselItem
													key={item.key}
													id={item.key}
													className={classes.item}
													onToggleVisibility={(isVisible: boolean) => {
														setVisibleItems.updateItemAtIndex(item.index, {
															[item.key]: isVisible
														});
													}}
												>
													{item.child}
												</CarouselItem>
											))}
										</Stack>
									</GridItem>

									{variant === 'overlay' && renderRightAction ? (
										<GridItem
											columnStart={1}
											rowStart={1}
											alignSelf={orientation === 'horizontal' ? 'stretch' : 'end'}
											justifySelf={orientation === 'horizontal' ? 'end' : 'stretch'}
											zIndex={1}
										>
											{renderRightAction(variant)}
										</GridItem>
									) : variant === 'right' && renderRightLinearGradient ? (
										<GridItem
											w={orientation === 'horizontal' ? `${arrowWidth}px` : '100%'}
											h={orientation === 'vertical' ? `${arrowHeight}px` : undefined}
											columnStart={1}
											rowStart={1}
											alignSelf='stretch'
											justifySelf='end'
											zIndex={1}
										>
											{renderRightLinearGradient()}
										</GridItem>
									) : null}
								</Grid>
							</GridItem>
						) : null}

						{variant === 'right' && renderLeftAction && renderRightAction ? (
							<GridItem>
								{orientation === 'horizontal' ? (
									<CarouselArrowIconButtonGroup
										ref={
											// eslint-disable-next-line max-len
											arrowRef as CarouselArrowIconButtonGroupRef<CarouselArrowIconButtonGroupDefaultElement>
										}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								) : (
									<CarouselArrowButtonGroup
										ref={
											// eslint-disable-next-line max-len
											arrowRef as CarouselArrowButtonGroupRef<CarouselArrowButtonGroupDefaultElement>
										}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								)}
							</GridItem>
						) : null}
					</Grid>
				</GridItem>

				{renderDots ? <GridItem>{renderDots()}</GridItem> : null}
			</Grid>
		</CarouselContext.Provider>
	);
});

// Carousel.displayName = 'Carousel';

export default Carousel;
