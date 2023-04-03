import { FC } from 'react';

import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import Skeleton from '../../../../../../Skeleton';
import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { size as defaultSize } from '../../../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { useDummyAccordionsContext } from '../../../../common/hooks';

import { DummyAccordionProps } from './types';

const DummyAccordion: FC<DummyAccordionProps> = ({ color = defaultColor, size = defaultSize }) => {
	const { colorMode } = useDummyAccordionsContext();

	return (
		<Skeleton color={color} colorMode={colorMode} isLoaded={false} variant='rectangle'>
			<Button color={color} colorMode={colorMode} isDisabled size={size} variant='text' sx={{ front: { px: 0 } }}>
				Dummy Accordion Label
			</Button>
		</Skeleton>
	);
};

export default DummyAccordion;
