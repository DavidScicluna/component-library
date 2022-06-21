import { FC, useContext } from 'react';

import { useMediaQuery, Center } from '@chakra-ui/react';

import { capitalize } from 'lodash';
import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';

import { isDisabled as defaultIsDisabled, colorMode as defaultColorMode } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { ArrowProps } from './types';

import { HorizontalScrollContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';
import IconButton from '../../../Clickable/IconButton';
import Icon from '../../../Icon';
import Fade from '../../../Transitions/Fade';
import { HorizontalScrollContext as HorizontalScrollContextType } from '../../types';

const Arrow: FC<ArrowProps> = (props) => {
	const theme = useTheme();

	const [isXs] = useMediaQuery('(max-width: 600px)');

	const { colorMode = defaultColorMode, isDisabled: isDisabledHook = defaultIsDisabled } =
		useContext<HorizontalScrollContextType>(HorizontalScrollContext);

	const [iconButtonRef, { width: iconButtonWidth, height: iconButtonHeight }] = useElementSize<HTMLButtonElement>();
	const { direction, isDisabled = isDisabledHook, ...rest } = props;

	const style = useStyles({ theme, colorMode, direction });

	return (
		<Fade in={!isDisabled} unmountOnExit style={{ height: '100%' }}>
			<Center
				width={`${iconButtonWidth * 2}px`}
				height='100%'
				minHeight={`${iconButtonHeight}px`}
				position='absolute'
				top='50%'
				left={direction === 'left' ? 0 : undefined}
				right={direction === 'right' ? 0 : undefined}
				transform='translateY(-50%)'
				zIndex={5}
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
				<Center
					height='100%'
					backgroundColor={getColor({
						theme,
						colorMode,
						color: 'gray',
						type: colorMode === 'light' ? 'lightest' : 'darkest'
					})}
				>
					<IconButton
						{...rest}
						ref={iconButtonRef}
						aria-label={`${capitalize(direction)} Arrow Button`}
						colorMode={colorMode}
						size={isXs ? 'sm' : 'md'}
						variant='icon'
						sx={{ height: '100%' }}
					>
						<Icon
							colorMode={colorMode}
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
