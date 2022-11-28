import { FC, useCallback } from 'react';

import { HStack, VStack, Center } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { height } from '../..';
import { useTheme } from '../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../common/utils';
import { Space } from '../../../../../../../theme/types';
import Fade from '../../../../../../Transitions/Fade';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';
import useStyles from '../../common/styles';
import { useStepperContext } from '../../../../common/hooks';

import { status as defaultStatus } from './common/data/defaultPropValues';
import StepDescription from './components/StepDescription';
import StepIcon from './components/StepIcon';
import StepStatus from './components/StepStatus';
import { StepProps } from './types';

const spacing: Space = 4;

const Step: FC<StepProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode } = useStepperContext();

	const [stepIconRef, { width: stepIconWidth = 0 }] = useElementSize();

	const { index, title, subtitle, isDisabled = defaultIsDisabled, status = defaultStatus, onClick } = props;

	const handleContentWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${stepIconWidth + spacingWidth}px)`;
	}, [theme.space, stepIconWidth, spacing]);

	const style = useStyles({ theme, color, colorMode, status });

	return (
		<HStack
			aria-disabled={isDisabled}
			width='100%'
			minWidth='400px'
			maxWidth='400px'
			height={height}
			alignItems='center'
			justifyContent='space-between'
			onClick={!isDisabled ? () => onClick() : undefined}
			spacing={spacing}
			sx={{ ...style.step }}
			_disabled={{ ...style.disabled }}
		>
			<VStack
				width={status !== 'idle' && status !== 'active' ? handleContentWidth() : '100%'}
				height='100%'
				alignItems='flex-start'
				justifyContent='center'
				spacing={0}
			>
				<StepStatus status={status} />
				<StepDescription index={index} title={title} subtitle={subtitle} />
			</VStack>

			<Fade in={status !== 'idle' && status !== 'active'}>
				<Center ref={stepIconRef}>
					<StepIcon status={status} />
				</Center>
			</Fade>
		</HStack>
	);
};

export default Step;
