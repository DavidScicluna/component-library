import { createContext, forwardRef, ReactElement, useMemo } from 'react';

import { Badge as CUIBadge, HStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useTheme } from '../../../common/hooks';
import { Radius } from '../../../theme/types';
import PushableOverlay from '../../Overlay/PushableOverlay';
import { useProviderContext } from '../../Provider/common/hooks';

import {
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	isCompact as defaultIsCompact,
	isDisabled as defaultIsDisabled,
	isFixed as defaultIsFixed,
	isFullWidth as defaultIsFullWidth,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from './common/default/props';
import useStyles from './common/styles';
import { BadgeContext as BadgeContextType, BadgeProps, BadgeRef } from './common/types';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from './common/utils';

export const BadgeContext = createContext<BadgeContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	size: defaultSize,
	variant: defaultVariant
});

const Badge = forwardRef<BadgeRef, BadgeProps>(function Badge(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isClickable = defaultIsClickable,
		isCompact = defaultIsCompact,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		isFixed = defaultIsFixed,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, isClickable, isFullWidth });

	const radius = useMemo((): Radius => getVariantRadius({ isRound, variant }), [isCompact, isRound, variant]);
	const config = useMemo((): GetSizeConfigReturn => getSizeConfig({ isCompact, size }), [isCompact, size]);

	return (
		<BadgeContext.Provider
			value={{
				color,
				colorMode,
				size,
				variant
			}}
		>
			<CUIBadge
				{...rest}
				ref={ref}
				aria-disabled={isClickable && isDisabled}
				data-active={dataAttr(isClickable && isActive)}
				tabIndex={0}
				variant='unstyled'
				sx={merge(style.badge, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<PushableOverlay
					width='100%'
					height='100%'
					borderRadius={radius}
					color={color}
					colorMode={colorMode}
					isActive={isClickable && isActive}
					isDisabled={isClickable && isDisabled}
					isFixed={isClickable && isFixed}
					isPushable={isClickable}
					variant={variant === 'text' ? 'transparent' : variant}
					px={config.padding.x}
					py={config.padding.y}
				>
					<HStack
						width='100%'
						height='100%'
						alignItems='center'
						justifyContent='center'
						spacing={config.spacing}
					>
						{children}
					</HStack>
				</PushableOverlay>
			</CUIBadge>
		</BadgeContext.Provider>
	);
});

export default Badge;
