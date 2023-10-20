import type { ElementType, ReactElement } from 'react';
import { forwardRef, Fragment } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignItemsClass,
	FlexDirectionClass,
	FlexWrapClass,
	JustifyContentClass,
	ThemeSpacing
} from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './common/constants';
import { useStackClasses } from './common/hooks';
import { __KEYS_STACK_CLASS__ } from './common/keys';
import type { StackProps, StackRef } from './common/types';

const Stack = forwardRef(function Stack<Element extends ElementType>(
	props: StackProps<Element>,
	ref: StackRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems: a = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction: dir = __DEFAULT_STACK_DIRECTION__,
		divider,
		justifyContent: j = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing: s = __DEFAULT_SPACING__,
		wrap: w = __DEFAULT_STACK_WRAP__,
		...rest
	} = props;

	const alignItems = useGetResponsiveValue<AlignItemsClass>(a);
	const direction = useGetResponsiveValue<FlexDirectionClass>(dir);
	const justifyContent = useGetResponsiveValue<JustifyContentClass>(j);
	const spacing = useGetResponsiveValue<ThemeSpacing>(s);
	const wrap = useGetResponsiveValue<FlexWrapClass>(w);

	const classes = useStackClasses<Element>({ alignItems, direction, justifyContent, spacing, wrap });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_STACK_CLASS__, classes, { [className]: !!className })}
		>
			{children
				? isArray(children)
					? compact(children).map((child, index: number) => (
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

Stack.displayName = 'Stack';

export default Stack;
