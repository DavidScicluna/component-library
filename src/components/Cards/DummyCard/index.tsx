import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, Center, VStack } from '@chakra-ui/react';

import merge from 'lodash/merge';

import { useTheme } from '../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isDivisible as defaultIsDivisible,
	isLight as defaultIsLight,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../common/data/defaultPropValues';

import useStyles from './common/styles';
import DummyCardDivider from './components/DummyCardDivider';
import { DummyCardContext as DummyCardContextType, DummyCardRef, DummyCardProps } from './types';

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
