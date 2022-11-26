import { ReactElement, useContext } from 'react';

import { VStack } from '@chakra-ui/react';

import { AccordionsContext } from '../..';
import { spacing as defaultSpacing } from '../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';

import { AccordionsPanelProps } from './types';

const AccordionsPanel = <D,>(props: AccordionsPanelProps<D>): ReactElement => {
	const {
		accordions = [],
		opened = [],
		spacing: spacingHook = defaultSpacing
	} = useContext<AccordionsContextType<D>>(AccordionsContext);

	const { children, spacing = spacingHook, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children({ accordions, opened })}
		</VStack>
	);
};

export default AccordionsPanel;
