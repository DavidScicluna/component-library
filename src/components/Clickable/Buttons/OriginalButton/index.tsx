import { forwardRef,ReactElement } from 'react';

import { Button as CUIButton, Center,HStack, useColorMode } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/data/defaultPropValues';
import { getSizeConfig } from '../common/utils';

import useStyles from './common/styles';
import Spinner from './components/Spinner';
import { ButtonProps,ButtonRef } from './types';

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		renderLeft,
		renderRight,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		isLoading = defaultIsLoading,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isLoading, isRound, size, variant });

	const handleReturnSpacing = (): number => getSizeConfig({ size }).spacing;

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
					renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })
				) : null}

				{children && (
					<Center ref={childrenRef} as='span'>
						{children}
					</Center>
				)}

				{isLoading && renderLeft ? (
					<Spinner color={color} colorMode={colorMode} size={size} variant={variant} />
				) : renderRight ? (
					renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })
				) : null}
			</HStack>
		</CUIButton>
	);
});

export default Button;
