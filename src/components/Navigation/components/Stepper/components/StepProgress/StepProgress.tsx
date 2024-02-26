import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useTheme } from '@common/hooks';

import type { ProgressProps } from '@components/Feedback';
import { Progress } from '@components/Feedback';

import { useStepperContext } from '../../common/hooks';

import { KEYS_STEP_PROGRESS_CLASS } from './common/keys';
import type { StepProgressElement, StepProgressProps, StepProgressRef } from './common/types';

const StepProgress = forwardRef(function StepProgress<Element extends StepProgressElement>(
	props: StepProgressProps<Element>,
	ref: StepProgressRef<Element>
): JSX.Element {
	const theme = useTheme();

	const {
		color: DEFAULT_STEP_PROGRESS_COLOR,
		colorMode: DEFAULT_STEP_PROGRESS_COLORMODE,
		index,
		total,
		isConsecutively,
		orientation
	} = useStepperContext();

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_STEP_PROGRESS_COLOR,
		colorMode = DEFAULT_STEP_PROGRESS_COLORMODE,
		...rest
	} = props;

	return (
		<Progress
			{...(rest as ProgressProps<Element>)}
			ref={ref}
			className={classNames(KEYS_STEP_PROGRESS_CLASS, { [className]: !!className })}
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

// StepProgress.displayName = 'StepProgress';

export default StepProgress;
