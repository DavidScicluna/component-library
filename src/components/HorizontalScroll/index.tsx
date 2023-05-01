import { createContext, forwardRef, ReactElement } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { Box } from '@chakra-ui/react';

import { useProviderContext, useTheme } from '../../common/hooks';
import { convertStringToNumber } from '../../common/utils';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from './common/default/props';
import {
	HorizontalScrollContext as HorizontalScrollContextType,
	HorizontalScrollProps,
	HorizontalScrollRef
} from './common/types';
import Child from './components/Child';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

import './common/styles/index.css';

export const HorizontalScrollContext = createContext<HorizontalScrollContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled
});

const HorizontalScroll = forwardRef<HorizontalScrollRef, HorizontalScrollProps>(function HorizontalScroll(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		apiRef,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		renderDivider,
		LeftArrow: LeftArrowProp = LeftArrow,
		RightArrow: RightArrowProp = RightArrow,
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
		...rest
	} = props;

	return (
		<HorizontalScrollContext.Provider value={{ color, colorMode, isDisabled }}>
			<Box ref={ref} width='100%' {...rest}>
				<ScrollMenu
					apiRef={apiRef}
					LeftArrow={LeftArrowProp}
					RightArrow={RightArrowProp}
					transitionDuration={convertStringToNumber(theme.transition.duration['slow'], 'ms')}
					transitionBehavior='smooth'
					transitionEase={(t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)}
					itemClassName={itemClassName}
					separatorClassName={separatorClassName}
					wrapperClassName={wrapperClassName}
					scrollContainerClassName={isDisabled ? 'scrollContainerDisabled' : scrollContainerClassName}
					onWheel={onWheel}
					onScroll={onScroll}
					onInit={onInit}
					onUpdate={onUpdate}
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
					onMouseMove={onMouseMove}
				>
					{children.map((child, index) => (
						<Child
							key={`horizontal_scroll-child-${index}`}
							itemId={`horizontal_scroll-child-${index}`}
							renderDivider={renderDivider}
							isLast={index === children.length - 1}
						>
							{child}
						</Child>
					))}
				</ScrollMenu>
			</Box>
		</HorizontalScrollContext.Provider>
	);
});

export default HorizontalScroll;
