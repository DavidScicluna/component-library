import { createContext, forwardRef, ReactElement } from 'react';

import { Center, useColorMode, VStack } from '@chakra-ui/react';

import merge from 'lodash-es/merge';

import { useTheme } from '../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDivisible as defaultIsDivisible,
	isFullWidth as defaultIsFullWidth,
	isLight as defaultIsLight,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../common/data/defaultPropValues';

import useStyles from './common/styles';
import DummyCardDivider from './components/DummyCardDivider';
import { DummyCardContext as DummyCardContextType, DummyCardProps, DummyCardRef } from './types';

export const DummyCardContext = createContext<DummyCardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isLight: defaultIsLight,
	spacing: defaultSpacing
});

const DummyCard = forwardRef<DummyCardRef, DummyCardProps>(function DummyCard(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isFullWidth = defaultIsFullWidth,
		isDivisible = defaultIsDivisible,
		isLight = defaultIsLight,
		spacing = defaultSpacing,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({
		theme,
		color,
		colorMode,
		isFullWidth,
		isLight,
		variant
	});

	return (
		<DummyCardContext.Provider value={{ color, colorMode, isLight, spacing }}>
			<Center {...rest} ref={ref} as='div' aria-disabled sx={merge(style.card, sx)}>
				<VStack
					width='100%'
					height='100%'
					position='relative'
					zIndex={1}
					flex={1}
					divider={isDivisible && variant !== 'contained' ? <DummyCardDivider /> : undefined}
					spacing={spacing}
					overflowY='hidden'
					overflowX='hidden'
				>
					{children}
				</VStack>
			</Center>
		</DummyCardContext.Provider>
	);
});

export default DummyCard;
