import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, Box } from '@chakra-ui/react';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import './common/styles/index.css';
import { colorMode as defaultColorMode, isDisabled as defaultIsDisabled } from './common/data/defaultPropValues';
import Child from './components/Child';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
import {
	HorizontalScrollContext as HorizontalScrollContextType,
	HorizontalScrollRef,
	HorizontalScrollProps
} from './types';

import { useTheme } from '../../common/hooks';
import { convertStringToNumber } from '../../common/utils';

export const HorizontalScrollContext = createContext<HorizontalScrollContextType>({
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled
});

const HorizontalScroll = forwardRef<HorizontalScrollRef, HorizontalScrollProps>(function HorizontalScroll(
	props,
	ref
): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		apiRef,
		colorMode = colorModeHook,
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
		<HorizontalScrollContext.Provider value={{ colorMode, isDisabled }}>
			<Box ref={ref} width='100%' {...rest}>
				<ScrollMenu
					apiRef={apiRef}
					LeftArrow={LeftArrowProp}
					RightArrow={RightArrowProp}
					transitionDuration={convertStringToNumber(theme.transition.duration['ultra-slow'], 'ms')}
					itemClassName={itemClassName}
					separatorClassName={separatorClassName}
					wrapperClassName={wrapperClassName}
					scrollContainerClassName={scrollContainerClassName}
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
