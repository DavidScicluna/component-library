import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Skeleton } from '@components/Feedback';
import { __KEY_SKELETON_OVERLAY_CLASS__ } from '@components/Feedback/components/Skeleton/common/keys';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay/common/hooks';

import { useDummyBadgeContext } from '../../common/hooks';

import { __KEY_DUMMY_BADGE_SKELETON_CLASS__ } from './common/keys';
import type { DummyBadgeSkeletonProps, DummyBadgeSkeletonRef } from './common/types';

const DummyBadgeSkeleton = forwardRef(function DummyBadgeSkeleton<
	Element extends ElementType = PolymorphicDefaultElement
>(props: DummyBadgeSkeletonProps<Element>, ref: DummyBadgeSkeletonRef<Element>): ReactElement {
	const { color, colorMode, variant } = useDummyBadgeContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const styles = useDummyPushableOverlayStyles({
		color,
		colorMode,
		variant: variant === 'text' ? 'transparent' : variant
	});

	return (
		<Skeleton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_DUMMY_BADGE_SKELETON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isAnimated={false}
			isLoaded={false}
			sx={{ [`& .${__KEY_SKELETON_OVERLAY_CLASS__}`]: { background: styles.color } }}
		>
			{children}
		</Skeleton>
	);
});

DummyBadgeSkeleton.displayName = 'DummyBadgeSkeleton';

export default DummyBadgeSkeleton;
