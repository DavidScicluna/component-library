import { FC } from 'react';

import { Center, useMediaQuery } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import Icon from '../../../../../../Icon';
import { useStepperContext } from '../../../../common/hooks';
import { height, width } from '../..';
import { isDisabled as defaultIsDisabled } from '../../common/default/props';
import useStyles from '../../common/styles';

import { CancelProps } from './common/types';

const Cancel: FC<CancelProps> = ({ isDisabled = defaultIsDisabled }) => {
	const theme = useTheme();

	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

	const { color, colorMode, onCancel } = useStepperContext();

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
			onClick={!isDisabled && typeof onCancel === 'function' ? () => onCancel() : undefined}
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
