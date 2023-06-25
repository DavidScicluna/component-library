import { createContext, forwardRef, ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useProviderContext } from '../../Provider/common/hooks';

import { padding as defaultPadding, spacing as defaultSpacing } from './common/default/props';
import { StateLabelContext as StateLabelContextType, StateLabelProps, StateLabelRef } from './common/types';

export const StateLabelContext = createContext<StateLabelContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const StateLabel = forwardRef<StateLabelRef, StateLabelProps>(function StateLabel(props, ref): ReactElement {
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
			<VStack ref={ref} width='100%' p={p} spacing={spacing} {...rest}>
				{children}
			</VStack>
		</StateLabelContext.Provider>
	);
});

export default StateLabel;
