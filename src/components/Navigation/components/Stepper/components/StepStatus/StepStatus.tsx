import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_APP_COLOR, DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepStatusColor, getStepStatusLabel } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { DEFAULT_STEP_STATUS_AS } from './common/constants';
import { KEYS_STEP_STATUS_CLASS } from './common/keys';
import type { StepStatusElement, StepStatusProps, StepStatusRef } from './common/types';

const StepStatus = forwardRef(function StepStatus<Element extends StepStatusElement>(
	props: StepStatusProps<Element>,
	ref: StepStatusRef<Element>
): JSX.Element {
	const { color, colorMode, index: step, size } = useStepperContext();
	const { index, status } = useStepContext();

	const config = useStepperSizeConfig({ size });

	const {
		as = DEFAULT_STEP_STATUS_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		fontSize = config.fontSize.status,
		fontWeight = 'bold',
		textTransform = 'uppercase',
		lineClamp = 1,
		...rest
	} = props;

	const isSelected = useMemo(() => index === step, [index, step]);

	const DEFAULT_STEP_STATUS_ACTIVE_COLOR = useGetColor({
		color: isSelected ? getStepStatusColor(color || DEFAULT_APP_COLOR, status) : 'gray',
		colorMode,
		colorType: isSelected ? 'color' : 'default',
		hueType: isSelected ? 'color' : 'text.secondary',
		classType: 'text'
	});

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_STEP_STATUS_CLASS, { [className]: !!className })}
			align={align}
			color={DEFAULT_STEP_STATUS_ACTIVE_COLOR}
			fontSize={fontSize}
			fontWeight={fontWeight}
			textTransform={textTransform}
			lineClamp={lineClamp}
		>
			{getStepStatusLabel(isSelected, status)}
		</Text>
	);
});

// StepStatus.displayName = 'StepStatus';

export default StepStatus;
