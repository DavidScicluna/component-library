import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { spacing as defaultSpacing } from '../../common/default/props';
import { useStateLabelContext } from '../../common/hooks';

import { StateLabelActionsProps } from './types';

const StateLabelActions: FC<StateLabelActionsProps> = (props) => {
	const { color, colorMode } = useStateLabelContext();

	const { renderActions, spacing = defaultSpacing, ...rest } = props;

	return (
		<HStack p={0} m={0} spacing={spacing} {...rest}>
			{renderActions({ color, colorMode, variant: 'text' })}
		</HStack>
	);
};

export default StateLabelActions;
