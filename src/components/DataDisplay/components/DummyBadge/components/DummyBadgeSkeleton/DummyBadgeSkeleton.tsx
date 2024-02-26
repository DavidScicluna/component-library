import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { SkeletonProps } from '@components/Feedback';
import { Skeleton } from '@components/Feedback';
import { KEY_SKELETON_OVERLAY_CLASS } from '@components/Feedback/components/Skeleton/common/keys';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay/common/hooks';

import { useDummyBadgeContext } from '../../common/hooks';

import { KEY_DUMMY_BADGE_SKELETON_CLASS } from './common/keys';
import type { DummyBadgeSkeletonProps, DummyBadgeSkeletonRef } from './common/types';

const DummyBadgeSkeleton = forwardRef(function DummyBadgeSkeleton<Element extends PolymorphicElementType>(
	props: DummyBadgeSkeletonProps<Element>,
	ref: DummyBadgeSkeletonRef<Element>
): JSX.Element {
	const { color, colorMode, variant } = useDummyBadgeContext();

	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	const styles = useDummyPushableOverlayStyles({
		color,
		colorMode,
		variant: variant === 'text' ? 'transparent' : variant
	});

	return (
		<Skeleton
			{...(rest as SkeletonProps<Element>)}
			ref={ref}
			className={classNames(KEY_DUMMY_BADGE_SKELETON_CLASS, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isAnimated={false}
			isLoaded={false}
			sx={{ [`& .${KEY_SKELETON_OVERLAY_CLASS}`]: { background: styles.color } }}
		>
			{children}
		</Skeleton>
	);
});

// DummyBadgeSkeleton.displayName = 'DummyBadgeSkeleton';

export default DummyBadgeSkeleton;
