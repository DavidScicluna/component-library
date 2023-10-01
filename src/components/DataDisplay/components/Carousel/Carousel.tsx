import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef, useEffect, useMemo, useReducer } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useDebounce, useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { Grid, GridItem, Stack } from '@components/Layout';

import {
	__DEFAULT_CAROUSEL_ID__,
	__DEFAULT_CAROUSEL_ITEMS__,
	__DEFAULT_CAROUSEL_ORIENTTATION__,
	__DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	__DEFAULT_CAROUSEL_VARIANT__
} from './common/constants';
import { useCarouselClasses } from './common/hooks';
import { __KEYS_CAROUSEL_CLASS__ } from './common/keys';
import type {
	CarouselContext as CarouselContextType,
	CarouselItems,
	CarouselOrientation,
	CarouselProps,
	CarouselRef,
	CarouselScrollAmount,
	CarouselVariant
} from './common/types';
import { getCarouselID, getCarouselItemID, itemsReducer } from './common/utils';
import { CarouselArrowButtonGroup, CarouselArrowIconButtonGroup, CarouselItem } from './components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CarouselContext = createContext<CarouselContextType<any>>({
	id: __DEFAULT_CAROUSEL_ID__,
	items: __DEFAULT_CAROUSEL_ITEMS__,
	scrollAmount: __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	spacing: __DEFAULT_SPACING__,
	orientation: __DEFAULT_CAROUSEL_ORIENTTATION__,
	variant: __DEFAULT_CAROUSEL_VARIANT__
});

const Carousel = forwardRef(function Carousel<Element extends ElementType>(
	props: CarouselProps<Element>,
	ref: CarouselRef<Element>
): ReactElement {
	const [arrowRef, { width: arrowWidthSize, height: arrowHeightSize }] = useElementSize();

	const [items, setItems] = useReducer(itemsReducer, __DEFAULT_CAROUSEL_ITEMS__);
	const itemsDebounced = useDebounce<CarouselItems>(items, 'ultra-fast');

	const {
		children: c,
		className = __DEFAULT_CLASSNAME__,
		renderDots,
		renderLeftAction,
		renderRightAction,
		renderLeftLinearGradient,
		renderRightLinearGradient,
		color,
		colorMode,
		id = __DEFAULT_CAROUSEL_ID__,
		divider,
		scrollAmount: sa = __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
		spacing: s = __DEFAULT_SPACING__,
		orientation: o = __DEFAULT_CAROUSEL_ORIENTTATION__,
		variant: v = __DEFAULT_CAROUSEL_VARIANT__,
		...rest
	} = props;

	const children = useMemo(() => c, [c]);

	const scrollAmount = useGetResponsiveValue<CarouselScrollAmount>(sa);
	const spacing = useGetResponsiveValue<ThemeSpacing>(s);
	const orientation = useGetResponsiveValue<CarouselOrientation>(o);
	const variant = useGetResponsiveValue<CarouselVariant>(v);

	const classes = useCarouselClasses<Element>({ spacing, orientation, variant });

	useEffect(() => {
		if (isArray(children)) {
			compact(children).forEach((child, index) => {
				const item = { ref: child, child, key: getCarouselItemID(id, index), index, isVisible: false };
				if (itemsDebounced.some(({ key }) => key === item.key)) {
					setItems({ type: 'UPDATE_ITEM', payload: item });
				} else {
					setItems({ type: 'SET_ITEM', payload: item });
				}
			});
		}
	}, [children]);

	return (
		<CarouselContext.Provider
			value={{ color, colorMode, id, items: itemsDebounced, scrollAmount, spacing, orientation, variant }}
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
										ref={arrowRef}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								) : (
									<CarouselArrowButtonGroup
										ref={arrowRef}
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
													onToggleIsVisible={(isVisible: boolean) =>
														setItems({
															type: 'UPDATE_ITEM',
															payload: { ...item, isVisible }
														})
													}
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
										ref={arrowRef}
										renderLeftAction={renderLeftAction}
										renderRightAction={renderRightAction}
										spacing={spacing}
									/>
								) : (
									<CarouselArrowButtonGroup
										ref={arrowRef}
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

export default Carousel;
