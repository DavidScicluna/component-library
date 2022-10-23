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
import { getStatusIcon } from '../Step/common/utils';

import { NextProps } from './types';

const Next: FC<NextProps> = (props) => {
	const theme = useTheme();

	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const {
		isLast = false,
		hasErrors = false,
		hasWarnings = false,
		hasIdle = false,
		isDisabled = defaultIsDisabled,
		onNext
	} = props;

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
			onClick={!isDisabled ? () => onNext() : undefined}
			sx={{
				...merge(
					style.step,
					isMd
						? {
								borderLeftWidth: '2px',
								borderLeftStyle: 'solid',
								borderLeftColor: `gray.${colorMode === 'light' ? 200 : 700}`
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
				color={getColor({
					theme,
					colorMode,
					color: isLast && hasErrors ? 'red' : isLast && (hasWarnings || hasIdle) ? 'yellow' : 'gray',
					type: isLast && (hasErrors || hasWarnings || hasIdle) ? 'color' : 'text.primary'
				})}
				icon={
					isLast
						? hasErrors
							? getStatusIcon({ status: 'error' })
							: hasWarnings || hasIdle
							? getStatusIcon({ status: 'warning' })
							: 'check'
						: 'east'
				}
				category='outlined'
			/>
		</Center>
	);
};

export default Next;
