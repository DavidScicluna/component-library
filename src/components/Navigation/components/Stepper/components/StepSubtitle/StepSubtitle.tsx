import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepSubtitleID } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { __KEYS_STEP_SUBTITLE_CLASS__ } from './common/keys';
import type {
	StepSubtitleDefaultElement,
	StepSubtitleElement,
	StepSubtitleProps,
	StepSubtitleRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepSubtitle = forwardRef(function StepSubtitle<Element extends StepSubtitleElement = StepSubtitleDefaultElement>(
	props: StepSubtitleProps<Element>,
	ref: StepSubtitleRef<Element>
): ReactElement {
	const { colorMode, size } = useStepperContext();
	const { id } = useStepContext();

	const __DEFAULT_STEP_SUBTITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const config = useStepperSizeConfig({ size });

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_STEP_SUBTITLE_COLOR__,
		fontSize = config.fontSize.subtitle,
		fontWeight = 'normal',
		lineClamp = 1,
		lineHeight = __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__,
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			id={getStepSubtitleID(id)}
			className={classNames(__KEYS_STEP_SUBTITLE_CLASS__, { [className]: !!className })}
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

StepSubtitle.displayName = 'StepSubtitle';

export default StepSubtitle;
