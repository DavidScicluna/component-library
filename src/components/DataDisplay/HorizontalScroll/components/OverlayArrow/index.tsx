import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useGetColor, useTheme } from '../../../../../common/hooks';
import Fade from '../../../../Transitions/Fade';
import { useHorizontalScrollContext } from '../../common/hooks';
import Arrow from '../Arrow';

import useStyles from './common/styles';
import { OverlayArrowProps } from './common/types';

const OverlayArrow: FC<OverlayArrowProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode } = useHorizontalScrollContext();

	const [iconButtonRef, { width: iconButtonWidth, height: iconButtonHeight }] = useElementSize<HTMLButtonElement>();

	const { direction, isVisible = false, sx, ...rest } = props;

	const background = useGetColor({ color, colorMode, type: colorMode === 'light' ? 'lightest' : 'darkest' });

	const style = useStyles({ theme, colorMode, direction });

	return (
		<Center
			as={Fade}
			width={`${iconButtonWidth * 2}px`}
			height='100%'
			in={isVisible}
			sx={sx}
			_before={
				direction === 'right'
					? {
							...merge(
								{
									...style.pseudo,
									width: `${iconButtonWidth}px`,
									minHeight: `${iconButtonHeight}px`,
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
									width: `${iconButtonWidth}px`,
									minHeight: `${iconButtonHeight}px`,
									height: '100%'
								},
								style.arrow
							)
					  }
					: undefined
			}
		>
			<Center height='100%' sx={{ background, backgroundColor: background }}>
				<Arrow {...rest} ref={iconButtonRef} direction={direction} />
			</Center>
		</Center>
	);
};

export default OverlayArrow;
