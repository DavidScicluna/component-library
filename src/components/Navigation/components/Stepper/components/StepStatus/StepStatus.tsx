import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_APP_COLOR__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepStatusColor, getStepStatusLabel } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { __KEYS_STEP_STATUS_CLASS__ } from './common/keys';
import type { StepStatusDefaultElement, StepStatusElement, StepStatusProps, StepStatusRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepStatus = forwardRef(function StepStatus<Element extends StepStatusElement = StepStatusDefaultElement>(
	props: StepStatusProps<Element>,
	ref: StepStatusRef<Element>
): ReactElement {
	const { color, colorMode, index: step, size } = useStepperContext();
	const { index, status } = useStepContext();

	const config = useStepperSizeConfig({ size });

	const {
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		fontSize = config.fontSize.status,
		fontWeight = 'bold',
		textTransform = 'uppercase',
		lineClamp = 1,
		...rest
	} = props;

	const isSelected = useMemo(() => index === step, [index, step]);

	const __DEFAULT_STEP_STATUS_ACTIVE_COLOR__ = useGetColor({
		color: isSelected ? getStepStatusColor(color || __DEFAULT_APP_COLOR__, isSelected) : 'gray',
		colorMode,
		colorType: isSelected ? 'color' : 'default',
		hueType: isSelected ? 'color' : 'text.secondary',
		classType: 'text'
	});

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_STEP_STATUS_CLASS__, { [className]: !!className })}
			align={align}
			color={__DEFAULT_STEP_STATUS_ACTIVE_COLOR__}
			fontSize={fontSize}
			fontWeight={fontWeight}
			textTransform={textTransform}
			lineClamp={lineClamp}
		>
			{getStepStatusLabel(isSelected, status)}
		</Text>
	);
});

StepStatus.displayName = 'StepStatus';

export default StepStatus;
