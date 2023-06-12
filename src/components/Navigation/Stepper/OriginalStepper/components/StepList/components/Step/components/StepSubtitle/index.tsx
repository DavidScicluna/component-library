import { FC, useMemo } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../../../../../../common/hooks';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../../../common/utils';
import { useStepperContext } from '../../../../../../common/hooks';

import { StepSubtitleProps } from './common/types';

const StepSubtitle: FC<StepSubtitleProps> = ({ subtitle }) => {
	const { colorMode, size } = useStepperContext();

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	// TODO: Go over all useMemo and check we are passing down a type
	const { subtitleFontSize } = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	return (
		<Text align='left' color={color} fontSize={`${subtitleFontSize}px`} lineHeight='normal' noOfLines={1}>
			{subtitle}
		</Text>
	);
};

export default StepSubtitle;
