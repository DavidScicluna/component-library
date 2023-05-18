import { FC } from 'react';

import { Center, Grid, GridItem, TabList } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from '../../../components/HorizontalScrollArrows';
import { useDummyTabBarContext } from '../../common/hooks';

import { DummyTabBarListProps } from './common/types';
import Tab from './components/DummyTab';

const DummyTabBarList: FC<DummyTabBarListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const theme = useTheme();

	const { activeTab, color, colorMode } = useDummyTabBarContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

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
							{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					</GridItem>
				) : null}
			</Grid>
		</TabList>
	);
};

export default DummyTabBarList;
