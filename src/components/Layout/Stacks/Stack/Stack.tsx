import { ElementType, forwardRef, Fragment, ReactElement } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '@common/types/classes';
import type { Space } from '@common/types/theme';

import Box from '@components/Box';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './common/constants';
import type { StackProps, StackRef } from './common/types';

const Stack = forwardRef(function Stack<Element extends ElementType>(
	props: StackProps<Element>,
	ref: StackRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction = __DEFAULT_STACK_DIRECTION__,
		divider,
		justifyContent = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing = __DEFAULT_SPACING__,
		wrap = __DEFAULT_STACK_WRAP__,
		...rest
	} = props;

	const alignItemsClassName = useGetClass<AlignItems>(alignItems, ['flex', 'alignItems']);
	const directionClassName = useGetClass<FlexDirection>(direction, ['flex', 'direction']);
	const justifyContentClassName = useGetClass<JustifyContent>(justifyContent, ['flex', 'justifyContent']);
	const wrapClassName = useGetClass<FlexWrap>(wrap, ['flex', 'wrap']);

	const spacingClassName = useGetClass<Space>(spacing, ['spacing', 'gap']);

	return (
		<Box
			{...(rest as StackProps<Element>)}
			ref={ref}
			className={classNames(
				'flex',
				directionClassName,
				wrapClassName,
				alignItemsClassName,
				justifyContentClassName,
				spacingClassName,
				{ [className]: !!className }
			)}
		>
			{children
				? isArray(children)
					? children.map((child, index) => (
							<Fragment key={typeof child.key !== 'undefined' ? child.key : index}>
								{child}
								{divider && index + 1 !== children.length ? divider : null}
							</Fragment>
					  ))
					: children
				: undefined}
		</Box>
	);
});

export default Stack;
