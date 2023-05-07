import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { useDummyAccordionsContext } from '../../common/hooks';

import { DummyAccordionsPanelProps } from './common/types';

const DummyAccordionsPanel: FC<DummyAccordionsPanelProps> = (props) => {
	const { accordions, spacing: defaultSpacing } = useDummyAccordionsContext();

	const { children, spacing = defaultSpacing, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children({ accordions })}
		</VStack>
	);
};

export default DummyAccordionsPanel;
