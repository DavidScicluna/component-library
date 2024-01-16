import type { ReactElement } from 'react';
import { Children, forwardRef, Fragment } from 'react';

import { compact, isArray } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Stack = forwardRef(function Stack<Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: StackProps<Element>,
	ref: StackRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems: alignItemsProp = __DEFAULT_STACK_ALIGN_ITEMS__,
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		divider,
		justifyContent: justifyContentProp = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		wrap: wrapProp = __DEFAULT_STACK_WRAP__,
		...rest
	} = props;

	const { alignItems, direction, justifyContent, spacing, wrap } = useStackResponsiveValues<Element>({
		alignItems: alignItemsProp,
		direction: directionProp,
		justifyContent: justifyContentProp,
		spacing: spacingProp,
		wrap: wrapProp
	});

	const classes = useStackClasses<Element>({ alignItems, direction, justifyContent, spacing, wrap });

	return (
		<Box
			{...(rest as StackProps<Element>)}
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
