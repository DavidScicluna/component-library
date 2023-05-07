/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactElement, useState } from 'react';

import { VStack } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnSetOpened
} from '../../../common/default/props';
import { useDebounce } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
import { spacing as defaultSpacing } from '../common/default/props';

import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened
} from './common/default/props';
import { AccordionsContext as AccordionsContextType, AccordionsProps, OpenedAccordions } from './common/types';

export const AccordionsContext = createContext<AccordionsContextType<any>>({
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	opened: defaultOpened,
	onSetOpened: defaultOnSetOpened,
	spacing: defaultSpacing
});

const Accordions = <D,>(props: AccordionsProps<D>): ReactElement => {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [opened, setOpened] = useState<OpenedAccordions>([]);
	const debouncedOpened = useDebounce<OpenedAccordions>(opened);

	const {
		children,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
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
				opened: debouncedOpened,
				onSetOpened: setOpened,
				spacing
			}}
		>
			<VStack {...rest} spacing={spacing}>
				{children}
			</VStack>
		</AccordionsContext.Provider>
	);
};

export default Accordions;
