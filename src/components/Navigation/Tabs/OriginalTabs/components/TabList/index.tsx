import { FC, useState, useCallback } from 'react';

import { TabList as CUITabList, HStack, Box, Center } from '@chakra-ui/react';

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

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>({} as HorizontalScrollAPIContext);
	const scrollDebounced = useDebounce<HorizontalScrollAPIContext>(scroll, 'ultra-fast');

	const handleChildrenWidth = useCallback((): string => {
		return `calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`;
	}, [renderLeft, renderRight]);

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
			<HStack width='100%' height='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
				{renderLeft && (
					<Center ref={leftRef} width='100%' height='100%'>
						{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
					</Center>
				)}

				<Box ref={childrenRef} width={handleChildrenWidth()} height='100%'>
					<HorizontalScroll
						width='100%'
						height='100%'
						colorMode={colorMode}
						LeftArrow={HorizontalScrollLeftArrow}
						RightArrow={HorizontalScrollRightArrow}
						isDisabled={isDisabled}
						onInit={(scroll) => setScroll(scroll)}
						onUpdate={(scroll) => setScroll(scroll)}
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
				</Box>

				{renderRight && (
					<Center ref={rightRef} width='100%' height='100%'>
						{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
					</Center>
				)}
			</HStack>
		</CUITabList>
	);
};

export default TabList;
