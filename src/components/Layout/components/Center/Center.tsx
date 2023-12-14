import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import { __DEFAULT_CENTER_SPACING__ } from './common/constants';
import { useCenterClasses, useCenterResponsiveValues } from './common/hooks';
import { __KEYS_CENTER_CLASS__ } from './common/keys';
import type { CenterProps, CenterRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Center: PolymorphicComponentWithRef = forwardRef(function Center<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CenterProps<Element>, ref: CenterRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		spacing: spacingProp = __DEFAULT_CENTER_SPACING__,
		...rest
	} = props;

	const { spacing } = useCenterResponsiveValues({ spacing: spacingProp });

	const classes = useCenterClasses({ spacing });

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

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Center<Element> {...props} />;
