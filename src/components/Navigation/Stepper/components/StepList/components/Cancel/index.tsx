import { FC, useContext } from 'react';

import { useMediaQuery, Center } from '@chakra-ui/react';

import { merge } from 'lodash';

import { height } from '../..';
import useStyles from '../../common/styles';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { StepperContext } from '../../../..';
import { StepperContext as StepperContextType } from '../../../../types';
import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import Icon from '../../../../../../Icon';

import { CancelProps } from './types';

const Cancel: FC<CancelProps> = ({ isDisabled = false }) => {
	const theme = useTheme();
	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		onCancel
	} = useContext<StepperContextType>(StepperContext);

	const style = useStyles({ theme, color, colorMode, status: 'idle' });

	return (
		<Center
			aria-disabled={isDisabled}
			width={isMd ? height : '50%'}
			height={height}
			onClick={!isDisabled ? () => onCancel() : undefined}
			sx={{
				...merge(
					style.step,
					isMd
						? {
								borderRightWidth: '2px',
								borderRightStyle: 'solid',
								borderRightColor: getColor({ theme, colorMode, type: 'divider' })
						  }
						: {}
				)
			}}
			_disabled={{ ...style.disabled }}
		>
			<Icon
				icon='close'
				category='outlined'
				color={getColor({ theme, colorMode, type: 'text.primary' })}
				fontSize='3xl'
			/>
		</Center>
	);
};

export default Cancel;
