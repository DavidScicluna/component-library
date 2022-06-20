import { ReactElement, createContext, forwardRef, useState } from 'react';

import { ColorMode, useColorMode, VStack } from '@chakra-ui/react';

import {
	accordions as defaultAccordions,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	opened as defaultOpened,
	spacing as defaultSpacing,
	setOpened as defaultSetOpened
} from './common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType, AccordionsRef, AccordionsProps, OpenedAccordions } from './types';

export const AccordionsContext = createContext<AccordionsContextType>({
	opened: defaultOpened,
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFullWidth: defaultIsFullWidth,
	setOpened: defaultSetOpened
});

const Accordions = forwardRef<AccordionsRef, AccordionsProps>(function Accordions(props, ref): ReactElement {
	const { colorMode: colorModeHook } = useColorMode();

	const [opened, setOpened] = useState<OpenedAccordions>([]);

	const {
		children,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode: colorModeProp,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		spacing = defaultSpacing,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<AccordionsContext.Provider
			value={{
				opened,
				accordions,
				color,
				colorMode,
				isDisabled,
				isFullWidth,
				spacing,
				setOpened
			}}
		>
			<VStack ref={ref} width='100%' spacing={spacing} {...rest}>
				{children}
			</VStack>
		</AccordionsContext.Provider>
	);
});

export default Accordions;
