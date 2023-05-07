import { FC } from 'react';

import DummyCollapsibleCard from '../../../../DataDisplay/CollapsibleCards/DummyCollapsibleCard';
import { useDummyAccordionsContext } from '../../common/hooks';

import { DummyAccordionProps } from './common/types';

const DummyAccordion: FC<DummyAccordionProps> = (props) => {
	const { color, colorMode } = useDummyAccordionsContext();

	return <DummyCollapsibleCard {...props} color={color} colorMode={colorMode} />;
};

export default DummyAccordion;
