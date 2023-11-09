import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { CloseIconButton } from '@components/Buttons';
import { useIconButtonClasses } from '@components/Buttons/components/IconButton/common/hooks';
import { usePushableOverlayStyles } from '@components/Overlay/components/PushableOverlay/common/hooks';

import { useBadgeContext } from '../../common/hooks';

import {
	__DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE__
} from './common/constants';
import { __KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const BadgeCloseIconButton = forwardRef(function BadgeCloseIconButton<
	Element extends BadgeCloseIconButtonElement = BadgeCloseIconButtonDefaultElement
>(props: BadgeCloseIconButtonProps<Element>, ref: BadgeCloseIconButtonRef<Element>): ReactElement {
	const {
		color: __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR__,
		colorMode: __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE__,
		variant
	} = useBadgeContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE__,
		isCompact = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT__,
		size = __DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE__,
		...rest
	} = props;

	const classes = useIconButtonClasses({ variant: 'icon' });
	const styles = usePushableOverlayStyles({
		color,
		colorMode,
		variant: variant === 'text' ? 'transparent' : variant
	});

	return (
		<CloseIconButton
			{...rest}
			ref={ref}
			className={classNames(__KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS__, classes, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isCompact={isCompact}
			size={size}
			variant='unstyled'
			sx={{ color: styles.color }}
		/>
	);
});

BadgeCloseIconButton.displayName = 'BadgeCloseIconButton';

export default BadgeCloseIconButton;
