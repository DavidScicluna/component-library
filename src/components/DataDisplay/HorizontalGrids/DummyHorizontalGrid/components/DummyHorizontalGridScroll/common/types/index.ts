import { StackProps } from '@chakra-ui/react';

import { Space } from '../../../../../../../../theme/types';

export type DummyHorizontalGridScrollProps = Pick<StackProps, 'children' | 'direction'> & {
	spacing?: Space;
};
