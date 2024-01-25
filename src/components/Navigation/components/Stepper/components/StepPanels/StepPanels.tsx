import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import { useStepperContext } from '../../common/hooks';
import { getStepPanelID, getStepPanelsID, getStepperID } from '../../common/utils';

import { __KEYS_STEPPER_STEP_PANELS_CLASS__ } from './common/keys';
import type { StepPanelProps, StepPanelsProps, StepPanelsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepPanel = <Element extends PolymorphicElementType>({ children, index }: StepPanelProps<Element>) => {
	const { index: panel } = useStepperContext();

	return (
		<Transition as={Center} w='100%' h='100%' duration='slow' easing='ease-in-out' in={panel === index}>
			{children}
		</Transition>
	);
};

const StepPanels = forwardRef(function StepPanels<Element extends PolymorphicElementType>(
	props: StepPanelsProps<Element>,
	ref: StepPanelsRef<Element>
): ReactElement {
	const { id } = useStepperContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Grid
			{...(rest as GridProps<Element>)}
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
				? // eslint-disable-next-line @typescript-eslint/no-explicit-any
					children.map((panel: any, index: number) => (
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

// StepPanels.displayName = 'StepPanels';

export default StepPanels;
