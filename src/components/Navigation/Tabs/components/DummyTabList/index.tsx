import { FC } from 'react';

import { TabList as CUIDummyTabList, Grid, GridItem, Box, HStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import Divider from '../../../../Divider';
import { getSizeConfig } from '../../common/utils';
import { useTabsContext } from '../../common/hooks';

import { DummyTabListProps } from './types';
import DummyTab from './components/DummyTab';

const DummyTabList: FC<DummyTabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const { activeTab, color, colorMode, isFitted, size } = useTabsContext();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const handleReturnSpacing = (): number => getSizeConfig({ size }).spacing;

	return (
		<CUIDummyTabList
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

						<HStack
							ref={childrenRef}
							width={`calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`}
							spacing={handleReturnSpacing()}
						>
							{tabs.map((tab, index) => (
								<DummyTab
									{...tab}
									key={`ds-cl-tabs-dummy-tab-${index}`}
									panelId={`ds-cl-tabs-dummy-tab-${index}`}
									isSelected={index === activeTab}
								/>
							))}
						</HStack>

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
		</CUIDummyTabList>
	);
};

export default DummyTabList;
