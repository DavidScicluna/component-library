import { StackProps } from '@chakra-ui/react';

import { Space } from '../../../../../../theme/types';

export type DummyHorizontalGridTabbedScrollProps = Pick<StackProps, 'children' | 'direction'> & {
	spacing?: Space;
};
