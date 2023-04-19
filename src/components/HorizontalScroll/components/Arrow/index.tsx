import { FC, useEffect,useState } from 'react';

import { Center,useConst, useMediaQuery } from '@chakra-ui/react';

import { capitalize } from 'lodash';
import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';

import { useDebounce, useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';
import IconButton from '../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings} from '../../../Transitions/common/utils';
import Fade from '../../../Transitions/Fade';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';
import { useHorizontalScrollContext } from '../../common/hooks';

import { isVisible as defaultIsVisible } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { ArrowProps } from './types';

const Arrow: FC<ArrowProps> = (props) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { color, colorMode, isDisabled: isDisabledHook } = useHorizontalScrollContext();

	const [iconButtonRef, { width: iconButtonWidth, height: iconButtonHeight }] = useElementSize<HTMLButtonElement>();

	const {
		direction,
		isVisible = defaultIsVisible,
		isDisabled: isDisabledProp = defaultIsDisabled,
		sx,
		...rest
	} = props;

	const duration = useConst(getTransitionDuration({ theme, duration: 'ultra-fast' }));
	const easing = useConst(getTransitionEasings({ theme }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration, easing });

	const [width, setWidth] = useState<number>(iconButtonWidth);
	const debouncedWidth = useDebounce<number>(width, 'ultra-fast');
	const [height, setHeight] = useState<number>(iconButtonHeight);
	const debouncedHeight = useDebounce<number>(height, 'ultra-fast');

	const isDisabled: boolean = isDisabledHook || isDisabledProp;

	const style = useStyles({ theme, colorMode, direction });

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
		<Fade in={isVisible} style={{ height: '100%' }} transition={{ enter: { ...config }, exit: { ...config } }}>
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
				sx={{ ...sx }}
				_before={
					direction === 'right'
						? {
								...merge(
									{
										...style.pseudo,
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
				<Center
					height='100%'
					sx={{
						backgroundColor: getColor({
							theme,
							colorMode,
							color,
							type: colorMode === 'light' ? 'lightest' : 'darkest'
						})
					}}
				>
					<IconButton
						{...rest}
						ref={iconButtonRef}
						aria-label={`${capitalize(direction)} Arrow Button`}
						color={color}
						colorMode={colorMode}
						isDisabled={isDisabled}
						size={isSm ? 'sm' : 'md'}
						variant='icon'
						sx={{ height: '100%' }}
					>
						<IconButtonIcon
							icon={direction === 'left' ? 'chevron_left' : 'chevron_right'}
							category='outlined'
						/>
					</IconButton>
				</Center>
			</Center>
		</Fade>
	);
};

export default Arrow;
