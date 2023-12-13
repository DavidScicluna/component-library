import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useBadgeContext, useBadgeFontSize } from '../../common/hooks';

import { __KEYS_BADGE_ICON_CLASS__ } from './common/keys';
import type { BadgeIconDefaultElement, BadgeIconElement, BadgeIconProps, BadgeIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const BadgeIcon: PolymorphicComponentWithRef = forwardRef(function BadgeIcon<
	Element extends BadgeIconElement = BadgeIconDefaultElement
>(props: BadgeIconProps<Element>, ref: BadgeIconRef<Element>): ReactElement {
	const {
		color: __DEFAULT_BADGE_ICON_COLOR__,
		colorMode: __DEFAULT_BADGE_ICON_COLORMODE__,
		size
	} = useBadgeContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_BADGE_ICON_COLOR__,
		colorMode = __DEFAULT_BADGE_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useBadgeFontSize({ size });

	return (
		<Icon<Element>
			{...rest}
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

BadgeIcon.displayName = 'BadgeIcon';

export default <Element extends BadgeIconElement = BadgeIconDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <BadgeIcon<Element> {...props} />;
