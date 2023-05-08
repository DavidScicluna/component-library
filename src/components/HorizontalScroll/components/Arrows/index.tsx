import { forwardRef, ReactElement } from 'react';

import { HStack } from '@chakra-ui/react';

import DefaultLeftArrow from '../LeftArrow';
import DefaultRightArrow from '../RightArrow';

import { ArrowsProps, ArrowsRef } from './common/types';

const Arrows = forwardRef<ArrowsRef, ArrowsProps>(function Arrows(props, ref): ReactElement {
	const { scroll, LeftArrow, RightArrow } = props;

	return (
		<HStack ref={ref} width='100%' height='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
			{LeftArrow ? LeftArrow : <DefaultLeftArrow scroll={scroll} />}
			{RightArrow ? RightArrow : <DefaultRightArrow scroll={scroll} />}
		</HStack>
	);
});

export default Arrows;
