import { createContext, FC, useMemo } from 'react';

import { IconButton as CUIIconButton } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useTheme } from '../../../../common/hooks';
import { Radius } from '../../../../theme/types';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import Skeleton from '../../../Skeleton';
import {
	isCompact as defaultIsCompact,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from '../common/utils';

import { DummyIconButtonContext as DummyIconButtonContextType, DummyIconButtonProps } from './common/types';

export const DummyIconButtonContext = createContext<DummyIconButtonContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const DummyIconButton: FC<DummyIconButtonProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isCompact = defaultIsCompact,
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

	const style = useStyles({ theme });

	return (
		<DummyIconButtonContext.Provider value={{ color, colorMode, size }}>
			<Skeleton {...rest} color={color} colorMode={colorMode} borderRadius={radius} isLoaded={false}>
				<CUIIconButton
					aria-label='Dummy Button'
					isDisabled
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
						isDisabled
						isPushable={false}
						variant={variant === 'icon' ? 'transparent' : variant}
						p={config.padding}
					>
						{children}
					</PushableOverlay>
				</CUIIconButton>
			</Skeleton>
		</DummyIconButtonContext.Provider>
	);
};

export default DummyIconButton;
