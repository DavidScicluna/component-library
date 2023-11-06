import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useDummyBadgeContext, useDummyBadgeFontSize } from '../../common/hooks';
import { DummyBadgeSkeleton } from '../DummyBadgeSkeleton';

import { __KEY_DUMMY_BADGE_ICON_CLASS__ } from './common/keys';
import type {
	DummyBadgeIconDefaultElement,
	DummyBadgeIconElement,
	DummyBadgeIconProps,
	DummyBadgeIconRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyBadgeIcon = forwardRef(function DummyBadgeIcon<
	Element extends DummyBadgeIconElement = DummyBadgeIconDefaultElement
>(props: DummyBadgeIconProps<Element>, ref: DummyBadgeIconRef<Element>): ReactElement {
	const {
		color: __DEFAULT_DUMMYICONBUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMYICONBUTTON_ICON_COLORMODE__,
		size
	} = useDummyBadgeContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMYICONBUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMYICONBUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyBadgeFontSize({ size });

	return (
		<DummyBadgeSkeleton>
			<Icon
				{...rest}
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

DummyBadgeIcon.displayName = 'DummyBadgeIcon';

export default DummyBadgeIcon;
