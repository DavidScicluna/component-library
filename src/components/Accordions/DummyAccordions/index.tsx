import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { accordions as defaultAccordions } from './common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType, DummyAccordionsProps } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../common/data/defaultPropValues';
import { AccordionsRef as DummyAccordionsRef } from '../OriginalAccordions/types';

export const DummyAccordionsContext = createContext<DummyAccordionsContextType>({
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isFullWidth: defaultIsFullWidth,
	spacing: defaultSpacing
});

const DummyAccordions = forwardRef<DummyAccordionsRef, DummyAccordionsProps>(function DummyAccordions(
	props,
	ref
): ReactElement {
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
			<VStack ref={ref} width='100%' spacing={spacing} {...rest}>
				{children}
			</VStack>
		</DummyAccordionsContext.Provider>
	);
});

export default DummyAccordions;
