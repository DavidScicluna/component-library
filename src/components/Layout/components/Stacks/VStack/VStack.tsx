import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Stack } from '../Stack';

import type { VStackProps, VStackRef } from './common/types';

const VStack = forwardRef(function VStack<Element extends ElementType>(
	props: VStackProps<Element>,
	ref: VStackRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-v-stack`, { [className]: !!className })}
			direction='column'
		>
			{children}
		</Stack>
	);
});

export default VStack;
