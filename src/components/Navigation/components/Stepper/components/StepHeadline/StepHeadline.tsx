import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Headline } from '@components/DataDisplay';
import { Text } from '@components/Typography';

import { useStepperContext } from '../../common/hooks';

import { KEYS_STEP_HEADLINE_CLASS } from './common/keys';
import type { StepHeadlineProps, StepHeadlineRef } from './common/types';

const StepHeadline = forwardRef(function StepHeadline<Element extends PolymorphicElementType>(
	props: StepHeadlineProps<Element>,
	ref: StepHeadlineRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_STEP_HEADLINE_COLOR,
		colorMode: DEFAULT_STEP_HEADLINE_COLORMODE,
		index,
		total
	} = useStepperContext();

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_STEP_HEADLINE_COLOR,
		colorMode = DEFAULT_STEP_HEADLINE_COLORMODE,
		renderCaption,
		renderTitle,
		...rest
	} = props;

	return (
		<Headline
			{...rest}
			ref={ref}
			className={classNames(KEYS_STEP_HEADLINE_CLASS, { [className]: !!className })}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			renderCaption={(props) =>
				renderCaption ? renderCaption(props) : <Text {...props} as='p'>{`Step ${index + 1} of ${total}`}</Text>
			}
			renderTitle={(props) =>
				renderTitle ? renderTitle(props) : <Text {...props} as='p'>{`Step ${index + 1}`}</Text>
			}
		/>
	);
});

// StepHeadline.displayName = 'StepHeadline';

export default StepHeadline;
