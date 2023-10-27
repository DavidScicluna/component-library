import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';

import { __DEFAULT_CENTER_SPACING__ } from './common/constants';
import { useCenterClasses } from './common/hooks';
import { __KEYS_CENTER_CLASS__ } from './common/keys';
import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends ElementType = PolymorphicDefaultElement>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, spacing = __DEFAULT_CENTER_SPACING__, ...rest } = props;

	const classes = useCenterClasses<Element>({ spacing });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CENTER_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

Center.displayName = 'Center';

export default Center;
