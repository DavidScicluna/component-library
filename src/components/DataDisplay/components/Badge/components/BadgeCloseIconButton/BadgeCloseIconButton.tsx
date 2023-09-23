import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { CloseIconButton } from '@components/Buttons';

import { useBadgeContext } from '../../common/hooks';

import {
	__DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE__
} from './common/constants';
import { useBadgeCloseIconButtonClasses } from './common/hooks';
import { __KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef
} from './common/types';

const BadgeCloseIconButton = forwardRef(function BadgeCloseIconButton<
	Element extends BadgeCloseIconButtonElement = BadgeCloseIconButtonDefaultElement
>(props: BadgeCloseIconButtonProps<Element>, ref: BadgeCloseIconButtonRef<Element>): ReactElement {
	const {
		color: __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR__,
		colorMode: __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE__,
		variant: __DEFAULT_BADGE_VARIANT__
	} = useBadgeContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE__,
		isCompact = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT__,
		size = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE__,
		...rest
	} = props;

	const classes = useBadgeCloseIconButtonClasses({ color, colorMode });

	return (
		<CloseIconButton
			{...rest}
			ref={ref}
			className={classNames(__KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS__, classes, { [className]: !!className })}
			color={__DEFAULT_BADGE_VARIANT__ === 'contained' ? undefined : color}
			colorMode={colorMode}
			isCompact={isCompact}
			size={size}
			variant='unstyled'
		/>
	);
});

BadgeCloseIconButton.displayName = 'BadgeCloseIconButton';

export default BadgeCloseIconButton;
