import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { sort } from 'fast-sort';
import { compact, debounce, isArray } from 'lodash-es';
import { useArrayState } from 'rooks';
import { useEffectOnce, useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useDebounce } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Grid, GridItem, Stack } from '@components/Layout';

import {
	__DEFAULT_CAROUSEL_DURATION_NUMBER__,
	__DEFAULT_CAROUSEL_DURATION_THEME__,
	__DEFAULT_CAROUSEL_ID__,
	__DEFAULT_CAROUSEL_ITEMS__,
	__DEFAULT_CAROUSEL_ORIENTTATION__,
	__DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	__DEFAULT_CAROUSEL_VARIANT__,
	__DEFAULT_CAROUSEL_VISIBLE_ITEMS__
} from './common/constants';
import { useCarouselClasses, useCarouselResponsiveValues } from './common/hooks';
import { __KEYS_CAROUSEL_CLASS__ } from './common/keys';
import type {
	CarouselContext as CarouselContextType,
	CarouselItem as CarouselItemType,
	CarouselItems,
	CarouselProps,
	CarouselRef,
	CarouselVisibleItem,
	CarouselVisibleItems
} from './common/types';
import { getCarouselID, getCarouselItemID } from './common/utils';
import type { CarouselArrowButtonGroupRef, CarouselArrowIconButtonGroupRef } from './components';
import { CarouselArrowButtonGroup, CarouselArrowIconButtonGroup, CarouselItem } from './components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CarouselContext = createContext<CarouselContextType>({
	id: __DEFAULT_CAROUSEL_ID__,
	items: __DEFAULT_CAROUSEL_ITEMS__,
	visibleItems: __DEFAULT_CAROUSEL_VISIBLE_ITEMS__,
	scrollAmount: __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	spacing: __DEFAULT_SPACING__,
	orientation: __DEFAULT_CAROUSEL_ORIENTTATION__,
	variant: __DEFAULT_CAROUSEL_VARIANT__
});

const Carousel: PolymorphicComponentWithRef = forwardRef(function Carousel<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CarouselProps<Element>, ref: CarouselRef<Element>): ReactElement {
	const [arrowRef, { width: arrowWidthSize, height: arrowHeightSize }] = useElementSize();

	const [items, setItems] = useArrayState<CarouselItemType>(__DEFAULT_CAROUSEL_ITEMS__);
	const itemsDebounced = useDebounce<CarouselItems>(items, __DEFAULT_CAROUSEL_DURATION_THEME__);

	const [visibleItems, setVisibleItems] = useArrayState<CarouselVisibleItem>(__DEFAULT_CAROUSEL_VISIBLE_ITEMS__);
	const visibleItemsDebounced = useDebounce<CarouselVisibleItems>(visibleItems, __DEFAULT_CAROUSEL_DURATION_THEME__);

	const {
		children,
		id = __DEFAULT_CAROUSEL_ID__,
		className = __DEFAULT_CLASSNAME__,
		renderDots,
		renderLeftAction,
		renderRightAction,
		renderLeftLinearGradient,
		renderRightLinearGradient,
		color,
		colorMode,
		divider: dividerProp,
		scrollAmount: scrollAmountProp = __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		orientation: orientationProp = __DEFAULT_CAROUSEL_ORIENTTATION__,
		variant: variantProp = __DEFAULT_CAROUSEL_VARIANT__,
		...rest
	} = props;

	const { divider, scrollAmount, spacing, orientation, variant } = useCarouselResponsiveValues({
		divider: dividerProp,
		scrollAmount: scrollAmountProp,
		spacing: spacingProp,
		orientation: orientationProp,
		variant: variantProp
	});

	const classes = useCarouselClasses({ spacing, orientation, variant });

	const handleChildren = debounce(() => {
		if (isArray(children)) {
			setVisibleItems.setArray(__DEFAULT_CAROUSEL_VISIBLE_ITEMS__);
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
	}, __DEFAULT_CAROUSEL_DURATION_NUMBER__);

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
			<Grid<Element>
				{...rest}
				ref={ref}
				id={getCarouselID(id)}
				className={classNames(__KEYS_CAROUSEL_CLASS__, classes.overflow.hidden, { [className]: !!className })}
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
										ref={arrowRef as CarouselArrowIconButtonGroupRef}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								) : (
									<CarouselArrowButtonGroup
										ref={arrowRef as CarouselArrowButtonGroupRef}
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
											w={orientation === 'horizontal' ? `${arrowWidthSize}px` : '100%'}
											h={orientation === 'vertical' ? `${arrowHeightSize}px` : undefined}
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
											w={orientation === 'horizontal' ? `${arrowWidthSize}px` : '100%'}
											h={orientation === 'vertical' ? `${arrowHeightSize}px` : undefined}
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
										ref={arrowRef as CarouselArrowIconButtonGroupRef}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								) : (
									<CarouselArrowButtonGroup
										ref={arrowRef as CarouselArrowButtonGroupRef}
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

Carousel.displayName = 'Carousel';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Carousel<Element> {...props} />;
