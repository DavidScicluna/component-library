import { Children, forwardRef, Fragment } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './common/constants';
import { useStackClasses, useStackResponsiveValues } from './common/hooks';
import { __KEYS_STACK_CLASS__ } from './common/keys';
import type { StackProps, StackRef } from './common/types';

const Stack = forwardRef(function Stack<Element extends PolymorphicElementType>(
	props: StackProps<Element>,
	ref: StackRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems: alignItemsProp = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		divider: dividerProp,
		justifyContent: justifyContentProp = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		wrap: wrapProp = __DEFAULT_STACK_WRAP__,
		...rest
	} = props;

	const { alignItems, direction, divider, justifyContent, spacing, wrap } = useStackResponsiveValues({
		alignItems: alignItemsProp,
		direction: directionProp,
		divider: dividerProp,
		justifyContent: justifyContentProp,
		spacing: spacingProp,
		wrap: wrapProp
	});

	const classes = useStackClasses<Element>({ alignItems, direction, justifyContent, spacing, wrap });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_STACK_CLASS__, classes, { [className]: !!className })}
		>
			{children
				? isArray(children)
					? compact(Children.toArray(children)).map((child, index: number) => (
							<Fragment key={index}>
								{child}
								{divider && index + 1 !== children.length ? divider : null}
							</Fragment>
						))
					: children
				: undefined}
		</Box>
	);
});

// Stack.displayName = 'Stack';

export default Stack;
