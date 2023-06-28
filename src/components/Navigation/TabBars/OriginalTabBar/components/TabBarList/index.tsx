import { FC } from 'react';

import { Center, Grid, GridItem, TabList } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useGetColor } from '../../../../../../common/hooks';
import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import { useSetHorizontalScrollAPIContext } from '../../../../../DataDisplay/HorizontalScroll/common/hooks';
import LeftOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/LeftOverlayArrow';
import RightOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/RightOverlayArrow';
import { border } from '../../../common/default/sizes';
import { useTabBarContext } from '../../common/hooks';

import { TabBarListProps } from './common/types';
import Tab from './components/Tab';

const TabBarList: FC<TabBarListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const { activeTab, color, colorMode, onChange } = useTabBarContext();

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
		<TabList
			{...rest}
			width='100%'
			height='100%'
			borderTopWidth={`${border.default}px`}
			borderTopStyle='solid'
			borderTopColor={borderColor}
			sx={{
				'& .react-horizontal-scrolling-menu--inner-wrapper': { width: '100%' },
				'& .react-horizontal-scrolling-menu--item': { width: '100%' }
			}}
		>
			<Grid
				width='100%'
				height='100%'
				templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
				templateRows='1fr'
				autoFlow='row'
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				gap={0}
			>
				{renderLeft ? (
					<GridItem>
						<Center width='100%' height='100%'>
							{renderLeft({
								color,
								colorMode,
								width: childrenWidth,
								height: childrenHeight
							})}
						</Center>
					</GridItem>
				) : null}

				<GridItem ref={childrenRef}>
					<HorizontalScroll
						width='100%'
						height='100%'
						colorMode={colorMode}
						LeftArrow={<LeftOverlayArrow scrollAmount='single' />}
						RightArrow={<RightOverlayArrow scrollAmount='single' />}
						onInit={setScroll}
						onUpdate={setScroll}
					>
						{tabs.map((tab, index) => (
							<Tab
								{...tab}
								key={`ds-cl-tab-bar-tab-${index}`}
								panelId={`ds-cl-tab-bar-tab-${index}`}
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
							{renderRight({
								color,
								colorMode,
								width: childrenWidth,
								height: childrenHeight
							})}
						</Center>
					</GridItem>
				) : null}
			</Grid>
		</TabList>
	);
};

export default TabBarList;
