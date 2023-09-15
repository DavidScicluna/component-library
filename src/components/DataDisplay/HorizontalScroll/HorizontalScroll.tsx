import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef, isValidElement, useCallback } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import classNames from 'classnames';
import { isArray } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';
import { v4 as uuid } from 'uuid';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useConst, useTheme } from '@common/hooks';
import { convertStringToNumber } from '@common/utils';

import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_HORIZONTAL_SCROLL_ARROW_SIZE__, __DEFAULT_HORIZONTAL_SCROLL_VARIANT__ } from './common/constants';
import { useSetHorizontalScrollAPIContext } from './common/hooks';
import { __KEYS_HORIZONTAL_SCROLL_CLASS__ } from './common/keys';
import type {
	HorizontalScrollAPIContext,
	HorizontalScrollContext as HorizontalScrollContextType,
	HorizontalScrollProps,
	HorizontalScrollRef
} from './common/types';
import {
	HorizontalScrollArrowIconButtonGroup,
	HorizontalScrollItem,
	HorizontalScrollLeftLinearGradient,
	HorizontalScrollOverlayLeftArrowIconButton,
	HorizontalScrollOverlayRightArrowIconButton,
	HorizontalScrollRightLinearGradient
} from './components';

import './common/styles/index.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HorizontalScrollContext = createContext<HorizontalScrollContextType<any>>({
	arrowSize: __DEFAULT_HORIZONTAL_SCROLL_ARROW_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const HorizontalScroll = forwardRef(function HorizontalScroll<Element extends ElementType>(
	props: HorizontalScrollProps<Element>,
	ref: HorizontalScrollRef<Element>
): ReactElement {
	const theme = useTheme();

	const id = useConst<string>(uuid());

	const [arrowRef, { width: arrowWidthSize, height: arrowHeightSize }] = useElementSize();

	const [scroll, setScroll] = useSetHorizontalScrollAPIContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		renderDivider,
		LeftArrow,
		RightArrow,
		// itemClassName,
		// separatorClassName,
		// scrollContainerClassName = 'scrollContainer',
		// wrapperClassName = 'wrapperContainer',
		onInit,
		onUpdate,
		spacing = __DEFAULT_SPACING__,
		variant = __DEFAULT_HORIZONTAL_SCROLL_VARIANT__,
		...rest
	} = props;

	const handleInit = useCallback(
		(scroll: HorizontalScrollAPIContext): void => {
			setScroll(scroll);

			if (onInit) {
				onInit(scroll);
			}
		},
		[onInit]
	);

	const handleUpdate = useCallback(
		(scroll: HorizontalScrollAPIContext): void => {
			setScroll(scroll);

			if (onUpdate) {
				onUpdate(scroll);
			}
		},
		[onUpdate]
	);

	return (
		<HorizontalScrollContext.Provider
			value={{ color, colorMode, arrowSize: { w: arrowWidthSize, h: arrowHeightSize }, spacing }}
		>
			<Grid<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_HORIZONTAL_SCROLL_CLASS__, { [className]: !!className })}
				templateColumns={[
					variant === 'left' ? 'min-content' : null,
					'minmax(0, 1fr)',
					variant === 'right' ? 'min-content' : null
				].join(' ')}
				templateRows={1}
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				spacing={spacing}
				// sx={{ 'transition': 'none', '& *, *::before, *::after': { transition: 'none' } }}
			>
				{variant === 'left' ? (
					<GridItem>
						<HorizontalScrollArrowIconButtonGroup
							ref={arrowRef}
							scroll={scroll}
							LeftArrow={LeftArrow}
							RightArrow={RightArrow}
						/>
					</GridItem>
				) : null}

				{isValidElement(children) && isArray(children) ? (
					<GridItem
						sx={
							variant !== 'overlay' && variant !== 'hidden'
								? {
										'& .react-horizontal-scrolling-menu--arrow-right':
											variant === 'left' ? { display: 'none' } : {},
										'& .react-horizontal-scrolling-menu--arrow-left':
											variant === 'right' ? { display: 'none' } : {}
								  }
								: undefined
						}
					>
						<ScrollMenu
							LeftArrow={
								variant === 'overlay'
									? LeftArrow || HorizontalScrollOverlayLeftArrowIconButton
									: variant === 'left'
									? HorizontalScrollLeftLinearGradient
									: null
							}
							RightArrow={
								variant === 'overlay'
									? RightArrow || HorizontalScrollOverlayRightArrowIconButton
									: variant === 'right'
									? HorizontalScrollRightLinearGradient
									: null
							}
							transitionDuration={convertStringToNumber(theme.transition.duration.slow, 'ms')}
							transitionBehavior='smooth'
							transitionEase={(t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)}
							// itemClassName={itemClassName}
							// separatorClassName={separatorClassName}
							// wrapperClassName={wrapperClassName}
							// scrollContainerClassName={scrollContainerClassName}
							onInit={handleInit}
							onUpdate={handleUpdate}
						>
							{children.map((child, index) => (
								<HorizontalScrollItem
									key={`${__DEFAULT_CLASS_PREFIX__}-horizontal-scroll-${id}-item-${index}`}
									itemId={`${__DEFAULT_CLASS_PREFIX__}-horizontal-scroll-${id}-item-${index}`}
									renderDivider={renderDivider}
									isLast={index === children.length - 1}
								>
									{child}
								</HorizontalScrollItem>
							))}
						</ScrollMenu>
					</GridItem>
				) : null}

				{variant === 'right' ? (
					<GridItem>
						<HorizontalScrollArrowIconButtonGroup
							ref={arrowRef}
							scroll={scroll}
							LeftArrow={LeftArrow}
							RightArrow={RightArrow}
						/>
					</GridItem>
				) : null}
			</Grid>
		</HorizontalScrollContext.Provider>
	);
});

export default HorizontalScroll;
