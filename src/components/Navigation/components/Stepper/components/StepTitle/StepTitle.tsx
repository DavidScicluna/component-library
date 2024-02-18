import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useStepperContext, useStepperSizeConfig } from '../../common/hooks';
import { getStepID, getStepTitleID } from '../../common/utils';
import { useStepContext } from '../Step/common/hooks';

import { __DEFAULT_STEP_TITLE_AS__ } from './common/constants';
import { __KEYS_STEP_TITLE_CLASS__ } from './common/keys';
import type { StepTitleElement, StepTitleProps, StepTitleRef } from './common/types';

const StepTitle = forwardRef(function StepTitle<Element extends StepTitleElement>(
	props: StepTitleProps<Element>,
	ref: StepTitleRef<Element>
): JSX.Element {
	const { colorMode, size, id: stepperID } = useStepperContext();
	const { id, index } = useStepContext();

	const __DEFAULT_STEP_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const config = useStepperSizeConfig({ size });

	const {
		children,
		as = __DEFAULT_STEP_TITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_STEP_TITLE_COLOR__,
		fontSize = config.fontSize.title,
		fontWeight = 'bold',
		lineClamp = 1,
		lineHeight = __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			id={getStepTitleID(id || getStepID(stepperID, index))}
			className={classNames(__KEYS_STEP_TITLE_CLASS__, { [className]: !!className })}
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
