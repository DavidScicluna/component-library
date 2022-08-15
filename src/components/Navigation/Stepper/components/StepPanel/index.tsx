import { FC, useContext } from 'react';

import { VStack } from '@chakra-ui/react';

import { StepperContext } from '../..';
import { StepperContext as StepperContextType } from '../../types';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import Divider from '../../../../Divider';

import StepDescription from './components/StepDescription';
import { StepPanelProps } from './types';

const StepPanel: FC<StepPanelProps> = (props) => {
	const { colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const { children, index, total, title, subtitle, spacing = 4, ...rest } = props;

	return (
		<VStack {...rest} width='100%' divider={<Divider colorMode={colorMode} />} spacing={spacing}>
			<StepDescription index={index} total={total} title={title} subtitle={subtitle} />

			{children}
		</VStack>
	);
};

export default StepPanel;
