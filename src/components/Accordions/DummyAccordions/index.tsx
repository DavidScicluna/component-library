import { createContext, FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useProviderContext } from '../../Provider/common/hooks';
import { spacing as defaultSpacing } from '../common/default/props';

import { accordions as defaultAccordions } from './common/default/props';
import { DummyAccordionsContext as DummyAccordionsContextType, DummyAccordionsProps } from './common/types';

export const DummyAccordionsContext = createContext<DummyAccordionsContextType>({
	accordions: defaultAccordions,
	color: defaultColor,
	colorMode: defaultColorMode,
	spacing: defaultSpacing
});

const DummyAccordions: FC<DummyAccordionsProps> = (props) => {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<DummyAccordionsContext.Provider value={{ accordions, color, colorMode, spacing }}>
			<VStack width='100%' spacing={spacing} {...rest}>
				{children}
			</VStack>
		</DummyAccordionsContext.Provider>
	);
};

export default DummyAccordions;
