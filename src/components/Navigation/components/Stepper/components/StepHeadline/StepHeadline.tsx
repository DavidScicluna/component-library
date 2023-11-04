import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Headline } from '@components/DataDisplay';
import { Text } from '@components/Typography';

import { useStepperContext } from '../../common/hooks';

import { __KEYS_STEP_HEADLINE_CLASS__ } from './common/keys';
import type { StepHeadlineProps, StepHeadlineRef } from './common/types';

const StepHeadline = forwardRef(function StepHeadline<Element extends ElementType>(
	props: StepHeadlineProps<Element>,
	ref: StepHeadlineRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_STEP_HEADLINE_COLOR__,
		colorMode: __DEFAULT_STEP_HEADLINE_COLORMODE__,
		index,
		total
	} = useStepperContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_STEP_HEADLINE_COLOR__,
		colorMode = __DEFAULT_STEP_HEADLINE_COLORMODE__,
		renderCaption = (props) => <Text {...props}>{`Step ${index + 1} of ${total}`}</Text>,
		renderTitle = (props) => <Text {...props}>{`Step ${index + 1}`}</Text>,
		...rest
	} = props;

	return (
		<Headline
			{...rest}
			ref={ref}
			className={classNames(__KEYS_STEP_HEADLINE_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			renderCaption={renderCaption}
			renderTitle={renderTitle}
		/>
	);
});

StepHeadline.displayName = 'StepHeadline';

export default StepHeadline;
