import { FC, useContext, useState, useCallback } from 'react';

import { TabList as CUITabList, Box, HStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted
} from '../../common/data/defaultPropValues';
import { TabsContext } from '../../.';
import { TabsContext as TabsContextType } from '../../types';
import HorizontalScroll from '../../../../HorizontalScroll';
import Divider from '../../../../Divider';
import { useDebounce } from '../../../../../common/hooks';

import { TabListProps, ScrollContext } from './types';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Tab from './components/Tab';

const TabList: FC<TabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const {
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isFitted = defaultIsFitted,
		onChange
	} = useContext<TabsContextType>(TabsContext);

	const [gridRef, { width: gridWidth }] = useElementSize();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const [scroll, setScroll] = useState<ScrollContext>({} as ScrollContext);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

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
			<Box ref={gridRef} width='100%' height='100%' display='grid' alignItems='flex-end' justifyContent='stretch'>
				<Box width={`${gridWidth}px`} gridRow={1} gridColumn={1}>
					<HStack width='100%' spacing={0}>
						{renderLeft && (
							<Box ref={leftRef}>
								{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
							</Box>
						)}

						<Box
							ref={childrenRef}
							width={`calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`}
						>
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

						{renderRight && (
							<Box ref={rightRef}>
								{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
							</Box>
						)}
					</HStack>
				</Box>

				<Box width={`${gridWidth}px`} gridRow={1} gridColumn={1}>
					<Divider colorMode={colorMode} />
				</Box>
			</Box>
		</CUITabList>
	);
};

export default TabList;
