import { FC, useCallback } from 'react';

import { Center, HStack, VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../common/utils';
import { Space } from '../../../../../../../theme/types';
import { useStepperContext } from '../../../../common/hooks';
import { height } from '../..';
import { isDisabled as defaultIsDisabled } from '../../common/default/props';
import useStyles from '../../common/styles';

import { status as defaultStatus } from './common/default/props';
import { StepProps } from './common/types';
import StepDescription from './components/StepDescription';
import StepIcon from './components/StepIcon';
import StepStatus from './components/StepStatus';

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
				width={handleContentWidth()}
				height='100%'
				alignItems='flex-start'
				justifyContent='center'
				spacing={0}
			>
				<StepStatus status={status} />
				<StepDescription index={index} title={title} subtitle={subtitle} />
			</VStack>

			<Center ref={stepIconRef}>
				<StepIcon status={status} />
			</Center>
		</HStack>
	);
};

export default Step;
