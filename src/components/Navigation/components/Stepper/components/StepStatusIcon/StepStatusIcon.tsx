import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_APP_COLOR__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepStatusColor, getStepStatusIcon } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { __DEFAULT_STEP_STATUS_ICON_AS__ } from './common/constants';
import { __KEYS_STEP_STATUS_ICON_CLASS__ } from './common/keys';
import type { StepStatusIconElement, StepStatusIconProps, StepStatusIconRef } from './common/types';

const StepStatusIcon = forwardRef(function StepStatusIcon<Element extends StepStatusIconElement>(
	props: StepStatusIconProps<Element>,
	ref: StepStatusIconRef<Element>
): JSX.Element {
	const { color, colorMode, index: step, size, variant } = useStepperContext();
	const { index, status } = useStepContext();

	const { as = __DEFAULT_STEP_STATUS_ICON_AS__, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const config = useStepperSizeConfig({ size });

	const statusColor = useMemo(() => {
		return getStepStatusColor(color || __DEFAULT_APP_COLOR__, status);
	}, [color, index, step]);
	const statusIcon = useMemo(() => {
		return getStepStatusIcon(status, variant);
	}, [status, variant]);

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_STEP_STATUS_ICON_CLASS__, { [className]: !!className })}
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
			variant='unstyled'
		/>
	);
});

// StepStatusIcon.displayName = 'StepStatusIcon';

export default StepStatusIcon;
