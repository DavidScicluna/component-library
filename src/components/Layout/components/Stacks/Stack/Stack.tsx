import type { ElementType, ReactElement } from 'react';
import { forwardRef, Fragment } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import Box from '@components/Box';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './common/constants';
import { useGetStackClasses } from './common/hooks';
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

	const classes = useGetStackClasses<Element>({ alignItems, direction, justifyContent, spacing, wrap });

	return (
		<Box<Element> {...rest} ref={ref} className={classNames(classes, { [className]: !!className })}>
			{children
				? isArray(children)
					? children.map((child, index: number) => (
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
