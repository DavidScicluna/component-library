import { FC } from 'react';

import { HStack, VStack } from '@chakra-ui/react';

import DummyCardHeader from '../../../../../Cards/DummyCard/components/DummyCardHeader';
import DummyTabList from '../../../../../Navigation/Tabs/DummyTabs/components/DummyTabList';
import DummyArrows from '../../../components/DummyHorizontalGridArrows';
import { useDummyHorizontalGridTabbedContext } from '../../common/hooks';

import { DummyHorizontalGridTabbedHeaderProps } from './common/types';

const DummyHorizontalGridTabbedHeader: FC<DummyHorizontalGridTabbedHeaderProps> = (props) => {
	const { color, colorMode, spacing: defaultSpacing } = useDummyHorizontalGridTabbedContext();

	const { dummyCardHeaderProps, dummyTabListProps, dummyArrowProps, spacing = defaultSpacing, ...rest } = props;

	return (
		<VStack {...rest} width='100%' spacing={spacing}>
			<DummyCardHeader
				{...dummyCardHeaderProps}
				actions={
					<HStack spacing={spacing}>
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
