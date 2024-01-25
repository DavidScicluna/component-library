import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import { useTabsContext } from '../../common/hooks';
import { getTabPanelID, getTabPanelsID, getTabsID } from '../../common/utils';

import { __KEYS_TABS_TAB_PANELS_CLASS__ } from './common/keys';
import type { TabPanelProps, TabPanelsProps, TabPanelsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const TabPanel = <Element extends PolymorphicElementType>({ children, index }: TabPanelProps<Element>) => {
	const { index: panel } = useTabsContext();

	return (
		<Transition w='100%' h='100%' duration='slow' easing='ease-in-out' transition='fade' in={panel === index}>
			{children}
		</Transition>
	);
};

const TabPanels = forwardRef(function TabPanels<Element extends PolymorphicElementType>(
	props: TabPanelsProps<Element>,
	ref: TabPanelsRef<Element>
): ReactElement {
	const { id } = useTabsContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			aria-labelledby={getTabsID(id)}
			id={getTabPanelsID(id)}
			className={classNames(__KEYS_TABS_TAB_PANELS_CLASS__, { [className]: !!className })}
			role='tabpanel'
			w='100%'
			h='100%'
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{isArray(children)
				? // eslint-disable-next-line @typescript-eslint/no-explicit-any
					children.map((panel: any, index: number) => (
						<GridItem
							key={getTabPanelID(id, index)}
							id={getTabPanelID(id, index)}
							columnStart={1}
							rowStart={1}
						>
							<TabPanel index={index}>{panel}</TabPanel>
						</GridItem>
					))
				: null}
		</Grid>
	);
});

// TabPanels.displayName = 'TabPanels';

export default TabPanels;
