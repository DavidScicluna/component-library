import { createContext, FC } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../common/data/defaultPropValues';

import { accordions as defaultAccordions } from './common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType, DummyAccordionsProps } from './types';

export const DummyAccordionsContext = createContext<DummyAccordionsContextType>({
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isFullWidth: defaultIsFullWidth,
	spacing: defaultSpacing
});

const DummyAccordions: FC<DummyAccordionsProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = colorModeHook,
		isFullWidth = defaultIsFullWidth,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<DummyAccordionsContext.Provider value={{ accordions, color, colorMode, isFullWidth, spacing }}>
			<VStack width='100%' spacing={spacing} {...rest}>
				{children}
			</VStack>
		</DummyAccordionsContext.Provider>
	);
};

export default DummyAccordions;
