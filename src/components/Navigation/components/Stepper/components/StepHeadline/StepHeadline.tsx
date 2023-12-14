import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Headline } from '@components/DataDisplay';
import { Text } from '@components/Typography';

import { useStepperContext } from '../../common/hooks';

import { __KEYS_STEP_HEADLINE_CLASS__ } from './common/keys';
import type { StepHeadlineProps, StepHeadlineRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepHeadline: PolymorphicComponentWithRef = forwardRef(function StepHeadline<
	Element extends ElementType = PolymorphicDefaultElement
>(props: StepHeadlineProps<Element>, ref: StepHeadlineRef<Element>): ReactElement {
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
		renderCaption,
		renderTitle,
		...rest
	} = props;

	return (
		<Headline<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_STEP_HEADLINE_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			color={color}
			colorMode={colorMode}
			renderCaption={
				renderCaption ? renderCaption(props) : <Text<'p'> {...props}>{`Step ${index + 1} of ${total}`}</Text>
			}
			renderTitle={renderTitle ? renderTitle(props) : <Text<'p'> {...props}>{`Step ${index + 1}`}</Text>}
		/>
	);
});

StepHeadline.displayName = 'StepHeadline';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <StepHeadline<Element> {...props} />;
