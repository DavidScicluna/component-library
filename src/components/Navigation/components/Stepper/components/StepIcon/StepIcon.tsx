import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useStepperContext, useStepperStepFontSize } from '../../common/hooks';

import { __DEFAULT_STEP_ICON_AS__ } from './common/constants';
import { __KEYS_STEP_ICON_CLASS__ } from './common/keys';
import type { StepIconElement, StepIconProps, StepIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepIcon = forwardRef(function StepIcon<Element extends StepIconElement>(
	props: StepIconProps<Element>,
	ref: StepIconRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_STEP_ICON_COLOR__,
		colorMode: __DEFAULT_STEP_ICON_COLORMODE__,
		size
	} = useStepperContext();

	const {
		as = __DEFAULT_STEP_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_STEP_ICON_COLOR__,
		colorMode = __DEFAULT_STEP_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useStepperStepFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_STEP_ICON_CLASS__, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

// StepIcon.displayName = 'StepIcon';

export default StepIcon;
