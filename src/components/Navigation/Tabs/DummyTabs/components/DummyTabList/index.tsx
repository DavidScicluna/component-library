import { FC, useCallback } from 'react';

import { TabList as CUIDummyTabList, HStack, Box } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import HorizontalScroll from '../../../../../HorizontalScroll';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from '../../../components/HorizontalScrollArrows';
import { useDummyTabsContext } from '../../common/hooks';

import Tab from './components/DummyTab';
import { DummyTabListProps } from './types';

const DummyTabList: FC<DummyTabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const theme = useTheme();

	const { activeTab, color, colorMode, isFitted } = useDummyTabsContext();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const handleChildrenWidth = useCallback((): string => {
		return `calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`;
	}, [renderLeft, renderRight]);

	return (
		<CUIDummyTabList
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
					<Box ref={leftRef}>
						{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
					</Box>
				)}

				<Box ref={childrenRef} width={handleChildrenWidth()} height='100%'>
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
								key={`ds-cl-tabs-tab-${index}`}
								panelId={`ds-cl-tabs-tab-${index}`}
								isSelected={tab.isSelected || index === activeTab}
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
		</CUIDummyTabList>
	);
};

export default DummyTabList;
