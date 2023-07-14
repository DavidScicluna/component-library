import { ElementType, forwardRef, Fragment, ReactElement, useMemo } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import classes from '../../../../common/classes';
import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '../../../../common/constants';
import { useGetResponsiveValue } from '../../../../common/hooks';
import type { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '../../../../common/types/classes';
import type { Space } from '../../../../common/types/theme';
import { getResponsiveValue } from '../../../../common/utils';
import Box from '../../Box';

import {
	__DEFAULT_STACK_ALIGNITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFYCONTENT__,
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
		alignItems = __DEFAULT_STACK_ALIGNITEMS__,
		direction = __DEFAULT_STACK_DIRECTION__,
		divider,
		justifyContent = __DEFAULT_STACK_JUSTIFYCONTENT__,
		spacing: s = __DEFAULT_SPACING__,
		wrap = __DEFAULT_STACK_WRAP__,
		...rest
	} = props;

	const alignItemsClassName = useMemo<string>(() => {
		return classes.flex.alignItems[getResponsiveValue<AlignItems>(alignItems)];
	}, [alignItems]);
	const directionClassName = useMemo<string>(() => {
		return classes.flex.direction[getResponsiveValue<FlexDirection>(direction)];
	}, [direction]);
	const justifyContentClassName = useMemo<string>(() => {
		return classes.flex.justifyContent[getResponsiveValue<JustifyContent>(justifyContent)];
	}, [justifyContent]);
	const wrapClassName = useMemo<string>(() => {
		return classes.flex.wrap[getResponsiveValue<FlexWrap>(wrap)];
	}, [wrap]);

	const spacing = useGetResponsiveValue<Space>(s);

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
				classes.spacing.gap[spacing],
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
