import { createContext, ReactElement, useState } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { method as defaultOnSetOpened } from '../../../common/default/props';
import { useDebounce } from '../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	spacing as defaultSpacing
} from '../common/data/defaultPropValues';

import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened
} from './common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType, AccordionsProps, OpenedAccordions } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccordionsContext = createContext<AccordionsContextType<any>>({
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFullWidth: defaultIsFullWidth,
	opened: defaultOpened,
	onSetOpened: defaultOnSetOpened,
	spacing: defaultSpacing
});

const Accordions = <D,>(props: AccordionsProps<D>): ReactElement => {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [opened, setOpened] = useState<OpenedAccordions<D>>([]);
	const debouncedOpened = useDebounce<OpenedAccordions<D>>(opened);

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
				accordions,
				color,
				colorMode,
				isDisabled,
				isFullWidth,
				opened: debouncedOpened,
				onSetOpened: setOpened,
				spacing
			}}
		>
			<VStack width='100%' spacing={spacing} {...rest}>
				{children}
			</VStack>
		</AccordionsContext.Provider>
	);
};

export default Accordions;
