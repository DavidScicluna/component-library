import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { useCenterClasses, useCenterResponsiveValues } from './common/hooks';
import { KEYS_CENTER_CLASS } from './common/keys';
import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends PolymorphicElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, spacing: spacingProp, ...rest } = props;

	const { spacing } = useCenterResponsiveValues({ spacing: spacingProp });

	const classes = useCenterClasses<Element>({ spacing });

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_CENTER_CLASS, classes, { [className]: !!className })}>
			{children}
		</Box>
	);
});

// Center.displayName = 'Center';

export default Center;
