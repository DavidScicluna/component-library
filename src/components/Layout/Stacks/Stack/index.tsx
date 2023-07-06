import { forwardRef, Fragment, ReactElement, useMemo } from 'react';

import classNames from 'classnames';
import { isArray } from 'lodash-es';

import { Space } from '../../../../common/types';
import { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '../../../../common/types/flexbox&grid';
import { checkResponsiveValue, getResponsiveValue } from '../../../../common/utils';
import {
	getAlignItemsClassName,
	getFlexDirectionClassName,
	getFlexWrapClassName,
	getJustifyContentClassName
} from '../../../../common/utils/flexbox&grid';
import Box from '../../Box';

import { StackProps, StackRef } from './common/types';

const Stack = forwardRef<StackRef, StackProps>(function Stack(props, ref): ReactElement {
	const {
		children,
		className = '',
		alignItems = 'stretch',
		direction = 'row',
		divider,
		justifyContent = 'stretch',
		spacing = 2,
		wrap = 'nowrap',
		...rest
	} = props;

	const directionClassName = useMemo(() => {
		return getFlexDirectionClassName(
			checkResponsiveValue<FlexDirection>(direction) !== 'default'
				? getResponsiveValue<FlexDirection>(direction)
				: (direction as FlexDirection)
		);
	}, [direction]);
	const alignItemsClassName = useMemo(() => {
		return getAlignItemsClassName(
			checkResponsiveValue<AlignItems>(alignItems) !== 'default'
				? getResponsiveValue<AlignItems>(alignItems)
				: (alignItems as AlignItems)
		);
	}, [alignItems]);
	const justifyContentClassName = useMemo(() => {
		return getJustifyContentClassName(
			checkResponsiveValue<JustifyContent>(justifyContent) !== 'default'
				? getResponsiveValue<JustifyContent>(justifyContent)
				: (justifyContent as JustifyContent)
		);
	}, [justifyContent]);
	const wrapClassName = useMemo(() => {
		return getFlexWrapClassName(
			checkResponsiveValue<FlexWrap>(wrap) !== 'default' ? getResponsiveValue<FlexWrap>(wrap) : (wrap as FlexWrap)
		);
	}, [wrap]);
	const spacingClassName = useMemo(() => {
		const s =
			checkResponsiveValue<Space>(spacing) !== 'default'
				? getResponsiveValue<Space>(spacing)
				: (spacing as Space);
		return `gap-${s}`;
	}, [spacing]);

	return (
		<Box
			{...rest}
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
				: null}
		</Box>
	);
});

export default Stack;
