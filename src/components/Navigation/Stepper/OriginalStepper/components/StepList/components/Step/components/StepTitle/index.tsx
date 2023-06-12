import { FC, useMemo } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../../../../../common/hooks';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../../../common/utils';
import { useStepperContext } from '../../../../../../common/hooks';

import { StepTitleProps } from './common/types';

const StepTitle: FC<StepTitleProps> = ({ index, title, hasIcon = false }) => {
	const { colorMode, size } = useStepperContext();

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });

	// TODO: Go over all useMemo and check we are passing down a type
	const { titleFontSize } = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	return (
		<Text
			align='left'
			color={color}
			fontSize={`${titleFontSize}px`}
			fontWeight='semibold'
			lineHeight='normal'
			letterSpacing='.6px'
			noOfLines={1}
		>
			{hasIcon ? `${index + 1}. ${title}` : title}
		</Text>
	);
};

export default StepTitle;
