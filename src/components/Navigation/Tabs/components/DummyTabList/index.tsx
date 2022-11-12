import { FC, useContext, useCallback } from 'react';

import { TabList as CUIDummyTabList, Box, HStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../common/data/defaultPropValues';
import { TabsContext } from '../..';
import { TabsContext as TabsContextType } from '../../types';
import Divider from '../../../../Divider';
import { getSizeConfig } from '../../common/utils';

import { DummyTabListProps } from './types';
import DummyTab from './components/DummyTab';

const DummyTabList: FC<DummyTabListProps> = ({ tabs = [], renderLeft, renderRight, ...rest }) => {
	const {
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFitted = defaultIsFitted,
		size = defaultSize
	} = useContext<TabsContextType>(TabsContext);

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

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
			<Box width='100%' height='100%' display='grid' alignItems='flex-end' justifyContent='stretch'>
				<Box gridRow={1} gridColumn={1}>
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
				</Box>

				<Box gridRow={1} gridColumn={1}>
					<Divider colorMode={colorMode} />
				</Box>
			</Box>
		</CUIDummyTabList>
	);
};

export default DummyTabList;
