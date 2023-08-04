import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import Box from '@components/Box';

import { useGetCenterClasses } from './common/hooks';
import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends ElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, spacing = __DEFAULT_SPACING__, ...rest } = props;

	const classes = useGetCenterClasses<Element>({ spacing });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-center`, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default Center;
