import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_APP_COLOR, DEFAULT_CLASSNAME } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepStatusColor, getStepStatusIcon } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { DEFAULT_STEP_STATUS_ICON_AS, DEFAULT_STEP_STATUS_ICON_VARIANT } from './common/constants';
import { KEYS_STEP_STATUS_ICON_CLASS } from './common/keys';
import type { StepStatusIconElement, StepStatusIconProps, StepStatusIconRef } from './common/types';

const StepStatusIcon = forwardRef(function StepStatusIcon<Element extends StepStatusIconElement>(
	props: StepStatusIconProps<Element>,
	ref: StepStatusIconRef<Element>
): JSX.Element {
	const { color, colorMode, index: step, size, variant: stepVariant } = useStepperContext();
	const { index, status } = useStepContext();

	const {
		as = DEFAULT_STEP_STATUS_ICON_AS,
		className = DEFAULT_CLASSNAME,
		variant = DEFAULT_STEP_STATUS_ICON_VARIANT,
		...rest
	} = props;

	const config = useStepperSizeConfig({ size });

	const statusColor = useMemo(() => {
		return getStepStatusColor(color || DEFAULT_APP_COLOR, status);
	}, [color, index, step]);
	const statusIcon = useMemo(() => {
		return getStepStatusIcon(status, stepVariant);
	}, [status, stepVariant]);

	return (
		<Icon
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_STEP_STATUS_ICON_CLASS, { [className]: !!className })}
			color={
				statusColor !== 'gray' &&
				statusColor !== 'transparent' &&
				statusColor !== 'black' &&
				statusColor !== 'white'
					? statusColor
					: undefined
			}
			colorMode={colorMode}
			icon={statusIcon}
			category='filled'
			size={config.fontSize.status}
			variant={variant}
		/>
	);
});

// StepStatusIcon.displayName = 'StepStatusIcon';

export default StepStatusIcon;
