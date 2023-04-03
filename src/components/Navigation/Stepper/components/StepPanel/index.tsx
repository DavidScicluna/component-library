import { FC } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import Headline from '../../../../DataDisplay/Headline';
import Divider from '../../../../Divider';
import { useStepperContext } from '../../common/hooks';

import { StepPanelProps } from './types';

const StepPanel: FC<StepPanelProps> = (props) => {
	const { color, colorMode } = useStepperContext();

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
