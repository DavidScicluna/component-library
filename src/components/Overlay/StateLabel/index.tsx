import { createContext, FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useProviderContext } from '../../../common/hooks';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	padding as defaultPadding,
	spacing as defaultSpacing
} from './common/default/props';
import { StateLabelContext as StateLabelContextType, StateLabelProps } from './common/types';

export const StateLabelContext = createContext<StateLabelContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const StateLabel: FC<StateLabelProps> = (props) => {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		spacing = defaultSpacing,
		p = defaultPadding,
		...rest
	} = props;

	return (
		<StateLabelContext.Provider value={{ color, colorMode }}>
			<VStack width='100%' p={p} spacing={spacing} {...rest}>
				{children}
			</VStack>
		</StateLabelContext.Provider>
	);
};

export default StateLabel;
