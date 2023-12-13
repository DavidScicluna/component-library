import type { ReactElement } from 'react';
import { forwardRef, useCallback } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_LINK_IS_DISABLED__,
	__DEFAULT_LINK_IS_UNDERLINE__,
	__DEFAULT_LINK_IS_UNSTYLED__
} from './common/constants';
import { useLinkClasses, useLinkResponsiveValues } from './common/hooks';
import { __KEYS_LINK_CLASS__ } from './common/keys';
import type { LinkDefaultElement, LinkElement, LinkMouseEvent, LinkProps, LinkRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Link: PolymorphicComponentWithRef = forwardRef(function Link<Element extends LinkElement = LinkDefaultElement>(
	props: LinkProps<Element>,
	ref: LinkRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isDisabled: isDisabledProp = __DEFAULT_LINK_IS_DISABLED__,
		isUnderline: isUnderlineProp = __DEFAULT_LINK_IS_UNDERLINE__,
		isUnstyled: isUnstyledProp = __DEFAULT_LINK_IS_UNSTYLED__,
		onClick,
		...rest
	} = props;

	const { isDisabled, isUnderline, isUnstyled } = useLinkResponsiveValues({
		isDisabled: isDisabledProp,
		isUnderline: isUnderlineProp,
		isUnstyled: isUnstyledProp
	});

	const classes = useLinkClasses({ color, colorMode, isDisabled, isUnderline, isUnstyled });

	const handleClick = useCallback(
		(event: LinkMouseEvent<Element>): void => {
			if (isDisabled) {
				event.preventDefault();
			}

			if (onClick) {
				onClick(event);
			}
		},
		[isDisabled, onClick]
	);

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_LINK_CLASS__, classes, { [className]: !!className })}
			aria-disabled={isDisabled ? 'true' : 'false'}
			onClick={handleClick}
		>
			{children}
		</Box>
	);
});

Link.displayName = 'Link';

export default <Element extends LinkElement = LinkDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Link<Element> {...props} />;
