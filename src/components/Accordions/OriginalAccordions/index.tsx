import { ReactElement, createContext, forwardRef, useState } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { useDebounce } from 'usehooks-ts';

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
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [opened, setOpened] = useState<OpenedAccordions>([]);
	const debouncedOpened = useDebounce<OpenedAccordions>(opened, 500);

	const {
		children,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = colorModeHook,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<AccordionsContext.Provider
			value={{
				opened: debouncedOpened,
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
