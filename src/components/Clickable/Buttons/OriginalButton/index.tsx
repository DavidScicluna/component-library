import { forwardRef, ReactElement, useMemo } from 'react';

import { Button as CUIButton, Center, Grid, GridItem } from '@chakra-ui/react';

import { compact, merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { Radius } from '../../../../theme/types';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	isActive as defaultIsActive,
	isCompact as defaultIsCompact,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from '../common/utils';

import { ButtonProps, ButtonRef } from './common/types';
import ButtonSpinner from './components/ButtonSpinner';

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isCompact = defaultIsCompact,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		isLoading = defaultIsLoading,
		isRound = defaultIsRound,
		renderLeft,
		renderRight,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const radius = useMemo((): Radius => {
		return getVariantRadius({ isCompact, isRound, variant });
	}, [isCompact, isRound, variant]);
	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ isCompact, size });
	}, [isCompact, size]);

	const style = useStyles({ theme, isCompact, isFullWidth, isLoading, size });

	return (
		<CUIButton
			{...rest}
			ref={ref}
			tabIndex={0}
			isActive={isActive || isLoading}
			isDisabled={isDisabled}
			variant='unstyled'
			sx={merge(style.button, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			<PushableOverlay
				width='100%'
				height='100%'
				borderRadius={radius}
				color={color}
				colorMode={colorMode}
				isActive={isActive || isLoading}
				isDisabled={isDisabled}
				variant={variant === 'text' ? 'transparent' : variant}
				px={config.padding.x}
				py={config.padding.y}
			>
				<Grid
					width='100%'
					height='100%'
					templateColumns={compact([
						(isLoading && !renderLeft) || renderLeft ? 'auto' : null,
						'auto',
						(isLoading && renderLeft) || renderRight ? 'auto' : null
					]).join(' ')}
					templateRows='1fr'
					alignItems='center'
					alignContent='center'
					justifyItems='center'
					justifyContent='center'
					gap={config.spacing}
				>
					{isLoading && !renderLeft ? (
						<GridItem>
							<ButtonSpinner color={color} colorMode={colorMode} size={size} variant={variant} />
						</GridItem>
					) : renderLeft ? (
						<GridItem>
							{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</GridItem>
					) : null}

					{children ? (
						<GridItem>
							<Center ref={childrenRef} as='span' width='100%' height='100%'>
								{children}
							</Center>
						</GridItem>
					) : null}

					{isLoading && renderLeft ? (
						<GridItem>
							<ButtonSpinner color={color} colorMode={colorMode} size={size} variant={variant} />
						</GridItem>
					) : renderRight ? (
						<GridItem>
							{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</GridItem>
					) : null}
				</Grid>
			</PushableOverlay>
		</CUIButton>
	);
});

export default Button;
