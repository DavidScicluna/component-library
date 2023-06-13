import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabBarPanelFade from '../../../components/TabBarPanelFade';
import { useDummyTabBarContext } from '../../common/hooks';

import { DummyTabBarPanelsProps } from './common/types';

const DummyTabBarPanels: FC<DummyTabBarPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useDummyTabBarContext();

	return (
		<AnimatePresence>
			<Grid
				{...rest}
				width='100%'
				height='100%'
				templateColumns='1fr'
				templateRows='1fr'
				alignItems='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				gap={0}
			>
				{children && Array.isArray(children)
					? children.map((panel, index) => (
							<GridItem
								as={TabBarPanelFade}
								key={`ds-cl-dummy-tab-bar-panels-${index}-panel`}
								tabIndex={index}
								rowStart={1}
								colStart={1}
								in={activeTab === index}
								p={0}
							>
								{panel}
							</GridItem>
					  ))
					: null}
			</Grid>
		</AnimatePresence>
	);
};

export default DummyTabBarPanels;
