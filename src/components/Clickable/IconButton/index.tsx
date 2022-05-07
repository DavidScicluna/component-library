import { ReactElement, forwardRef } from 'react';

import { ColorMode, useColorMode, IconButton as CUIIconButton } from '@chakra-ui/react';

import merge from 'lodash/merge';

import {
	color as defaultColor,
	isDisabled as defaultIsDisabled,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import Spinner from './components/Spinner';
import { IconButtonRef, IconButtonProps } from './types';

import { useTheme } from '../../../common/hooks';

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(function IconButton(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode: colorModeProp,
		isDisabled = defaultIsDisabled,
		isLoading = defaultIsLoading,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const style = useStyles({ theme, color, colorMode, isLoading, isRound, size, variant });

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
