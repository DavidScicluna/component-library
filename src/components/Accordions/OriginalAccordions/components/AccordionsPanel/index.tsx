import { ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import { useAccordionsContext } from '../../common/hooks';

import { AccordionsPanelProps } from './types';

const AccordionsPanel = <D,>(props: AccordionsPanelProps<D>): ReactElement => {
	const { accordions, opened, spacing: spacingHook } = useAccordionsContext<D>();

	const { children, spacing = spacingHook, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children({ accordions, opened })}
		</VStack>
	);
};

export default AccordionsPanel;
