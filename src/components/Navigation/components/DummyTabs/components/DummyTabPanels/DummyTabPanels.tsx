import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Transition } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { useDummyTabsContext } from '../../common/hooks';
import { getDummyTabPanelID, getDummyTabPanelsID, getDummyTabsID } from '../../common/utils';

import { __KEYS_DUMMY_TABS_TAB_PANELS_CLASS__ } from './common/keys';
import type { DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyTabPanel = <Element extends PolymorphicElementType = PolymorphicDefaultElement>({
	children,
	index
}: DummyTabPanelProps<Element>) => {
	const { index: panel } = useDummyTabsContext();

	return (
		<Transition w='100%' h='100%' duration='slow' easings='ease-in-out' transition='fade' in={panel === index}>
			<Center w='100%' h='100%'>
				{children}
			</Center>
		</Transition>
	);
};

const DummyTabPanels: PolymorphicComponentWithRef = forwardRef(function DummyTabPanels<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: DummyTabPanelsProps<Element>, ref: DummyTabPanelsRef<Element>): ReactElement {
	const { id } = useDummyTabsContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			aria-labelledby={getDummyTabsID(id)}
			id={getDummyTabPanelsID(id)}
			className={classNames(__KEYS_DUMMY_TABS_TAB_PANELS_CLASS__, { [className]: !!className })}
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
				? children.map((panel, index) => (
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

DummyTabPanels.displayName = 'DummyTabPanels';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyTabPanels<Element> {...props} />;
