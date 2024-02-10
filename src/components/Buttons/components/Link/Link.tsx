import { forwardRef, useCallback } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_LINK_AS__,
	__DEFAULT_LINK_IS_DISABLED__,
	__DEFAULT_LINK_IS_UNDERLINE__,
	__DEFAULT_LINK_IS_UNSTYLED__
} from './common/constants';
import { useLinkClasses, useLinkResponsiveValues } from './common/hooks';
import { __KEYS_LINK_CLASS__ } from './common/keys';
import type { LinkElement, LinkMouseEvent, LinkProps, LinkRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Link = forwardRef(function Link<Element extends LinkElement>(
	props: LinkProps<Element>,
	ref: LinkRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_LINK_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isDisabled: isDisabledProp = __DEFAULT_LINK_IS_DISABLED__,
		isUnderline: isUnderlineProp = __DEFAULT_LINK_IS_UNDERLINE__,
		isUnstyled: isUnstyledProp = __DEFAULT_LINK_IS_UNSTYLED__,
		onClick,
		...rest
	} = props;

	const { isDisabled, isUnderline, isUnstyled } = useLinkResponsiveValues<Element>({
		isDisabled: isDisabledProp,
		isUnderline: isUnderlineProp,
		isUnstyled: isUnstyledProp
	});

	const classes = useLinkClasses<Element>({ color, colorMode, isDisabled, isUnderline, isUnstyled });

	const handleClick = useCallback(
		(event: LinkMouseEvent<Element>): void => {
			if (isDisabled) {
				event.preventDefault();
			}

			if (onClick) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onClick(event as any);
			}
		},
		[isDisabled, onClick]
	);

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_LINK_CLASS__, classes, { [className]: !!className })}
			aria-disabled={isDisabled ? 'true' : 'false'}
			onClick={handleClick}
		>
			{children}
		</Box>
	);
});

// Link.displayName = 'Link';

export default Link;
