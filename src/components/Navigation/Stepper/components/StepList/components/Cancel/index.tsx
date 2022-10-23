import { FC, useContext } from 'react';

import { useMediaQuery, Center } from '@chakra-ui/react';

import { merge } from 'lodash';

import { width, height } from '../..';
import { StepperContext } from '../../../..';
import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import Icon from '../../../../../../Icon';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../../../types';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';
import useStyles from '../../common/styles';

import { CancelProps } from './types';

const Cancel: FC<CancelProps> = ({ isDisabled = defaultIsDisabled }) => {
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
			minWidth={isMd ? width : '50%'}
			width={isMd ? width : '50%'}
			maxWidth={isMd ? width : '50%'}
			minHeight={height}
			height={height}
			maxHeight={height}
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
				width={theme.fontSizes['4xl']}
				height={theme.fontSizes['4xl']}
				fontSize={theme.fontSizes['4xl']}
				color={getColor({ theme, colorMode, type: 'text.primary' })}
				icon='close'
				category='outlined'
			/>
		</Center>
	);
};

export default Cancel;
