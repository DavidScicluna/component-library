import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useConst } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';
import { getAnimationConfig, getAnimationDuration, getAnimationEasings } from '@common/utils';

import type { FadeProps as DummyTabPanelFadeProps } from '@components/Animation';
import { Fade } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { useDummyTabsContext } from '../../common/hooks';
import { getDummyTabPanelID, getDummyTabPanelsID, getDummyTabsID } from '../../common/utils';

import { __KEYS_DUMMY_TABS_TAB_PANELS_CLASS__ } from './common/keys';
import type { DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef } from './common/types';

const DummyTabPanelFade = <Element extends ElementType = PolymorphicDefaultElement>({
	children,
	...rest
}: DummyTabPanelFadeProps<Element>) => {
	const duration = useConst(getAnimationDuration('slow'));
	const easing = useConst(getAnimationEasings('ease-in-out'));
	const config = useConst({ ...getAnimationConfig(), duration, easing });

	return (
		<Fade {...rest} transition={{ enter: { ...config }, exit: { ...config } }}>
			{children}
		</Fade>
	);
};

const DummyTabPanel = <Element extends ElementType = PolymorphicDefaultElement>({
	children,
	index
}: DummyTabPanelProps<Element>) => {
	const { index: panel } = useDummyTabsContext();

	return (
		<DummyTabPanelFade w='100%' h='100%' in={panel === index}>
			<Center w='100%' h='100%'>
				{children}
			</Center>
		</DummyTabPanelFade>
	);
};

const DummyTabPanels = forwardRef(function DummyTabPanels<Element extends ElementType = PolymorphicDefaultElement>(
	props: DummyTabPanelsProps<Element>,
	ref: DummyTabPanelsRef<Element>
): ReactElement {
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

export default DummyTabPanels;
