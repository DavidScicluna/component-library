import { ReactElement, forwardRef, useCallback } from 'react';

import { useColorMode, Center, HStack } from '@chakra-ui/react';

import { merge } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import useStyles from './common/styles';
import { DummyButtonRef, DummyButtonProps } from './types';

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

const DummyButton = forwardRef<DummyButtonRef, DummyButtonProps>(function DummyButton(props, ref): ReactElement {
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

	const style = useStyles({ theme, color, colorMode, isFullWidth, size, variant });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	return (
		<Center {...rest} ref={ref} sx={merge(style.button, sx)}>
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
		</Center>
	);
});

export default DummyButton;
