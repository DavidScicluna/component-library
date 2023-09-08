import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './common/constants';
import { useAspectRatioClasses } from './common/hooks';
import { __KEYS_ASPECT_RATIO_CLASS__ } from './common/keys';
import type { AspectRatioProps, AspectRatioRef } from './common/types';

const AspectRatio = forwardRef(function AspectRatio<Element extends ElementType>(
	props: AspectRatioProps<Element>,
	ref: AspectRatioRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ratio = __DEFAULT_ASPECT_RATIO_RATIO__, ...rest } = props;

	const classes = useAspectRatioClasses<Element>({ ratio });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_ASPECT_RATIO_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default AspectRatio;
