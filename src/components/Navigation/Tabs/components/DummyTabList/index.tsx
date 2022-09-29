import { FC, useContext } from 'react';

import { TabList as CUIDummyTabList, Box, HStack } from '@chakra-ui/react';

import {
	activeTab as defaultActiveTab,
	colorMode as defaultColorMode,
	isFitted as defaultIsFitted
} from '../../common/data/defaultPropValues';
import { TabsContext } from '../..';
import { TabsContext as TabsContextType } from '../../types';
import Divider from '../../../../Divider';

import { DummyTabListProps } from './types';
import DummyTab from './components/DummyTab';

const DummyTabList: FC<DummyTabListProps> = ({ tabs = [], ...rest }) => {
	const {
		activeTab = defaultActiveTab,
		colorMode = defaultColorMode,
		isFitted = defaultIsFitted
	} = useContext<TabsContextType>(TabsContext);

	return (
		<CUIDummyTabList
			{...rest}
			width='100%'
			height='100%'
			sx={{
				'& .react-horizontal-scrolling-menu--inner-wrapper': { width: '100%' },
				'& .react-horizontal-scrolling-menu--item': isFitted ? { width: '100%' } : {}
			}}
		>
			<Box width='100%' height='100%' display='grid' alignItems='flex-end' justifyContent='stretch'>
				<Box gridRow={1} gridColumn={1}>
					<HStack>
						{tabs.map((tab, index) => (
							<DummyTab
								{...tab}
								key={`ds-cl-tabs-dummy-tab-${index}`}
								panelId={`ds-cl-tabs-dummy-tab-${index}`}
								isSelected={index === activeTab}
							/>
						))}
					</HStack>
				</Box>

				<Box gridRow={1} gridColumn={1}>
					<Divider colorMode={colorMode} />
				</Box>
			</Box>
		</CUIDummyTabList>
	);
};

export default DummyTabList;
