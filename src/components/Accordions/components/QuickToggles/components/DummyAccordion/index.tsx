import { FC, useContext } from 'react';

import { useConst } from '@chakra-ui/react';

import { range, sample } from 'lodash';

import { AccordionsContext } from '../../../..';
import Button from '../../../../../Clickable/Button';
import Skeleton from '../../../../../Skeleton';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';

const dummies = range(50, 250, 25);

const DummyAccordion: FC = () => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<AccordionsContextType>(AccordionsContext);

	const dummy = useConst<number>(sample(dummies) || 100);

	return (
		<Skeleton width={`${dummy}px`} color={color} colorMode={colorMode} isLoaded>
			<Button color={color} colorMode={colorMode} isDisabled size='sm' variant='text' sx={{ front: { px: 0 } }}>
				Dummy Accordion Label
			</Button>
		</Skeleton>
	);
};

export default DummyAccordion;
