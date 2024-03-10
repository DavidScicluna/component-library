import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { useAspectRatioClasses, useAspectRatioResponsiveValues } from './common/hooks';
import { KEYS_ASPECT_RATIO_CLASS } from './common/keys';
import type { AspectRatioProps, AspectRatioRef } from './common/types';

const AspectRatio = forwardRef(function AspectRatio<Element extends PolymorphicElementType>(
	props: AspectRatioProps<Element>,
	ref: AspectRatioRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, ratio: ratioProp, ...rest } = props;

	const { ratio } = useAspectRatioResponsiveValues({ ratio: ratioProp });

	const classes = useAspectRatioClasses<Element>({ ratio });

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_ASPECT_RATIO_CLASS, classes, { [className]: !!className })}>
			{children}
		</Box>
	);
});

// AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
