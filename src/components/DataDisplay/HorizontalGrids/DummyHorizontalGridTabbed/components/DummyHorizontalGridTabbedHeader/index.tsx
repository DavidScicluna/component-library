import { FC } from 'react';

import { VStack, HStack } from '@chakra-ui/react';

import DummyCardHeader from '../../../../../Cards/DummyCard/components/DummyCardHeader';
import DummyTabList from '../../../../../Navigation/Tabs/DummyTabs/components/DummyTabList';
import DummyArrows from '../../../components/DummyHorizontalGridArrows';
import { useDummyHorizontalGridTabbedContext } from '../../common/hooks';

import { DummyHorizontalGridTabbedHeaderProps } from './types';

const DummyHorizontalGridTabbedHeader: FC<DummyHorizontalGridTabbedHeaderProps> = (props) => {
	const { color, colorMode } = useDummyHorizontalGridTabbedContext();

	const { dummyCardHeaderProps, dummyTabListProps, dummyArrowProps, spacing = 2, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			<DummyCardHeader
				{...dummyCardHeaderProps}
				actions={
					<HStack spacing={2}>
						{dummyCardHeaderProps.actions}

						<DummyArrows dummyArrowProps={{ ...dummyArrowProps, color, colorMode }} />
					</HStack>
				}
			/>

			<DummyTabList {...dummyTabListProps} />
		</VStack>
	);
};

export default DummyHorizontalGridTabbedHeader;
