import { FC, useCallback } from 'react';

import { useColorMode, HStack, Center } from '@chakra-ui/react';

import { merge } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import useStyles from './common/styles';
import { DummyButtonProps } from './types';

import { useTheme } from '../../../../common/hooks';
import Skeleton from '../../../Skeleton';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../common/data/defaultPropValues';
import { getSizeConfig } from '../common/utils';

const DummyButton: FC<DummyButtonProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const [childrenRef, { height: childrenHeight }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		hasLeft = false,
		hasRight = false,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, colorMode, isFullWidth, size, variant });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	return (
		<Skeleton
			{...rest}
			color={color === 'black' || color === 'white' ? 'gray' : color}
			isLoaded={false}
			sx={merge(style.button, sx)}
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
				{hasLeft && (
					<Skeleton
						className='ds-cl-dummy-button-skeleton-icon'
						width={`${childrenHeight}px`}
						height={`${childrenHeight}px`}
						color={color === 'black' || color === 'white' ? 'gray' : color}
						colorMode={colorMode}
						isLoaded={false}
					/>
				)}

				{children && (
					<Center ref={childrenRef} as='span'>
						<Skeleton
							color={color === 'black' || color === 'white' ? 'gray' : color}
							colorMode={colorMode}
							isLoaded={false}
						>
							{children}
						</Skeleton>
					</Center>
				)}

				{hasRight && (
					<Skeleton
						className='ds-cl-dummy-button-skeleton-icon'
						width={`${childrenHeight}px`}
						height={`${childrenHeight}px`}
						color={color === 'black' || color === 'white' ? 'gray' : color}
						colorMode={colorMode}
						isLoaded={false}
					/>
				)}
			</HStack>
		</Skeleton>
	);
};

export default DummyButton;
