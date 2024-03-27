import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';

import { CloseIconButton } from '@components/Buttons';
import { useIconButtonClasses } from '@components/Buttons/components/IconButton/common/hooks';
import { usePushableOverlayStyles } from '@components/Overlay/components/PushableOverlay/common/hooks';

import { useBadgeContext } from '../../common/hooks';

import {
	DEFAULT_BADGE_CLOSE_ICON_BUTTON_AS,
	DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT,
	DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE
} from './common/constants';
import { KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS } from './common/keys';
import type { BadgeCloseIconButtonElement, BadgeCloseIconButtonProps, BadgeCloseIconButtonRef } from './common/types';

const BadgeCloseIconButton = forwardRef(function BadgeCloseIconButton<Element extends BadgeCloseIconButtonElement>(
	props: BadgeCloseIconButtonProps<Element>,
	ref: BadgeCloseIconButtonRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR,
		colorMode: DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE,
		variant
	} = useBadgeContext();

	const {
		as = DEFAULT_BADGE_CLOSE_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLOR,
		colorMode = DEFAULT_BADGE_CLOSE_ICON_BUTTON_COLORMODE,
		isCompact = DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT,
		size = DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE,
		sx = DEFAULT_POLYMORPHIC_SX,
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
			as={as}
			ref={ref}
			className={classNames(KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS, classes, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isCompact={isCompact}
			size={size}
			variant='unstyled'
			sx={merge({ color: styles.color }, sx)}
		/>
	);
});

// BadgeCloseIconButton.displayName = 'BadgeCloseIconButton';

export default BadgeCloseIconButton;
