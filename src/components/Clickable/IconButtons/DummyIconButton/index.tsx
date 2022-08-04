import { FC } from 'react';

import { useColorMode } from '@chakra-ui/react';

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

import { DummyIconButtonProps } from './types';
import useStyles from './common/styles';

const DummyIconButton: FC<DummyIconButtonProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
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
				{children}
			</Skeleton>
		</Skeleton>
	);
};

export default DummyIconButton;
