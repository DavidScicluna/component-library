import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import DummyCardHeader from '../../../../../Cards/DummyCard/components/DummyCardHeader';
import DummyArrows from '../../../components/DummyHorizontalGridArrows';
import { useDummyHorizontalGridContext } from '../../common/hooks';

import { DummyHorizontalGridHeaderProps } from './types';

const DummyHorizontalGridHeader: FC<DummyHorizontalGridHeaderProps> = ({ actions, dummyArrowProps, ...rest }) => {
	const { color, colorMode } = useDummyHorizontalGridContext();

	return (
		<DummyCardHeader
			{...rest}
			actions={
				<HStack spacing={2}>
					{actions}

					<DummyArrows dummyArrowProps={{ ...dummyArrowProps, color, colorMode }} />
				</HStack>
			}
		/>
	);
};

export default DummyHorizontalGridHeader;
