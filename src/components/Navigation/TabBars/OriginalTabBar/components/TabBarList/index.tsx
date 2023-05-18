import { FC } from 'react';

import { Center, Grid, GridItem, TabList } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import { useSetHorizontalScrollAPIContext } from '../../../../../DataDisplay/HorizontalScroll/common/hooks';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from '../../../components/HorizontalScrollArrows';
import { useTabBarContext } from '../../common/hooks';

import { TabBarListProps } from './common/types';
import Tab from './components/Tab';

const TabBarList: FC<TabBarListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const theme = useTheme();

	const { activeTab, color, colorMode, isDisabled, onChange } = useTabBarContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const [scroll, setScroll] = useSetHorizontalScrollAPIContext();

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
			borderBottomWidth='2px'
			borderBottomStyle='solid'
			borderBottomColor={getColor({ theme, colorMode, type: 'divider' })}
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
							{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					</GridItem>
				) : null}
			</Grid>
		</TabList>
	);
};

export default TabBarList;
