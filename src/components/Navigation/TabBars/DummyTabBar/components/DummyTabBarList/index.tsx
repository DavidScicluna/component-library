import { FC } from 'react';

import { Center, Grid, GridItem, TabList } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useGetColor } from '../../../../../../common/hooks';
import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import LeftOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/LeftOverlayArrow';
import RightOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/RightOverlayArrow';
import { border } from '../../../common/default/sizes';
import { useDummyTabBarContext } from '../../common/hooks';

import { DummyTabBarListProps } from './common/types';
import Tab from './components/DummyTab';

const DummyTabBarList: FC<DummyTabBarListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const { activeTab, color, colorMode } = useDummyTabBarContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const borderColor = useGetColor({ color: 'gray', colorMode, type: 'divider' });

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
					>
						{tabs.map((tab, index) => (
							<Tab
								{...tab}
								key={`ds-cl-dummy-tab-bar-tab-${index}`}
								panelId={`ds-cl-dummy-tab-bar-tab-${index}`}
								isSelected={tab.isSelected || index === activeTab}
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

export default DummyTabBarList;
