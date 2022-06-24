import { FC, useContext } from 'react';

import { DummyAccordionProps } from './types';

import { DummyAccordionsContext } from '../../../..';
import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import Skeleton from '../../../../../../Skeleton';
import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../OriginalAccordions/common/data/defaultPropValues';
import { size as defaultSize } from '../../../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../../../types';

const DummyAccordion: FC<DummyAccordionProps> = ({ color = defaultColor, size = defaultSize }) => {
	const { colorMode = defaultColorMode } = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={false} type='rectangle'>
			<Button color={color} colorMode={colorMode} isDisabled size={size} variant='text' sx={{ front: { px: 0 } }}>
				Dummy Accordion Label
			</Button>
		</Skeleton>
	);
};

export default DummyAccordion;
