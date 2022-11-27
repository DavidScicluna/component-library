import { FC, useContext } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import { StepperContext } from '../..';
import Divider from '../../../../Divider';
import { color as defaultColor, colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../types';
import Headline from '../../../../DataDisplay/Headline';

import { StepPanelProps } from './types';

const StepPanel: FC<StepPanelProps> = (props) => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const { children, index, total, title, subtitle, spacing = 4, ...rest } = props;

	return (
		<VStack {...rest} width='100%' divider={<Divider colorMode={colorMode} />} spacing={spacing}>
			<Headline
				color={color}
				colorMode={colorMode}
				renderCaption={(props) => <Text {...props}>{`Step ${index + 1} of ${total}`}</Text>}
				renderTitle={(props) => <Text {...props}>{title}</Text>}
				renderSubtitle={subtitle ? (props) => <Text {...props}>{subtitle}</Text> : undefined}
			/>

			{children}
		</VStack>
	);
};

export default StepPanel;
