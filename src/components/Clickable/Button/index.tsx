import { ReactElement, forwardRef, useCallback } from 'react';

import { ColorMode, useColorMode, Button as CUIButton, HStack, Center } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';

import {
	color as defaultColor,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	size as defaultSize,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { getSizeConfig } from './common/utils';
import Spinner from './components/Spinner';
import { ButtonRef, ButtonProps } from './types';

import { useTheme } from '../../../common/hooks';

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const [childrenRef, { width, height }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode: colorModeProp,
		renderLeft,
		renderRight,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		isLoading = defaultIsLoading,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isLoading, size, variant });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	return (
		<CUIButton
			{...rest}
			ref={ref}
			tabIndex={0}
			isDisabled={isLoading || isDisabled}
			variant='unstyled'
			sx={merge(style.button, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			<HStack
				width='inherit'
				position='relative'
				zIndex={1}
				align='center'
				justify='center'
				flex={1}
				spacing={handleReturnSpacing()}
			>
				{isLoading && !renderLeft ? (
					<Spinner color={color} colorMode={colorMode} size={size} variant={variant} />
				) : renderLeft ? (
					renderLeft({ color, colorMode, width, height, size })
				) : null}
				{children ? (
					<Center ref={childrenRef} as='span'>
						{children}
					</Center>
				) : null}
				{isLoading && renderLeft ? (
					<Spinner color={color} colorMode={colorMode} size={size} variant={variant} />
				) : renderRight ? (
					renderRight({ color, colorMode, width, height, size })
				) : null}
			</HStack>
		</CUIButton>
	);
});

export default Button;
