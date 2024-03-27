import { forwardRef, useCallback } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { Box } from '@components/Box';

import {
	DEFAULT_LINK_AS,
	DEFAULT_LINK_IS_DISABLED,
	DEFAULT_LINK_IS_UNDERLINE,
	DEFAULT_LINK_IS_UNSTYLED
} from './common/constants';
import { useLinkClasses, useLinkResponsiveValues } from './common/hooks';
import { KEYS_LINK_CLASS } from './common/keys';
import type { LinkElement, LinkProps, LinkRef } from './common/types';

const Link = forwardRef(function Link<Element extends LinkElement>(
	props: LinkProps<Element>,
	ref: LinkRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_LINK_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isDisabled: isDisabledProp = DEFAULT_LINK_IS_DISABLED,
		isUnderline: isUnderlineProp = DEFAULT_LINK_IS_UNDERLINE,
		isUnstyled: isUnstyledProp = DEFAULT_LINK_IS_UNSTYLED,
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
		(event: PolymorphicMouseEvent): void => {
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
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_LINK_CLASS, classes, { [className]: !!className })}
			aria-disabled={isDisabled ? 'true' : 'false'}
			onClick={handleClick}
		>
			{children}
		</Box>
	);
});

// Link.displayName = 'Link';

export default Link;
