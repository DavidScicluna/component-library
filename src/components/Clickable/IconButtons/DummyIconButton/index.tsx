import { createContext, FC, useMemo } from 'react';

import { Box, IconButton as CUIIconButton } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useProviderContext, useTheme } from '../../../../common/hooks';
import { Radius } from '../../../../theme/types';
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
			<Box width='fit-content'>
				<Skeleton {...rest} color={color} colorMode={colorMode} borderRadius={radius} isLoaded={false}>
					<CUIIconButton
						aria-label='Dummy Button'
						isDisabled
						variant='unstyled'
						p={config.padding}
						sx={merge(style.iconbutton, sx)}
						_disabled={style.disabled}
					>
						{children}
					</CUIIconButton>
				</Skeleton>
			</Box>
		</DummyIconButtonContext.Provider>
	);
};

export default DummyIconButton;
