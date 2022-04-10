import { ReactElement, forwardRef } from 'react';

import { ColorMode, useTheme, useColorMode, IconButton as CUIIconButton } from '@chakra-ui/react';

import merge from 'lodash/merge';

import useStyles from './common/styles';
import Spinner from './components/Spinner';
import { IconButtonRef, IconButtonProps } from './types';

import { Theme } from '../../../theme/types';

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(function IconButton(props, ref): ReactElement {
	const theme = useTheme<Theme>();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		color = 'gray',
		colorMode: colorModeProp,
		isDisabled = false,
		isLoading = false,
		isRound = false,
		size = 'md',
		variant = 'contained',
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const style = useStyles(theme, { color, colorMode, isLoading, isRound, size, variant });

	return (
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
			{isLoading ? <Spinner color={color} colorMode={colorMode} size={size} variant={variant} /> : children}
		</CUIIconButton>
	);
});

export default IconButton;
