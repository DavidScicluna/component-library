import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useBadgeContext, useBadgeFontSize } from '../../common/hooks';

import { DEFAULT_BADGE_ICON_AS, DEFAULT_BADGE_ICON_VARIANT } from './common/constants';
import { KEYS_BADGE_ICON_CLASS } from './common/keys';
import type { BadgeIconElement, BadgeIconProps, BadgeIconRef } from './common/types';

const BadgeIcon = forwardRef(function BadgeIcon<Element extends BadgeIconElement>(
	props: BadgeIconProps<Element>,
	ref: BadgeIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_BADGE_ICON_COLOR, colorMode: DEFAULT_BADGE_ICON_COLORMODE, size } = useBadgeContext();

	const {
		as = DEFAULT_BADGE_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_BADGE_ICON_COLOR,
		colorMode = DEFAULT_BADGE_ICON_COLORMODE,
		variant = DEFAULT_BADGE_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useBadgeFontSize({ size });

	return (
		<Icon
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_BADGE_ICON_CLASS, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant={variant}
		/>
	);
});

// BadgeIcon.displayName = 'BadgeIcon';

export default BadgeIcon;
