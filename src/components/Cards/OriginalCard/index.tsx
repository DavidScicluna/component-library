import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, Center, VStack } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
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

import {
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import CardDivider from './components/CardDivider';
import { CardContext as CardContextType, CardRef, CardProps } from './types';

export const CardContext = createContext<CardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isLight: defaultIsLight,
	spacing: defaultSpacing
});

const Card = forwardRef<CardRef, CardProps>(function Card(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isActive = defaultIsActive,
		isFullWidth = defaultIsFullWidth,
		isDivisible = defaultIsDivisible,
		isLight = defaultIsLight,
		isClickable = defaultIsClickable,
		isDisabled = defaultIsDisabled,
		spacing = defaultSpacing,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isLight, isClickable, variant });

	return (
		<CardContext.Provider value={{ color, colorMode, isDisabled, isLight, spacing }}>
			<Center
				{...rest}
				ref={ref}
				as='div'
				aria-disabled={isClickable && isDisabled}
				data-active={dataAttr(isClickable && isActive)}
				tabIndex={0}
				sx={merge(style.card, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<VStack
					position='relative'
					zIndex={1}
					flex={1}
					divider={isDivisible && variant !== 'contained' ? <CardDivider /> : undefined}
					spacing={spacing}
					overflowY='hidden'
					overflowX='hidden'
				>
					{children}
				</VStack>
			</Center>
		</CardContext.Provider>
	);
});

export default Card;
