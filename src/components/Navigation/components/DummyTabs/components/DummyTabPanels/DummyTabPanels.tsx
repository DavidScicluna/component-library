import { forwardRef } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import { useDummyTabsContext } from '../../common/hooks';
import { getDummyTabPanelID, getDummyTabPanelsID, getDummyTabsID } from '../../common/utils';

import { KEYS_DUMMY_TABS_TAB_PANELS_CLASS } from './common/keys';
import type { DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef } from './common/types';

const DummyTabPanel = <Element extends PolymorphicElementType>({ children, index }: DummyTabPanelProps<Element>) => {
	const { index: panel } = useDummyTabsContext();

	return (
		<Transition
			as={Center}
			w='100%'
			h='100%'
			duration='slow'
			easings='ease-in-out'
			transition='fade'
			in={panel === index}
		>
			{children}
		</Transition>
	);
};

const DummyTabPanels = forwardRef(function DummyTabPanels<Element extends PolymorphicElementType>(
	props: DummyTabPanelsProps<Element>,
	ref: DummyTabPanelsRef<Element>
): JSX.Element {
	const { id } = useDummyTabsContext();

	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			aria-labelledby={getDummyTabsID(id)}
			id={getDummyTabPanelsID(id)}
			className={classNames(KEYS_DUMMY_TABS_TAB_PANELS_CLASS, { [className]: !!className })}
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
							key={getDummyTabPanelID(id, index)}
							id={getDummyTabPanelID(id, index)}
							columnStart={1}
							rowStart={1}
						>
							<DummyTabPanel index={index}>{panel}</DummyTabPanel>
						</GridItem>
					))
				: null}
		</Grid>
	);
});

// DummyTabPanels.displayName = 'DummyTabPanels';

export default DummyTabPanels;
