import { FC, useState } from 'react';

import { TabList as CUITabList, Grid, GridItem, Box, HStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useDebounce } from '../../../../../common/hooks';
import Divider from '../../../../Divider';
import HorizontalScroll from '../../../../HorizontalScroll';
import { useTabsContext } from '../../common/hooks';

import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Tab from './components/Tab';
import { TabListProps, ScrollContext } from './types';

const TabList: FC<TabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const { activeTab, color, colorMode, isDisabled, isFitted, onChange } = useTabsContext();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const [scroll, setScroll] = useState<ScrollContext>({} as ScrollContext);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

	const handleScrollToStep = (index: number): void => {
		const scrollElement = scrollDebounced?.getItemElementByIndex(index);

		if (scrollElement) {
			scrollDebounced?.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
		}
	};

	const handleTabClick = (index: number): void => {
		if (activeTab !== index) {
			if (onChange && typeof onChange === 'function') {
				onChange({ index });
			}

			handleScrollToStep(index);
		}
	};

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
			<Grid
				width='100%'
				height='100%'
				position='relative'
				templateRows='minmax(100%, 1fr)'
				templateColumns='minmax(100%, 1fr)'
				alignItems='center'
				justifyItems='center'
			>
				<GridItem width='100%' height='100%' position='relative' zIndex={1}>
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
				</GridItem>

				<GridItem width='100%' height='100%' position='relative' bottom='4px'>
					<Divider colorMode={colorMode} />
				</GridItem>
			</Grid>
		</CUITabList>
	);
};

export default TabList;
