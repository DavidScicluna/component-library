import { ReactElement, createContext, forwardRef } from 'react';

import { ColorMode, useTheme, useColorMode, VStack, Button as CUIButton } from '@chakra-ui/react';

import merge from 'lodash/merge';

import useStyles from './common/styles';
import { handleHue } from './common/utils';
import { Context, CardRef, CardProps } from './types';

import { Theme } from '../../theme/types';
import Divider from '../Divider';

export const CardContext = createContext<Context>({ color: 'gray', colorMode: 'light' });

const Card = forwardRef<CardRef, CardProps>(function Card(props, ref): ReactElement {
	const theme = useTheme<Theme>();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		color = 'gray',
		colorMode: colorModeProp,
		isFullWidth = false,
		isDivisible = true,
		isLight = true,
		isClickable = false,
		isFixed: isFixedProp = false,
		isDisabled = false,
		spacing = 2,
		variant = 'outlined',
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;
	const isFixed: boolean = isFixedProp || !isClickable;

	const style = useStyles(theme, {
		color,
		colorMode,
		isFullWidth,
		isLight,
		isClickable,
		isFixed,
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
							<Divider backgroundColor={theme.colors[color][handleHue(colorMode, color, isLight)]} />
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
