import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_CENTER_SPACING__ } from './common/constants';
import { useCenterClasses, useCenterResponsiveValues } from './common/hooks';
import { __KEYS_CENTER_CLASS__ } from './common/keys';
import type { CenterProps, CenterRef } from './common/types';

const Center = forwardRef(function Center<Element extends PolymorphicElementType>(
	props: CenterProps<Element>,
	ref: CenterRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		spacing: spacingProp = __DEFAULT_CENTER_SPACING__,
		...rest
	} = props;

	const { spacing } = useCenterResponsiveValues({ spacing: spacingProp });

	const classes = useCenterClasses<Element>({ spacing });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_CENTER_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// Center.displayName = 'Center';

export default Center;
