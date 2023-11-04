import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useConst } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';
import { getAnimationConfig, getAnimationDuration, getAnimationEasings } from '@common/utils';

import type { FadeProps as StepPanelFadeProps } from '@components/Animation';
import { Fade } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { useStepperContext } from '../../common/hooks';
import { getStepPanelID, getStepPanelsID, getStepperID } from '../../common/utils';

import { __KEYS_STEPPER_STEP_PANELS_CLASS__ } from './common/keys';
import type { StepPanelProps, StepPanelsProps, StepPanelsRef } from './common/types';

const StepPanelFade = <Element extends ElementType = PolymorphicDefaultElement>({
	children,
	...rest
}: StepPanelFadeProps<Element>) => {
	const duration = useConst(getAnimationDuration('slow'));
	const easing = useConst(getAnimationEasings('ease-in-out'));
	const config = useConst({ ...getAnimationConfig(), duration, easing });

	return (
		<Fade {...rest} transition={{ enter: { ...config }, exit: { ...config } }}>
			{children}
		</Fade>
	);
};

const StepPanel = <Element extends ElementType = PolymorphicDefaultElement>({
	children,
	index
}: StepPanelProps<Element>) => {
	const { index: panel } = useStepperContext();

	return (
		<StepPanelFade w='100%' h='100%' in={panel === index}>
			<Center w='100%' h='100%'>
				{children}
			</Center>
		</StepPanelFade>
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
