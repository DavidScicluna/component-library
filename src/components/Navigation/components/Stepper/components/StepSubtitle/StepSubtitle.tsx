import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE } from '../../common/constants';
import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepID, getStepSubtitleID } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { DEFAULT_STEP_SUBTITLE_AS } from './common/constants';
import { KEYS_STEP_SUBTITLE_CLASS } from './common/keys';
import type { StepSubtitleElement, StepSubtitleProps, StepSubtitleRef } from './common/types';

const StepSubtitle = forwardRef(function StepSubtitle<Element extends StepSubtitleElement>(
	props: StepSubtitleProps<Element>,
	ref: StepSubtitleRef<Element>
): JSX.Element {
	const { colorMode, size, id: stepperID } = useStepperContext();
	const { id, index } = useStepContext();

	const DEFAULT_STEP_SUBTITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const config = useStepperSizeConfig({ size });

	const {
		children,
		as = DEFAULT_STEP_SUBTITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color = DEFAULT_STEP_SUBTITLE_COLOR,
		fontSize = config.fontSize.subtitle,
		fontWeight = 'normal',
		lineClamp = 1,
		lineHeight = DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE,
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			id={getStepSubtitleID(id || getStepID(stepperID, index))}
			className={classNames(KEYS_STEP_SUBTITLE_CLASS, { [className]: !!className })}
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

// StepSubtitle.displayName = 'StepSubtitle';

export default StepSubtitle;
