import { ReactElement } from 'react';

import DummyButton from '../../../../../../Clickable/Buttons/DummyButton';
import { useDummyAccordionsContext } from '../../../../common/hooks';
import { size as defaultSize } from '../../common/default/props';

import { DummyAccordionButtonProps } from './common/types';

const DummyAccordionButton = (props: DummyAccordionButtonProps): ReactElement => {
	const { color: defaultColor, colorMode } = useDummyAccordionsContext();

	const { color = defaultColor, size = defaultSize } = props;

	return (
		<DummyButton color={color} colorMode={colorMode} size={size} variant='text'>
			Dummy Accordion
		</DummyButton>
	);
};

export default DummyAccordionButton;
