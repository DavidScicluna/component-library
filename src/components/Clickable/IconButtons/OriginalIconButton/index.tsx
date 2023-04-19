import { createContext, forwardRef, ReactElement } from 'react';

import { Center, IconButton as CUIIconButton, useColorMode } from '@chakra-ui/react';

import merge from 'lodash-es/merge';

import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/data/defaultPropValues';

import useStyles from './common/styles';
import Spinner from './components/Spinner';
import { IconButtonContext as IconButtonContextType, IconButtonProps, IconButtonRef } from './types';

export const IconButtonContext = createContext<IconButtonContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(function IconButton(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isDisabled = defaultIsDisabled,
		isLoading = defaultIsLoading,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isLoading, isRound, size, variant });

	return (
		<IconButtonContext.Provider value={{ color, colorMode }}>
			<CUIIconButton
				{...rest}
				ref={ref}
				tabIndex={0}
				isDisabled={isLoading || isDisabled}
				variant='unstyled'
				sx={merge(style.iconbutton, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<Center width='inherit' position='relative' zIndex={1}>
					{isLoading ? (
						<Spinner color={color} colorMode={colorMode} size={size} variant={variant} />
					) : (
						children
					)}
				</Center>
			</CUIIconButton>
		</IconButtonContext.Provider>
	);
});

export default IconButton;
