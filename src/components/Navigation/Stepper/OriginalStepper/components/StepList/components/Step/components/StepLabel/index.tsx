import { FC, useMemo } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../../../../../common/hooks';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../../../common/utils';
import { useStepperContext } from '../../../../../../common/hooks';

import { StepLabelProps } from './common/types';

const StepLabel: FC<StepLabelProps> = ({ index, title, subtitle, hasIcon = false }) => {
	const { colorMode, size } = useStepperContext();

	const textPrimaryColor = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });
	const textSecondaryColor = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	// TODO: Go over all useMemo and check we are passing down a type
	const { titleFontSize, subtitleFontSize } = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	return (
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
			<Text
				align='left'
				color={textPrimaryColor}
				fontSize={`${titleFontSize}px`}
				fontWeight='semibold'
				lineHeight='normal'
				letterSpacing='.6px'
				noOfLines={1}
			>
				{hasIcon ? title : `${index + 1}. ${title}`}
			</Text>
			{subtitle ? (
				<Text
					align='left'
					color={textSecondaryColor}
					fontSize={`${subtitleFontSize}px`}
					lineHeight='normal'
					noOfLines={1}
				>
					{subtitle}
				</Text>
			) : null}
		</VStack>
	);
};

export default StepLabel;
