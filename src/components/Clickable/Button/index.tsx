import React, { ReactElement, forwardRef, useCallback } from 'react';

import { ColorMode, useTheme, useColorMode, Button as CUIButton, Center, HStack } from '@chakra-ui/react';

import { merge } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import useStyles from './common/styles';
import { handleSize } from './common/utils';
import Spinner from './components/Spinner';
import { ButtonRef, ButtonProps } from './types';

import { Theme } from '../../../theme/types';

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref): ReactElement {
	const theme = useTheme<Theme>();
	const { colorMode: colorModeHook } = useColorMode();

	const [childrenRef, { width, height }] = useElementSize();

	const {
		children,
		color = 'gray',
		colorMode: colorModeProp,
		renderLeft,
		renderRight,
		isDisabled = false,
		isFullWidth = false,
		isLoading = false,
		size = 'md',
		variant = 'contained',
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const style = useStyles(theme, { color, colorMode, isFullWidth, isLoading, size, variant });

	const handleReturnSpacing = useCallback((): number => handleSize(size).spacing, [size, handleSize]);

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
			<HStack width='inherit' align='center' justify='center' flex={1} spacing={handleReturnSpacing()}>
				{isLoading && !renderLeft ? (
					<Spinner
						color={color}
						colorMode={colorMode}
						hasChildren={typeof children === 'string'}
						size={size}
						variant={variant}
					/>
				) : renderLeft ? (
					renderLeft({ color, colorMode, width, height, size })
				) : null}
				{children ? (
					<Center ref={childrenRef} as='span'>
						{children}
					</Center>
				) : null}
				{isLoading && renderLeft ? (
					<Spinner
						color={color}
						colorMode={colorMode}
						hasChildren={typeof children === 'string'}
						size={size}
						variant={variant}
					/>
				) : renderRight ? (
					renderRight({ color, colorMode, width, height, size })
				) : null}
			</HStack>
		</CUIButton>
	);
});

export default Button;
