import { FC } from 'react';

import { Box,useColorMode } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../common/hooks';
import Skeleton from '../../../Skeleton';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/data/defaultPropValues';

import useStyles from './common/styles';
import { DummyIconButtonProps } from './types';

const DummyIconButton: FC<DummyIconButtonProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		color = defaultColor,
		colorMode = colorModeHook,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, colorMode, isRound, size, variant });

	return (
		<Skeleton {...rest} color={color} colorMode={colorMode} isLoaded={false} sx={merge(style.iconbutton, sx)}>
			<Skeleton
				className='ds-cl-dummy-iconbutton-skeleton-icon'
				color={color}
				colorMode={colorMode}
				isLoaded={false}
			>
				<Box />
			</Skeleton>
		</Skeleton>
	);
};

export default DummyIconButton;
