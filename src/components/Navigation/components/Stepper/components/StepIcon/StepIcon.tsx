import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useStepperContext, useStepperStepFontSize } from '../../common/hooks';

import { DEFAULT_STEP_ICON_AS, DEFAULT_STEP_ICON_VARIANT } from './common/constants';
import { KEYS_STEP_ICON_CLASS } from './common/keys';
import type { StepIconElement, StepIconProps, StepIconRef } from './common/types';

const StepIcon = forwardRef(function StepIcon<Element extends StepIconElement>(
	props: StepIconProps<Element>,
	ref: StepIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_STEP_ICON_COLOR, colorMode: DEFAULT_STEP_ICON_COLORMODE, size } = useStepperContext();

	const {
		as = DEFAULT_STEP_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_STEP_ICON_COLOR,
		colorMode = DEFAULT_STEP_ICON_COLORMODE,
		variant = DEFAULT_STEP_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useStepperStepFontSize({ size });

	return (
		<Icon
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_STEP_ICON_CLASS, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant={variant}
		/>
	);
});

// StepIcon.displayName = 'StepIcon';

export default StepIcon;
