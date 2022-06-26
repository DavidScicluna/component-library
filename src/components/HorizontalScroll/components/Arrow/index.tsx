import { FC, useContext, useState, useEffect } from 'react';

import { useMediaQuery, useConst, Center } from '@chakra-ui/react';

import { Transition } from 'framer-motion';
import { capitalize } from 'lodash';
import merge from 'lodash/merge';
import { useDebounce, useElementSize } from 'usehooks-ts';

import { isDisabled as defaultIsDisabled, colorMode as defaultColorMode } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { ArrowProps } from './types';

import { HorizontalScrollContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';
import IconButton from '../../../Clickable/IconButton';
import Icon from '../../../Icon';
import {
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../Transitions/common/utils';
import Fade from '../../../Transitions/Fade';
import { HorizontalScrollContext as HorizontalScrollContextType } from '../../types';

const Arrow: FC<ArrowProps> = (props) => {
	const theme = useTheme();

	const [isXs] = useMediaQuery('(max-width: 600px)');

	const { colorMode = defaultColorMode, isDisabled: isDisabledHook = defaultIsDisabled } =
		useContext<HorizontalScrollContextType>(HorizontalScrollContext);

	const [iconButtonRef, { width: iconButtonWidth, height: iconButtonHeight }] = useElementSize<HTMLButtonElement>();

	const { direction, isDisabled = isDisabledHook, sx, ...rest } = props;

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'ultra-fast' }));
	const easing = useConst<number[]>(getTransitionEasings({ theme }));

	const config = useConst<Transition>({ duration, easing });

	const [width, setWidth] = useState<number>(iconButtonWidth);
	const debouncedWidth = useDebounce<number>(width, 500);
	const [height, setHeight] = useState<number>(iconButtonHeight);
	const debouncedHeight = useDebounce<number>(height, 500);

	const style = useStyles({ theme, colorMode, direction, isDisabled });

	useEffect(() => {
		if (iconButtonWidth) {
			setWidth(iconButtonWidth);
		}
	}, [iconButtonWidth]);

	useEffect(() => {
		if (iconButtonHeight) {
			setHeight(iconButtonHeight);
		}
	}, [iconButtonHeight]);

	return (
		<Center
			width={`${debouncedWidth * 2}px`}
			height='100%'
			minHeight={`${debouncedHeight}px`}
			position='absolute'
			top='50%'
			left={direction === 'left' ? 0 : undefined}
			right={direction === 'right' ? 0 : undefined}
			transform='translateY(-50%)'
			zIndex={5}
			sx={{ ...merge(style.transition, sx) }}
			_before={
				direction === 'right'
					? {
							...merge(
								{
									...style.pseudo,
									...style.transition,
									width: `${debouncedWidth}px`,
									minHeight: `${debouncedHeight}px`,
									height: '100%'
								},
								style.arrow
							)
					  }
					: undefined
			}
			_after={
				direction === 'left'
					? {
							...merge(
								{
									...style.pseudo,
									...style.transition,
									width: `${debouncedWidth}px`,
									minHeight: `${debouncedHeight}px`,
									height: '100%'
								},
								style.arrow
							)
					  }
					: undefined
			}
		>
			<Fade
				in={!isDisabled}
				unmountOnExit
				style={{ height: '100%' }}
				transition={{ enter: { ...config }, exit: { ...config } }}
			>
				<IconButton
					{...rest}
					ref={iconButtonRef}
					aria-label={`${capitalize(direction)} Arrow Button`}
					colorMode={colorMode}
					size={isXs ? 'sm' : 'md'}
					variant='icon'
					sx={{
						height: '100%',
						backgroundColor: getColor({
							theme,
							colorMode,
							color: 'gray',
							type: colorMode === 'light' ? 'lightest' : 'darkest'
						})
					}}
				>
					<Icon
						colorMode={colorMode}
						icon={direction === 'left' ? 'chevron_left' : 'chevron_right'}
						category='outlined'
					/>
				</IconButton>
			</Fade>
		</Center>
	);
};

export default Arrow;
