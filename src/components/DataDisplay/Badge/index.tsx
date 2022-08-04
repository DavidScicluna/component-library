import { ReactElement, createContext, forwardRef, useCallback } from 'react';

import { useColorMode, Badge as CUIBadge, HStack } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../common/hooks';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight,
	size as defaultSize,
	variant as defaultVariant
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { getSizeConfig } from './common/utils';
import { BadgeContext as BadgeContextType, BadgeRef, BadgeProps } from './types';


export const BadgeContext = createContext<BadgeContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isLight: defaultIsLight,
	size: defaultSize,
	variant: defaultVariant
});

const Badge = forwardRef<BadgeRef, BadgeProps>(function Badge(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isLight = defaultIsLight,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isLight, size, variant });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	return (
		<BadgeContext.Provider value={{ color, colorMode, isLight, size, variant }}>
			<CUIBadge {...rest} ref={ref} variant='unstyled' sx={{ ...merge(style.badge, sx) }}>
				<HStack width='100%' spacing={handleReturnSpacing()}>
					{children}
				</HStack>
			</CUIBadge>
		</BadgeContext.Provider>
	);
});

export default Badge;
