import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, Center, VStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import merge from 'lodash/merge';

import {
	color as defaultColor,
	isActive as defaultIsActive,
	isFullWidth as defaultIsFullWidth,
	isDivisible as defaultIsDivisible,
	isLight as defaultIsLight,
	isClickable as defaultIsClickable,
	// isFixed as defaultIsFixed,
	isDisabled as defaultIsDisabled,
	spacing as defaultSpacing,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import CardDivider from './components/CardDivider';
import { CardContext as CardContextType, CardRef, CardProps } from './types';

import { useTheme } from '../../common/hooks';

export const CardContext = createContext<CardContextType>({
	color: 'gray',
	colorMode: 'light',
	isDisabled: defaultIsDisabled,
	isLight: defaultIsLight,
	spacing: defaultSpacing
});

const Card = forwardRef<CardRef, CardProps>(function Card(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isActive = defaultIsActive,
		isFullWidth = defaultIsFullWidth,
		isDivisible = defaultIsDivisible,
		isLight = defaultIsLight,
		isClickable = defaultIsClickable,
		// isFixed: isFixedProp = defaultIsFixed,
		isDisabled = defaultIsDisabled,
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
		isClickable,
		// isFixed,
		variant
	});

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
					overflow='hidden'
				>
					{children}
				</VStack>
			</Center>
		</CardContext.Provider>
	);
});

export default Card;
