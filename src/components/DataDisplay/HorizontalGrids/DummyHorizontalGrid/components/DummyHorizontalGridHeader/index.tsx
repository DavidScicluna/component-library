import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import DummyCardHeader from '../../../../Cards/DummyCard/components/DummyCardHeader';
import DummyArrows from '../../../components/DummyHorizontalGridArrows';
import { useDummyHorizontalGridContext } from '../../common/hooks';

import { DummyHorizontalGridHeaderProps } from './common/types';

const DummyHorizontalGridHeader: FC<DummyHorizontalGridHeaderProps> = (props) => {
	const { color, colorMode, spacing: defaultSpacing } = useDummyHorizontalGridContext();

	const { actions, dummyArrowProps, spacing = defaultSpacing, ...rest } = props;

	return (
		<DummyCardHeader
			{...rest}
			actions={
				<HStack spacing={spacing}>
					{actions}

					<DummyArrows dummyArrowProps={{ ...dummyArrowProps, color, colorMode }} />
				</HStack>
			}
			spacing={spacing}
		/>
	);
};

export default DummyHorizontalGridHeader;
