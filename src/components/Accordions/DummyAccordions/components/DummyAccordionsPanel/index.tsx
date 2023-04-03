import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useDummyAccordionsContext } from '../../common/hooks';

import { DummyAccordionsPanelProps } from './types';

const DummyAccordionsPanel: FC<DummyAccordionsPanelProps> = (props) => {
	const { accordions, spacing: spacingHook } = useDummyAccordionsContext();

	const { children, spacing = spacingHook, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children({ accordions })}
		</VStack>
	);
};

export default DummyAccordionsPanel;
