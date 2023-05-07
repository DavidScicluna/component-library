import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import DummyCollapsibleCard from '../../../../DataDisplay/CollapsibleCards/DummyCollapsibleCard';
import { useDummyAccordionsContext } from '../../common/hooks';

import { DummyAccordionProps } from './common/types';

const DummyAccordion: FC<DummyAccordionProps> = (props) => {
	const { color, colorMode } = useDummyAccordionsContext();

	const { id, title, subtitle, actions } = props;

	return (
		<DummyCollapsibleCard
			{...props}
			id={id.toString()}
			width='100%'
			color={color}
			colorMode={colorMode}
			renderTitle={(props) => <Text {...props}>{title}</Text>}
			renderSubtitle={subtitle ? (props) => <Text {...props}>{subtitle}</Text> : undefined}
			actions={actions}
		/>
	);
};

export default DummyAccordion;
