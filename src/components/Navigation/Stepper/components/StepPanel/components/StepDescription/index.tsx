import { FC, useContext } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import { StepperContext } from '../../../..';
import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../../../types';

import { StepDescriptionProps } from './types';

const StepDescription: FC<StepDescriptionProps> = (props) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const { index, total, title, subtitle } = props;

	return (
		<VStack width='100%' alignItems='flex-start' spacing={0}>
			<Text
				width='100%'
				align='left'
				color={getColor({ theme, colorMode, color, type: 'color' })}
				fontSize={['sm', 'md', 'md', 'lg']}
				fontWeight='semibold'
				lineHeight='base'
				noOfLines={0}
			>
				{`Step ${index + 1} of ${total}`}
			</Text>
			<Text
				width='100%'
				align='left'
				color={getColor({ theme, colorMode, type: 'text.primary' })}
				fontSize={['3xl', '4xl', '4xl', '5xl']}
				fontWeight='bold'
				lineHeight='base'
				noOfLines={0}
			>
				{title}
			</Text>
			{subtitle && (
				<Text
					width='100%'
					align='left'
					color={getColor({ theme, colorMode, type: 'text.secondary' })}
					fontSize={['sm', 'md', 'md', 'lg']}
					lineHeight='base'
					noOfLines={0}
				>
					{subtitle}
				</Text>
			)}
		</VStack>
	);
};

export default StepDescription;
