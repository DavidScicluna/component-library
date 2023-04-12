import { FC, useState } from 'react';

import { TabList as CUITabList, Grid, GridItem, Center } from '@chakra-ui/react';

import { compact } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import { useDebounce, useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import HorizontalScroll from '../../../../../HorizontalScroll';
import { HorizontalScrollAPIContext } from '../../../../../HorizontalScroll/types';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from '../../../components/HorizontalScrollArrows';
import { useTabsContext } from '../../common/hooks';

import Tab from './components/Tab';
import { TabListProps } from './types';

const TabList: FC<TabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const theme = useTheme();

	const { activeTab, color, colorMode, isDisabled, isFitted, onChange } = useTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>({} as HorizontalScrollAPIContext);
	const scrollDebounced = useDebounce<HorizontalScrollAPIContext>(scroll, 'ultra-fast');

	const handleScrollToTab = (index: number): void => {
		if (scrollDebounced) {
			const scrollElement = scrollDebounced.getItemByIndex(index);

			if (scrollElement) {
				scrollDebounced.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
			}
		}
	};

	const handleTabClick = (index: number): void => {
		if (activeTab !== index) {
			if (onChange && typeof onChange === 'function') {
				onChange({ index });
			}

			handleScrollToTab(index);
		}
	};

	return (
		<CUITabList
			{...rest}
			width='100%'
			height='100%'
			borderBottomWidth='2px'
			borderBottomStyle='solid'
			borderBottomColor={getColor({ theme, colorMode, type: 'divider' })}
			sx={{
				'& .react-horizontal-scrolling-menu--inner-wrapper': { width: '100%' },
				'& .react-horizontal-scrolling-menu--item': isFitted ? { width: '100%' } : {}
			}}
		>
			<Grid
				width='100%'
				height='100%'
				templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
				templateRows='1fr'
				autoFlow='row'
				justifyContent='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				alignItems='stretch'
				gap={0}
			>
				{renderLeft && (
					<GridItem>
						<Center width='100%' height='100%'>
							{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					</GridItem>
				)}

				<GridItem ref={childrenRef}>
					<HorizontalScroll
						width='100%'
						height='100%'
						colorMode={colorMode}
						LeftArrow={HorizontalScrollLeftArrow}
						RightArrow={HorizontalScrollRightArrow}
						isDisabled={isDisabled}
						onInit={setScroll}
						onUpdate={setScroll}
					>
						{tabs.map((tab, index) => (
							<Tab
								{...tab}
								key={`ds-cl-tabs-tab-${index}`}
								panelId={`ds-cl-tabs-tab-${index}`}
								index={index}
								isSelected={tab.isSelected || index === activeTab}
								onSelect={handleTabClick}
							/>
						))}
					</HorizontalScroll>
				</GridItem>

				{renderRight && (
					<GridItem>
						<Center width='100%' height='100%'>
							{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					</GridItem>
				)}
			</Grid>
		</CUITabList>
	);
};

export default TabList;
