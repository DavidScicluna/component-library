import { FC, useContext } from 'react';

import { VStack } from '@chakra-ui/react';

import { AccordionsPanelProps } from './types';

import { AccordionsContext } from '../..';
import { spacing as defaultSpacing } from '../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';

const AccordionsPanel: FC<AccordionsPanelProps> = (props) => {
	const { spacing: spacingHook = defaultSpacing } = useContext<AccordionsContextType>(AccordionsContext);

	const { children, spacing = spacingHook, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children}
		</VStack>
	);
};

export default AccordionsPanel;
