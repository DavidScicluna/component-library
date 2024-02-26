import { Children, forwardRef, Fragment } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_DIRECTION,
	DEFAULT_STACK_JUSTIFY_CONTENT,
	DEFAULT_STACK_WRAP
} from './common/constants';
import { useStackClasses, useStackResponsiveValues } from './common/hooks';
import { KEYS_STACK_CLASS } from './common/keys';
import type { StackProps, StackRef } from './common/types';

const Stack = forwardRef(function Stack<Element extends PolymorphicElementType>(
	props: StackProps<Element>,
	ref: StackRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignItems: alignItemsProp = DEFAULT_STACK_ALIGN_ITEMS,
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		divider: dividerProp,
		justifyContent: justifyContentProp = DEFAULT_STACK_JUSTIFY_CONTENT,
		spacing: spacingProp = DEFAULT_SPACING,
		wrap: wrapProp = DEFAULT_STACK_WRAP,
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
			className={classNames(KEYS_STACK_CLASS, classes, { [className]: !!className })}
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
