import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Transition } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { useStepperContext } from '../../common/hooks';
import { getStepPanelID, getStepPanelsID, getStepperID } from '../../common/utils';

import { __KEYS_STEPPER_STEP_PANELS_CLASS__ } from './common/keys';
import type { StepPanelProps, StepPanelsProps, StepPanelsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepPanel = <Element extends ElementType = PolymorphicDefaultElement>({
	children,
	index
}: StepPanelProps<Element>) => {
	const { index: panel } = useStepperContext();

	return (
		<Transition w='100%' h='100%' duration='slow' easing='ease-in-out' in={panel === index}>
			<Center w='100%' h='100%'>
				{children}
			</Center>
		</Transition>
	);
};

const StepPanels = forwardRef(function StepPanels<Element extends ElementType = PolymorphicDefaultElement>(
	props: StepPanelsProps<Element>,
	ref: StepPanelsRef<Element>
): ReactElement {
	const { id } = useStepperContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			aria-labelledby={getStepperID(id)}
			id={getStepPanelsID(id)}
			className={classNames(__KEYS_STEPPER_STEP_PANELS_CLASS__, { [className]: !!className })}
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
							key={getStepPanelID(id, index)}
							id={getStepPanelID(id, index)}
							columnStart={1}
							rowStart={1}
						>
							<StepPanel index={index}>{panel}</StepPanel>
						</GridItem>
				  ))
				: null}
		</Grid>
	);
});

StepPanels.displayName = 'StepPanels';

export default StepPanels;
