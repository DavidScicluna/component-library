import { ReactElement, createContext, forwardRef } from 'react';

import { ColorMode, useColorMode, Box } from '@chakra-ui/react';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import './common/styles/index.css';
import {
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth
} from './common/data/defaultPropValues';
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
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		renderDivider,
		colorMode: colorModeProp,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		LeftArrow: LeftArrowProp,
		RightArrow: RightArrowProp,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<HorizontalScrollContext.Provider value={{ colorMode, isDisabled }}>
			<Box ref={ref} width={isFullWidth ? '100%' : 'auto'}>
				<ScrollMenu
					LeftArrow={LeftArrowProp || LeftArrow}
					RightArrow={RightArrowProp || RightArrow}
					transitionDuration={convertStringToNumber(theme.transition.duration['ultra-slow'], 'ms')}
					wrapperClassName='wrapperContainer'
					scrollContainerClassName='scrollContainer'
					{...rest}
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
