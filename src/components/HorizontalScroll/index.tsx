import { createContext, forwardRef, ReactElement, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { Grid, GridItem, useConst } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';
import { v4 as uuid } from 'uuid';

import { color as defaultColor, colorMode as defaultColorMode } from '../../common/default/props';
import { useDebounce, useTheme } from '../../common/hooks';
import { convertStringToNumber } from '../../common/utils';
import { useProviderContext } from '../Provider/common/hooks';

import {
	isDisabled as defaultIsDisabled,
	spacing as defaultSpacing,
	variant as defaultVariant
} from './common/default/props';
import {
	HorizontalScrollAPIContext,
	HorizontalScrollContext as HorizontalScrollContextType,
	HorizontalScrollProps,
	HorizontalScrollRef
} from './common/types';
import Arrows from './components/Arrows';
import Child from './components/Child';
import LeftGradient from './components/LeftGradient';
import LeftOverlayArrow from './components/LeftOverlayArrow';
import RightGradient from './components/RightGradient';
import RightOverlayArrow from './components/RightOverlayArrow';

import './common/styles/index.css';

export const HorizontalScrollContext = createContext<HorizontalScrollContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	spacing: defaultSpacing
});

const HorizontalScroll = forwardRef<HorizontalScrollRef, HorizontalScrollProps>(function HorizontalScroll(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [arrowsRef, { width: arrowsWidth }] = useElementSize();

	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>({} as HorizontalScrollAPIContext);
	const scrollDebounced = useDebounce<HorizontalScrollAPIContext>(scroll, 'ultra-fast');

	const {
		children,
		apiRef,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		renderDivider,
		LeftArrow,
		RightArrow,
		itemClassName,
		separatorClassName,
		scrollContainerClassName = 'scrollContainer',
		wrapperClassName = 'wrapperContainer',
		onWheel,
		onScroll,
		onInit,
		onUpdate,
		onMouseDown,
		onMouseUp,
		onMouseMove,
		spacing = defaultSpacing,
		variant = defaultVariant,
		...rest
	} = props;

	const id = useConst<string>(uuid());

	const handleInit = (scroll: HorizontalScrollAPIContext): void => {
		setScroll(scroll);

		if (onInit) {
			onInit(scroll);
		}
	};

	const handleUpdate = (scroll: HorizontalScrollAPIContext): void => {
		setScroll(scroll);

		if (onUpdate) {
			onUpdate(scroll);
		}
	};

	return (
		<HorizontalScrollContext.Provider value={{ color, colorMode, arrowsWidth, isDisabled, spacing }}>
			<Grid
				{...rest}
				ref={ref}
				templateColumns={[
					variant === 'left' ? 'min-content' : null,
					'minmax(0, 1fr)',
					variant === 'right' ? 'min-content' : null
				].join(' ')}
				templateRows='1fr'
				alignItems='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				gap={spacing}
				sx={{ 'transition': 'none', '& *, *::before, *::after': { transition: 'none' } }}
			>
				{variant === 'left' ? (
					<GridItem>
						<Arrows
							ref={arrowsRef}
							scroll={scrollDebounced}
							LeftArrow={LeftArrow}
							RightArrow={RightArrow}
						/>
					</GridItem>
				) : null}

				<GridItem
					sx={
						variant !== 'overlay'
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
						apiRef={apiRef}
						LeftArrow={
							variant === 'overlay'
								? LeftArrow || LeftOverlayArrow
								: variant === 'left'
								? LeftGradient
								: null
						}
						RightArrow={
							variant === 'overlay'
								? RightArrow || RightOverlayArrow
								: variant === 'right'
								? RightGradient
								: null
						}
						transitionDuration={convertStringToNumber(theme.transition.duration['slow'], 'ms')}
						transitionBehavior='smooth'
						transitionEase={(t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)}
						itemClassName={itemClassName}
						separatorClassName={separatorClassName}
						wrapperClassName={wrapperClassName}
						scrollContainerClassName={scrollContainerClassName}
						onWheel={onWheel}
						onScroll={onScroll}
						onInit={handleInit}
						onUpdate={handleUpdate}
						onMouseDown={onMouseDown}
						onMouseUp={onMouseUp}
						onMouseMove={onMouseMove}
					>
						{children.map((child, index) => (
							<Child
								key={`ds-cl-horizontal-scroll-${id}-child-${index}`}
								itemId={`ds-cl-horizontal-scroll-${id}-child-${index}`}
								renderDivider={renderDivider}
								isLast={index === children.length - 1}
							>
								{child}
							</Child>
						))}
					</ScrollMenu>
				</GridItem>

				{variant === 'right' ? (
					<GridItem>
						<Arrows
							ref={arrowsRef}
							scroll={scrollDebounced}
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
