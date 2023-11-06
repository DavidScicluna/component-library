import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useTheme } from '@common/hooks';

import { Progress } from '@components/Feedback';

import { useStepperContext } from '../../common/hooks';

import { __KEYS_STEP_PROGRESS_CLASS__ } from './common/keys';
import type { StepProgressProps, StepProgressRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepProgress = forwardRef(function StepProgress<Element extends ElementType>(
	props: StepProgressProps<Element>,
	ref: StepProgressRef<Element>
): ReactElement {
	const theme = useTheme();

	const {
		color: __DEFAULT_STEP_PROGRESS_COLOR__,
		colorMode: __DEFAULT_STEP_PROGRESS_COLORMODE__,
		index,
		total,
		isConsecutively,
		orientation
	} = useStepperContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_STEP_PROGRESS_COLOR__,
		colorMode = __DEFAULT_STEP_PROGRESS_COLORMODE__,
		...rest
	} = props;

	return (
		<Progress
			{...rest}
			ref={ref}
			className={classNames(__KEYS_STEP_PROGRESS_CLASS__, { [className]: !!className })}
			w={theme.spacing['0.5']}
			h='100%'
			color={color}
			colorMode={colorMode}
			radius='full'
			value={isConsecutively ? (index * 100) / total : 0}
			variant={orientation === 'left' || orientation === 'right' ? 'vertical' : 'horizontal'}
		/>
	);
});

StepProgress.displayName = 'StepProgress';

export default StepProgress;
