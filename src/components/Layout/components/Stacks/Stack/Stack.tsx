import { Children, forwardRef, Fragment } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

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
		alignItems: alignItemsProp,
		direction: directionProp,
		divider: dividerProp,
		justifyContent: justifyContentProp,
		spacing: spacingProp,
		wrap: wrapProp,
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

	const classes = useStackClasses({ alignItems, direction, justifyContent, spacing, wrap });

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_STACK_CLASS, classes, { [className]: !!className })}>
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
