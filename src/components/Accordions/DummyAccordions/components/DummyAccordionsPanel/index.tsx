import { FC, useContext } from 'react';

import { VStack } from '@chakra-ui/react';

import { DummyAccordionsContext } from '../..';
import { spacing as defaultSpacing } from '../../../common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../types';

import { DummyAccordionsPanelProps } from './types';

const DummyAccordionsPanel: FC<DummyAccordionsPanelProps> = (props) => {
	const { accordions = [], spacing: spacingHook = defaultSpacing } =
		useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	const { children, spacing = spacingHook, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			{children({ accordions })}
		</VStack>
	);
};

export default DummyAccordionsPanel;
