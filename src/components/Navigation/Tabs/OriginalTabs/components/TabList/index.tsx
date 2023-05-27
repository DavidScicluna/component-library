import { FC } from 'react';

import { Center, Grid, GridItem, TabList as CUITabList } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useGetColor } from '../../../../../../common/hooks';
import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import { useSetHorizontalScrollAPIContext } from '../../../../../DataDisplay/HorizontalScroll/common/hooks';
import { border } from '../../../common/default/sizes';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from '../../../components/HorizontalScrollArrows';
import { useTabsContext } from '../../common/hooks';

import { TabListProps } from './common/types';
import Tab from './components/Tab';

const TabList: FC<TabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const { activeTab, color, colorMode, isDisabled, isFitted, onChange } = useTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const [scroll, setScroll] = useSetHorizontalScrollAPIContext();

	const borderColor = useGetColor({ color: 'gray', colorMode, type: 'divider' });

	const handleScrollToTab = (index: number): void => {
		if (scroll) {
			const scrollElement = scroll.getItemByIndex(index);

			if (scrollElement) {
				scroll.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
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
			borderBottomWidth={`${border.default}px`}
			borderBottomStyle='solid'
			borderBottomColor={borderColor}
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
				{renderLeft ? (
					<GridItem>
						<Center width='100%' height='100%'>
							{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					</GridItem>
				) : null}

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

				{renderRight ? (
					<GridItem>
						<Center width='100%' height='100%'>
							{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					</GridItem>
				) : null}
			</Grid>
		</CUITabList>
	);
};

export default TabList;
