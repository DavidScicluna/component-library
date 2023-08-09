import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Stack } from '../Stack';

import type { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef(function HStack<Element extends ElementType>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-h-stack`, { [className]: !!className })}
			direction='row'
		>
			{children}
		</Stack>
	);
});

export default HStack;
