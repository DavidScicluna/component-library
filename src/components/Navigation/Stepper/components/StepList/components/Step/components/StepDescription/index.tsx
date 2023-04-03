import { FC } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import { useStepperContext } from '../../../../../../common/hooks';

import { StepDescriptionProps } from './types';

const StepDescription: FC<StepDescriptionProps> = ({ index, title, subtitle }) => {
	const theme = useTheme();

	const { colorMode } = useStepperContext();

	return (
		<VStack width='100%' alignItems='inherit' spacing={0}>
			<Text
				width='100%'
				align='left'
				color={getColor({ theme, colorMode, type: 'text.primary' })}
				fontSize='2xl'
				fontWeight='bold'
				lineHeight='base'
				noOfLines={1}
			>
				{`${index + 1}. ${title}`}
			</Text>
			{subtitle && (
				<Text
					width='100%'
					align='left'
					color={getColor({ theme, colorMode, type: 'text.secondary' })}
					fontSize='sm'
					lineHeight='base'
					noOfLines={1}
				>
					{subtitle}
				</Text>
			)}
		</VStack>
	);
};

export default StepDescription;
