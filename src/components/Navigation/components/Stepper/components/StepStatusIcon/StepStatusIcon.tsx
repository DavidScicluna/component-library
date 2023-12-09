import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_APP_COLOR__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepStatusColor, getStepStatusIcon } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { __KEYS_STEP_STATUS_ICON_CLASS__ } from './common/keys';
import type {
	StepStatusIconDefaultElement,
	StepStatusIconElement,
	StepStatusIconProps,
	StepStatusIconRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepStatusIcon: PolymorphicComponentWithRef = forwardRef(function StepStatusIcon<
	Element extends StepStatusIconElement = StepStatusIconDefaultElement
>(props: StepStatusIconProps<Element>, ref: StepStatusIconRef<Element>): ReactElement {
	const { color, colorMode, index: step, size, variant } = useStepperContext();
	const { index, status } = useStepContext();

	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const config = useStepperSizeConfig({ size });

	const statusColor = useMemo(() => {
		return getStepStatusColor(color || __DEFAULT_APP_COLOR__, index === step);
	}, [color, index, step]);
	const statusIcon = useMemo(() => {
		return getStepStatusIcon(status, variant);
	}, [status, variant]);

	return (
		<Icon
			{...rest}
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

StepStatusIcon.displayName = 'StepStatusIcon';

export default <Element extends StepStatusIconElement = StepStatusIconDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <StepStatusIcon<Element> {...props} />;
