import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useBadgeContext, useBadgeFontSize } from '../../common/hooks';

import { __DEFAULT_BADGE_ICON_AS__ } from './common/constants';
import { __KEYS_BADGE_ICON_CLASS__ } from './common/keys';
import type { BadgeIconElement, BadgeIconProps, BadgeIconRef } from './common/types';

const BadgeIcon = forwardRef(function BadgeIcon<Element extends BadgeIconElement>(
	props: BadgeIconProps<Element>,
	ref: BadgeIconRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_BADGE_ICON_COLOR__,
		colorMode: __DEFAULT_BADGE_ICON_COLORMODE__,
		size
	} = useBadgeContext();

	const {
		as = __DEFAULT_BADGE_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_BADGE_ICON_COLOR__,
		colorMode = __DEFAULT_BADGE_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useBadgeFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_BADGE_ICON_CLASS__, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

// BadgeIcon.displayName = 'BadgeIcon';

export default BadgeIcon;
