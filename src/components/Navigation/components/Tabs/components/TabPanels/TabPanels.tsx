import { forwardRef } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import { useTabsContext } from '../../common/hooks';
import { getTabPanelID, getTabPanelsID, getTabsID } from '../../common/utils';

import { KEYS_TABS_TAB_PANELS_CLASS } from './common/keys';
import type { TabPanelProps, TabPanelsProps, TabPanelsRef } from './common/types';

const TabPanel = <Element extends PolymorphicElementType>({ children, index }: TabPanelProps<Element>) => {
	const { index: panel } = useTabsContext();

	return (
		<Transition
			as={Center}
			w='100%'
			h='100%'
			duration='slow'
			easing='ease-in-out'
			transition='fade'
			in={panel === index}
		>
			{children}
		</Transition>
	);
};

const TabPanels = forwardRef(function TabPanels<Element extends PolymorphicElementType>(
	props: TabPanelsProps<Element>,
	ref: TabPanelsRef<Element>
): JSX.Element {
	const { id } = useTabsContext();

	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			aria-labelledby={getTabsID(id)}
			id={getTabPanelsID(id)}
			className={classNames(KEYS_TABS_TAB_PANELS_CLASS, { [className]: !!className })}
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
