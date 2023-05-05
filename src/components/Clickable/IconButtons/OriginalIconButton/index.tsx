import { createContext, forwardRef, ReactElement, useMemo } from 'react';

import { IconButton as CUIIconButton } from '@chakra-ui/react';

import merge from 'lodash-es/merge';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useTheme } from '../../../../common/hooks';
import { Radius } from '../../../../theme/types';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	isActive as defaultIsActive,
	isCompact as defaultIsCompact,
	isDisabled as defaultIsDisabled,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from '../common/utils';

import { IconButtonContext as IconButtonContextType, IconButtonProps, IconButtonRef } from './common/types';
import IconButtonSpinner from './components/IconButtonSpinner';

export const IconButtonContext = createContext<IconButtonContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(function IconButton(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isCompact = defaultIsCompact,
		isDisabled = defaultIsDisabled,
		isLoading = defaultIsLoading,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const radius = useMemo((): Radius => {
		return getVariantRadius({ isRound, variant });
	}, [isCompact, isRound, variant]);
	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ isCompact, size });
	}, [isCompact, size]);

	const style = useStyles({ theme, isLoading });

	return (
		<IconButtonContext.Provider value={{ color, colorMode, size }}>
			<CUIIconButton
				{...rest}
				ref={ref}
				tabIndex={0}
				isActive={isActive || isLoading}
				isDisabled={isDisabled}
				variant='unstyled'
				sx={merge(style.iconbutton, sx)}
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
					variant={variant === 'icon' ? 'transparent' : variant}
					p={config.padding}
				>
					{isLoading ? <IconButtonSpinner variant={variant} /> : children}
				</PushableOverlay>
			</CUIIconButton>
		</IconButtonContext.Provider>
	);
});

export default IconButton;
