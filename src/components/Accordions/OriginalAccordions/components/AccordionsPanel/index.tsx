import { ReactElement, useContext } from 'react';

import { VStack } from '@chakra-ui/react';

import { AccordionsPanelProps } from './types';

import { AccordionsContext } from '../..';
import { spacing as defaultSpacing } from '../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';

const AccordionsPanel = <D,>(props: AccordionsPanelProps<D>): ReactElement => {
	const { accordions = [], spacing: spacingHook = defaultSpacing } =
		useContext<AccordionsContextType<D>>(AccordionsContext);

	const { children, spacing = spacingHook, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children({ accordions })}
		</VStack>
	);
};

export default AccordionsPanel;
