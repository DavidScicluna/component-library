import { ReactElement, createContext, useState } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { useDebounce } from 'usehooks-ts';

import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened,
	setOpened as defaultSetOpened
} from './common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType, AccordionsProps, OpenedAccordions } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../common/data/defaultPropValues';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccordionsContext = createContext<AccordionsContextType<any>>({
	opened: defaultOpened,
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFullWidth: defaultIsFullWidth,
	setOpened: defaultSetOpened
});

const Accordions = <D,>(props: AccordionsProps<D>): ReactElement => {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [opened, setOpened] = useState<OpenedAccordions<D>>([]);
	const debouncedOpened = useDebounce<OpenedAccordions<D>>(opened, 500);

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
			<VStack width='100%' spacing={spacing} {...rest}>
				{children}
			</VStack>
		</AccordionsContext.Provider>
	);
};

export default Accordions;
