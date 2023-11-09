import type { ReactElement } from 'react';
import { forwardRef, useCallback } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import {
	__DEFAULT_LINK_IS_DISABLED__,
	__DEFAULT_LINK_IS_UNDERLINE__,
	__DEFAULT_LINK_IS_UNSTYLED__
} from './common/constants';
import { useLinkClasses } from './common/hooks';
import { __KEYS_LINK_CLASS__ } from './common/keys';
import type { LinkDefaultElement, LinkElement, LinkMouseEvent, LinkProps, LinkRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Link = forwardRef(function Link<Element extends LinkElement = LinkDefaultElement>(
	props: LinkProps<Element>,
	ref: LinkRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isDisabled = __DEFAULT_LINK_IS_DISABLED__,
		isUnderline = __DEFAULT_LINK_IS_UNDERLINE__,
		isUnstyled = __DEFAULT_LINK_IS_UNSTYLED__,
		onClick,
		...rest
	} = props;

	const classes = useLinkClasses<Element>({ color, colorMode, isDisabled, isUnderline, isUnstyled });

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

export default Link;
