import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import Box from '@components/Box';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './common/constants';
import { useGetAspectRatioClasses } from './common/hooks';
import type { AspectRatioProps, AspectRatioRef } from './common/types';

const AspectRatio = forwardRef(function AspectRatio<Element extends ElementType>(
	props: AspectRatioProps<Element>,
	ref: AspectRatioRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ratio = __DEFAULT_ASPECT_RATIO_RATIO__, ...rest } = props;

	const classes = useGetAspectRatioClasses({ ratio });

	return (
		<Box<Element>
			{...(rest as AspectRatioProps<Element>)}
			ref={ref}
			className={classNames(classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default AspectRatio;
