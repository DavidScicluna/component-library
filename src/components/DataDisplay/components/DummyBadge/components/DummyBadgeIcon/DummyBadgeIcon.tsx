import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { __DEFAULT_DUMMY_ICON_BUTTON_ICON_AS__ } from '@components/Buttons';
import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyBadgeContext, useDummyBadgeFontSize } from '../../common/hooks';
import { DummyBadgeSkeleton } from '../DummyBadgeSkeleton';

import { __KEY_DUMMY_BADGE_ICON_CLASS__ } from './common/keys';
import type { DummyBadgeIconElement, DummyBadgeIconProps, DummyBadgeIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyBadgeIcon = forwardRef(function DummyBadgeIcon<Element extends DummyBadgeIconElement>(
	props: DummyBadgeIconProps<Element>,
	ref: DummyBadgeIconRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_DUMMY_ICON_BUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMY_ICON_BUTTON_ICON_COLORMODE__,
		size
	} = useDummyBadgeContext();

	const {
		as = __DEFAULT_DUMMY_ICON_BUTTON_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMY_ICON_BUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMY_ICON_BUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyBadgeFontSize({ size });

	return (
		<DummyBadgeSkeleton>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEY_DUMMY_BADGE_ICON_CLASS__, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant='unstyled'
			/>
		</DummyBadgeSkeleton>
	);
});

// DummyBadgeIcon.displayName = 'DummyBadgeIcon';

export default DummyBadgeIcon;
