import { FC, useContext, useState, useCallback } from 'react';

import { TabList as CUITabList, Box } from '@chakra-ui/react';

import { useDebounce } from 'usehooks-ts';

import {
	activeTab as defaultActiveTab,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted
} from '../../common/data/defaultPropValues';
import { TabsContext } from '../../.';
import { TabsContext as TabsContextType } from '../../types';
import HorizontalScroll from '../../../../HorizontalScroll';
import Divider from '../../../../Divider';

import { TabListProps, ScrollContext } from './types';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Tab from './components/Tab';

const TabList: FC<TabListProps> = ({ tabs = [], ...rest }) => {
	const {
		activeTab = defaultActiveTab,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isFitted = defaultIsFitted,
		onChange
	} = useContext<TabsContextType>(TabsContext);

	const [scroll, setScroll] = useState<ScrollContext>({} as ScrollContext);
	const scrollDebounced = useDebounce(scroll, 250);

	const handleScrollToStep = useCallback(
		(index: number): void => {
			const scrollElement = scrollDebounced?.getItemElementByIndex(index);

			if (scrollElement) {
				scrollDebounced?.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
			}
		},
		[scrollDebounced]
	);

	const handleTabClick = useCallback(
		(index: number): void => {
			if (activeTab !== index) {
				if (onChange) {
					onChange({ index });
				}

				handleScrollToStep(index);
			}
		},
		[activeTab, onChange, handleScrollToStep]
	);

	return (
		<CUITabList
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
					<HorizontalScroll
						width='100%'
						height='100%'
						colorMode={colorMode}
						LeftArrow={<HorizontalScrollLeftArrow scroll={scrollDebounced} />}
						RightArrow={<HorizontalScrollRightArrow scroll={scrollDebounced} />}
						isDisabled={isDisabled}
						onInit={(scroll) => setScroll(scroll)}
						onUpdate={(scroll) => setScroll(scroll)}
					>
						{tabs.map((tab, index) => (
							<Tab
								{...tab}
								key={`ds-cl-tabs-tab-${index}`}
								panelId={`ds-cl-tabs-tab-${index}`}
								isSelected={tab.isSelected || index === activeTab}
								onClick={() => handleTabClick(index)}
							/>
						))}
					</HorizontalScroll>
				</Box>

				<Box gridRow={1} gridColumn={1}>
					<Divider />
				</Box>
			</Box>
		</CUITabList>
	);
};

export default TabList;
