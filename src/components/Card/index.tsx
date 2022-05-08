import { ReactElement, createContext, forwardRef } from 'react';

import { ColorMode, useColorMode, VStack, Button as CUIButton } from '@chakra-ui/react';

import merge from 'lodash/merge';

import {
	color as defaultColor,
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
import { Context, CardRef, CardProps } from './types';

import { useTheme } from '../../common/hooks';
import { getColor } from '../../common/utils/color';
import Divider from '../Divider';

export const CardContext = createContext<Context>({ color: 'gray', colorMode: 'light' });

const Card = forwardRef<CardRef, CardProps>(function Card(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode: colorModeProp,
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

	const colorMode: ColorMode = colorModeProp || colorModeHook;
	// const isFixed: boolean = isFixedProp || !isClickable;

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
		<CardContext.Provider value={{ color, colorMode }}>
			<CUIButton
				{...rest}
				ref={ref}
				tabIndex={0}
				isDisabled={isDisabled}
				variant='unstyled'
				sx={merge(style.card, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<VStack
					divider={
						isDivisible && variant !== 'contained' ? (
							<Divider
								backgroundColor={getColor({
									theme,
									colorMode,
									color: color === 'black' || color === 'white' ? 'gray' : color,
									type: 'divider'
								})}
							/>
						) : undefined
					}
					spacing={spacing}
					overflow='hidden'
				>
					{children}
				</VStack>
			</CUIButton>
		</CardContext.Provider>
	);
});

export default Card;
