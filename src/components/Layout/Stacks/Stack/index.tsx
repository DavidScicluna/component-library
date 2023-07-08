import { ElementType, forwardRef, Fragment, ReactElement, useMemo } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { useGetResponsiveValue } from '../../../../common/hooks';
import { Space } from '../../../../common/types';
import { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '../../../../common/types/flexbox&grid';
import { getResponsiveValue } from '../../../../common/utils';
import {
	getAlignItemsClassName,
	getFlexDirectionClassName,
	getFlexWrapClassName,
	getJustifyContentClassName
} from '../../../../common/utils/flexbox&grid';
import Box from '../../Box';

import { StackProps, StackRef } from './common/types';

const Stack = forwardRef(function Stack<Element extends ElementType>(
	props: StackProps<Element>,
	ref: StackRef<Element>
): ReactElement {
	const {
		children,
		className = '',
		alignItems = 'stretch',
		direction = 'row',
		divider,
		justifyContent = 'stretch',
		spacing: s = 2,
		wrap = 'nowrap',
		...rest
	} = props;

	const directionClassName = useMemo<string>(() => {
		return getFlexDirectionClassName(getResponsiveValue<FlexDirection>(direction));
	}, [direction]);
	const alignItemsClassName = useMemo<string>(() => {
		return getAlignItemsClassName(getResponsiveValue<AlignItems>(alignItems));
	}, [alignItems]);
	const justifyContentClassName = useMemo<string>(() => {
		return getJustifyContentClassName(getResponsiveValue<JustifyContent>(justifyContent));
	}, [justifyContent]);
	const wrapClassName = useMemo<string>(() => {
		return getFlexWrapClassName(getResponsiveValue<FlexWrap>(wrap));
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
				`gap-${spacing}`,
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
