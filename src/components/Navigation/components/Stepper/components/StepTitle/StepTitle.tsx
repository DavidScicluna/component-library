import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE } from '../../common/constants';
import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepID, getStepTitleID } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { DEFAULT_STEP_TITLE_AS } from './common/constants';
import { KEYS_STEP_TITLE_CLASS } from './common/keys';
import type { StepTitleElement, StepTitleProps, StepTitleRef } from './common/types';

const StepTitle = forwardRef(function StepTitle<Element extends StepTitleElement>(
	props: StepTitleProps<Element>,
	ref: StepTitleRef<Element>
): JSX.Element {
	const { colorMode, size, id: stepperID } = useStepperContext();
	const { id, index } = useStepContext();

	const DEFAULT_STEP_TITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const config = useStepperSizeConfig({ size });

	const {
		children,
		as = DEFAULT_STEP_TITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color = DEFAULT_STEP_TITLE_COLOR,
		fontSize = config.fontSize.title,
		fontWeight = 'bold',
		lineClamp = 1,
		lineHeight = DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE,
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			id={getStepTitleID(id || getStepID(stepperID, index))}
			className={classNames(KEYS_STEP_TITLE_CLASS, { [className]: !!className })}
			align={align}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineClamp={lineClamp}
			lineHeight={lineHeight}
		>
			{children}
		</Text>
	);
});

// StepTitle.displayName = 'StepTitle';

export default StepTitle;
