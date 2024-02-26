import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { DEFAULT_DUMMY_ICON_BUTTON_ICON_AS, DEFAULT_DUMMY_ICON_BUTTON_ICON_VARIANT } from '@components/Buttons';
import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyBadgeContext, useDummyBadgeFontSize } from '../../common/hooks';
import { DummyBadgeSkeleton } from '../DummyBadgeSkeleton';

import { KEY_DUMMY_BADGE_ICON_CLASS } from './common/keys';
import type { DummyBadgeIconElement, DummyBadgeIconProps, DummyBadgeIconRef } from './common/types';

const DummyBadgeIcon = forwardRef(function DummyBadgeIcon<Element extends DummyBadgeIconElement>(
	props: DummyBadgeIconProps<Element>,
	ref: DummyBadgeIconRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_DUMMY_ICON_BUTTON_ICON_COLOR,
		colorMode: DEFAULT_DUMMY_ICON_BUTTON_ICON_COLORMODE,
		size
	} = useDummyBadgeContext();

	const {
		as = DEFAULT_DUMMY_ICON_BUTTON_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_DUMMY_ICON_BUTTON_ICON_COLOR,
		colorMode = DEFAULT_DUMMY_ICON_BUTTON_ICON_COLORMODE,
		variant = DEFAULT_DUMMY_ICON_BUTTON_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useDummyBadgeFontSize({ size });

	return (
		<DummyBadgeSkeleton>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEY_DUMMY_BADGE_ICON_CLASS, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant={variant}
			/>
		</DummyBadgeSkeleton>
	);
});

// DummyBadgeIcon.displayName = 'DummyBadgeIcon';

export default DummyBadgeIcon;
